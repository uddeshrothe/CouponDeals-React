// import React, { Component } from "react";

// import UserService from "../services/user.service";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     UserService.getPublicContent().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );
//   }

//   render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//           <h3>{this.state.content}</h3>
//         </header>
//       </div>
//     );
//   }
// }

import React from 'react';
import web from './images/coupons.svg'
import Common from './common';

const Home = () => {

    return (
        <>
           <Common name="Get Deals and Coupons on your favourite products at lowest prices on " imgsrc={web} visit="/service" btnname="Get Started"/>
        </>
    );
};

export default Home;