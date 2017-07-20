import Rating from './Rating';
import React, {Component, PropTypes} from 'react';
import Suggest from './Suggest';

class FormInput extends Component {
  getValue() {}
  render() {}
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  // как в вариантах автозаполнения <option>
  defaultValue: PropTypes.any
};

export default FormInput;