import { Component } from 'react';



const INITIAL_STATE = {
    name: '',
    number: '',
}

export class ContactForm extends Component {

state = { ...INITIAL_STATE };

handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value,});
  };

 handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({...this.state});
    this.reset();
    
  };

  reset = () => {
    this.setState ({ ...INITIAL_STATE })

  };




render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={name}
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              value={number}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}