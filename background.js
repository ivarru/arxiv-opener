// Create context menu item when extension is installed
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "open-arxiv-abstract",
    title: "Open arXiv Abstract",
    contexts: ["link"],
    targetUrlPatterns: ["*://arxiv.org/pdf/*"]
  });
});

// Handle context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-arxiv-abstract") {
    const pdfUrl = info.linkUrl;
    const abstractUrl = pdfUrl.replace('/pdf/', '/abs/');
    
    // Open the abstract page in a new tab
    browser.tabs.create({
      url: abstractUrl,
      active: true
    });
  }
});
