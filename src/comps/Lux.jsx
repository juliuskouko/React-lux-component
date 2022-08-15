import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Plan from './Plan'
import Slider from './Slider'

export default class Lux extends Component {
  render() {
    return (
        <>
            <Navbar/>
            <Slider/>
            <Plan/>
            <Footer/>
        </>
    )
  }
}
