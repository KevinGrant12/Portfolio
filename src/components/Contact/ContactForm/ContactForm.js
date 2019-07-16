import React from 'react';
import './ContactForm.css';

// const initialState = {
//   name: '',
//   email: '',
//   phone: '',
//   message: '',
//   nameError: '',
//   emailError: '',
//   phoneError: ''
// };

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = initialState;
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      formErrors: {
        nameError: '',
        emailError: '',
        phoneError: ''
      }
    };
  };

  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value })
  };

  validate = () => {
    let nameError = '';
    let emailError = '';
    let phoneError = '';

    if (this.state.email === '') {
      emailError="please add email"
    } else if (!this.state.email.includes('@')) {
      emailError = 'invalid email'
    };

    if (emailError) {
      this.setState({ emailError });
      return false;
    };

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert(`
        Name: ${this.state.name}
        Email: ${this.state.email}
        Phone: ${this.state.phone}
        Message: ${this.state.message}`);
      // clear form
      // this.setState(initialState);
    }
  };

  render() {
    const { name, email, phone, message } = this.state;
    return (
      <form className="Contact-form" onSubmit={this.handleSubmit} noValidate="novalidate">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={event => this.handleChange(event, 'name')}
            />
            <div className="formError">{this.state.nameError}</div>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => this.handleChange(event, 'email')}
          />
          <div className="formError">{this.state.emailError}</div>
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            onChange={event => this.handleChange(event, 'phone')}
            value={phone}
          />
          <div className="formError">{this.state.phoneError}</div>
        </div>
        <div>
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            onChange={event => this.handleChange(event, 'message')}
            value={message}>
          </textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    );
  };
};


