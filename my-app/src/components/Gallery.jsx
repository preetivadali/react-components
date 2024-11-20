
import foodPic1 from "../assets/image-1.jpg";
import foodPic2 from "../assets/image-2.jpg";
import foodPic3  from "../assets/image-3.jpg";
import foodPic4  from "../assets/image-4.jpg";
import foodPic5  from "../assets/image-5.jpg";
import "./Gallery.css";



function Gallery() {

  const handleImageClick = (event) => {
    const priceElement = event.target.nextElementSibling;
    const currentPrice = parseFloat(priceElement.textContent) * 0.9;
    priceElement.textContent = `${currentPrice.toFixed(2)}sek`;
    priceElement.style.color = "red";
  };
  
  
    return (
      <div className="gallery">
        <h3 className="heading">Hakka Noodles</h3>
        <img src={foodPic1} alt="noodles pic" className="img"   onClick={handleImageClick} />
        <p className ="price">79sek</p>
  
        <h3 className="heading">Meat Balls</h3>
        <img src={foodPic2} alt="meatballs pic" className="img"  onClick={handleImageClick}  />
        <p  className ="price">109sek</p>
  
        <h3 className="heading">Dumplings</h3>
        <img src={foodPic3} alt="dumplings pic" className="img"  onClick={handleImageClick}  />
        <p  className ="price">89sek</p>
  
        <h3 className="heading">Sushi</h3>
        <img src={foodPic4} alt="sushi pic" className="img"   onClick={handleImageClick} />
        <p  className ="price">99sek</p>
  
        <h3 className="heading">Falafel</h3>
        <img src={foodPic5} alt="falafel pic" className="img"  onClick={handleImageClick}  />
        <p  className ="price">69sek</p>
      </div>
    );
  }
  export default Gallery;
  