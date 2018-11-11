import React from 'react';
import axios from 'axios';
import Alert from '../src/alert';

// const successMsg = 'Property added';
const errorMsg = () => {
  alert('Server error. Please try again later!');
};

const successMsg = function () {
  alert('Property successfully added!!');
};

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Property Type',
        bedrooms: 'bedrooms',
        bathrooms: 'bathrooms',
        city: 'City',
        price: 0,
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }


handleAddProperty = (event) => {
  event.preventDefault();
  // console.log(this.state.fields);
  this.setState({
    alertMessage: '',
    isSuccess: false,
    isError: false,
  });

  axios.post('http://localhost:3000/api/v1/PropertyListing', this.state.fields)
    .then(() => {
      this.setState({
        isSuccess: true,
        alertMessage: successMsg(),
      });
    })
    .catch(() => {
      this.setState({
        alertMessage: errorMsg(),
        isError: true,
      });
    });
};

handleFieldChange = (event) => {
  const fields = { ...this.state.fields };
  fields[event.target.name] = event.target.value;
  this.setState({ fields: fields });
};

render() {
  return (
    <div>
      <h1 className="addProperties">Add Properties</h1>
      <main>
        <form onSubmit={this.handleAddProperty}>
          <label id="formLines">Propery Title</label>
          <input
            className="propType"
            id="input"
            name="title"
            value={this.state.fields.title}
            onChange={this.handleFieldChange}
            type="text"
            placeholder="add property title"
          />

          <label id="formLines">Property Type</label>
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="select type">Select property type</option>
            <option value="Flat">Flat</option>
            <option value="Detatched">Detatched</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>

          <label>Bedrooms</label>
          <select name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange}>
            <option value="bedrooms">Select number of bedrooms</option>
            <option value="0">Studio</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
          </select>

          <label>Bathrooms</label>
          <select name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange}>
            <option value="bathrooms">Select number of bathrooms</option>
            <option value="1">1 Bathrooms</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
            <option value="4">4 Bathrooms</option>
          </select>

          <label>City</label>
          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange} id="customSelect">
            <option value="city">Select number of bedrooms</option>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>

          <label>Price</label>
          <input className="font" id="input" name="price" value={this.state.fields.price} onChange={this.handleFieldChange} type="number" />

          <button className="addButton" add="add">Add</button>

          <div className="alert success">
            {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
          </div>

          <div className="alert">
            {this.state.isError && <Alert message={this.state.alertMessage} />}
          </div>

        </form>
      </main>
    </div>
  );
}
}


export default AddProperty;
