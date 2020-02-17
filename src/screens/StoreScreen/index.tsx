import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {NavBar} from '../../components';
import {StoresAPI} from '../../apis';
import {StoreList} from './components';


class StoreScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      stores: [],
    };
  }

  componentDidMount() {
    this.getStoreList();
  }

  async getStoreList() {
    try {
      const {response, json}: any = await StoresAPI.getList();

      if (response.ok) {
        this.setState({
          stores: json.stores
        });
      } else {
        // TODO: 401, 422 or some error
      }    
    } catch (error) {
      alert(error);      
    }
  }

  render() {
    const {stores} = this.state;

    return (
      <Router>
        <div>
          <NavBar/>
          <div className="container">
            <h1 style={{marginTop: 30, marginBottom: 30}}>상점 목록</h1>
            <StoreList stores={stores}/>
          </div>
        </div>
      </Router>
    );
  }
}


export default StoreScreen;
