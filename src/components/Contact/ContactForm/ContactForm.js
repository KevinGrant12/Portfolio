import React from 'react';
import './ContactForm.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  };
  // convert to arrow function
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePhoneChange = event => {
    this.setState({ phone: event.target.value });
  };
  handleMessageChange = event => {
    console.log('changing')
    this.setState({ message: event.target.value });
  };
  handleSubmit = event => {
    alert(`${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.message}`);
    event.preventDefault();
  };
  render() {
    const { name, email, phone, message } = this.state;
    return (
      <form className="Contact-form" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Name" onChange={this.handleNameChange} value={name}/>
        </div>
        <div>
          <input type="email" placeholder="Email" onChange={this.handleEmailChange} value={email}/>
        </div>
        <div>
          <input type="tel" placeholder="Phone" onChange={this.handlePhoneChange} value={phone}/>
        </div>
        <div>
          <textarea name="" id="" placeholder="Your Message" onChange={this.handleMessageChange} value={message}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    );
  };
};


