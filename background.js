var facebooks = /.*facebook\.com\/(home.php)?$/
var youtubes = /.*youtube\.com\/$/
var amazonMp3s = /\.amazon\..*\/.*node=163856011/
/*http://www.amazon.com/b?ie=UTF8&node=163856011*/

console.log("Mufasa Ready!");
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tab.url);
    console.log(changeInfo.status);
    if (changeInfo.status == "loading") {
        if(facebooks.test(tab.url)) {
            //chrome.tabs.update(tabId, {url: tab.url + "connor.brinton"});
            chrome.tabs.update(tabId, {url: "http://www.facebook.com/" + "connor.brinton"});
        } else if(youtubes.test(tab.url)) {
            chrome.tabs.update(tabId, {url: tab.url + "user/MormonMessagesYouth/videos"});
        } else if(amazonMp3s.test(tab.url)) {
            chrome.tabs.update(tabId, {url: "http://www.amazon.com/b/?node=2258933011"});
        }
    }
});
