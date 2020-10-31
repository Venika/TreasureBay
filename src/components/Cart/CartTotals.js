import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const{cartSubtotal, cartTax, cartTotal, clearCart} = value;

    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 ml-sm-5 ml-md-auto col sm-8 text-capitalize text-right">
                    <Link to="/"></Link>
                </div>
            </div>
        </div>

    </React.Fragment>
}
