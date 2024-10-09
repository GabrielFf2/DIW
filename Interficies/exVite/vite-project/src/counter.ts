export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `El contador es : ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(9999)
}
