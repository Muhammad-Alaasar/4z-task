import React, { useRef, useEffect, useState } from "react";
import productImg from "../assets/images/product-img.jpeg";
import productImg2 from "../assets/images/product-img2.png";
import productImg3 from "../assets/images/product-img3.jpg";
import productVideo from "../assets/videos/product-video.mp4";

export default function ProductInfo() {
  const ref = useRef(null);
  const [productView, setProductView] = useState();
  const [play, setPlay] = useState(false);

  const addToCart = () => alert("Product added in The Cart");

  const toView = (event) => {
    if (event.target.nodeName === "IMG") setProductView(event.target.src);
    else if (event.target.nodeName === "VIDEO") videoView(event);
  };

  const videoView = (event) => {
    if (!play) {
      event.target.style.position = "absolute";
      event.target.style.width = event.target.style.height = "100%";
      event.target.style.bottom = event.target.style.left = 0;
      event.target.controls = true;
      event.target.play();
      setPlay(!play);
    } else {
      event.target.controls = false;
      event.target.pause();
      event.target.style.position =
        event.target.style.width =
        event.target.style.height =
        event.target.style.bottom =
        event.target.style.left =
          null;
      setPlay(!play);
    }
  };

  useEffect(() => {
    setProductView(ref.current.src);
  }, []);

  return (
    <section className="product-info py-5">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="product-view mb-2">
              <img src={productView} alt="Product View" width="100%" />
            </div>
            <div
              className="other-subview d-flex justify-content-center align-items-center"
              onClick={(e) => toView(e)}
            >
              <img src={productImg} alt="Product View" ref={ref} />
              <img src={productImg2} alt="Product View" />
              <img src={productImg3} alt="Product View" />
              <video>
                <source src={productVideo} type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>
          <div className="col-7 align-self-center pb-5">
            <h3>Dell Laptop</h3>
            <hr />
            <p>
              Product Brand:
              <span className="ps-2 text-uppercase">Dell</span>
            </p>
            <p>Product Description:</p>
            <p className="ps-5">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Product Color:
              <span className="ps-2">Red - Yellow - Green - Blue - Black</span>
            </p>
            <p>
              In Stock:
              <span className="ps-2">Available</span>
            </p>
            <h2 className="ps-4">10000 EGP</h2>
            <button
              className="btn btn-primary px-5 text-uppercase d-block ms-auto mt-4"
              onClick={() => addToCart()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
