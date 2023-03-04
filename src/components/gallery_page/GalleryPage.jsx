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