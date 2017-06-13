function archiveIsOnClickLink(info, tab) {
	if (info["linkUrl"]) {
		open('https://archive.is/?run=1&url=' + encodeURIComponent(info["linkUrl"]));
	} else if (info["selectionText"]) {
		open('https://archive.is/?run=1&url=' + encodeURIComponent(info["selectionText"]));
	}
}

function archiveIsOnClickPage(info, tab) {
	if (!info["pageUrl"]) { return; }

	open('https://archive.is/?run=1&url=' + encodeURIComponent(info["pageUrl"]));
}

// function waybackOnClickLink(info, tab) {


// 	https://web.archive.org/save/
// }

chrome.contextMenus.create({
	"title": "Archive.is Link",
	"contexts": ["link", "selection"],
	"onclick": archiveIsOnClickLink
});

chrome.contextMenus.create({
	"title": "Archive.is Page",
	"contexts": ["page"],
	"onclick": archiveIsOnClickPage
})
