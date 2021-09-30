const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  const stringArray = string.split('');
  const newStringArray = [];
  stringArray.forEach((letter) => {
    newStringArray.unshift(letter);
  });
  return newStringArray.join('');
};

const shiftCharacter = () => {
  return 'b';
};

export { capitalize, reverseString };
