// ABI
const contractAddress = '0xDd5e79e75dF4a14550E8127Acf2AE6414E937505';
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

// Pinata config
const PINATA_API_KEY = 'ef9f0688072357aba6de';
const PINATA_SECRET_KEY = '97a00dae6e62898d2279bb033bccd9383e8d9888094d316a91df2fb66f5a2f35';
const PINATA_ENDPOINT = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const PINATA_JSON_ENDPOINT = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';

// Forma Testnet config
const FORMA_CHAIN_ID = 984123;
const FORMA_RPC = 'https://rpc.sketchpad-1.forma.art';
const FORMA_EXPLORER = 'https://explorer.sketchpad-1.forma.art/';
const MIN_GAS = '18';

let web3;
let nftContract;
let userAddress;

// Thêm hằng số mintPrice
const MINT_PRICE = '0.01';

// Initialize Web3
async function initWeb3() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum);

      const accounts = await web3.eth.getAccounts();
      userAddress = accounts[0];
      console.log('Connected wallet address:', userAddress);

      // Initialize contract
      nftContract = new web3.eth.Contract(contractABI, contractAddress);

      // Check and switch network
      await checkNetwork();
    } catch (error) {
      console.error('Error initializing Web3:', error);
      throw error;
    }
  } else {
    throw new Error('Please install MetaMask!');
  }
}

// Check and switch network if needed
async function checkNetwork() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: web3.utils.toHex(FORMA_CHAIN_ID) }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: web3.utils.toHex(FORMA_CHAIN_ID),
            chainName: 'Forma Testnet (Sketchpad-1)',
            nativeCurrency: {
              name: 'TIA',
              symbol: 'TIA',
              decimals: 18
            },
            rpcUrls: [FORMA_RPC],
            blockExplorerUrls: [FORMA_EXPLORER]
          }]
        });
      } catch (addError) {
        throw addError;
      }
    }
    throw switchError;
  }
}

// Upload file to IPFS
async function uploadToIPFS(file) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(PINATA_ENDPOINT, formData, {
      maxBodyLength: 'Infinity',
      headers: {
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_SECRET_KEY
      }
    });

    console.log('IPFS upload response:', response);

    if (response.data.IpfsHash) {
      return `ipfs://${response.data.IpfsHash}`;
    } else {
      throw new Error('Failed to upload to IPFS');
    }
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw error;
  }
}

async function uploadMetadataToIPFS(metadata) {
  try {
    // Đảm bảo metadata có đúng format trước khi upload
    const formattedMetadata = {
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      attributes: metadata.attributes || [], // Đảm bảo attributes luôn tồn tại
      price: metadata.price // Thêm price vào formattedMetadata
    };

    console.log('Uploading metadata:', formattedMetadata);

    const response = await axios.post(PINATA_JSON_ENDPOINT, formattedMetadata, {
      headers: {
        'Content-Type': 'application/json',
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_SECRET_KEY
      }
    });

    console.log('Metadata upload response:', response);

    if (response.data.IpfsHash) {
      return `ipfs://${response.data.IpfsHash}`;
    } else {
      throw new Error('Failed to upload metadata to IPFS');
    }
  } catch (error) {
    console.error('Error uploading metadata:', error);
    throw error;
  }
}

