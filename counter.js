let counter = 0;
export function setupCounter(element) {
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export const addNumber = (a,b) => {
  return a + b;
}

export function setupAdder(element) {
  const setCounter = (count) => {
    counter = addNumber(count,5)
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener("click", () => setCounter(counter))

}
