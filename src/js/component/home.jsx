import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="row">
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
						<Card 
							title='Susan Robinson' 
							email='susan.robinson@example.com'
							imageURL={'https://randomuser.me/api/portraits/women/1.jpg'}
							imageAlt={'Photo Susan Robinson'}
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
						<Card 
							title='Derrick Howell' 
							email='derrick.howell@example.com'
							imageURL={'https://randomuser.me/api/portraits/men/45.jpg'}
							imageAlt={'Photo Derrick Howell'}
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
						<Card 
						title='Fernando Carroll' 
						email='fernando.carroll@example.com'
						imageURL={'https://randomuser.me/api/portraits/men/63.jpg'}
						imageAlt={'Photo Fernando Carroll'}
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
						<Card 
							title='Ethan Clark' 
							email='ethan.clark@example.com'
							imageURL={'https://randomuser.me/api/portraits/men/64.jpg'}
							imageAlt={'Photo Ethan Clark'}
						/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
