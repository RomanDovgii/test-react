import React, {PureComponent} from "react";

const withActiveAddUser = (Component) => {
  class WithActiveAddUser extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
        areFilled: false
      };

      this.handleAddClick = this.handleAddClick.bind(this);
      this.handleCloseClick = this.handleCloseClick.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleAddClick() {
      this.setState({
        isOpen: true
      });
    }

    handleCloseClick() {
      this.setState({
        isOpen: false
      });
    }

    handleInputChange(refs) {
      let areRefsFilled = true;

      refs.forEach((ref) => {
        const isFilled = ref.value !== ``;
        areRefsFilled = areRefsFilled && isFilled;
      });

      this.setState({
        areFilled: areRefsFilled
      });
    }

    render() {
      return (
        <Component
          onAddClick = {this.handleAddClick}
          onCloseClick = {this.handleCloseClick}
          onInputChange = {this.handleInputChange}
          isOpen = {this.state.isOpen}
          areFilled = {this.state.areFilled}
        />
      );
    }
  }

  return WithActiveAddUser;
};

export default withActiveAddUser;
