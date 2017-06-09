import React from 'react';
import { Textfield } from 'react-mdc-web/lib';

export default class SearchInput extends React.Component {
  state = {
    textFieldDefault: this.props.value || '',
    textField: '',
  }

  handleTextFieldChange = (value) => {
    this.setState((state) => {
      const obj = { ...state };
      obj.textField = value;
      return obj;
    });
  }

  render() {
    return (
      <div>
        <Textfield
          floatingLabel="City"
          helptext="For example, flowers or used cars"
          helptextPersistent
          value={this.state.textField}
          onChange={e => this.handleTextFieldChange(e.target.value)}
        />
      </div>
    );
  }
}
