export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortToTop = (a, b) => {
  switch (true) {
    case a > b:
      return -1;
    case a < b:
      return 1;
    default:
      return 0;
  }
};

export const sortToBot = (a, b) => {
  switch (true) {
    case a < b:
      return -1;
    case a > b:
      return 1;
    default:
      return 0;
  }
};
