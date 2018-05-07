/**
 * Copyright (c) 2017-present, blockcollider.org developers, All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import React, { Component } from 'react'

import Brand from './Brand'
import ConnectionState from './ConnectionState'

const STYLE = {
  color: 'black'
}

export class Navbar extends Component<*> {
  render () {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <Brand>
          <ConnectionState style={{marginLeft: '10px'}} connected={this.props.connected} type='dot' />
        </Brand>
        <div className='collapse navbar-collapse' id='navbarText'>
          { false && <a className='nav-link' href='/#/miner' style={STYLE}>
            <i className='fas fa-user' /> Profile
          </a> }

          <a className='nav-item nav-link active' href='/#/blocks/latest' style={STYLE}>BC Chain</a>
          <a className='nav-item nav-link' href='/#/miner' style={STYLE}>Miner</a>
          <a className='nav-item nav-link' href='/#/rover' style={STYLE}>Rover</a>
          <a className='nav-item nav-link' href='/#/peers' style={STYLE}>Peers</a>
        </div>
      </nav>
    )
  }
}

export default Navbar
