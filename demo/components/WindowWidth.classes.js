import React, { Component } from 'react';
import Card from '../presentational/Card';

class MyComponent extends Component {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;

    return <Card>Window width is {width}px.</Card>;
  }
}

export default MyComponent;
