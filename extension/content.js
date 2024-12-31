// Content script
let provider = null;

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'CONNECT_WALLET') {
    try {
      // Request wallet connection
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        if (accounts.length > 0) {
          const did = `did:oneid:${accounts[0]}`;
          
          // Store DID and authentication status
          await chrome.storage.local.set({
            did,
            isAuthenticated: true
          });

          // Notify the page about successful connection
          window.postMessage({
            type: 'ONEID_CONNECTED',
            did
          }, '*');
        }
      } else {
        console.error('No Ethereum wallet found');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }
});