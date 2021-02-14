import React from 'react';
import NewKegBeerForm from './NewKegBeerForm';
import KegBeerList from './KegBeerList';
import KegBeerDetail from './KegBeerDetail';

class KegBeersControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegBeerList: [],
      selectedKegBeer: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKegBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKegBeer: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  handleAddingNewKegBeerToList = (newKegBeer) => {
    const newMasterKegBeerList = this.state.masterKegBeerList.concat(newKegBeer);
    this.setState({
      masterKegBeerList: newMasterKegBeerList,
      formVisibleOnPage: false
    });
  }
handleChangingSelectedKegBeer= (id) => {
  const selectedKegBeer = this.state.masterKegBeerList.filter(kegBeer=>kegBeer.id === id )[0];
  this.setState({selectedKegBeer: selectedKegBeer});
}

handleDeletingKegBeer = (id) => {
  const newMasterKegBeerList = this.state.masterKegBeerList.filter(kegBeer => kegBeer.id !== id);
  this.setState({
    masterKegBeerList: newMasterKegBeerList,
    selectedKegBeer: null
  });
}

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKegBeer != null) {
      currentlyVisibleState = <KegBeerDetail kegBeer={this.state.selectedKegBeer} onClickingDelete = {this.handleDeletingKegBeer} />
      buttonText = "Return to Keg Beer List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegBeerForm onNewKegBeerCreation={this.handleAddingNewKegBeerToList} />
      buttonText = "Return to Keg Beer List";
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

export default KegBeersControl;