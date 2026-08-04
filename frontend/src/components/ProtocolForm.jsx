import {useState,useRef} from "react";
import emailjs from "@emailjs/browser";


function ProtocolForm() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    ).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    )
  }
  return (
    <div className="protocol-form-div">
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control message-textarea"
            id="message"
            name="message"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn transmit-btn">
          <p>TRANSMIT SIGNAL</p>
          <i class="fa-solid fa-tower-broadcast"></i>
        </button>
      </form>
    </div>
  );
}

export default ProtocolForm;
