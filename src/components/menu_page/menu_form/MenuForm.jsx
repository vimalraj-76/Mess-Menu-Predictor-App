import React,{useState} from "react";
import './MenuForm.css';
// import '../../../../../Node/fetch_data.js';

const MenuForm=()=>{
  const [day, setDay] = useState('');
  const [hostel, setHostel] = useState('');
  const [meal, setMeal] = useState('');

  const onFormSubmit=async (event)=>
  {
    event.preventDefault();
    const formData={
      hostel:hostel,day:day,meal:meal
    };
    const response = await fetch('http://127.0.0.1:3001/testApi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    // fetch_data({day_:day,hostel_:hostel,meal_:meal});
  }
    return (<>
    <div className="head">
    <div className="block">
        <div className="headers1">
        <h1>BIT Mess Menu Predictor</h1>
        </div>    
        <form onSubmit={onFormSubmit} className="form-example">
            <div className="form-example">
              <label htmlFor="hostel" className="whitetext">Choose the Hostel: </label>
              <select name="hostel" id="hostel" onChange={(event)=>setHostel(event.target.value)} required>
                <option value="boys">Boys Hostel</option>
                <option value="girls">Girls Hostel</option>
              </select>
              </div>
            <div className="form-example">
              <label htmlFor="day" className="whitetext">Choose the day: </label>
              <select name="day" id="day" onChange={(event)=>setDay(event.target.value)} required>
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
                <option value="bf">Breakfast</option>
                <option value="lun">Lunch</option>
                <option value="din">Dinner</option>
              </select>
            </div>
            <div className="button-head">
              <button className="button" type="submit"><span>Click to see the menu 🪄</span></button>
            </div>
          </form>
        </div>
        </div>
    </>)
}

export default MenuForm;