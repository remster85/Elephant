import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ApplicationCard from './application-card';

export default function ApplicationList({applications, loading, errors, deleteApplication}){

  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Just one second</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No Applications Found</Message.Header>
           <p>Add some new applications to get started.</p>
           <Link to={'/applications/new'} className="ui button primary">Add New Application</Link>
       </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           Is the backend server running?
       </Message.Content>
      </Message>
    )

  const cards = () => {
    return applications.map(application => {
      return (
        <ApplicationCard key={application._id} application={application} deleteApplication={deleteApplication} />
      )
    })
  }

  const applicationList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { applications.length === 0 && !loading  && !errors.global && emptyMessage }
      { errors.global && timeoutMessage }
      { applications.length > 0 && applicationList }
    </div>
  )
}
