import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Home.css';
import '../Landing Assets/css/style.css';
import Header from '../home/Header';

export default class Home extends Component {
    render() {
        return (
            
           <div>
                <nav className="gtco-nav" role="navigation">
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 text-right gtco-contact">
                                <ul className="">
                                    <li><a href="#"><i className="ti-mobile"></i> +1 (0)123 456 7890 </a></li>
                                    <li><a href="http://twitter.com/gettemplatesco"><i className="ti-twitter-alt"></i> </a></li>
                                    <li><a href="#"><i className="icon-mail2"></i></a></li>
                                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <div id="gtco-logo"><a href="index.html">Aesthetic <em>.</em></a></div>
                            </div>
                            <div className="col-xs-8 text-right menu-1">
                                <ul>
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="has-dropdown">
                                        <a href="services.html">Services</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Web Design</a></li>
                                            <li><a href="#">eCommerce</a></li>
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">API</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">Dropdown</a>
                                        <ul className="dropdown">
                                            <li><a href="#">HTML5</a></li>
                                            <li><a href="#">CSS3</a></li>
                                            <li><a href="#">Sass</a></li>
                                            <li><a href="#">jQuery</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <Header />

            </div>
        
        );
    }
}