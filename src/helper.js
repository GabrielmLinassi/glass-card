export const calc = (x, y) => {
  const _x = -(y - window.innerHeight / 2) / 20;
  const _y = (x - window.innerWidth / 2) / 20;
  return [_x, _y, 1];
};

export const trans = (x, y, s) => {
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
};
