import React, {Component} from 'react';
import TodoList from './components/TodoList/';



class App extends Component {
  render() {
    return(
      <div>
       <h1>ToDo list</h1>
       <TodoList/>
        
      </div>
    )
  }
}


export default App;