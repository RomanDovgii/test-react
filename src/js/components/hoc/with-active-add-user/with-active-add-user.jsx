import React, {PureComponent} from "react";

const withActiveAddUser = (Component) => {
  class WithActiveAddUser extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this.handleAddClick = this.handleAddClick.bind(this);
      this.handleCloseClick = this.handleCloseClick.bind(this);
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

    render() {
      return (
        <Component
          onAddClick = {this.handleAddClick}
          onCloseClick = {this.handleCloseClick}
          isOpen = {this.state.isOpen}
        />
      );
    }
  }

  return WithActiveAddUser;
};

export default withActiveAddUser;
