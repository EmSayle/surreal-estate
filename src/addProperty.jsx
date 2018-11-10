import React from 'react';
import axios from 'axios';


class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        city: '',
        email: '',
        // title: '',
        // type: 'Flat',
        // city: 'Manchester',
        // bedrooms: 'studio',
        // bathrooms: '1',
        // price: '0',
      },
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }


handleAddProperty = (event) => {
  event.preventDefault();
  console.log(this.state.fields);
  axios.post('http://localhost:3000/api/v1/PropertyListing', this.state.fields)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

handleFieldChange = (event) => {
  const fields = { ...this.state.fields };
  fields[event.target.name] = event.target.value;
  this.setState({ fields: fields });
};

render() {
  return (
    <div className="addProperty">
      <div className="addProperties">Add Properties</div>
      <form onSubmit={this.handleAddProperty}>
        <input className="font" id="input" name="title" value={this.state.fields.title} onChange={this.handleFieldChange} type="text" />

        <div id="dropDown">
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detatched">Detatched</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>

        <div id="dropDown">
          {/* <label>City</label> */}
          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </div>

        <div id="dropDown">
          {/* <label>Bedrooms</label> */}
          <select name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange}>
            <option value="0">Studio</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
          </select>
        </div>

        <div id="dropDown">
          {/* <label>Bathrooms</label> */}
          <select name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange}>
            <option value="1">1 Bathrooms</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
          </select>
        </div>
        <div>
          {/* <label>Price</label> */}
          <input className="font" id="input" name="price" value={this.state.fields.price} onChange={this.handleFieldChange} type="number" />
        </div>
        <button className="addButton" add="add">Add</button>
      </form>
    </div>
  );
}
}


export default AddProperty;

// import React from 'react';

// const AddProperty = () => (
//   <React.Fragment>
//     Add Property
//   </React.Fragment>
// );

// export default AddProperty;
