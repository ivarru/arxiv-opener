// Create context menu items when extension is installed
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "open-arxiv-abstract",
    title: "Open arXiv abstract",
    contexts: ["link"],
    targetUrlPatterns: ["*://arxiv.org/pdf/*"]
  });

  browser.contextMenus.create({
    id: "open-arxiv-pdf",
    title: "Open arXiv PDF",
    contexts: ["link"],
    targetUrlPatterns: ["*://arxiv.org/abs/*"]
  });
});

// Handle context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-arxiv-abstract") {
    const pdfUrl = info.linkUrl;
    const abstractUrl = pdfUrl.replace('/pdf/', '/abs/').replace('.pdf', '');
    
    // Open the abstract page in a new tab
    browser.tabs.create({
      url: abstractUrl,
      active: true
    });
  } else if (info.menuItemId === "open-arxiv-pdf") {
    const abstractUrl = info.linkUrl;
    const pdfUrl = abstractUrl.replace('/abs/', '/pdf/') + '.pdf';
    
    // Open the PDF in a new tab
    browser.tabs.create({
      url: pdfUrl,
      active: true
    });
  }
});
