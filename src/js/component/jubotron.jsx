import React from "react";

const Jumbotron = () => {
    return(
        <div className="jumbotron bg-light col-11 p-5 mb-4 mx-auto">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <a className="mb-5 btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
    )
}

export default Jumbotron;