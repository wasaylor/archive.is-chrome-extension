function openArchiveIs(targeturl) {

	var archiveisurl = new URL("/", "https://archive.is");

	archiveisurl.searchParams.set('run', 1);
	archiveisurl.searchParams.set('url', targeturl);

	open(archiveisurl.href);
}

function archiveIsOnClickLink(info, tab) {
	if (info["linkUrl"]) {
		openArchiveIs(info["linkUrl"]);
	} else if (info["selectionText"]) {
		openArchiveIs(info["selectionText"]);
	}
}

function archiveIsOnClickPage(info, tab) {
	if (info["pageUrl"]) {
		openArchiveIs(info["pageUrl"]);
	}
}

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
