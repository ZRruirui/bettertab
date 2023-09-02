export default async function windowChanger() {
  const tabs = await chrome.tabs.query({});
  console.log(tabs)
}
