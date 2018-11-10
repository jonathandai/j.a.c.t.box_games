import React, { Component } from 'react';

class AddForm extends Component {
  render() {
    return(
    <section className="add-item">
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="What's your name?"  />
        <input type="text" name="currentItem" placeholder="What are you bringing?" />
        <button>Add Item</button>
      </form>
    </section>
  )
  }
}

export default AddForm;
