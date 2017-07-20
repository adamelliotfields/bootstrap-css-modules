import React, { Component } from 'react';

const asyncComponent = (loader) => (
  class AsyncComponent extends Component {
    state = { Component: null };

    async componentDidMount () {
      const component = await loader();

      this.setState({
        Component: component
      });
    }

    render () {
      const { Component } = this.state;

      if (Component) return <Component {...this.props} />;

      return null;
    }
  }
);

export default asyncComponent;
