let currentTab = 'collected'; // Mặc định tab

// Thêm biến contract vào đầu file
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ERC721EnumerableForbiddenBatchMint",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "ERC721OutOfBoundsIndex",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            }
        ],
        "name": "ListingCanceled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "NFTListed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "NFTSold",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "approveMarketplace",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "buyNFT",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "cancelListing",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getListingInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isListed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "listNFTForSale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "listings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isListed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "metadataURI",
                "type": "string"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mintPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "metadataURI",
                "type": "string"
            }
        ],
        "name": "publicMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newMintPrice",
                "type": "uint256"
            }
        ],
        "name": "setMintPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newTransactionFeePercentage",
                "type": "uint256"
            }
        ],
        "name": "setTransactionFeePercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "tokensOfOwner",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "transactionFeePercentage",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            }
        ],
        "name": "transferNFT",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "newPrice",
                "type": "uint256"
            }
        ],
        "name": "updateListingPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contractAddress = "0xCe005f3133d44d0FcDfDc0AACB7B5c9b8C1dcDff"; // Thay thế bằng địa chỉ contract NFT của bạn

const PINATA_GATEWAY = 'https://gateway.pinata.cloud/ipfs/';

// Function load Collections
async function loadUserCollections() {
    console.log('Starting loadUserCollections...');
    const elements = {
        collectionsDiv: document.getElementById('user-collections'),
        loadingDiv: document.getElementById('loading-collections'),
        noCollectionsDiv: document.getElementById('no-collections')
    };

    try {
        elements.loadingDiv.style.display = 'block';
        elements.collectionsDiv.innerHTML = '';
        elements.noCollectionsDiv.style.display = 'none';

        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        let collectionId = 0;
        let hasCollections = false;
        let emptyCollectionCount = 0; // Đếm số collection trống liên tiếp

        while (emptyCollectionCount < 3) { // Dừng sau 3 collection trống liên tiếp
            try {
                const collection = await contract.methods.collections(collectionId).call();

                if (collection && collection.exists && collection.creator.toLowerCase() === userAddress.toLowerCase()) {
                    hasCollections = true;
                    emptyCollectionCount = 0; // Reset counter khi tìm thấy collection hợp lệ

                    const collectionCard = document.createElement('div');
                    collectionCard.className = 'nft-card collection-card';
                    collectionCard.style.cursor = 'pointer';

                    // Tạo card với thông tin cơ bản trước
                    collectionCard.innerHTML = `
                        <div class="collection-image">
                            <img src="../assets/default-collection.jpg" alt="${collection.name}" />
                        </div>
                        <div class="nft-info">
                            <div class="nft-name">${collection.name}</div>
                            <div class="nft-description">${collection.description}</div>
                            <div class="nft-details">
                                <div class="nft-royalty">
                                    <i class="bi bi-coin"></i>
                                    <span>Royalty: ${collection.royaltyPercentage / 100}%</span>
                                </div>
                                <div class="collection-address">
                                    <i class="bi bi-collection"></i>
                                    <span>Address: ${collection.contractAddress}</span>
                                </div>
                            </div>
                        </div>
                    `;

                    // Thêm event listener cho click
                    collectionCard.addEventListener('click', () => {
                        window.location.href = `collection.html?address=${collection.contractAddress}`;
                    });

                    elements.collectionsDiv.appendChild(collectionCard);

                    // Nếu có tokenURI, thử load metadata
                    if (collection.uri) {
                        try {
                            const metadataURL = collection.uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
                            console.log('Trying to fetch metadata from:', metadataURL);

                            const response = await fetch(metadataURL);
                            const metadata = await response.json();

                            if (metadata.image) {
                                const imageURL = metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
                                const imgElement = collectionCard.querySelector('.collection-image img');
                                imgElement.src = imageURL;
                            }
                        } catch (metadataError) {
                            console.error('Error loading metadata for collection:', collectionId, metadataError);
                        }
                    }
                } else {
                    emptyCollectionCount++;
                }
                collectionId++;
            } catch (error) {
                console.log('Error checking collection:', collectionId, error);
                emptyCollectionCount++;
            }
        }

        if (!hasCollections) {
            elements.noCollectionsDiv.style.display = 'block';
        }

    } catch (error) {
        console.error('Error in loadUserCollections:', error);
        elements.noCollectionsDiv.textContent = 'Error loading collections: ' + error.message;
        elements.noCollectionsDiv.style.display = 'block';
    } finally {
        elements.loadingDiv.style.display = 'none';
        console.log('Collection loading completed');
    }
}

