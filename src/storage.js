// Simple localStorage wrapper to mimic the storage API used in the game
export const storage = {
  async set(key, value) {
    try {
      localStorage.setItem(key, value);
      return { success: true };
    } catch (e) {
      console.error('Storage set error:', e);
      return { success: false, error: e };
    }
  },
  
  async get(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? { value } : null;
    } catch (e) {
      console.error('Storage get error:', e);
      return null;
    }
  },
  
  async clear() {
    try {
      localStorage.clear();
      return { success: true };
    } catch (e) {
      console.error('Storage clear error:', e);
      return { success: false, error: e };
    }
  }
};

// Make it available globally
if (typeof window !== 'undefined') {
  window.storage = storage;
}
