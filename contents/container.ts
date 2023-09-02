import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://*/*",
    "http://*/*"
  ],
  world: "MAIN",
  run_at: "document_start"
}
