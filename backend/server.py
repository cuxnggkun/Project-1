import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Dict, Any
import pymongo
import datetime
from pydantic import BaseModel, Field
from typing import List, Optional
from bson.objectid import ObjectId
from pydantic import ValidationError

app = FastAPI()

# Cấu hình CORS
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cho phép tất cả các origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Kết nối MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["mydb"]
collection = db["users"]  # collection cho users
nft_collection = db["nfts"]  # collection mới cho NFTs

# Schema cho địa chỉ ví


class AddressRequest(BaseModel):
    walletAddress: str

# Schema cho NFT đơn giản hóa


class NFTMetadata(BaseModel):
    name: str
    description: str
    image: str


class CreateNFTRequest(BaseModel):
    walletAddress: str
    metadataUri: str  # Link đến metadata trên IPFS

# API lưu địa chỉ ví


@app.post("/api/save-address")
def save_address(request_data: AddressRequest):
    # Chuẩn hóa địa chỉ về lowercase
    wallet = request_data.walletAddress.lower()
    print("Received walletAddress:", wallet)

    if not wallet or not wallet.startswith("0x"):
        raise HTTPException(
            status_code=400, detail="Invalid wallet address format")

    # Tìm kiếm cũng dùng địa chỉ lowercase
    existing_user = collection.find_one({"walletAddress": wallet})
    if existing_user:
        return {
            "message": "Address already exists!",
            "savedAddress": wallet
        }

    user_doc = {
        "walletAddress": wallet,
        "created_at": datetime.datetime.now(),
        "last_updated": datetime.datetime.now()
    }

    collection.insert_one(user_doc)
    return {
        "message": "Address saved successfully!",
        "savedAddress": wallet
    }

# API lưu NFT


@app.post("/api/save-nft")
async def save_nft(request: CreateNFTRequest):
    try:
        wallet_address = request.walletAddress.lower()
        if not wallet_address or not wallet_address.startswith("0x"):
            raise HTTPException(
                status_code=400, detail="Invalid wallet address format")

        # Chỉ lưu wallet address và metadata URI
        nft_doc = {
            "walletAddress": wallet_address,
            "metadataUri": request.metadataUri,
            "created_at": datetime.datetime.now()
        }

        print("NFT document to save:", nft_doc)

        result = nft_collection.insert_one(nft_doc)
        return {
            "message": "NFT saved successfully",
            "nft_id": str(result.inserted_id)
        }
    except Exception as e:
        print("Error:", str(e))
        raise HTTPException(status_code=500, detail=str(e))

# API lấy NFTs theo địa chỉ ví


@app.get("/api/get-user-nfts/{wallet_address}")
async def get_user_nfts(wallet_address: str):
    try:
        nfts = nft_collection.find({"walletAddress": wallet_address})
        nft_list = []
        for nft in nfts:
            nft["_id"] = str(nft["_id"])
            nft_list.append(nft)
        return nft_list
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Thêm vào file server.py

# API lấy tất cả NFTs


@app.get("/api/nfts")
async def get_all_nfts(skip: int = 0, limit: int = 20):
    try:
        # Thay đổi cách truy xuất dữ liệu
        nfts = list(nft_collection.find().sort(
            "created_at", -1).skip(skip).limit(limit))

        # Chuyển đổi dữ liệu phù hợp
        for nft in nfts:
            nft['_id'] = str(nft['_id'])
            # Tạo metadata để phù hợp với frontend
            nft['metadata'] = {
                'name': nft.get('name', 'Unnamed NFT'),
                'description': nft.get('description', ''),
                'image': nft.get('image', ''),
                'price': nft.get('price', '0'),
                'attributes': nft.get('attributes', [])
            }

        return nfts
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# API lọc NFTs theo các tiêu chí


@app.get("/api/nfts/filter")
async def filter_nfts(
    min_price: float = None,
    max_price: float = None,
    category: str = None,
    skip: int = 0,
    limit: int = 20
):
    try:
        filter_query = {}

        # Xây dựng query filter
        if min_price is not None:
            filter_query['price'] = {'$gte': min_price}

        if max_price is not None:
            filter_query['price'] = filter_query.get('price', {})
            filter_query['price']['$lte'] = max_price

        if category:
            filter_query['category'] = category

        nfts = list(nft_collection.find(filter_query).sort(
            "created_at", -1).skip(skip).limit(limit))

        # Chuyển đổi ObjectId
        for nft in nfts:
            nft['_id'] = str(nft['_id'])

        return nfts
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Thêm API để cập nhật trạng thái listing


@app.put("/api/update-nft-listing/{nft_id}")
async def update_nft_listing(nft_id: str, listing_data: dict):
    try:
        # Cập nhật thông tin listing trong MongoDB
        update_data = {
            "is_listed": listing_data.get("is_listed"),
            "price": listing_data.get("price"),
            "listed_at": datetime.datetime.now() if listing_data.get("is_listed") else None,
            "last_updated": datetime.datetime.now()
        }

        result = nft_collection.update_one(
            {"_id": ObjectId(nft_id)},
            {"$set": update_data}
        )

        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="NFT not found")

        return {"message": "NFT listing updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
