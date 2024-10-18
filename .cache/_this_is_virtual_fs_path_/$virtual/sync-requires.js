
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/UXPAGES/Apps/mekacreative/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/UXPAGES/Apps/mekacreative/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/UXPAGES/Apps/mekacreative/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/UXPAGES/Apps/mekacreative/src/pages/index.js"))
}

