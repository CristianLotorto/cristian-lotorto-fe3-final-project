import React from 'react'
import './loader.css';

const Loader = () => {
  return (
    <div className='loader-body'>
        <div className="hexagon" aria-label="Animated hexagonal ripples">
        	<div className="hexagon__group">
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        	</div>
        	<div className="hexagon__group">
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        	</div>
        	<div className="hexagon__group">
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        	</div>
        	<div className="hexagon__group">
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        	</div>
        	<div className="hexagon__group">
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        	</div>
        	<div className="hexagon__group">
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        		<div className="hexagon__sector"></div>
        	</div>
        </div>
        <p aria-label="Loading">Loading</p>
    </div>
  )
}

export default Loader;