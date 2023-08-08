import React from "react";

const Card = () => {
    return (
        <div className="card col-3 container p-0 mb-5" style={{width: '18rem'}}>
            <img src="https://i.pinimg.com/236x/cc/c4/06/ccc406dbafc09f3ac2f066a494af21e7.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-primary">Find Out More!</button>
            </div>
        </div>
    )
}

export default Card;