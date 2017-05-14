import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    }
  }
  handleClick = (e) => {
    console.log('click ', e)
    history.push('/' + e.key)
    console.log(history)
    // createBrowserHistory().push('/' + e.key)
    this.setState({
      current: e.key,
    })
  }
  render() {
    return (
        <div className="App">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              Navigation Four - Link
            </Menu.Item>
          </Menu>
          <div>
            {/*<Route exact path='/' component={Home}/>*/}
          </div>
        </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)