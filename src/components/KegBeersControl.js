import React from 'react';
import NewKegBeerForm from './NewKegBeerForm';
import KegBeerList from './KegBeerList';

class KegBeersControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegBeerList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegBeerToList = (newKegBeer)=>{
    const newMasterKegBeerList=this.state.masterKegBeerList.concat(newKegBeer);
    this.setState({
      masterKegBeerList: newMasterKegBeerList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegBeerForm onNewKegBeerCreation={this.handleAddingNewKegBeerToList} />
      buttonText = "Return to Keg Beer List";
    } else {
      currentlyVisibleState = <KegBeerList kegBeerList={this.state.masterKegBeerList} />
      buttonText = "Add Keg Beer";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )

  }
}

export default KegBeersControl;