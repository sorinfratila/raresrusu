import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultContextValue = {
  data: {
    // set your initial data shape here
    menuOpen: false,
  },
  set: () => {},
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

export class LayoutContext extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor() {
    super();

    this.setData = this.setData.bind(this);
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    };
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }));
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default Consumer;
