import {SetTabs,UpdateTab,DeleteTab} from "~store";

async function onInstalled(){
  let tabs = await chrome.tabs.query({});
  console.log(tabs)
  tabs = tabs.sort((a,b) => {
    if (!a.title){
      return 1
    }
    if (!b.title){
      return -1
    }

    return a.id - b.id
  })
  console.log("init tabs:",tabs)
  return SetTabs(tabs)
}


async function onTabChanged(tabId, tab: chrome.tabs.Tab) {
  console.log("tab changed",tab)
  return UpdateTab(tab)
}

async function onTabDeleted(tabID: number) {
  console.log("deleted", tabID);
  return DeleteTab(tabID)
}

chrome.runtime.onInstalled.addListener(onInstalled);
chrome.tabs.onUpdated.addListener(onTabChanged)
chrome.tabs.onRemoved.addListener(onTabDeleted)
// 点击图标跳转，跳转到 admin 管理页面
const extensionIconClickListener = () => {
  const url  = chrome.runtime.getURL("/tabs/admin.html")
  chrome.tabs.create({ url:url });
};

chrome.action.onClicked.addListener(extensionIconClickListener);
