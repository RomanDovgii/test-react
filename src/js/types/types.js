import PropTypes from "prop-types";

const addressType = PropTypes.shape({
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
});

const personType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: addressType,
  description: PropTypes.string.isRequired
});

export const tablePageType = {
  getUsers: PropTypes.func.isRequired
};

export const tableElementType = {
  person: personType
};

export const tableType = {
  currentPageUsers: PropTypes.arrayOf(personType).isRequired
};

export const paginationType = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

export const addToTableType = {
  isOpen: PropTypes.bool.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired
};
