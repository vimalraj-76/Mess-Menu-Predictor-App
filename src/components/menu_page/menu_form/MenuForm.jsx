// This is a React component that displays a form to choose a hostel, day and meal, and on submit, sends the data to an API endpoint using axios, receives a response and updates the state using context.

// Here's a breakdown of what the code does:

// Imports the necessary dependencies and components, including React, createContext, useState, useContext, axios, and NavLink.
// Defines a context object named MyContext using createContext.
// Defines a functional component named MenuForm that uses the useState hook to define three state variables: day, hostel, and meal. It also uses the useContext hook to get the setMenuData function from the MyContext object.
// Defines an onFormSubmit function that sends the hostel, day, and meal data to the API endpoint using axios. If the data is sent successfully, it updates the state by calling the setMenuData function. If any of the fields are empty, it displays an alert.
// Renders a form that includes dropdowns to select a hostel, day, and meal. It also includes a NavLink that displays the menu for the selected options when clicked. The NavLink uses the onFormSubmit function as an onClick handler.
// Exports the MyContext object and the MenuForm component using export statements.
// Overall, this code implements a simple form with validation and context for state management.

import React,{createContext, useState, useContext} from "react";
import axios from 'axios';
import './MenuForm.css';
import { NavLink } from "react-router-dom";
const MyContext = createContext(null);
const MenuForm=()=>{
  const [day, setDay] = useState('');
  const [hostel, setHostel] = useState('');
  const [meal, setMeal] = useState('');
  const { setMenuData } = useContext(MyContext);
  const onFormSubmit=(event)=>
  {
    const data={
      "hostel":hostel,"day":day,"meal":meal
    };
    const postData = async (data) =>
    {
      if(hostel!=='' && day!=='' && meal!==''){
      try {
        const response = await axios.post('https://menu-tracker-app-backend-database-laq9.onrender.com/testApi', data);
        setMenuData(response.data);
      } catch (error) {
        console.error(error);
      }}
      else{
      window.alert('Please fill in all the required fields.');
      }
    }
    postData(data);
  }
    return (<>
    <div className="head">
    <div className="block">
        <div className="headers1">
        <h1>BIT Mess Menu Predictor</h1>
        </div>    
        <form className="form-example">
            <div className="form-example">
              <label htmlFor="hostel" className="whitetext">Choose the Hostel: </label>
              <select name="hostel" id="hostel" onChange={(event)=>setHostel(event.target.value)} required>
                <option value="" disabled selected hidden>Select</option>
                <option value="boys">Boys Hostel</option>
                <option value="girls">Girls Hostel</option>
              </select>
              </div>
            <div className="form-example">
              <label htmlFor="day" className="whitetext">Choose the day: </label>
              <select name="day" id="day" onChange={(event)=>setDay(event.target.value)} required>
              <option value="" disabled selected hidden>Select</option>
                <option value="mon">Monday</option>
                <option value="tue">Tuesday</option>
                <option value="wed">Wednesday</option>
                <option value="thur">Thursday</option>
                <option value="fri">Friday</option>
                <option value="sat">Saturday</option>
                <option value="sun">Sunday</option>
              </select>
            </div>
            <div className="form-example">
              <label htmlFor="meal" className="whitetext">Choose the Meal: </label>
              <select name="meal" id="meal" onChange={(event)=>setMeal(event.target.value)} required>
              <option value="" disabled selected hidden>Select</option>
                <option value="bf">Breakfast</option>
                <option value="lun">Lunch</option>
                <option value="din">Dinner</option>
              </select>
            </div>
            <div className="Navlink-head">
              <NavLink className="Navlink" to="getMenu" onClick={onFormSubmit}><span>Click to see the menu 😋</span></NavLink>
            </div>
          </form>
        </div>
        </div>
    </>)
}
export  { MyContext };
export default MenuForm;