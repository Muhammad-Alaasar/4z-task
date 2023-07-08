import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productImg2 from "../assets/images/product-img2.png";

export default function SupplierProducts() {
  const addToCart = () => alert("Product added in The Cart");

  return (
    <section className="supplier my-5">
      <div className="container">
        <h2 className="h1">Supplier Products</h2>
        <hr className="mb-5 w-25" />
        <div className="row">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-3">
              <Card>
                <Card.Img variant="top" src={productImg2} />
                <Card.Body>
                  <Card.Title>Product Title</Card.Title>
                  <Card.Text className="fs-3 fw-bold">5000</Card.Text>
                  <Button
                    className="d-block text-uppercase w-100"
                    variant="primary"
                    onClick={() => addToCart()}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
