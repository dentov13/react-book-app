/* @flow */

import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/components/Button.css';

type Props = {
  href: ?string,
  className: ?string
};

const Button = (props: Props) => 
  props.href
    ? <a {...props} className={classNames('Button', props.className)}>{}</a>
    : <button {...props} className={classNames('Button', props.className)}/>



export default Button