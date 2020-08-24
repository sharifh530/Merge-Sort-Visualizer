const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const array = [];

for (let i = 0; i < 70; i++) {
  array.push(randomNumber(5, 450));
}

export default array;
