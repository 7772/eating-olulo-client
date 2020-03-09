import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {NavBar, MealTiketList, StoreList} from '../../components';
import {MealTiketsAPI, StoresAPI, UserAPI} from '../../apis';
import {LocalStorageService, NavigationService} from '../../services';


class MainScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.getStoreList = this.getStoreList.bind(this);

    this.state = {
      stores: [],
      mealTikets: [],
    };
  }

  componentDidMount() {
    this.checkAccessToken();
  }

  checkAccessToken() {
    if (!LocalStorageService.hasAccessToken()) {
      NavigationService.navigate('/login');
    } else {
      this.requestSession();
    }
  }

  async requestSession() {
    try {
     const {response, json} = await UserAPI.me();

      if (response.ok) {
        this.getStoreList();
        this.getMealTiketList();
      } else {
        alert('다시 로그인해주세요.');
        NavigationService.navigate('/login');
      } 
    } catch (error) {
      alert(error.message);  
    }
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
      const {response, json}: any = await MealTiketsAPI.getList();

      if (response.ok) {
        this.setState({mealTikets: json.mealTikets});
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
          <StoreList stores={stores}/>
          <MealTiketList mealTikets={mealTikets}/>
        </div>
      </Router>
    );
  }
}


export default MainScreen;
