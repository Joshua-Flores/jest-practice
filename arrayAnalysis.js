const arrayAnalysis = (array) => {
  const average = array.reduce((a, b) => a + b) / array.length;
  const min = array.sort()[0];
  const max = array.sort()[array.length - 1];
  const length = array.length;
  return {
    average,
    min,
    max,
    length,
  };

  //   const min = array.sort()
};

export { arrayAnalysis };
