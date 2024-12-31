// Popup script
let currentDID = null;

async function initializePopup() {
  const statusElement = document.getElementById('login-status');
  const credentialsElement = document.getElementById('credentials-list');

  // Check if user is logged in
  const { did, isAuthenticated } = await chrome.storage.local.get(['did', 'isAuthenticated']);
  currentDID = did;

  if (isAuthenticated) {
    statusElement.innerHTML = `
      <div class="credential-item">
        <div style="font-weight: 500">Connected DID</div>
        <div style="font-size: 0.875rem; color: #6b7280; word-break: break-all">
          ${did}
        </div>
      </div>
      <button id="disconnect" class="button">Disconnect</button>
    `;

    // Add disconnect handler
    document.getElementById('disconnect').addEventListener('click', async () => {
      await chrome.storage.local.set({ did: null, isAuthenticated: false });
      window.location.reload();
    });
  } else {
    statusElement.innerHTML = `
      <button id="connect" class="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
        </svg>
        Connect Wallet
      </button>
    `;

    // Add connect handler
    document.getElementById('connect').addEventListener('click', async () => {
      // Send message to content script to initiate wallet connection
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.tabs.sendMessage(tab.id, { type: 'CONNECT_WALLET' });
    });
  }
}

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePopup);