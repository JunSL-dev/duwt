import React, { Component, Fragment } from 'react';
import Navigation from './components/navigation/navigation'
import WorkStation from './components/workStation/workStation'

import './css/app.css'

class App extends Component {

  state = {
    workStation : "Cards"
  }

  onNaviChange = (e) => {
      this.setState({
        workStation : e.target.title
      })
  }

  render() {
    const {workStation} = this.state

    return (
      <Fragment>
        <div id='filter'></div>
        <Navigation 
          onChange={this.onNaviChange}
        />
        <WorkStation
          workStation={workStation}
        />
      </Fragment>
    );
  }
}

export default App;
