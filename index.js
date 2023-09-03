const card = document.querySelector(".card");
//定义旋转角度的范围
const yRange = [-20, 20];
const xRange = [-20, 20];

/**
 *
 * @param {*} range: 旋转的角度范围
 * @param {*} value:当前鼠标的位置
 * @param {*} max: 元素的宽度
 * @returns
 */
const getRotate = (range, value, max) => {
  const result = (value / max) * (range[1] - range[0]) + range[0];
  return result;
};

card.onmousemove = (e) => {
  const { offsetX, offsetY } = e;
  const { offsetWidth, offsetHeight } = card;

  const ry = -getRotate(yRange, offsetX, offsetWidth);
  const rx = getRotate(xRange, offsetY, offsetHeight);
  card.style.setProperty("--rx", `${rx}deg`);
  card.style.setProperty("--ry", `${ry}deg`);
};

card.onmouseleave = (e) => {
  card.style.setProperty("--rx", `0deg`);
  card.style.setProperty("--ry", `0deg`);
};
