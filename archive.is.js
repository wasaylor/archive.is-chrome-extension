function archiveIsOnClickLink(info, tab) {
	if (!info["linkUrl"]) { return; }

	open('https://archive.is/?run=1&url=' + encodeURIComponent(info["linkUrl"]));
}

function archiveIsOnClickPage(info, tab) {
	if (!info["pageUrl"]) { return; }

	open('https://archive.is/?run=1&url=' + encodeURIComponent(info["pageUrl"]));
}

var id0 = chrome.contextMenus.create({
	"title": "Archive.is Link",
	"contexts": ["link"],
	"onclick": archiveIsOnClickLink
});

var id1 = chrome.contextMenus.create({
	"title": "Archive.is Page",
	"contexts": ["page"],
	"onclick": archiveIsOnClickPage
})
