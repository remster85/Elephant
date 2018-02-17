import React, { Component} from 'react';
import { connect } from 'react-redux';
import ApplicationList from '../components/application-list';
import { fetchApplications, deleteApplication } from '../actions/application-actions';

class ApplicationListPage extends Component {

  componentDidMount() {
    this.props.fetchApplications();
  }

  render() {
    return (
      <div>
        <h1>List of Applications</h1>
        <ApplicationList applications={this.props.applications} loading={this.props.loading} errors={this.props.errors} deleteApplication={this.props.deleteApplication}/>
      </div>
    )
  }
}

// Make applications  array available in  props
function mapStateToProps(state) {
  return {
      applications : state.applicationStore.applications,
      loading: state.applicationStore.loading,
      errors: state.applicationStore.errors
  }
}

export default connect(mapStateToProps, {fetchApplications, deleteApplication})(ApplicationListPage);
