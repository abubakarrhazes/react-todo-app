import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  //This functions add todo list to our App
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now,
        value: todoValue,
        isDone: false,
      };

      //JavaScript Spread Function to Invoke our state

      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: "",
      });
    }
  }

  //Delete Each Todo Using unique Id For Each Todo list

  deleteTodo(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  updateInput(input) {
    this.setState({
      newItem: input,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">REACT TODO APP</h1>
        <div className="container-fluid">
          <h4>Add items.......</h4>
          <br />
          <div className="col-md-6">
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder="Enter Task here"
              value={this.state.newItem}
              onChange={(e) => this.updateInput(e.target.value)}
            />
            <br />
            <button
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}
              className="btn btn-success"
            >
              Add Task
            </button>
            <div className="list">
              <ul>
                {this.state.list.map((item) => {
                  return (
                    <li key={item.id}>
                      <input
                        type="checkbox"
                        name="isDone"
                        checked={item.isDone}
                        onChange={() => {}}
                      />
                      {item.value}
                      <br />
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteTodo(item.id)}
                      >
                        Delete Todo
                      </button>
                      <table class="table table-dark" key={item.id}>
                        <thead>
                          <tr>
                            <th scope="col" type = "checkbox">id</th>
                            <th scope="col">Task</th>
                            <th scope="col">Delete Task</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td>{item.value}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => this.deleteTodo(item.id)}
                              >
                                Delete Todo
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                  );
                })}
                <li>
                  <input type="checkbox" name="" />
                  CODE FOR 3HRS LONG
                  <button className="btn btn-danger">Delete Todo</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
