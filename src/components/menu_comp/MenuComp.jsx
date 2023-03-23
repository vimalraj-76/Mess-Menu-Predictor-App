// The program is a functional component named "MenuComp". It imports the necessary dependencies from React and other modules. It also imports the "MyContext" from a different component's file.
// In the component, it declares two states "images" and "currentIndex" using the "useState" hook from React. "images" state holds an array of image URLs, and "currentIndex" state holds the index of the current image being displayed.
// It uses the "useEffect" hook to set an interval timer that updates the "currentIndex" state every 2 seconds. This creates a slideshow effect of the images.
// Inside the return statement, it renders a div with a background image that changes dynamically. It also displays the menu data obtained from the context using a ternary operator that checks if the data exists. It displays a message to choose the options correctly to view the menu data if the data is not available.
// Finally, it renders a button that links to the homepage, and a credit message at the bottom of the page.

import React, { useState, useEffect, useContext} from 'react';
import './MenuComp.css';
import { Link } from 'react-router-dom';
import {MyContext} from '../menu_page/menu_form/MenuForm';
const MenuComp=()=>
{
  const { menuData } = useContext(MyContext);
    const [images, setImages] = useState([
        'https://www.bitsathy.ac.in/wp-content/gallery/academic-buildings/Academic%20Buildings12.jpg',
        'https://www.bitsathy.ac.in/wp-content/gallery/academic-buildings/Academic%20Buildings4.jpg',
        'https://www.bitsathy.ac.in/wp-content/gallery/cafeteria/Cafeteria1.jpg',
        'https://www.bitsathy.ac.in/wp-content/gallery/green-campus/Green%20Campus3.jpg',
        'https://www.bitsathy.ac.in/wp-content/gallery/green-campus/Green%20Campus7.jpg',
        'https://www.bitsathy.ac.in/wp-content/gallery/electric-car/Electric%20Car1.jpg',
        'https://www.bitsathy.ac.in/wp-content/gallery/internet-centre/Internet%20Centre1.jpg',
        'https://www.bitsathy.ac.in/wp-content/gallery/community-radio/Community%20Radio2.jpg'
      ]);
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % images.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, [currentIndex, images.length]);
    return (
        <>
    <div className="fullCont">
        <div className='image-container'><img src={images[currentIndex]} alt="Slideshow background" /></div>
        <div className="mainCont">
          {menuData ?(
        <div> 
          <p><strong>The Menu is {menuData.food}, {menuData.complementary1}, {menuData.complementary2}</strong></p>
          <p>Enjoy Your Meal 😊</p>
          <button className='button_'><Link to="/"><span>Go to homepage 🏠</span></Link></button>
          <p className='credits'>Designed and Developed by <strong><i>Vimalraj S</i></strong></p>
        </div>
      ) : (
        <div>Please Choose the options correctly to view your Menu 😡</div>
      )} 
        </div>   
    </div>
        </>
    )
}
export default MenuComp;

