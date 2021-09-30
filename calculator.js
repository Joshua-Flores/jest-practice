const calculator = (operator, num1, num2) => {
  switch (operator) {
    case 'add':
      return num1 + num2;
      break;
    case 'subtract':
      return num1 - num2;
      break;
    case 'multiply':
      return num1 * num2;
      break;
    case 'divide':
      return num1 / num2;
      break;
    default:
      throw new error('Something went wrong');
  }
};

export { calculator };
