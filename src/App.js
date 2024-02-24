import React from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import Carousel from './components/carousel/Carousel';
import Home from './components/Routing/Home';
import AboutUs from './components/Routing/AboutUs';
import Careers from './components/Routing/Careers';
import ContactUs from './components/Routing/ContactUs';
import NotFound from './components/Routing/NotFound';
import { myInterceptor1, requestStartedInterceptor, responseReceivedInterceptor } from './utils/MyInterceptor1';
import { Route, Routes } from 'react-router-dom';

export default function App(props) {

  myInterceptor1();
  // requestStartedInterceptor();
  // responseReceivedInterceptor();

  return <div>
    {/* <Header /> */}
    <Navbar />
    {/* <Categories/> */}
    {/* <Carousel /> */}
    <Main name={props.name} />
    <Footer />
  </div>
}
