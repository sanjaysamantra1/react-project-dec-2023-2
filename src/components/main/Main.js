import React from 'react';
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore } from "react-icons/fa";
import Increment from '../increment/Increment';
import EvenOdd from '../EvenOdd/EvenOdd';
import ConditionalDemo1 from '../conditional/ConditionalDemo1';
import ConditionalDemo2 from '../conditional/ConditionalDemo2';
import ConditionalDemo3 from '../conditional/ConditionalDemo3';
import DatabindingDemo1 from '../demo/DatabindingDemo1';
import ListDemo1 from '../listItem/ListDemo1';
import ListDemo2 from '../listItem/ListDemo2';
import ListDemo3 from '../listItem/ListDemo3';
import Courses from '../listItem/Courses';
import UserList from '../listItem/UserList';
import CountryList from '../listItem/CountryList';
import CounterDemo1 from '../state/CounterDemo1';
import CounterDemo2 from '../state/CounterDemo2';
import CounterDemo3 from '../state/CounterDemo3';
import GreetDemo1 from '../props/GreetDemo1';
import Addition from '../demo/Addition';
import MyModal from '../demo/MyModal';
import StateDemo1 from '../state/StateDemo1';
import ToggleDemo1 from '../state/ToggleDemo1';
import ToggleDemo2 from '../state/ToggleDemo2';
import PasswordDemo1 from '../state/PasswordDemo1';
import RemainingCharacter from '../state/RemainingCharacter';
import StateDropDown from '../state/StateDropDown';
import Folder from '../FolderExplorer/Folder';
import folderData from '../FolderExplorer/folderData.json'
import SweetAlertDemo from '../demo/SweetAlertDemo';
import ReactModalDemo from '../demo/ReactModalDemo';
import ProductList from '../listItem/ProductList';
import ToDoCRUD from '../ToDoCRUD/ToDoCRUD';
import EventDemo1 from '../Event/EventDemo1';
import EventDemo2 from '../Event/EventDemo2';
import EventDemo3 from '../Event/EventDemo3';
import EventDemo4 from '../Event/EventDemo4';
import EventDemo5 from '../Event/EventDemo5';
import EmployeeCrud from '../EmployeeCRUD/EmployeeCrud';
import ThemeDemo from '../state/ThemeDemo';
import PureDemo1 from '../state/PureDemo1';
import PureDemo2 from '../state/PureDemo2';
import MemoParent from '../memo/MemoParent';
import LifeCycleDemo1 from '../LifeCycle/LifeCycleDemo1';
import LifeCycleDemo2 from '../LifeCycle/LifeCycleDemo2';
import LifeCycleDemo3 from '../LifeCycle/LifeCycleDemo3';
import LifeCycleDemo4 from '../LifeCycle/LifeCycleDemo4';
import RefDemo1 from '../Form/RefDemo1';
import RefDemo2 from '../Form/RefDemo2';
import FormDemo1 from '../Form/FormDemo1';
import FormDemo2 from '../Form/FormDemo2';
import FormDemo3 from '../Form/FormDemo3';
import HttpDemo1 from '../HTTP/HttpDemo1';
import HttpDemo2 from '../HTTP/HttpDemo2';
import HttpDemo3 from '../HTTP/HttpDemo3';
import HttpDemo4 from '../HTTP/HttpDemo4';
import HttpDemo5 from '../HTTP/HttpDemo5';
import ClickCounter from '../HOC/ClickCounter';
import HoverCounter from '../HOC/HoverCounter';
import { Route, Routes } from 'react-router-dom';
import Home from '../Routing/Home';
import AboutUs from '../Routing/AboutUs';
import Careers from '../Routing/Careers';
import ContactUs from '../Routing/ContactUs';
import NotFound from '../Routing/NotFound';
import Products from '../Routing/Products';
import ProductDetails from '../Routing/ProductDetails';
import Users from '../Routing/Users';
import UserDetails from '../Routing/UserDetails';

export default function Main(props) {
    return <div style={{ 'minHeight': '400px' }}>
        {/* <Increment/> */}
        {/* <EvenOdd /> */}
        {/* <ConditionalDemo1 /> */}
        {/* <ConditionalDemo2 /> */}
        {/* <ConditionalDemo3 /> */}
        {/* <DatabindingDemo1 /> */}
        {/* <ListDemo1 /> */}
        {/* <ListDemo2 /> */}
        {/* <ListDemo3 /> */}
        {/* <UserList /> */}
        {/* <CountryList /> */}
        {/* <CounterDemo1 /> */}
        {/* <CounterDemo2/> */}
        {/* <CounterDemo3 /> */}
        {/* <GreetDemo1 name='sanjay' msg='Good Morning'>
            <div>This content goes to child comp</div>
        </GreetDemo1> */}
        {/* <Addition num1={10} /> */}
        {/* <MyModal>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </MyModal> */}

        {/* <MyModal modalTitle={'This is My Title'} name={props.name}>
            <>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <td>sdfjk</td>
                            <td>sdfjk</td>
                            <td>sdfjk</td>
                        </tr>
                        <tr>
                            <td>sdfjk</td>
                            <td>sdfjk</td>
                            <td>sdfjk</td>
                        </tr>
                        <tr>
                            <td>sdfjk</td>
                            <td>sdfjk</td>
                            <td>sdfjk</td>
                        </tr>
                    </tbody>
                </table>
                <p>dsafkhjhj</p>
            </>
        </MyModal> */}

        {/* <StateDemo1 /> */}
        {/* <ToggleDemo1 /> */}
        {/* <ToggleDemo2 /> */}
        {/* <PasswordDemo1 /> */}
        {/* <RemainingCharacter /> */}
        {/* <StateDropDown /> */}
        {/* <Folder folderInfo={folderData} /> */}
        {/* <SweetAlertDemo /> */}
        {/* <ReactModalDemo /> */}
        {/* <ProductList /> */}
        {/* <ToDoCRUD /> */}
        {/* <EventDemo1 /> */}
        {/* <EventDemo2 /> */}
        {/* <EventDemo3 /> */}
        {/* <EventDemo4/> */}
        {/* <EventDemo5/> */}
        {/* <EmployeeCrud /> */}
        {/* <ThemeDemo /> */}
        {/* <PureDemo1 /> */}
        {/* <PureDemo2 /> */}
        {/* <MemoParent /> */}
        {/* <LifeCycleDemo1  /> */}
        {/* <LifeCycleDemo2 /> */}
        {/* <LifeCycleDemo3 /> */}
        {/* <LifeCycleDemo4 /> */}
        {/* <RefDemo1 /> */}
        {/* <RefDemo2 /> */}
        {/* <FormDemo1 /> */}
        {/* <FormDemo2 /> */}
        {/* <FormDemo3 /> */}
        {/* <HttpDemo1 /> */}
        {/* <HttpDemo2 /> */}
        {/* <HttpDemo3 /> */}
        {/* <HttpDemo4 /> */}
        {/* <HttpDemo5 /> */}
        {/* <ClickCounter />
        <HoverCounter /> */}

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/careers" element={<Careers />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/users" element={<Users />} />
            <Route path="/userdetails" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
}
