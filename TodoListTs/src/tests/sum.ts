export function sum(n1: number, n2: number) {
  if (isNaN(n1) || isNaN(n2)) {
    return 0;
  }

  return n1 + n2;
}
