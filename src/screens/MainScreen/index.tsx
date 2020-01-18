import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {NavBar, MealTiketList} from '../../components';


class MainScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      mealTikets: [],
    };
  }

  render() {
    const {mealTikets} = this.state;

    return (
      <Router>
        <div className="App wrapper">
          <NavBar/>
          <MealTiketList mealTikets={mealTikets}/>
        </div>
      </Router>
    );
  }
}


export default MainScreen;
