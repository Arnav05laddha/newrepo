// Background script
chrome.runtime.onInstalled.addListener(() => {
  // Initialize extension state
  chrome.storage.local.set({
    did: null,
    isAuthenticated: false
  });
});