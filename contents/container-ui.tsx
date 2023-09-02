import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://*/*",
    "http://*/*"
  ],
  world: "MAIN"
}

export default async function PlasmoMainUI() {
  return (
    <div
      style={{
        padding: 8,
        background: "purple",
        color: "white"
      }}>
      {`ssss`}
    </div>
  )
}
