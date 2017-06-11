import React from 'react';
import PropTypes from 'prop-types';
import { Textfield } from 'react-mdc-web/lib';

import './searchInput.css';

export default class SearchInput extends React.Component {
  state = {
    textField: '',
  }

  handleTextFieldChange = (value) => {
    this.setState((state) => {
      const obj = { ...state };
      obj.textField = value;
      return obj;
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.textField.state.focus = false;
    this.setState((state) => {
      const obj = { ...state };
      obj.textField = '';
      return obj;
    });
    this.props.onSubmit(this.state.textField);
  }

  render() {
    return (
      <form
        onSubmit={this.handleFormSubmit}
      >
        <Textfield
          ref={textField => (this.textField = textField)}
          floatingLabel={this.props.value}
          helptext="Please, enter new location"
          value={this.state.textField}
          onChange={e => this.handleTextFieldChange(e.target.value)}
          className="search__input"
        />
      </form>
    );
  }
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
