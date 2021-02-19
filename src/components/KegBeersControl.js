import React from 'react';
import NewKegBeerForm from './NewKegBeerForm';
import KegBeerList from './KegBeerList';
import KegBeerDetail from './KegBeerDetail';
import EditKegBeerForm from './EditKegBeerForm';
import KegBeer from './KegBeer';
import { connect } from 'react-redux';

class KegBeersControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKegBeer: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKegBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKegBeer: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  //Create
  handleAddingNewKegBeerToList = (newKegBeer) => {
    const {dispatch} = this.props;
    const { name, brand, price, alcoholContent, id } = newKegBeer;
    const action = {
      type: 'ADD_KEGBEER',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  //Details
  handleChangingSelectedKegBeer = (id) => {
    const selectedKegBeer = this.state.masterKegBeerList.filter(kegBeer => kegBeer.id === id)[0];
    this.setState({ selectedKegBeer: selectedKegBeer });
  }

  //Delete
  handleDeletingKegBeer = (id) => {
    const newMasterKegBeerList = this.state.masterKegBeerList.filter(kegBeer => kegBeer.id !== id);
    this.setState({
      masterKegBeerList: newMasterKegBeerList,
      selectedKegBeer: null
    });
  }

  //Edit
  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegBeerInList = (kegBeerToEdit) => {
    const editedMasterKegBeerList = this.state.masterKegBeerList
      .filter(kegBeer => kegBeer.id !== this.state.selectedKegBeer.id)
      .concat(kegBeerToEdit);
    this.setState({
      masterKegBeerList: editedMasterKegBeerList,
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegBeerForm onNewKegBeerCreation={this.handleAddingNewKegBeerToList} />
      buttonText = "Return to Keg Beers List";
    } else {
      currentlyVisibleState = <KegBeerList kegBeerList={this.state.masterKegBeerList} onKegBeerSelection={this.handleChangingSelectedKegBeer} />
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
KegBeersControl = connect()(KegBeersControl);
export default KegBeersControl;