// Thêm các hàm xử lý loading modal
function showLoadingModal() {
  const modal = document.createElement('div');
  modal.className = 'loading-modal';
  modal.id = 'loading-modal';

  modal.innerHTML = `
      <div class="loading-content">
          <div class="loading-title">Creating Your NFT</div>
          <div class="loading-steps">
              <div class="loading-step" id="step-image">
                  <div class="step-status step-pending">
                      <i class="bi bi-circle"></i>
            </div>
                  <div class="step-text">
                      <i class="bi bi-cloud-upload me-2"></i>
                      Uploading image to IPFS
        </div>
            </div>
              <div class="loading-step" id="step-metadata">
                  <div class="step-status step-pending">
                      <i class="bi bi-circle"></i>
        </div>
                  <div class="step-text">
                      <i class="bi bi-file-earmark-text me-2"></i>
                      Uploading metadata to IPFS
            </div>
        </div>
              <div class="loading-step" id="step-mint">
                  <div class="step-status step-pending">
                      <i class="bi bi-circle"></i>
                  </div>
                  <div class="step-text">
                      <i class="bi bi-coin me-2"></i>
                      Minting NFT on blockchain
                  </div>
              </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
}

function updateLoadingStep(step, status) {
  const stepElement = document.getElementById(`step-${step}`);
  if (!stepElement) return;

  const statusElement = stepElement.querySelector('.step-status');
  statusElement.className = 'step-status';

  switch (status) {
    case 'loading':
      statusElement.className += ' step-loading';
      statusElement.innerHTML = '<i class="bi bi-arrow-repeat"></i>';
      break;
    case 'success':
      statusElement.className += ' step-success';
      statusElement.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
      break;
    default:
      statusElement.className += ' step-pending';
      statusElement.innerHTML = '<i class="bi bi-circle"></i>';
  }
}

function hideLoadingModal() {
  const modal = document.getElementById('loading-modal');
  if (modal) {
    document.body.removeChild(modal);
  }
}

// Sửa lại hàm handleCreateNFT để sử dụng loading modal
async function handleCreateNFT(name, description, file) {
  try {
    // Validate input
    if (!file) throw new Error('Please upload an image');
    if (!name) throw new Error('Please enter NFT name');

    showLoadingModal();

    // Upload image
    updateLoadingStep('image', 'loading');
    console.log('Uploading image to IPFS...');
    const imageHash = await uploadToIPFS(file);
    if (!imageHash) throw new Error('Failed to upload image to IPFS');
    console.log('Image uploaded:', imageHash);
    updateLoadingStep('image', 'success');

    // Prepare metadata
    updateLoadingStep('metadata', 'loading');

    // Thu thập attributes
    const attributes = [];
    const propertiesContainer = document.getElementById('properties-container');
    if (propertiesContainer) {
      const propertyRows = propertiesContainer.querySelectorAll('.property-row');
      propertyRows.forEach(row => {
        const nameInput = row.querySelector('.property-name');
        const valueInput = row.querySelector('.property-value');
        if (nameInput && valueInput) {
          const traitType = nameInput.value.trim();
          const value = valueInput.value.trim();
          if (traitType && value) {
            attributes.push({
              trait_type: traitType,
              value: value
            });
          }
        }
      });
    }

    // Prepare metadata object
    const metadata = {
      name: name.trim(),
      description: description ? description.trim() : '',
      image: imageHash,
      attributes: attributes
    };

    // Upload metadata to IPFS
    const metadataHash = await uploadMetadataToIPFS(metadata);
    if (!metadataHash) throw new Error('Failed to upload metadata to IPFS');
    console.log('Metadata uploaded:', metadataHash);
    updateLoadingStep('metadata', 'success');

    // Mint NFT
    updateLoadingStep('mint', 'loading');
    const tx = await nftContract.methods.publicMint(metadataHash).send({
      from: userAddress,
      value: web3.utils.toWei(MINT_PRICE, 'ether')
    });
    console.log('NFT minted successfully:', tx);
    updateLoadingStep('mint', 'success');

    // Lưu NFT vào MongoDB - giờ chỉ lưu metadata URI
    try {
      await saveNewNFTToServer(userAddress, metadataHash);
      console.log('NFT metadata URI saved to database');
    } catch (dbError) {
      console.error('Error saving NFT to database:', dbError);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      tx,
      imageHash,
      metadataHash,
      metadata
    };
  } catch (error) {
    console.error('Mint error:', error);
    throw error;
  } finally {
    hideLoadingModal();
  }
}

// Form submission handler
document.getElementById('nft-creation-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  showLoading();

  try {
    const name = document.getElementById('nft-name').value;
    const description = document.getElementById('nft-description').value;
    const file = document.getElementById('file-input').files[0];

    const result = await handleCreateNFT(name, description, file);
    showSuccessModal(result);
  } catch (error) {
    console.error('Error:', error);
    showNotification(error.message, 'error');
  } finally {
    hideLoading();
  }
});

// Initialize when page loads
window.addEventListener('load', async () => {
  try {
    await initWeb3();
  } catch (error) {
    console.error('Failed to initialize Web3:', error);
    showNotification(error.message, 'error');
  }
});

// Utility functions
function showLoading() {
  document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loading-overlay').style.display = 'none';
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

function showSuccessModal(result) {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modal = document.getElementById('nft-info-modal');
  const modalContent = document.getElementById('nft-info-content');

  modalContent.innerHTML = `
    <div class="nft-success-info">
      <div class="nft-image-preview">
        <img src="${result.metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}" 
             alt="${result.metadata.name}">
      </div>
      
      <div class="info-group">
        <h4>NFT Details</h4>
        <div class="info-row">
          <span class="info-label">Name</span>
          <span class="info-value">${result.metadata.name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Description</span>
          <span class="info-value">${result.metadata.description || 'No description'}</span>
        </div>
      </div>

      ${result.metadata.attributes && result.metadata.attributes.length > 0 ? `
        <div class="info-group attributes-section">
          <h4>Attributes</h4>
          ${result.metadata.attributes.map(attr => `
            <div class="info-row">
              <span class="info-label">${attr.trait_type}</span>
              <span class="info-value">${attr.value}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div class="info-group">
        <h4>Transaction Details</h4>
        <div class="info-row">
          <span class="info-label">Transaction Hash</span>
          <span class="info-value">
            <a href="https://explorer.sketchpad-1.forma.art//tx/${result.tx.transactionHash}" 
               target="_blank">
              ${result.tx.transactionHash.substring(0, 10)}...
            </a>
          </span>
        </div>
        <div class="info-row">
          <span class="info-label">IPFS Image</span>
          <span class="info-value">
            <a href="https://ipfs.io/ipfs/${result.imageHash.replace('ipfs://', '')}" 
               target="_blank">View on IPFS</a>
          </span>
        </div>
        <div class="info-row">
          <span class="info-label">IPFS Metadata</span>
          <span class="info-value">
            <a href="https://ipfs.io/ipfs/${result.metadataHash.replace('ipfs://', '')}" 
               target="_blank">View on IPFS</a>
          </span>
        </div>
      </div>
    </div>
  `;

  const modalFooter = `
    <div class="modal-footer">
        <button class="close-button" onclick="hideSuccessModal()">
            <i class="bi bi-check-circle"></i>
            <span>Complete</span>
        </button>
    </div>
  `;

  modalBackdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeNFTModal() {
  document.getElementById('modal-backdrop').style.display = 'none';
  document.getElementById('nft-info-modal').style.display = 'none';
}

// Thêm hàm để tạo property row mới
function addProperty() {
  const propertiesContainer = document.getElementById('properties-container');
  const newRow = document.createElement('div');
  newRow.className = 'property-row';

  newRow.innerHTML = `
    <input type="text" placeholder="Property name" class="property-name">
    <input type="text" placeholder="Value" class="property-value">
    <button type="button" class="remove-property" onclick="removeProperty(this)">×</button>
  `;

  propertiesContainer.appendChild(newRow);
}

// Hàm xóa property row
function removeProperty(button) {
  button.closest('.property-row').remove();
}

// Hàm hiển thị/ẩn phần properties
function toggleProperties() {
  const propertiesContent = document.getElementById('properties-content');
  if (propertiesContent) {
    propertiesContent.style.display = propertiesContent.style.display === 'none' ? 'block' : 'none';
  }
}

async function saveNewNFTToServer(walletAddress, metadataUri) {
  try {
    if (!walletAddress) {
      throw new Error('Wallet address is required');
    }

    const requestData = {
      walletAddress: walletAddress,
      metadataUri: metadataUri  // IPFS URI của metadata
    };

    console.log('Request data:', requestData);

    const response = await fetch('http://localhost:8000/api/save-nft', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server error response:', errorData);
      throw new Error(errorData.detail || 'Failed to save NFT');
    }

    const result = await response.json();
    console.log('Kết quả lưu NFT mới:', result);
    return result;
  } catch (error) {
    console.error('Lỗi khi lưu NFT mới:', error);
    throw error;
  }
}
