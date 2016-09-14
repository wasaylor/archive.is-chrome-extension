function archiveIsOnClick(info, tab) {
	if (!info["linkUrl"]) { return; }

	open('https://archive.is/?run=1&url=' + encodeURIComponent(info["linkUrl"]));
}

var id = chrome.contextMenus.create({
	"title": "Archive.is this link",
	"contexts": ["link"],
	"onclick": archiveIsOnClick
});
