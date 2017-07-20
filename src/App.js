import React from 'react';
import NavLink from './components/NavLink'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> React Router Tutorial</h1>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex={true}>首页/工作台</NavLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/repos" >Repos</NavLink></li>

          {/* add some links */}
          <li><NavLink to="/shops" >店铺管理-shops</NavLink></li>
          <li><NavLink to="/goods" >商品管理-goods</NavLink></li>
          <li><NavLink to="/orders" >订单管理-orders</NavLink></li>
          <li><NavLink to="/stocks" >库存管理-stocks</NavLink></li>
          <li><NavLink to="/customer" >客户管理-customer</NavLink></li>
          <li><NavLink to="/assets" >资产管理-assets</NavLink></li>
          <li><NavLink to="/app" >应用插件-app</NavLink></li>
          <li><NavLink to="/data" >数据分析-data</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
