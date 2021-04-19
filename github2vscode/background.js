chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
    {
      title: "github1s",
      contexts: ["all"], //action, all, audio, browser_action, editable, frame, image, launcher, link, page, page_action, selection, video.
      id: "github1s",
      documentUrlPatterns: [
        "https://*.github.com/*"
      ]
    }
  );
});

function onClickHandler(info, tab) {
  var url = tab.url;
  var newUrl = url.replace("github.", "github1s.");
  chrome.tabs.create({ url: newUrl });
}
chrome.contextMenus.onClicked.addListener(onClickHandler);
