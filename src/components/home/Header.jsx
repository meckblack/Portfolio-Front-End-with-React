import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <header id="gtco-header" className="gtco-cover" role="banner" style="background-image:url(images/img_bg_1.jpg);">
            <div className="overlay"></div>
            <div className="gtco-container">
                <div className="row">
                    <div className="col-md-12 col-md-offset-0 text-left">
                        <div className="display-t">
                            <div className="display-tc">
                                <h1 className="animate-box" data-animate-effect="fadeInUp">Your Business To The Next Level</h1>
                                <h2 className="animate-box" data-animate-effect="fadeInUp">Free HTML5 Bootstrap Templates Made <em>by</em> <a href="http://gettemplates.co/" target="_blank">GetTemplates.co</a></h2>
                                <p className="animate-box" data-animate-effect="fadeInUp"><a href="#" className="btn btn-white btn-lg btn-outline">Get In Touch</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        );
    }
}