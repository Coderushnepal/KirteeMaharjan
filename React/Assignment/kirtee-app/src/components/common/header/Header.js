import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '.././../../constants/routes';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="header__top">
						<ul className="nav">
							<li>
								<Link to={routes.HOME} title="home">
									Home
								</Link>
                            </li> 
                            <li>   
								<Link to={routes.FAVOURITES} title="favourites">
									Favourites
								</Link>
							</li>
						</ul>
					</div>
                    <div className="header__bottom">
                        <h1>The Beer Bank</h1>
                        <span>Find your favourite beer</span>
                        <form>
                            <input type="search" placeholder="Search beer name"/>
                        </form>

                    </div>
				</div>
			</header>
		);
	}
}

export default Header;
