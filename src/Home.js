import React from 'react';
import web from '../src/images/coupons.svg'
import Common from './common';

const Home = () => {

    return (
        <>
           <Common name="Get Deals and Coupons on your favourite products at lowest prices on " imgsrc={web} visit="/service" btnname="Get Started"/>
        </>
    );
};

export default Home;