// Initialize tabs
function initializeTabs() {
    console.log('Initializing tabs');
    const tabLinks = document.querySelectorAll('.tabs-nav a');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Tab clicked:', this.getAttribute('href'));

            // Remove active class from all tabs
            document.querySelectorAll('.tabs-nav li').forEach(tab => {
                tab.classList.remove('active');
            });

            // Add active class to clicked tab
            this.parentElement.classList.add('active');

            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show selected content
            const tabId = this.getAttribute('href').substring(1);
            const selectedContent = document.getElementById(tabId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
                console.log('Showing tab:', tabId);

                // Load appropriate content
                if (tabId === 'collected') {
                    loadCollectedNFTs();
                } else if (tabId === 'collections') {
                    loadUserCollections();
                }
            }
        });
    });
}

// Sửa lại phần khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', async function () {
    console.log('DOM Content Loaded');

    try {
        await initializeWallet();
        initializeTabs();

        // Activate first tab by default (không tự động load)
        const firstTab = document.querySelector('.tabs-nav a');
        if (firstTab) {
            // Trigger click event để load content
            firstTab.click();
        }
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// Initialize wallet and profile
async function initializeWallet() {
    console.log('Initializing wallet');
    const savedAddress = localStorage.getItem('walletAddress');
    const userProfile = localStorage.getItem('userProfile');

    if (!savedAddress) {
        console.log('No saved wallet address, redirecting to login');
        window.location.href = 'login.html';
        return;
    }

    console.log('Wallet address found:', savedAddress);
    const shortAddress = WalletManager.formatAddress(savedAddress);

    const shortAddressElement = document.getElementById('shortAddressDisplay');
    if (shortAddressElement) {
        shortAddressElement.textContent = shortAddress;
    }

    if (userProfile) {
        console.log('User profile found');
        const profile = JSON.parse(userProfile);
        updateProfileUI(profile);
    } else {
        console.log('No user profile, using wallet address');
        updateUIWithWalletAddress(shortAddress);
    }
}

function updateProfileUI(profile) {
    console.log('Updating UI with profile');
    const elements = {
        walletAddress: document.getElementById('walletAddress'),
        navbarAvatar: document.getElementById('navbarUserAvatar'),
        profileName: document.getElementById('profileName'),
        profileBio: document.getElementById('profileBio'),
        profileImage: document.getElementById('profileImage')
    };

    if (elements.walletAddress) elements.walletAddress.textContent = profile.name;
    if (elements.navbarAvatar && profile.profilePicture) elements.navbarAvatar.src = profile.profilePicture;
    if (elements.profileName) elements.profileName.textContent = profile.name;
    if (elements.profileBio) elements.profileBio.textContent = profile.bio || 'No bio yet';
    if (elements.profileImage && profile.profilePicture) elements.profileImage.src = profile.profilePicture;
}

function updateUIWithWalletAddress(address) {
    const shortAddress = WalletManager.formatAddress(address);
    const elements = {
        walletAddress: document.getElementById('walletAddress'),
        profileName: document.getElementById('profileName'),
        profileBio: document.getElementById('profileBio')
    };

    if (elements.walletAddress) elements.walletAddress.textContent = shortAddress;
    if (elements.profileName) elements.profileName.textContent = shortAddress;
    if (elements.profileBio) elements.profileBio.textContent = 'You haven\'t added a bio yet. Edit your profile to add one.';
}

function copyAddress() {
    const address = WalletManager.getAddress();
    if (address) {
        navigator.clipboard.writeText(address)
            .then(() => {
                const copyIcon = document.querySelector('.copy-address i');
                const originalClass = copyIcon.className;
                copyIcon.className = 'fas fa-check me-1';

                const tooltip = bootstrap.Tooltip.getInstance(document.querySelector('.copy-address'));
                if (tooltip) {
                    tooltip.setContent({ '.tooltip-inner': 'Copied!' });
                }

                setTimeout(() => {
                    copyIcon.className = originalClass;
                    if (tooltip) {
                        tooltip.setContent({ '.tooltip-inner': 'Copy address' });
                    }
                }, 2000);
            })
            .catch(err => console.error('Failed to copy:', err));
    }
}

// NFT loading code (giữ nguyên phần code NFT đã có)
async function loadCollectedNFTs() {
    const collectedNftsDiv = document.getElementById('collected-nfts');
    const loadingDiv = document.getElementById('loading-nfts');
    const noNftsDiv = document.getElementById('no-nfts');

    try {
        // Hiển thị loading
        loadingDiv.style.display = 'block';
        collectedNftsDiv.innerHTML = '';
        noNftsDiv.style.display = 'none';

        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];

        const nftContract = new web3.eth.Contract(contractABI, contractAddress);
        const balance = await nftContract.methods.balanceOf(userAddress).call();

        console.log('NFT balance:', balance);

        if (balance == 0) {
            loadingDiv.style.display = 'none';
            noNftsDiv.style.display = 'block';
            return;
        }

        noNftsDiv.style.display = 'none';

        // Load các NFT với timeout và kiểm tra ownership
        for (let i = 0; i < balance; i++) {
            try {
                const tokenId = await nftContract.methods.tokenOfOwnerByIndex(userAddress, i).call();

                // Kiểm tra ownership
                const owner = await nftContract.methods.ownerOf(tokenId).call();
                if (owner.toLowerCase() !== userAddress.toLowerCase()) {
                    continue;
                }

                const tokenURI = await nftContract.methods.tokenURI(tokenId).call();
                const metadataURL = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');

                // Thêm timeout cho fetch metadata
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);

                try {
                    const response = await fetch(metadataURL, { signal: controller.signal });
                    clearTimeout(timeoutId);
                    const metadata = await response.json();

                    // Kiểm tra tính hợp lệ của metadata
                    if (!metadata.name || !metadata.image) {
                        console.warn(`Skipping NFT ${tokenId} due to invalid metadata`);
                        continue;
                    }

                    // Chỉ hiển thị NFT có metadata hợp lệ
                    const nftCard = createNFTCard(tokenId, metadata);

                    // Add click event to show modal
                    nftCard.addEventListener('click', async () => {
                        try {
                            // Get additional NFT info from contract
                            const network = await web3.eth.net.getNetworkType();

                            // Create and show modal
                            const modal = document.createElement('div');
                            modal.className = 'nft-modal';
                            modal.innerHTML = `
                                <div class="modal-content">
                                    <span class="close-button">&times;</span>
                                    
                                    <div class="modal-left">
                                        <div class="nft-image-large">
                                            <img src="${metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}" 
                                                 alt="${metadata.name}">
                                        </div>
                                    </div>
                                    
                                    <div class="modal-right">
                                        <h2>${metadata.name}</h2>
                                        
                                        <div class="info-section">
                                            <h3>Description</h3>
                                            <p>${metadata.description}</p>
                                        </div>
                                        
                                        <div class="info-section">
                                            <h3>Details</h3>
                                            <div class="info-grid">
                                                <div class="info-item">
                                                    <label>Token ID</label>
                                                    <span>${tokenId}</span>
                                                </div>
                                                <div class="info-item">
                                                    <label>Owner</label>
                                                    <span>${owner.substring(0, 6)}...${owner.substring(38)}</span>
                                                </div>
                                                <div class="info-item">
                                                    <label>Network</label>
                                                    <span>${network}</span>
                                                </div>
                                                <div class="info-item">
                                                    <label>Contract</label>
                                                    <span>${contractAddress.substring(0, 6)}...${contractAddress.substring(38)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        ${metadata.attributes && metadata.attributes.length > 0 ? `
                                            <div class="info-section">
                                                <h3>Properties</h3>
                                                <div class="attributes-grid">
                                                    ${metadata.attributes.map(attr => `
                                                        <div class="attribute-item">
                                                            <label>${attr.trait_type}</label>
                                                            <span>${attr.value}</span>
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            </div>
                                        ` : ''}
                                        
                                        <div class="links">
                                            <a href="https://ipfs.io/ipfs/${tokenURI.replace('ipfs://', '')}" 
                                               target="_blank" class="link-button primary">
                                                View on IPFS
                                            </a>
                                            <a href="https://etherscan.io/token/${contractAddress}?a=${tokenId}" 
                                               target="_blank" class="link-button secondary">
                                                View on Etherscan
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `;

                            // Add close button functionality
                            const closeButton = modal.querySelector('.close-button');
                            closeButton.onclick = () => {
                                document.body.removeChild(modal);
                            };

                            // Close modal when clicking outside
                            modal.onclick = (e) => {
                                if (e.target === modal) {
                                    document.body.removeChild(modal);
                                }
                            };

                            document.body.appendChild(modal);
                        } catch (error) {
                            console.error('Error showing NFT details:', error);
                        }
                    });

                    collectedNftsDiv.appendChild(nftCard);
                } catch (metadataError) {
                    console.error('Error loading metadata for token', tokenId, metadataError);
                    // Bỏ qua NFT này thay vì hiển thị placeholder
                    continue;
                }
            } catch (error) {
                console.error('Error loading NFT:', error);
            }
        }
    } catch (error) {
        console.error('Error loading NFTs:', error);
        collectedNftsDiv.innerHTML = `<p class="error">Error loading NFTs: ${error.message}</p>`;
    } finally {
        loadingDiv.style.display = 'none';
    }
}

function createNFTCard(tokenId, metadata) {
    const nftCard = document.createElement('div');
    nftCard.className = 'nft-card';
    nftCard.innerHTML = `
        <div class="nft-image">
            <img src="${metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}" 
                 alt="${metadata.name}">
        </div>
        <div class="nft-info">
            <h3>${metadata.name}</h3>
            <p class="nft-description">${metadata.description || 'No description'}</p>
            <div class="nft-buttons">
                <button class="nft-button primary list-for-sale" data-token-id="${tokenId}">List for sale</button>
                <button class="nft-button secondary">...</button>
            </div>
        </div>
    `;

    // Add click handler for "List for sale" button
    const listButton = nftCard.querySelector('.list-for-sale');
    listButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card click event
        showListingModal(tokenId, metadata);
    });

    return nftCard;
}

// Add listing modal and functions
function showListingModal(tokenId, metadata) {
    const modal = document.createElement('div');
    modal.className = 'listing-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>List NFT for Sale</h2>
            
            <div class="nft-preview">
                <img src="${metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}" alt="${metadata.name}">
                <h3>${metadata.name}</h3>
            </div>
            
            <div class="listing-form">
                <div class="price-input-container">
                    <div class="price-header">
                        <h3>Price</h3>
                    </div>
                    <div class="price-input-wrapper">
                        <input type="number" id="listing-price" min="0" step="0.01" required>
                        <span class="currency-label">TIA</span>
                    </div>
                    <div class="price-details">
                        <div class="price-detail-row">
                            <span class="detail-label">
                                Fee
                                <span class="info-icon" title="Platform fee">?</span>
                            </span>
                            <span>1%</span>
                        </div>
                        <div class="price-detail-row">
                            <span class="detail-label">You will receive</span>
                            <span id="final-amount">0 TIA</span>
                        </div>
                    </div>
                </div>

                <div class="duration-input-container">
                    <label for="listing-duration">Listing Duration</label>
                    <select id="listing-duration" required>
                        <option value="86400">1 Day</option>
                        <option value="259200">3 Days</option>
                        <option value="604800">7 Days</option>
                        <option value="2592000">30 Days</option>
                    </select>
                </div>
                
                <button class="confirm-listing-btn" data-token-id="${tokenId}">Confirm Listing</button>
            </div>
        </div>
    `;

    // Update fee calculation to 1%
    const priceInput = modal.querySelector('#listing-price');
    const finalAmount = modal.querySelector('#final-amount');

    priceInput.addEventListener('input', () => {
        const price = parseFloat(priceInput.value) || 0;
        const fee = price * 0.01; // 1%
        const finalPrice = price - fee;
        finalAmount.textContent = `${finalPrice.toFixed(3)} TIA`;
    });

    document.body.appendChild(modal);

    // Close button handler
    const closeButton = modal.querySelector('.close-button');
    closeButton.onclick = () => modal.remove();

    // Click outside to close
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    // Confirm listing handler
    const confirmButton = modal.querySelector('.confirm-listing-btn');
    confirmButton.onclick = () => handleListNFT(tokenId, modal);
}

// Add notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Add loading notification functions
function showLoadingNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification info';
    notification.id = 'loading-notification';
    notification.textContent = 'Đang xử lý giao dịch...';
    document.body.appendChild(notification);
}

function hideLoadingNotification() {
    const notification = document.getElementById('loading-notification');
    if (notification) {
        notification.remove();
    }
}

// Thêm hàm kiểm tra network details
async function checkNetworkDetails() {
    try {
        const web3 = new Web3(window.ethereum);

        // Lấy thông tin network
        const chainId = await web3.eth.getChainId();
        const networkType = await web3.eth.net.getNetworkType();
        const provider = web3.currentProvider;

        // Kiểm tra RPC endpoint
        const netVersion = await web3.eth.net.getId();

        // Lấy RPC URL từ provider
        let rpcUrl;
        if (window.ethereum && window.ethereum.networkVersion) {
            const networkId = window.ethereum.networkVersion;
            // Lấy RPC URL dựa trên networkId
            if (networkId === '984123') {
                rpcUrl = 'https://rpc.sketchpad-1.forma.art'; // Thay bằng RPC URL chính xác của Forma
            }
        }

        console.log('Network Details:', {
            chainId,
            networkType,
            rpcUrl,
            isForma: chainId === 984123
        });

        // Kiểm tra provider
        if (window.ethereum) {
            console.log('Provider:', {
                isMetaMask: window.ethereum.isMetaMask,
                networkVersion: window.ethereum.networkVersion,
                selectedAddress: window.ethereum.selectedAddress,
                rpcUrl
            });
        }

        return chainId === 984123; // Forma testnet chain ID
    } catch (error) {
        console.error('Network check failed:', error);
        return false;
    }
}

// Sửa lại hàm checkNetwork
async function checkNetwork() {
    const isCorrectNetwork = await checkNetworkDetails();
    if (!isCorrectNetwork) {
        showNotification('Please switch to Forma Testnet', 'error');
        return false;
    }
    return true;
}

// Thêm hàm hỗ trợ đợi xác nhận giao dịch
async function waitForTransaction(web3, txHash, maxAttempts = 30) {
    let attempts = 0;
    while (attempts < maxAttempts) {
        try {
            const receipt = await web3.eth.getTransactionReceipt(txHash);
            if (receipt) {
                if (receipt.status) {
                    return receipt;
                }
                throw new Error('Giao dịch thất bại');
            }
        } catch (error) {
            console.error('Lỗi khi kiểm tra transaction:', error);
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
        attempts++;
    }
    throw new Error('Hết thời gian chờ xác nhận giao dịch');
}

// Xử lý lỗi nâng cao
function handleTransactionError(error) {
    let errorMessage;

    if (error.code === 4001) {
        errorMessage = 'Giao dịch bị từ chối bởi người dùng';
    } else if (error.message.includes('insufficient funds')) {
        errorMessage = 'Số dư không đủ để thực hiện giao dịch';
    } else if (error.message.includes('execution reverted')) {
        const revertReason = error.message.match(/reverted with reason string '(.*)'/);
        if (revertReason && revertReason[1]) {
            errorMessage = 'Giao dịch bị từ chối: ' + revertReason[1];
        } else {
            errorMessage = 'Giao dịch bị từ chối bởi smart contract';
        }
        console.error('Lỗi từ smart contract:', error.message);
    } else {
        errorMessage = 'Giao dịch thất bại: ' + error.message;
    }

    showNotification(errorMessage, 'error');
}

async function handleListNFT(tokenId, modal) {
    try {
        showLoadingNotification();

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        const userAddress = accounts[0];

        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const priceInput = document.getElementById('listing-price');
        const price = web3.utils.toWei(priceInput.value, 'ether');

        // Kiểm tra ownership
        const owner = await contract.methods.ownerOf(tokenId).call();
        if (owner.toLowerCase() !== userAddress.toLowerCase()) {
            throw new Error('You are not the owner of this NFT');
        }

        // Kiểm tra approval trước
        const isApproved = await contract.methods.isApprovedForAll(userAddress, contractAddress).call();
        if (!isApproved) {
            // Thực hiện approve với gas params cố định cho Forma
            await contract.methods.setApprovalForAll(contractAddress, true).send({
                from: userAddress,
                gasPrice: '18000000000', // 18 nTIA
                gas: '100000' // Gas limit cố định
            });
        }

        // Thực hiện listing với gas params cố định cho Forma
        const listTx = await contract.methods.listNFTForSale(tokenId, price).send({
            from: userAddress,
            gasPrice: '18000000000', // 18 nTIA
            gas: '200000' // Gas limit cố định cho listing
        });

        console.log("List transaction:", listTx);

        if (listTx.status) {
            showNotification('NFT listed successfully!', 'success');
            modal.remove();
            setTimeout(() => location.reload(), 2000);
        } else {
            throw new Error('Transaction failed');
        }

    } catch (error) {
        console.error("Listing error:", error);
        handleTransactionError(error);
    } finally {
        hideLoadingNotification();
    }
}

// Add MetaMask event listeners
window.ethereum.on('accountsChanged', function (accounts) {
    window.location.reload();
});

window.ethereum.on('chainChanged', function (chainId) {
    window.location.reload();
});

// Thêm hàm này để kiểm tra contract
async function checkContractDetails(web3, contract, userAddress) {
    try {
        // Kiểm tra các thông tin cơ bản
        const name = await contract.methods.name().call();
        const symbol = await contract.methods.symbol().call();
        const owner = await contract.methods.owner().call();

        console.log('Contract details:', {
            name,
            symbol,
            owner,
            address: contractAddress
        });

        // Kiểm tra balance và gas
        const balance = await web3.eth.getBalance(userAddress);
        const gasPrice = await web3.eth.getGasPrice();

        console.log('Account details:', {
            address: userAddress,
            balance: web3.utils.fromWei(balance, 'ether'),
            gasPrice: web3.utils.fromWei(gasPrice, 'gwei')
        });

        return true;
    } catch (error) {
        console.error('Contract check failed:', error);
        throw new Error('Không thể kiểm tra thông tin contract. Vui lòng thử lại sau.');
    }
}

async function approveMarketplace() {
    try {
        // Kiểm tra MetaMask và kết nối
        if (typeof window.ethereum === 'undefined') {
            throw new Error('MetaMask chưa được cài đặt');
        }

        // Yêu cầu quyền truy cập vào tài khoản
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Lấy địa chỉ ví từ MetaMask
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Gọi hàm approveMarketplace từ smart contract
        const approveTx = await contract.methods.approveMarketplace().send({
            from: userAddress,
            gas: '10500000'
        });

        console.log('Marketplace approved successfully:', approveTx);
        showNotification('Marketplace đã được phê duyệt thành công!', 'success');
    } catch (error) {
        console.error('Error approving marketplace:', error);
        handleTransactionError(error);
    }
}

// Thêm hàm kiểm tra provider và network
async function checkProvider() {
    try {
        const web3 = new Web3(window.ethereum);
        const chainId = await web3.eth.getChainId();
        console.log("Current chainId:", chainId);

        // Kiểm tra Forma testnet
        if (chainId !== 984123) {
            throw new Error("Please switch to Forma testnet");
        }

        return true;
    } catch (error) {
        console.error("Provider check failed:", error);
        return false;
    }
}

// Thêm hàm kiểm tra và thực hiện approve
async function checkAndApprove(contract, userAddress) {
    const isApproved = await contract.methods.isApprovedForAll(
        userAddress,
        contractAddress
    ).call();

    if (!isApproved) {
        try {
            const tx = await contract.methods.setApprovalForAll(
                contractAddress,
                true
            ).send({
                from: userAddress,
                gas: 10500000,
                maxFeePerGas: 1.385297984,
                maxPriorityFeePerGas: 1.5
            });
            console.log("Approval transaction:", tx);
            return true;
        } catch (error) {
            throw new Error("Approval failed: " + error.message);
        }
    }
    return true;
}
