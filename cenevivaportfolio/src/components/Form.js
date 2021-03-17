import React from "react";

function Form() {
  return (
    <form className="container-fluid" style={{ marginTop:"50px", width:"800px", backgroundColor:"#D9CAC5" }}>
      <div className="mb-3">
        <label for="form-txt">Name*</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Your Name..."
        />
        <div id="emailHelp" class="form-text"></div>
      </div>
      <div className="mb-3">
        <label for="form-txt">Email address*</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="form-txt">Message*</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary"
      style={{backgroundColor:"#8C7765"}}
      >
        Send
      </button>
    </form>
  );
}

export default Form;
