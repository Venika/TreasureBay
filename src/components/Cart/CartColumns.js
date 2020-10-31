import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">name of products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">total</p>
                </div>
            </div>
            
        </div>
    )
}
