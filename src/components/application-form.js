import React, { Component } from 'react';
import { Form, Grid, Button, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {name:{}};
  if(!values.name || !values.name.name) {
    errors.name.first = {
      message: 'You need to provide an Application Name'
    }
  }
  if(!values.build) {
    errors.build = {
      message: 'You need to provide the Application build path'
    }
  } 
  if(!values.sourcecontrol) {
    errors.email = {
      message: 'You need to provide the Application source control path'
    }
  } 
  return errors;
}

class ApplicationForm extends Component {

  constructor(props) {
        super(props);
        this.state = {
          name: '',
          builds: [],
          nextbuild : 1
        };
		
      // This binding is necessary to make `this` work in the callback
      this.handleChange = this.handleChange.bind(this);

    }
	
	
  componentWillReceiveProps = (nextProps) => { // Load Application Asynchronously
    const { application } = nextProps;
    if(application._id !== this.props.application._id) { // Initialize form only once
      this.props.initialize(application)
    }
  }


  handleChange(tags) {
    this.setState({tags})
  }
 
  handlebuildNameChange = (idx) => (evt) => {
    const newbuilds = this.state.builds.map((build, sidx) => {
      if (idx !== sidx) return build;
      return { ...build, name: evt.target.value };
    });

    this.setState({ builds: newbuilds });
  }

  handleSubmit = (evt) => {
    const { name, builds } = this.state;
    alert(`Incorporated: ${name} with ${builds.length} builds`);
  }

  handleAddBuild(buildpath){
    this.setState({
        builds: this.state.builds.concat([{ name: buildpath, idx : this.state.nextbuild }]),
        nextbuild : this.state.nextbuild + 1
    });
  }


  handleRemoveBuild(idx) {
    this.setState({
      builds: this.state.builds.filter(s => s.idx != idx)
    });
  }

  renderField = ({ input, label, type, ico, meta: { touched, error } }) => (
    <div>
      <Form.Field className={classnames({error:touched && error})}>
        <div>  {ico && <Icon name={ico}/>} <label>{label}</label> </div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span className="error">{error.message}</span>}
      </Form.Field>
    </div>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, application } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{application._id ? 'Edit Application' : 'Add New Application'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="name.name" ico="address book"  type="text" component={this.renderField} label="Name"/>
            <Field name="sourcecontrol"  ico="github" type="text" component={this.renderField} label="Source Control"/>
		        <Field name="documentation" ico="book" type="text" component={this.renderField} label="Documentation"/>
		 
            <div><Icon name="hourglass start" />Builds</div>
              
            {this.state.builds.map((build, idx) => (
              <Form.Field key={idx}>
                  {build.name}  <Button compact size='mini' onClick={() => this.handleRemoveBuild(idx + 1)}>-</Button> 
              </Form.Field>
            ))}

          <div>
          <Form.Field> 
            <input placeholder={`build${this.state.nextbuild}`} id={`build${this.state.nextbuild}`}  name={`build${this.state.nextbuild}`} type="text"/>
           <Button compact size='mini' onClick={() => this.handleAddBuild(document.getElementById('build' + this.state.nextbuild).value)}>+</Button> 
         </Form.Field>  
          </div>
			<br/>
						
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'application', validate})(ApplicationForm);
