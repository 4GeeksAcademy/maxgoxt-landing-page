import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./jubotron";
import Card from "./cards";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<div><NavBar/></div>
				<Jumbotron/>
			<div className="row px-5 d-flex justify-content-around">
				<Card/><Card/><Card/><Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
