import huevo from "../../public/img/desktop/image-transform.jpg";
import vino from "../../public/img/desktop/image-stand-out.jpg"

export const Mid = () => {
  return (
    <section>
      <div className="seccion">
        <div>
          <h1>Transform your brand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            repudiandae eius eligendi architecto labore quidem assumenda
            temporibus a, modi fuga cum excepturi praesentium ex voluptas, quam
            recusandae odit doloribus porro!
          </p>
          <a href="#">LEARN MORE</a>
        </div>
        <img src={huevo} alt="" />
      </div>
      <div className="seccion">
        
      <img src={vino} alt="" />
        <div>
            
          <h1>Stand out to the right audience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            repudiandae eius eligendi architecto labore quidem assumenda
            temporibus a, modi fuga cum excepturi praesentium ex voluptas, quam
            recusandae odit doloribus porro!
          </p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>
      <div className="seccion">

        <div className="cir">
        <h3>Graphic Design</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda doloremque labore quidem, soluta enim eos quae, ducimus optio suscipit, vel consectetur molestiae sapiente officia odio sint earum laborum voluptas laudantium.</p>
        </div>
        <div className="ora">
        <h3>Photography</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda doloremque labore quidem, soluta enim eos quae, ducimus optio suscipit, vel consectetur molestiae sapiente officia odio sint earum laborum voluptas laudantium.</p>
        </div>
      </div>
 
    </section>
  );
};
