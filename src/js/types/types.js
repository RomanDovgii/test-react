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

const optionalPersonType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: addressType,
  description: PropTypes.string
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

export const addUserType = {
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  onAddToTableClick: PropTypes.func.isRequired
};

export const searchPanelType = {
  isLoading: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func.isRequired
};

export const tableHeadingType = {
  onFilterClick: PropTypes.func.isRequired
};

export const selectedUserType = {
  selectedUser: optionalPersonType
};
