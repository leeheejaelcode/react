export default function sum(...num) {
  return num.reduce((acc, cur) => acc + cur, 0);
}
