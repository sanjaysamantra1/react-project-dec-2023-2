import React from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import Carousel from './components/carousel/Carousel';

export default function App(props) {
  console.log('I am App Component')
  return <div>
    {/* <Header /> */}
    <Navbar />
    {/* <Categories/> */}
    {/* <Carousel /> */}
    <Main name={props.name} />
    <Footer />
  </div>
}
