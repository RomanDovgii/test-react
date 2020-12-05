export const MAXIMUM_USERS_PER_PAGE = 50;
export const SMALL_DATA = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
export const LARGE_DATA = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
export const UNKNOWN_INFORMATION = `Unknown`;

export const AppRoute = {
  SELECT: `/select`,
  TABLE: `/table`
};

export const Data = {
  LARGE: `LARGE`,
  SMALL: `SMALL`
};

export const FilterType = {
  ID: `id`,
  FIRST_NAME: `firstName`,
  LAST_NAME: `lastName`,
  EMAIL: `email`,
  PHONE: `phone`,
  NONE: `none`
};

export const FilterDirection = {
  TO_TOP: `TO_TOP`,
  TO_BOT: `TO_BOT`
};

export const DESCRIPTION_FOR_NEW_USER = `We know nothing about this user`;
