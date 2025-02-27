import React, { Component } from 'react';

export class Table extends Component {
    
    render() {
        
        if (this.props.data.length === 0) {
            return null;
        }     
        return (
           
<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Rate</th>
      <th scope="col">Info</th>
    </tr>
  </thead>
  <tbody>
   {this.props.data.map(item => <tr key={item.ID}>
        <th scope="row">{item.Name}</th>
        <th scope="row">{item.ROI}%</th>
        <th scope="row"><a href={item.Link}>link</a></th>
      </tr>)}
  </tbody>
</table>
        )
    }
}

export default Table
