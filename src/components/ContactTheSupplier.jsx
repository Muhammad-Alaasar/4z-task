import React from "react";

export default function ContactTheSupplier() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Message Subject: ${e.target.messageSubject.value}
Message: ${e.target.message.value}`);
    alert(`Message Subject: ${e.target.messageSubject.value}
Message: ${e.target.message.value}`);
  };

  return (
    <div className="container bg-light py-5 px-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="messageSubject" className="form-label">
            Message Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="messageSubject"
            placeholder="Subject"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="7"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
