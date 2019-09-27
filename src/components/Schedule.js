import React, { Component } from 'react'
import {Sample} from './LoadRoutes'
import AlwaysInBundle from './AlwaysInBundle';

export default class Schedule extends Component {
  render() {
    return (
      <div>
       <h1> Schedule </h1>
        <Sample />
        <AlwaysInBundle />
      </div>
    )
  }
}
