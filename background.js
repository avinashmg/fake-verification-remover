const cache = {};

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.message in cache) {
    const data = { verified: cache[request.message] };
    data.id = request.id;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, data);
      console.log("used from cache");
    });
  } else {
    fetch(`https://22dbic.deta.dev/${request.message}`)
      .then((res) => res.json())
      .then((data) => {
        cache[request.message] = data.verified;
        data.id = request.id;
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, data);
          }
        );
      });
  }
});
