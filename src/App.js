import ChlidComponent from './component/ChildComponent';
import React from 'react';
import './App.css';

class ParentComponent extends React.Component{
render(){
  return (
    <div className='App'>
    <h1>Parent Component</h1>
    <p>Parent Component Data Pass to Child Component</p>
      <ChlidComponent name='mouni'  age={28}/>
    </div>
  )
}
}

export default ParentComponent;
