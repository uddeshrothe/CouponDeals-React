import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text"></p>
                        <NavLink to="/#" class="btn btn-warning">Buy Now</NavLink>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Card;