export function sum(n1: number, n2: number) {
  return n1 + n2;
}

const NewCompo = () => {
  const valueToPrint = sum(10, 2);

  return <>{valueToPrint}</>;
};

export default NewCompo;
