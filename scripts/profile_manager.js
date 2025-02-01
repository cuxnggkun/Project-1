// =============== PROFILE STORAGE MANAGEMENT ===============
const ProfileManager = {
    save: function (profile, address) {
        try {
            localStorage.setItem(`userProfile_${address.toLowerCase()}`, JSON.stringify(profile));
            localStorage.setItem('currentWalletAddress', address.toLowerCase());
            console.log('✅ Profile saved for address:', address);
            return true;
        } catch (error) {
            console.error('❌ Error saving profile:', error);
            return false;
        }
    },

    load: function (address) {
        try {
            const profile = localStorage.getItem(`userProfile_${address.toLowerCase()}`);
            return profile ? JSON.parse(profile) : null;
        } catch (error) {
            console.error('❌ Error loading profile:', error);
            return null;
        }
    },

    clear: function (address) {
        localStorage.removeItem(`userProfile_${address.toLowerCase()}`);
        localStorage.removeItem('currentWalletAddress');
    }
};

// =============== PROFILE LOADING AND CHECKING ===============
async function checkWalletConnection() {
    const savedAddress = localStorage.getItem('walletAddress');
    const userProfile = localStorage.getItem('userProfile');

    if (savedAddress) {
        const shortAddress = `${savedAddress.substring(0, 6)}...${savedAddress.substring(savedAddress.length - 4)}`;

        // Ẩn nút connect và hiển thị wallet info
        document.getElementById('connectWalletBtn').style.display = 'none';
        document.getElementById('walletInfo').style.display = 'block';

        // Kiểm tra và hiển thị username hoặc address
        if (userProfile) {
            const profile = JSON.parse(userProfile);
            const navbarUsername = document.getElementById('navbarUsername');
            const walletAvatar = document.querySelector('.wallet-avatar');

            if (navbarUsername) {
                navbarUsername.textContent = profile.name?.trim() || shortAddress;
            }
            if (walletAvatar && profile.profilePicture) {
                walletAvatar.src = profile.profilePicture;
            }
        } else {
            // Nếu chưa có profile, hiển thị short address
            const navbarUsername = document.getElementById('navbarUsername');
            if (navbarUsername) {
                navbarUsername.textContent = shortAddress;
            }
        }
    } else {
        showConnectButton();
    }
}

// =============== UI INTERACTION FUNCTIONS ===============
function showConnectButton() {
    document.getElementById('connectWalletBtn').style.display = 'block';
    document.getElementById('walletInfo').style.display = 'none';
}

async function connectWallet() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        localStorage.setItem('walletAddress', account);

        // Kiểm tra xem có profile cũ không
        const existingProfile = localStorage.getItem('userProfile');
        if (!existingProfile) {
            // Nếu chưa có profile, tạo profile mới với địa chỉ ví
            const shortAddress = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
            const newProfile = {
                name: shortAddress,
                bio: '',
                profilePicture: null
            };
            localStorage.setItem('userProfile', JSON.stringify(newProfile));
        }

        checkWalletConnection();
        console.log('Wallet connected:', account);
    } catch (error) {
        console.error('Error connecting wallet:', error);
    }
}

// =============== PROFILE DISPLAY FUNCTIONS ===============
async function loadUserProfile() {
    try {
        const userAddress = await getCurrentWalletAddress();
        if (!userAddress) return;

        // Load profile từ localStorage hoặc API
        const profile = await getProfileData(userAddress);
        if (profile) {
            updateProfileDisplay(profile);
        }

        // Update avatar và username trong navbar
        updateNavbarProfile(profile);
    } catch (error) {
        console.error('Error loading profile:', error);
    }
}

function updateNavbarProfile(profile) {
    const profileButton = document.querySelector('.profile-button');
    const usernameDisplay = document.querySelector('.username-display');

    if (profileButton && profile) {
        // Update avatar nếu có
        if (profile.avatar) {
            profileButton.innerHTML = `<img src="${profile.avatar}" alt="Profile" class="profile-avatar">`;
        }

        // Update username
        if (profile.username && usernameDisplay) {
            usernameDisplay.textContent = profile.username;
        }
    }
}

function initializeProfileDropdown() {
    const profileButton = document.querySelector('.profile-button');
    const profileDropdown = document.querySelector('.profile-dropdown');

    if (profileButton && profileDropdown) {
        profileButton.addEventListener('click', () => {
            profileDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });
    }
}

// Export để sử dụng ở các file khác
window.ProfileManager = ProfileManager;

// Initialize when document loads
document.addEventListener('DOMContentLoaded', function () {
    checkWalletConnection();
}); 