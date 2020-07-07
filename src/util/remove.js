export function removeTodoAtIndex(arr, index) {
  return [
    ...arr.slice(0, index),
    ...arr.slice(ndex + 1)
  ];
};