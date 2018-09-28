// Headerjs
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "Hi there and greetings!";
//   return greet;
// };

import React, { Component } from 'react'
import styles from './header.css';//导入

class Header extends Component{
    constructor(props){
        super(props)
        this.gologin = this.gologin.bind(this)
        this.showlogin = this.showlogin.bind(this)
        this.closelogin = this.closelogin.bind(this)
    }
    gologin(e){

    }
    showlogin(e){
        // console.log(e.target.parentNode.parentNode.childNodes[2])
        e.target.parentNode.parentNode.childNodes[2].style.visibility = 'visible'
    }
    closelogin(e){
        e.target.parentNode.parentNode.parentNode.style.visibility = 'hidden'
    }

      render() {
        return [
          <div className={styles.root}>
            <span className={styles.title}>网罗广财二手书</span>
              <span className={styles.entry}>
                  <a className={styles.login} onClick={this.showlogin}>登陆/注册</a>
                  <span>个人中心</span>
              </span>
              <div className={styles.loginwrapper}>
                  <form>
                      <div className={styles.logincontent}>
                          <a className={styles.closebtn} onClick={this.closelogin}>X</a>
                          <div className={styles.logintitle}>登陆</div>
                          <input type='text' placeholder='用户名'/>
                          <input type='password' placeholder='密码'/>
                          <span>注册账号</span>
                          <button onClick={this.gologin}>登  陆</button>
                      </div>
                  </form>
              </div>
          </div>
        ];
      }
}

export default Header