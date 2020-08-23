chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ytTime: 0})
})
