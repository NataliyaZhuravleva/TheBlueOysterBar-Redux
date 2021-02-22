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
      console.log(this.props.selectedKegBeer);
      const action =b.selectedKegBeer(this.props.selectedKegBeer);
      dispatch(action);
    } else {
      //console.log(this.props.selectedKegBeer);
      const action2 = b.toggleForm();
      dispatch(action2);
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
    const selectedKegBeer1 = this.props.masterKegBeerList[id];
    console.log(selectedKegBeer1);
    const action = b.selectedKegBeer(selectedKegBeer1);
    console.log(action);
    dispatch(action);
    console.log(action);
  }

  //Delete
  handleDeletingKegBeer = (id) => {
    const { dispatch } = this.props;
    const action = b.deleteKegBeer(id);
    dispatch(action);
    const action2 = b.selectedKegBeer(null);
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
    const action3 = b.selectedKegBeer(null);
    dispatch(action3);
    
  }

  handleSellClick = (id) => {
    //const {dispatch} = this.props;
    const kegBeerToSell = this.state.masterKegBeerList.filter(kegBeer => kegBeer.id === this.state.selectedKegBeer.id)[0];
    if (kegBeerToSell.pintsLeft > 0) {
      kegBeerToSell.pintsLeft--;
    }
    const editedKegBeerList = this.state.masterKegBeerList.filter(kegBeer => KegBeer.id !== id);
    this.setState({
      masterKegBeerList: editedKegBeerList,
      editing: false,
      selectedKegBeer: kegBeerToSell
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyVisibleState = <EditKegBeerForm kegBeer={this.props.selectedKegBeer} onEditKegBeer={this.handleEditingKegBeerInList} />
      buttonText = "Return to Keg Beers List";
    } else if (this.props.selectedKegBeer != null) {
      console.log(this.props.selectedKegBeer);
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
  selectedKegBeer: PropTypes.object
};

const mapStateToProps = state =>{
  return {
    masterKegBeerList: state.masterKegBeerList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedKegBeer: state.selectedKegBeer,
  }
}

KegBeersControl = connect(mapStateToProps)(KegBeersControl);

export default KegBeersControl;