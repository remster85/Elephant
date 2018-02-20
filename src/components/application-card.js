import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ApplicationCard({application, deleteApplication}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='address book'/> {application.name.name}
        </Card.Header>
        <Card.Description>
          <p><Icon name='github'/> {application.sourcecontrol}</p>
          <p><Icon name='book'/> {application.documentation}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/applications/edit/${application._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteApplication(application._id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ApplicationCard.propTypes = {
  application: React.PropTypes.object.isRequired
}
