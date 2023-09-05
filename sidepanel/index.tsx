import { useStorage } from "@plasmohq/storage/hook"

import "./side-style.scss"
function IndexSidePanel() {
  let [tabs] = useStorage("tabs",[] as  chrome.tabs.Tab[]);
  const Click = async (tabID: number) => {
      await chrome.tabs.update(tabID,{active: true })
  };
  const tabsList = tabs.map((tab) => <li key={tab.id} className="tabItem" onClick={async () => {await Click(tab.id)}}>{tab.title}</li>)
  return (
    <div>
        {tabsList}
    </div>
  )
}

export default IndexSidePanel

