const WalletManager = {
    connect: async function () {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            localStorage.setItem('walletAddress', account);
            return account;
        } catch (error) {
            console.error('Error connecting wallet:', error);
            throw error;
        }
    },

    disconnect: function () {
        localStorage.removeItem('walletAddress');
        window.location.href = 'login.html';
    },

    getAddress: function () {
        return localStorage.getItem('walletAddress');
    },

    formatAddress: function (address) {
        if (!address) return '';
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    }
};

// Lắng nghe sự kiện thay đổi tài khoản
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts.length === 0) {
            WalletManager.disconnect();
        } else {
            localStorage.setItem('walletAddress', accounts[0]);
            window.location.reload();
        }
    });
}

window.WalletManager = WalletManager; 