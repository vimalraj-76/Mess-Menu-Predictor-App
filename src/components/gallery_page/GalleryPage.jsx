// The import statement imports the React library and the CSS file for the component.
// The GalleryPage component is defined as a function component that returns some JSX code.
// The JSX code is enclosed in empty tags (<> and </>) to allow multiple elements to be returned.
// The div with id="galleryPage" serves as a container for the gallery page.
// The div with className="gallery" contains a heading for the gallery page.
// The div with className="images-selector" contains a grid of images that can be selected.
// Each image is represented by an input element with type="radio" and a corresponding label element. The input elements have unique id attributes and the name attribute is the same for all of them, which makes them mutually exclusive.
// The label elements have a htmlFor attribute that matches the id of the corresponding input element. They also have a className attribute that assigns a CSS class to each image card.
// The div with className="footer" contains a simple credit line for the developer of the gallery page.
// The export default statement exports the GalleryPage component for use in other parts of the application.

import React from "react";
import './GalleryPage.css';
const GalleryPage = () =>
{
    return (
    <>
    <div id="galleryPage">
    <div className="gallery">
          <h1>BIT Serene Campus</h1>
    </div>
    <div className="images-selector">
    <div className="img">
      <div className="row1">
        <input type="radio" id="im1" name="image" value="bit1"/>
        <label htmlFor="bit1" className="img-card img1"></label>
      </div>
      <div className="row1">
        <input type="radio" id="im2" name="image" value="bit2"/>
        <label htmlFor="bit2" className="img-card img2"></label>
      </div>
      <div className="row1">
        <input type="radio" id="im3" name="image" value="bit3"/>
        <label htmlFor="bit3" className="img-card img3"></label>
      </div>
      <div className="row1">
        <input type="radio" id="im4" name="image" value="bit4"/>
        <label htmlFor="bit4" className="img-card img4"></label>
      </div>
    </div>
    <div className="img">
      <div className="row2">
        <input type="radio" id="im5" name="image" value="bit5"/>
        <label htmlFor="bit5" className="img-card img5"></label>
      </div>
      <div className="row2">
        <input type="radio" id="im6" name="image" value="bit6"/>
        <label htmlFor="bit6" className="img-card img6"></label>
      </div>
      <div className="row2">
        <input type="radio" id="im7" name="image" value="bit7"/>
        <label htmlFor="bit7" className="img-card img7"></label>
      </div>
      <div className="row2">
        <input type="radio" id="im8" name="image" value="bit8"/>
        <label htmlFor="bit8" className="img-card img8"></label>
     </div>
  </div>
  <div className="footer">
  <p>Designed and Developed by <span><strong>Vimalraj S</strong></span></p>
  </div>
  </div>
  </div>
    </>);
}
export default GalleryPage;