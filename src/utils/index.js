export function createPageUrl(pageName = "Home") {
  return pageName === "Home" ? "/" : `/${pageName}`;
}