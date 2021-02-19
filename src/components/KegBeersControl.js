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

  constructor(props) {
    super(props);
    this.state = {
      selectedKegBeer: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKegBeer != null) {
      this.setState({
        selectedKegBeer: null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = b.toggleForm();
      dispatch(action);
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
    const selectedKegBeer = this.props.masterKegBeerList[id];
    this.setState({ selectedKegBeer: selectedKegBeer });
  }

  //Delete
  handleDeletingKegBeer = (id) => {
    const { dispatch } = this.props;
    const action = b.deleteKegBeer(id);
    dispatch(action);
    this.setState({selectedKegBeer: null});
  }

  //Edit
  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegBeerInList = (kegBeerToEdit) => {
    const { dispatch } = this.props;
    const action = b.addKegBeer(kegBeerToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKegBeer: null
    });
  }

  handleSellClick = (id) => {
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

    if (this.state.editing) {
      currentlyVisibleState = <EditKegBeerForm kegBeer={this.state.selectedKegBeer} onEditKegBeer={this.handleEditingKegBeerInList} />
      buttonText = "Return to Keg Beers List";
    } else if (this.state.selectedKegBeer != null) {
      currentlyVisibleState =
        <KegBeerDetail
          kegBeer={this.state.selectedKegBeer}
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
};

const mapStateToProps = state =>{
  return {
    masterKegBeerList: state.masterKegBeerList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
  }
}

KegBeersControl = connect(mapStateToProps)(KegBeersControl);

export default KegBeersControl;