import windowChanger from "./injected-helper"
import store from "~store"
import { useSelector } from 'react-redux'

const inject = async (tabId: number) => {
  chrome.scripting.executeScript(
    {
      target: {
        tabId
      },
      world: "MAIN",
      func: windowChanger
    },
    () => {
      InitTabs()
    }
  )
}

async function InitTabs(){
  const tabs = await chrome.tabs.query({});
  console.log(tabs)

}


// Simple example showing how to inject.
// You can inject however you'd like to, doesn't have
// to be with chrome.tabs.onActivated
chrome.tabs.onActivated.addListener((e) => {
  inject(e.tabId)
})

