export const randomItem = arr => arr[(Math.random() * arr.length) | 0];

export const normalizeText = str => {
  let label = `${str.replace(/([a-z])([A-Z])/g, '$1 $2')}`
  return `${label.charAt(0).toUpperCase()}${label.slice(1)}`
}