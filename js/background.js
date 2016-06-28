// Constants
// Redirection by site
var facebooks = /.*facebook\.com\/(home.php)?$/;
var facebookTarget = "https://www.facebook.com/" + "connor.brinton";
var youtubes = /.*youtube\.com\/$/;
var youtubeTarget = "https://www.youtube.com/user/MormonMessagesYouth/videos";
var amazonMp3s = /\.amazon\..*\/.*node=163856011/;
var amazonTarget = "http://www.amazon.com/b/?node=2258933011";
// Redirection by time
var bedtimeHour = 22;
var bedtimeMinute = 30;
var bedtimeTarget = "https://www.lds.org/ensign/2015/07/young-adults/filled-with-life-and-energy";

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "loading") {
    // Check bedtime
    if (redirectByTime(tabId, tab.url)) return;

    // Check list of redirected sites
    if (redirectBySite(tabId, tab.url)) return;
  }
});

function redirectByTime(tabId, url) {
  // Don't try to repeatedly redirect the target page
  if (url.startsWith(bedtimeTarget)) return true;
  // Check if bedtime has passed yet
  var now = new Date();
  var bedtime = new Date(now.getTime());
  bedtime.setHours(bedtimeHour);
  bedtime.setMinutes(bedtimeMinute);
  if (bedtime < now) {
    chrome.tabs.update(tabId, { url: bedtimeTarget });
    return true;
  }
  // We didn't handle the redirect
  return false;
}

function redirectBySite(tabId, url) {
  if(facebooks.test(url)) {
    chrome.tabs.update(tabId, { url: facebookTarget });
    return true;
  } else if(youtubes.test(url)) {
    chrome.tabs.update(tabId, { url: youtubeTarget });
    return true;
  } else if(amazonMp3s.test(url)) {
    chrome.tabs.update(tabId, { url: amazonTarget });
    return true;
  }
  // We didn't handle the redirect
  return false;
}
