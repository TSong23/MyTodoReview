import React from 'react';
// import { uniqueId } from '../../util/id_generator';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: "",
      done: false
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title: <input onChange={this.update('title')} 
                          type="text"
                          value={this.state.title}/>
          </label>
          <label>
            Body: <input onChange={this.update('body')}
                          type="text"
                          value={this.state.body} />
          </label>
          <button className="create-button">Create Todo!</button>
        </form>
      </div>
    );
  }
}