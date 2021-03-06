import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuForm from './form';
import { makeMenu } from '../actions/index';

// Submit form containter - render 'redux-form' containter - 'MenuForm'
class SubmitForm extends Component {
  submitForm = (userConfiguredValues) => {
    this.props.makeMenu(userConfiguredValues, this.props.menu);
  }

  render() {
    return (
      <div className="main--form">
        <h2>Skonfiguruj wyniki:</h2>
        <MenuForm onSubmit={this.submitForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeMenu: (userConfiguredValues, state) => dispatch(makeMenu(userConfiguredValues, state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
