import React from 'react';
import NewKegBeerForm from './NewKegBeerForm';
import KegBeerList from './KegBeerList';
import KegBeerDetail from './KegBeerDetail';
import EditKegBeerForm from './EditKegBeerForm';
import KegBeer from './KegBeer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as b from './../actions';

class KegBeersControl extends React.Component {

  handleClick = () => {
    const {dispatch} = this.props;
    if (this.props.selectedKegBeer != null) {
      if (this.props.formVisibleOnPage){
        const action = b.toggleForm();
        dispatch(action);
      }
      const action2 =b.deselectKegBeer();
      dispatch(action2);
      if (this.props.editing){
        const action3 = b.editing();
        dispatch(action3);
      }
    } else {
      const action4 = b.toggleForm();
      dispatch(action4);
    }
  }

  //Create
  handleAddingNewKegBeerToList = (newKegBeer) => {
    const { dispatch } = this.props;
    const action = b.addKegBeer(newKegBeer);
    dispatch(action);
    const action2 = b.toggleForm();
    dispatch(action2);
  }

  //Details
  handleChangingSelectedKegBeer = (id) => {
    const {dispatch} = this.props;
    const selectedKegBeer = this.props.masterKegBeerList[id];
    const action = b.selectedKegBeer(selectedKegBeer);
    dispatch(action);
    
  }

  //Delete
  handleDeletingKegBeer = (id) => {
    const { dispatch } = this.props;
    const action = b.deleteKegBeer(id);
    dispatch(action);
    const action2 = b.deselectKegBeer();
    dispatch(action2);
  }

  //Edit
  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = b.editing();
    dispatch(action);
  }

  handleEditingKegBeerInList = (kegBeerToEdit) => {
    const { dispatch } = this.props;
    const action = b.addKegBeer(kegBeerToEdit);
    dispatch(action);
    const action2 = b.editing();
    dispatch(action2);
    const action3 = b.deselectKegBeer();
    dispatch(action3);
    
  }

  handleSellClick = (id) => {
    const {dispatch} = this.props;
    const kegBeerToSell = this.props.selectedKegBeer;
    if (kegBeerToSell.pintsLeft > 0) {
     
      const action = b.pintsLeft(kegBeerToSell);
      dispatch(action);
    
    }
    const action2 = b.deleteKegBeer(id);
    dispatch(action2);
    const action3 = b.addKegBeer(kegBeerToSell);
    dispatch(action3);
    const action4 = b.selectedKegBeer(kegBeerToSell);
    dispatch(action4);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyVisibleState = <EditKegBeerForm kegBeer={this.props.selectedKegBeer} onEditKegBeer={this.handleEditingKegBeerInList} />
      buttonText = "Return to Keg Beers List";
    } else if (this.props.selectedKegBeer != null) {
      
      currentlyVisibleState =
        <KegBeerDetail
          kegBeer={this.props.selectedKegBeer}
          onClickingDelete={this.handleDeletingKegBeer}
          onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleSellClick} />
      buttonText = "Return to Keg Beers List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegBeerForm onNewKegBeerCreation={this.handleAddingNewKegBeerToList} />
      buttonText = "Return to Keg Beers List";
    } else {
      currentlyVisibleState = <KegBeerList kegBeerList={this.props.masterKegBeerList} onKegBeerSelection={this.handleChangingSelectedKegBeer} />
      buttonText = "Add Keg Beer";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegBeersControl.propTypes = {
  masterKegBeerList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing:PropTypes.bool,
  selectedKegBeer: PropTypes.object,
  //pintsLeft: PropTypes.object
};

const mapStateToProps = state =>{
  return {
    masterKegBeerList: state.masterKegBeerList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedKegBeer: state.selectedKegBeer,
    //pintsLeft: state.selectedKegBeer
  }
}

KegBeersControl = connect(mapStateToProps)(KegBeersControl);

export default KegBeersControl;