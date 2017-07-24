import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/Button.css';

const Button = props => 
  props.href
    ? <a {...props} className={classNames('Button', props.className)}>{}</a>
    : <button {...props} className={classNames('Button', props.className)}/>


Button.propTypes = {
  href: PropTypes.string,
};

export default Button