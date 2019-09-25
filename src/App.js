import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addStuff, removeStuff } from "./actions";
import { connect } from 'react-redux';





const App = props => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   //data
  //   store: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeItem = item => {
    console.log('remove', item);
    
    // dispatch an action here to remove an item
    props.removeStuff(item);
    // props.totalUpdate(item);
  };

  const buyItem = item => {

    console.log('buyItem app.js item ', item);
    props.addStuff(item);
    // props.totalUpdate(item);
    // dipsatch an action here to add an item
  };

  
  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}/> 
        <Total/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state from MSTP app.js', state)
  return {
    state: state
  };
};

// export default App;


export default connect( mapStateToProps, { addStuff, removeStuff })(App);