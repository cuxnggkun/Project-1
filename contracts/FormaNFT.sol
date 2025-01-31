// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FormaNFT is ERC721, ERC721URIStorage, ERC721Enumerable, Ownable {
    uint256 private _tokenIdCounter;
    uint256 public mintPrice = 0.01 ether;
    uint256 public transactionFeePercentage = 25;

    struct Listing {
        uint256 price;
        address seller;
        bool isListed;
    }

    mapping(uint256 => Listing) public listings;

    event NFTListed(
        uint256 indexed tokenId,
        address indexed seller,
        uint256 price
    );
    event ListingCanceled(uint256 indexed tokenId, address indexed seller);
    event NFTSold(
        uint256 indexed tokenId,
        address indexed seller,
        address indexed buyer,
        uint256 price
    );

    constructor() ERC721("NFT Test", "NFT") Ownable(msg.sender) {}

    function mint(
        address recipient,
        string memory metadataURI
    ) external onlyOwner {
        require(recipient != address(0), "Invalid recipient address");
        require(bytes(metadataURI).length > 0, "Metadata URI cannot be empty");

        uint256 newTokenId = _tokenIdCounter;
        _tokenIdCounter++;

        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, metadataURI);
    }

    function publicMint(string memory metadataURI) external payable {
        require(msg.value >= mintPrice, "Insufficient payment for minting");
        require(bytes(metadataURI).length > 0, "Metadata URI cannot be empty");

        uint256 newTokenId = _tokenIdCounter;
        _tokenIdCounter++;

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, metadataURI);
    }

    function transferNFT(
        address from,
        address to,
        uint256 tokenId,
        uint256 salePrice
    ) external payable {
        require(msg.sender == from, "You are not the owner of this token");
        require(to != address(0), "Cannot transfer to the zero address");

        uint256 transactionFee = (salePrice * transactionFeePercentage) / 1000;
        require(msg.value >= transactionFee, "Insufficient transaction fee");

        _transfer(from, to, tokenId);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function setMintPrice(uint256 newMintPrice) external onlyOwner {
        mintPrice = newMintPrice;
    }

    function setTransactionFeePercentage(
        uint256 newTransactionFeePercentage
    ) external onlyOwner {
        require(
            newTransactionFeePercentage <= 1000,
            "Transaction fee too high"
        );
        transactionFeePercentage = newTransactionFeePercentage;
    }

    function tokensOfOwner(
        address owner
    ) external view returns (uint256[] memory) {
        uint256 balance = balanceOf(owner);
        uint256[] memory tokenIds = new uint256[](balance);

        for (uint256 i = 0; i < balance; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(owner, i);
        }

        return tokenIds;
    }

    function burn(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Caller is not token owner");
        _burn(tokenId);
    }

    function listNFTForSale(uint256 tokenId, uint256 price) external {
        require(ownerOf(tokenId) == msg.sender, "Not the token owner");
        require(price > 0, "Price must be greater than 0");
        require(!listings[tokenId].isListed, "NFT already listed");
        require(
            isApprovedForAll(msg.sender, address(this)),
            "NFT not approved for marketplace"
        );

        listings[tokenId] = Listing({
            price: price,
            seller: msg.sender,
            isListed: true
        });

        emit NFTListed(tokenId, msg.sender, price);
    }

    function cancelListing(uint256 tokenId) external {
        require(listings[tokenId].seller == msg.sender, "Not the seller");
        require(listings[tokenId].isListed, "NFT not listed");

        delete listings[tokenId];
        emit ListingCanceled(tokenId, listings[tokenId].seller);
    }

    function buyNFT(uint256 tokenId) external payable {
        Listing memory listing = listings[tokenId];
        require(listing.isListed, "NFT not listed for sale");
        require(msg.value >= listing.price, "Insufficient payment");

        address seller = listing.seller;
        uint256 price = listing.price;

        uint256 transactionFee = (price * transactionFeePercentage) / 1000;
        uint256 sellerAmount = price - transactionFee;

        delete listings[tokenId];

        _transfer(seller, msg.sender, tokenId);

        payable(seller).transfer(sellerAmount);
        payable(owner()).transfer(transactionFee);

        emit NFTSold(tokenId, seller, msg.sender, price);
    }

    function getListingInfo(
        uint256 tokenId
    ) external view returns (address seller, uint256 price, bool isListed) {
        Listing memory listing = listings[tokenId];
        return (listing.seller, listing.price, listing.isListed);
    }

    function updateListingPrice(uint256 tokenId, uint256 newPrice) external {
        require(listings[tokenId].seller == msg.sender, "Not the seller");
        require(listings[tokenId].isListed, "NFT not listed");
        require(newPrice > 0, "Price must be greater than 0");

        listings[tokenId].price = newPrice;
        emit NFTListed(tokenId, msg.sender, newPrice);
    }

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        if (listings[tokenId].isListed) {
            address seller = listings[tokenId].seller;
            delete listings[tokenId];
            emit ListingCanceled(tokenId, seller);
        }
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Trong smart contract
    function approveMarketplace() external {
        require(msg.sender != address(0), "Invalid sender");
        _setApprovalForAll(msg.sender, address(this), true);
        emit ApprovalForAll(msg.sender, address(this), true);
    }
}
