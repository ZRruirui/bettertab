import { onMounted } from '~node_modules/@vue/runtime-core'
import { useState } from 'react'

function IndexSidePanel() {
  let [tabs, setTabs] = useState([] as  chrome.tabs.Tab[])
  onMounted(async () => {
    const tabs = await chrome.tabs.query({})
    setTabs(tabs)
  })
  console.log("init tabs",tabs)
  const tabsList = tabs.map((tab) => <li key={tab.id}>tab.title</li>)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      {tabsList}
    </div>
  )

}

export default IndexSidePanel
