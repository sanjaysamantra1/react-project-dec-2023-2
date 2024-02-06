import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './categories.css'

export default function Category({name,img}) {
    return <>
        <div className='col'>
            <div className='category text-center'>
                <img src={img} alt='some text' />
                <div>{name}</div>
            </div>
        </div>
    </>
}
/* export default class Category extends Component {
    render() {
        let { img, name } = this.props;
        return <div className='col'>
            <div className='category text-center'>
                <img src={img} alt='some text' />
                <div>{name}</div>
            </div>
        </div>
    }
} */
Category.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string.isRequired
}