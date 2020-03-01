import React, {Component} from 'react';
import {
  Jumbotron, 
  InputGroup, 
  Input, 
  Button,
} from 'reactstrap';

import {AuthAPI} from '../../apis';
import {NavigationService, LocalStorageService} from '../../services';


class LoginScreen extends Component {

  constructor(props: any) {
    super(props);

    this.onPressLogin = this.onPressLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }

  onChangeUsername(e: any) {
    const username = e.target.value;
    this.setState({username: username});
  }

  onChangePassword(e: any) {
    const password = e.target.value;
    this.setState({password: password});
  }

  async onPressLogin() {
    try {
      const {username, password}: any = this.state;
      const params = {
        username: username,
        password: password,
      };
  
      const {response, json}: any = await AuthAPI.login(params);

      if (response.ok) {
        LocalStorageService.setAccessToken(json.accessToken);
        NavigationService.navigate('/');
      } else {
        alert('로그인 실패');
      }      
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const {username, password}: any = this.state;

    return (
      <div className="container">
        <br/>
        <Jumbotron>
          <h3>로그인</h3>
          <br/>
          <InputGroup>
            <Input 
              placeholder="본명을 입력해주세요." 
              value={username} 
              onChange={this.onChangeUsername}
            />
          </InputGroup>
          <br/>
          <InputGroup>
            <Input 
              placeholder="password" 
              value={password} 
              min={0} 
              max={100} 
              type="password" 
              onChange={this.onChangePassword}
            />
          </InputGroup>
          <br/>
          <Button color="primary" onClick={this.onPressLogin}>로그인</Button>
        </Jumbotron>
    </div>
    );
  }
}


export default LoginScreen;
