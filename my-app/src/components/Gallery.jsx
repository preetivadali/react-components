
import foodPic1 from "../assets/image-1.jpg";
import foodPic2 from "../assets/image-2.jpg";
import foodPic3  from "../assets/image-3.jpg";
import foodPic4  from "../assets/image-4.jpg";
import foodPic5  from "../assets/image-5.jpg";
import "./Gallery.css";



function Gallery() {
    return (
      <div className="gallery">
        <h3 className="heading">Hakka Noodles</h3>
        <img src={foodPic1} alt="noodles pic" className="img" />
        <p>79sek</p>
  
        <h3 className="heading">Meat Balls</h3>
        <img src={foodPic2} alt="meatballs pic" className="img" />
        <p>109sek</p>
  
        <h3 className="heading">Dumplings</h3>
        <img src={foodPic3} alt="dumplings pic" className="img" />
        <p>89sek</p>
  
        <h3 className="heading">Sushi</h3>
        <img src={foodPic4} alt="sushi pic" className="img" />
        <p>99sek</p>
  
        <h3 className="heading">Falafel</h3>
        <img src={foodPic5} alt="falafel pic" className="img" />
        <p>69sek</p>
      </div>
    );
  }
  export default Gallery;
  