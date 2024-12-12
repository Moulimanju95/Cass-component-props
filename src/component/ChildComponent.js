import React from 'react';

class ChlidComponent extends React.Component{
render(){
return(
<div>
    <h2>Child Component</h2>
    <p>Name: {this.props.name}</p>
    <p>Age: {this.props.age}</p>
</div>
)
}
}

export default ChlidComponent;