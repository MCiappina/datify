import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SongInput from './SongInput';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className='w-100 d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
					<Link to='/match' className='btn btn-primary' type='button'>
						Dê um Match
					</Link>
					<SongInput />
				</div>
				<footer></footer>
			</div>
		);
	}
}