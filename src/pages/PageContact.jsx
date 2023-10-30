import React, { useState } from "react";
import "./PageContact.css";
import axios from "axios";
import Swal from "sweetalert2";

const PageContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/barang/send-email", {
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        message: message,
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Email Berhasil Dikirim",
      });
    } catch (error) {
      console.error("Error sending data", error.response.data.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Email Gagal Dikirim. ${error.response.data.message}`,
      });
    }
  };

  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ paddingLeft: "40px" }}>
              <div className="card-shadow">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6" style={{ paddingRight: "40px" }}>
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Quick Contact</h1>
                <form onSubmit={sendEmail} className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="name"
                          name="name"
                          value={name}
                          onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          name="subject"
                          placeholder="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="message"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                      >
                        <span>Send Email</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-13">
              <div className="card mt-4 border-0 mb-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4" style={{ paddingLeft: "100px" }}>
                    <div className="card-body d-flex align-items-center c-detail pl-0">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                      </div>
                      <div className="" style={{ paddingLeft: "20px" }}>
                        <h6 className="font-weight-medium">Address</h6>
                        <p className="">
                        Bendungan hilir
                          <br /> Jakarta pusat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4" style={{ paddingLeft: "100px" }}>
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                      </div>
                      <div className="" style={{ paddingLeft: "20px" }}>
                        <h6 className="font-weight-medium">Phone</h6>
                        <p className="">
                        021-9988-9925
                          <br /> 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4" style={{ paddingLeft: "100px" }}>
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                      </div>
                      <div className="" style={{ paddingLeft: "20px" }}>
                        <h6 className="font-weight-medium">Email</h6>
                        <p className="">
                        Jc323@gmail.com
                          <br /> 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
