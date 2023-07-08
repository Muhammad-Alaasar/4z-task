import React from "react";
import Card from "react-bootstrap/Card";
import productImg from "../assets/images/product-img.jpeg";

export default function RelatedSuppliers() {
  return (
    <section className="related-suppliers my-5">
      <div className="container">
        <h2 className="h1">Related Suppliers</h2>
        <hr className="mb-5 w-25" />
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="col-2">
              <Card>
                <Card.Img variant="top" src={productImg} />
                <Card.Body>
                  <Card.Title>Product Title</Card.Title>
                  <Card.Text className="fw-bold">5000</Card.Text>
                  <Card.Text className="text-end">Supplier Name</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
