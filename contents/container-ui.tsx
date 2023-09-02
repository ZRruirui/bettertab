import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://*/*",
    "http://*/*"
  ],
  world: "MAIN"
}

export default function PlasmoMainUI() {
  return (
    <div
      style={{
        padding: 8,
        background: "purple",
        color: "white"
      }}>
      {/*window.tabs.map(tab => {*/}
      {/*<li key={tab.id}>*/}
      {/*  {tab.title}*/}
      {/*</li>*/}
    })
      {/*<h1>{`Message:` + window.mainMessage}</h1>*/}
    </div>
  )
}
