import { Storage } from "@plasmohq/storage"

export const storage = new Storage()


export async function SetTabs(tabs: chrome.tabs.Tab[]){
  console.log(tabs)
  return storage.set("tabs", tabs)
}

export async function GetTabs(): Promise<chrome.tabs.Tab[]>{
  return storage.get("tabs")
}

export async function UpdateTab(tab: chrome.tabs.Tab){
  let tabs = await GetTabs()
  let updated = false
  tabs = tabs.map((c )=>{
    if (c.id == tab.id){
      updated = true
      return tab
    }
    return c
  })
  if (!updated){
    tabs.push(tab)
  }
  return SetTabs(tabs)
}

export async function DeleteTab(tabID: number){
  let tabs = await GetTabs()
  tabs = tabs.filter(c => c.id != tabID)
  return SetTabs(tabs)
}