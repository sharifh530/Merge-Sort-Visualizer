const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const array = [];

for (let i = 0; i < 310; i++) {
  array.push(randomNumber(5, 550));
}

export default array;
