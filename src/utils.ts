export const clone = <T> (item: T): T => {
  return JSON.parse(JSON.stringify(item))
}

export const noop = (): void => {
}

export const percentToNum = (px: string): number => {
  return parseInt(px.slice(0, -2))
}

export const pxToNum = (px: string): number => {
  return parseInt(px.slice(0, -2))
}
