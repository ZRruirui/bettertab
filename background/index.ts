import store from "~store"
import { addTab } from '~store/tabs/tabs'

async function InitTabs(){
  const tabs = await chrome.tabs.query({});
  console.log("init tabs:",tabs)
  store.dispatch(addTab)
}

chrome.runtime.onInstalled.addListener(() => {
  InitTabs()
});


// 点击图标跳转，跳转到 admin 管理页面
const extensionIconClickListener = () => {
  const url  = chrome.runtime.getURL("/tabs/admin.html")
  chrome.tabs.create({ url:url });
};

chrome.action.onClicked.addListener(extensionIconClickListener);
