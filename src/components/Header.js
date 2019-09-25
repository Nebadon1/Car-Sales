import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  console.log("props form Header f(x)", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.imageOnProps} alt={props.nameOnProps} />
      </figure>
      <h2>{props.nameOnProps}</h2>
      <p>Amount: ${props.priceOnProps}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log("MSTP form Header", state)
  return {
   imageOnProps: state.car.image,
   priceOnProps: state.car.price,
   nameOnProps: state.car.name,


  }
}

// export default Header;
export default connect (mapStateToProps, {})(Header);
