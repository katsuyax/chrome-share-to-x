chrome.action.onClicked.addListener((tab) => {
  const shareText = ` » ${tab.title}`;
  const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(tab.url)}`;
  chrome.tabs.create({ url: shareUrl });
});
