export const deepClone = (arr: object[]) => {
  return JSON.parse(JSON.stringify(arr))
}
