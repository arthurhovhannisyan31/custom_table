const requestAnimationFrame = (cb: () => void) => {
  setTimeout(cb, 0)
}
// @ts-ignore
global.requestAnimationFrame = requestAnimationFrame

export default requestAnimationFrame
