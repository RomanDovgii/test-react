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

export const filterSimpleObject = (object, searchString) => {
  let isIncluded = false;

  Object.values(object).forEach((value) => {
    isIncluded = isIncluded || String(value).toLowerCase().includes(searchString.toLowerCase());
  });

  return isIncluded;
};

export const filterComplexObject = (object, searchString) => {
  let isIncluded = false;

  Object.values(object).forEach((value) => {
    switch (typeof value) {
      case `object`:
        isIncluded = isIncluded || filterSimpleObject(value, searchString);
        break;
      default:
        isIncluded = isIncluded || String(value).toLowerCase().includes(searchString.toLowerCase());
        break;
    }
  });

  return isIncluded;
};

export const noop = () => {};
