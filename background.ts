chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'save',
    title: 'ページを追加',
    contexts: ['all'],
  });
  chrome.contextMenus.create({
    id: 'add-link-item',
    title: 'リンクを追加',
    contexts: ['selection'],
  });
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
if (info.menuItemId === "save") {
    console.log("test")
}
})

export {};