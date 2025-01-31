async function connectMetaMask() {
    if (typeof window.ethereum !== "undefined") {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const account = accounts[0];
            console.log("Đã kết nối ví MetaMask:", account);

            // Thêm Forma Testnet vào MetaMask
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0xF043B', 
                        chainName: 'Forma Sketchpad',
                        nativeCurrency: {
                            name: 'Test TIA',
                            symbol: 'tTIA',
                            decimals: 18
                        },
                        rpcUrls: ['https://rpc.sketchpad-1.forma.art/'],
                        blockExplorerUrls: ['https://explorer.sketchpad-1.forma.art/']
                    }]
                });

                // Chuyển đổi sang mạng Forma Testnet
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xF043B' }],
                });
            } catch (switchError) {
                console.error("Lỗi khi thêm/chuyển đổi mạng:", switchError);
            }

            // Lưu địa chỉ ví vào localStorage
            localStorage.setItem("walletAddress", account);

            // Gửi địa chỉ ví đến backend để lưu
            await saveWalletAddressToServer(account);

            // Chuyển hướng về trang chính
            window.location.href = "index.html";
        } catch (error) {
            console.error("Lỗi khi kết nối MetaMask:", error);
        }
    } else {
        alert("Vui lòng cài đặt MetaMask!");
    }
}

async function saveWalletAddressToServer(walletAddress) {
    try {
        const response = await fetch('http://localhost:8000/api/save-address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ walletAddress }),
        });

        const result = await response.json();
        console.log('Kết quả từ server:', result);
    } catch (error) {
        console.error('Lỗi khi lưu địa chỉ ví:', error);
    }
}

async function connectLeapWallet() {
    if (typeof window.leap !== 'undefined' && window.leap.enable && window.leap.getKey) {
        try {
            const chainId = 'cosmoshub-4'; // Chain ID của mạng Cosmos Hub
            await window.leap.enable(chainId);

            // Lấy thông tin ví
            const keyInfo = await window.leap.getKey(chainId);
            const address = keyInfo.bech32Address;

            // Lưu địa chỉ ví vào localStorage
            localStorage.setItem('walletAddress', address);

            // Gửi địa chỉ ví đến backend để lưu
            await saveWalletAddressToServer(address);

            // Chuyển hướng về trang chính
            window.location.href = 'index.html';
            console.log('Đã kết nối Leap Wallet:', address);
        } catch (error) {
            console.error('Lỗi khi kết nối Leap Wallet:', error);
            alert('Không thể kết nối Leap Wallet. Vui lòng kiểm tra mạng và thử lại.');
        }
    } else {
        alert('Leap Wallet chưa được cài đặt hoặc không được hỗ trợ trên trình duyệt này.');
    }
}

async function connectKeplrWallet() {
    if (typeof window.keplr !== 'undefined') {
        try {
            await window.keplr.enable('cosmoshub-4');
            const offlineSigner = window.getOfflineSigner('cosmoshub-4');
            const accounts = await offlineSigner.getAccounts();
            const address = accounts[0].address;

            // Lưu địa chỉ ví vào localStorage
            localStorage.setItem('walletAddress', address);

            // Gửi địa chỉ ví đến backend để lưu
            await saveWalletAddressToServer(address);

            // Chuyển hướng về trang chính
            window.location.href = 'index.html';
            console.log('Đã kết nối Keplr Wallet:', address);
        } catch (error) {
            console.error('Lỗi khi kết nối Keplr Wallet:', error);
            alert('Không thể kết nối Keplr Wallet.');
        }
    } else {
        alert('Vui lòng cài đặt Keplr Wallet!');
    }
}

document.getElementById("connectMetaMaskBtn").addEventListener("click", connectMetaMask);
document.querySelector(".leap-wallet-btn").addEventListener("click", connectLeapWallet);
document.querySelector(".keplr-wallet-btn").addEventListener("click", connectKeplrWallet);
