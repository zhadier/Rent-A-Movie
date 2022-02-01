const totalItems = (arr, domElement) => {
  let length = 0;
  while (arr[length] !== undefined) {
    length += 1;
  }
  domElement.innerHTML = `(${length})`;
  return length;
};

export { totalItems as default };
