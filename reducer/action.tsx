export const ActionDomain = () => {
  const addition = (value: string[]) =>
    value.map(Number).reduce((a: number, b: number) => a + b);

  const multiplication = (value: string[]) =>
    value.map(Number).reduce((a: number, b: number) => a * b);

  const primeNumber = (value: number = 0) => {
    let n: number = value;
    let iteration: number = 1;
    let c: number = 0;
    let arr: number[] = [];

    for (let count = 1; count <= n; iteration++) {
      for (c = 2; c < iteration; c++) {
        if (iteration % c == 0) break;
      }
      if (c == iteration) {
        arr.push(iteration);
        count++;
      }
    }
    return arr;
  };

  const fibonacci = (value: number) => {
    if (value === 1) {
      return [0, 1];
    } else {
      const arr: number[] = fibonacci(value - 1);

      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    }
  };
  return {
    addition,
    multiplication,
    primeNumber,
    fibonacci,
  };
};

export default ActionDomain;
