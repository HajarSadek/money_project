import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import Table from './Table';
import _ from 'lodash';

import Title from './Title';
import axios from 'axios';


export class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      submittingState: "",
      data: [],
    };
  }

  handleInputChange = ({ target: { name, value, type, checked } }) => {
    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
  };

  handleSubmitForm = async (e) => {
    this.setState({ submittingState: 'submitted' });
    const result = await axios.get('/smym-data.json');
    const orderedData = _.sortBy(result.data, 'ROI', 'asc');
    this.setState({ data: orderedData });
  }

    render() {
        return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Title />
      <Header />
      <main role="main" className="inner cover">
        <h1 className="cover-heading title-h1">Do you want to <span class="invest">invest</span>?</h1>
        <h1 className="cover-heading title-h3">How much money do you want to invest?</h1>
        <div className="input-group mb-3 input-bar">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={this.handleInputChange}/>
        </div>
        <p className="lead">
          <button className="btn btn-lg btn-secondary" onClick={this.handleSubmitForm}>Find investment options</button>
        </p>  
    <Table data={this.state.data}/>
      </main>
      <Footer />
      </div>
        )
    }
}

export default MainForm;
