import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('props from addedFeatures', props);
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.featureOnprops.length ? (
        <ol type="1">
          {props.featureOnprops.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={props.removeItem}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  console.log("MSTP form addeFeatures", state)
  return {

    featureOnprops: state.car.features

  }
}




// export default AddedFeatures;
export default connect (mapStateToProps, {})(AddedFeatures);