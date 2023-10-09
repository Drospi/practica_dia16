import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="testimonialsBody">
        <div>
          <h4>CLIENT TESTIMONIALS</h4>
        </div>
        <div className="testimonialsPrincipal">
          <div className="cardsTestimonials">
            <img className="imgEmily" src="../../public/img/image-emily.jpg" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ipsam fuga in, veniam ut illo illum impedit aspernatur debitis
              asperiores!
            </p>
            <h2>Emily R.</h2>
            <h4>Marjeting Director</h4>
          </div>
          <div className="cardsTestimonials">
            <img
              className="imgThomas"
              src="../../public/img/image-thomas.jpg"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              ducimus aliquam sint iusto corporis, nesciunt beatae fugit
              incidunt. Dolor, sed?
            </p>
            <h2>Thomas S.</h2>
            <h4>Chief Operating Officer</h4>
          </div>
          <div className="cardsTestimonials">
            <img
              className="imgJennie"
              src="../../public/img/image-jennie.jpg"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae dolores optio incidunt, iusto veritatis natus
              consectetur voluptates quos quia. Eos.
            </p>
            <h2>Jennie F.</h2>
            <h4>Bussiness Owner</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
