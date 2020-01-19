import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {NavBar, MealTiketList} from '../../components';
import {MealTiketsAPI, StoresAPI} from '../../apis';


class MainScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      stores: [],
      mealTikets: [],
    };
  }

  componentDidMount() {
    this.getStoreList();
    this.getMealTiketList();
  }

  async getStoreList() {
    try {
      const {response, json}: any = await StoresAPI.getList();

      if (response.ok) {
        this.setState({stores: json.stores});
      } else {
        // TODO: 401, 422 or some error
      }
    } catch (error) {
      alert(error.message);  
    }
  }

  async getMealTiketList() {
    try {
      const result: any = await MealTiketsAPI.getList();
      
      if (result.response.ok) {
        this.setState({mealTikets: result.json.mealTikets});
      } else {
        // TODO: 401, 422 or some error
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const {stores, mealTikets} = this.state;
    
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
