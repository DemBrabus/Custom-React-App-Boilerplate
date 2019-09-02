//
// React Main App Component
//

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Styles/App.scss';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='GroundZero' id='GroundZero'>
                <nav className='Nav'>
                    <div className='Nav-Icon'></div>
                    <div className='Nav-Links'>
                        <a href='https://github.com/DemBrabus/Custom-React-App-Boilerplate' target='_blank' className='Nav-Link'>Github</a>
                        <a href='https://reactjs.org/' target='_blank' className='Nav-Link'>React Docs</a>
                    </div>
                </nav>
                <div className='Intro'>
                    <div className='Intro-Content'>
                        <h1 className='Intro-Title'>Custom React Apps</h1>
                        <p className='Intro-Text'>Create custom React apps with a highly configurable boilerplate</p>

                        <p className='Intro-SubText'>Tutorial coming soon..</p>
                    </div>
                </div>
            </div>
        )
    }
}
