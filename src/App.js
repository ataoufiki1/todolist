import React, { Component } from 'react';
import Todoitems from './components/Todoitems/Todoitems';
import Additem from './components/Additem/Additem'

class App extends Component{

  state = {
    items : [
      {id:1,name:'amine',age:36},
      {id:2,name:'Aurelien',age:24},
      {id:3,name:'mohemed',age:22}
  ]
}

deleteItem = (id) => {
  console.log(id);
}  

  render() {
return (
    <div className="App">
      <Additem />
    <Todoitems items={this.state.items} deleteItem ={this.deleteItem()} />
    Test
    </div>
  );
}


}


export default App;
