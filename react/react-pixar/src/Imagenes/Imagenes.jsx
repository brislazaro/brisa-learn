import "./imagenes.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";

function imagenes() {
  return (
    <section className="imagenes">
      <div className="img-container">
        <img className="img" src={img1}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img2}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img3}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img4}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img5}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img6}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img7}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img8}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img9}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img10}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img11}></img>
      </div>
      <div className="img-container">
        <img className="img" src={img12}></img>
      </div>
    </section>
  );
}

export default imagenes;
