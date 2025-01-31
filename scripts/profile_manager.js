// Quản lý profile trong localStorage
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

// Export để sử dụng ở các file khác
window.ProfileManager = ProfileManager; 