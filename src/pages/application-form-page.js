import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newApplication, saveApplication, fetchApplication, updateApplication } from '../actions/application-actions';
import ApplicationForm from '../components/application-form';


class ApplicationFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchApplication(_id)
    } else {
      this.props.newApplication();
    }
  }

  submit = (application) => {
    if(!application._id) {
      return this.props.saveApplication(application)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateApplication(application)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ApplicationForm application={this.props.application} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    application: state.applicationStore.application,
    errors: state.applicationStore.errors
  }
}

export default connect(mapStateToProps, {newApplication, saveApplication, fetchApplication, updateApplication})(ApplicationFormPage);
