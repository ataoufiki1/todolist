import React from 'react';
import './Todoitems.css';
const Todoitems = (props) => {

  const {items} = props;

  const data = items.map(item => {
    return (
      <div Key={item.id}>
        <span>{item.name}</span>
        <span>&times;</span>
      </div>
    )

  })
  return (
    <div className='ListItems'>
      <div>
        <span>Name</span>
        <span>Action</span>
        
      </div>
      {data}
    </div>
  )
}

export default Todoitems