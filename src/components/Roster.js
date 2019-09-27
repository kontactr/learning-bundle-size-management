

import React, { Component } from 'react'

export default class Roster extends Component {

  state = {
    Component: null
  }

  render() {
    const {Component} = this.state;
    return (
      <div>
        {Component ? <Component /> : <div>Loading.....</div>}
      </div>
    )
  }

  async componentDidMount(){
    try{
    let Component = await import("./InternalWayLoad")

    this.setState((state) => {
      return {
        Component: Component.default
      }
    })
  }catch(e){
    console.log(e , 30)
  } }
}



