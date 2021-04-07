chrome.runtime.onInstalled.addListener(function () {
  //Set default value
  chrome.storage.local.set({ skip_add_refresh_time: 3000 }, function () {
    console.log('Default time 3000ms set');
  });

  chrome.storage.local.set({ skip_add_active: true }, function () {
    console.log('activated');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.youtube.com' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
  }
});

chrome.tabs.onRemoved.addListener(function (tabid, removed) {
  console.log('im closed');
});
