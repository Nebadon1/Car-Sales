import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';


const AdditionalFeatures = props => {
  console.log("props from AditionalFEatures", props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("MSTP form AditionalFeatures", state)
  return {
    store: state.car.store

  }
}


  // export default AdditionalFeatures;
  export default connect(mapStateToProps, {})(AdditionalFeatures);
