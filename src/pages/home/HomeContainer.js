import * as React from "react";

class HomeContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      userStore: { welcome },
      fipeStore: {
        initialRedirect,
        setInitialRedirect,
      }
    } = this.props;

    const viewComponentProps = {
      welcome,
      initialRedirect,
      setInitialRedirect,
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default HomeContainer;
