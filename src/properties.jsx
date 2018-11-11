import React from 'react';
import axios from 'axios';
import PropertyCard from './propertyCard';

const errMsg = 'Server error. Please try again later!';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      anError: false,
    };

    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    axios.get('http://localhost:3000/api/v1/PropertyListing/', this.state.properties, this.state.anError)
      .then(({ data: properties }) => this.setState({ properties }))
      .catch(() => {
        this.setState({
          anError: true,
        });
        alert(errMsg);
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', { nextProps, nextState });
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', { nextProps, nextState });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', { prevProps, prevState });
  }

  render() {
    return (
      <React.Fragment>
        <h1>View Properties</h1>

        {this.state.properties.map(property => (
          <PropertyCard
            key={property._id}
            title={property.title}
            type={property.type}
            city={property.city}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            price={property.price}
            email={property.email}
          // key={property._id} {...property}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Properties;
// const Properties = () => (
//   <React.Fragment>
//     <h1>View Properties</h1>
//     <PropertyCard />
//   </React.Fragment>
// );
