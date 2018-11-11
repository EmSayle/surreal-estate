import React from 'react';


const PropertyCard = (props) => (
  <div className="card">
    <section className="image">image placeholder</section>
    <div className="title">title</div>
    <div className="type"><i className="fab fa-houzz" />{props.type}</div>
    <div className="bed"><i className="fas fa-bed" />{props.bedrooms}</div>
    <div className="bath"><i className="fas fa-bath" />{props.bathrooms}</div>
    <div className="city"><i className="fas fa-map-pin" />{props.city}</div>
    <div className="price"><i className="fas fa-dollar-sign" />{props.price}</div>
    <input type="submit" value="email enquiry" className="addButton2" />
  </div>
);

export default PropertyCard;
