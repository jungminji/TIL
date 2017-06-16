// import fusionMath from './fusion.math';

const aa = {
  name: "ha"
};

const bb = {
  name: "JJ",
  blabla: "ho"
};

const fus = Object.assign(aa, bb);

console.log(fus);

if (module.hot) {
  module.hot.accept();
}
