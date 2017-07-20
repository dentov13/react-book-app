import React, { Component } from 'react';
import '../css/Button.css';

class Button extends Component {
  render() {
   return <div className="Logo"/>;
  }
}

Button.propTypes = {
  href: PropTypes.string,
};

export default Button;