import React, { useState } from "react";
import QRCode from "qrcode";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import "./PassGenerator.css";
import { NameFormat } from "./../utils/Helper";
import banner from "../img/Prerna_poster_1.jpg";

const PassGenerator = () => {
  var isValid = false;
  const [formErrors, setFormErrors] = useState({});
  const [form, setform] = useState(true);
  const [src, setSrc] = useState("");
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    education: "",
    occupation: "",
    collage: "",
    age: "",
  });
  const {
    name,
    phone,
    email,
    city,
    education,
    occupation,
    collage: college,
    age,
  } = data;
  var doc = new jsPDF("portrait", "px", "a4", false);
  let msg = `

  Congratulations !

  ${NameFormat(name)}, ${phone} 

  You are successfully registered !



  See you at Prerna Youth Fest On May 8, 2022 !


  `;
  const saveEntryPass = () => {
    // saveAs(src, `${name}.png`);
    doc.setFontSize(20);
    doc.setFont("arial", "bold");
    doc.text("Welcome to Prerna Youth Fest", 30, 45);
    doc.setFontSize(13);
    doc.setFont("arial", "Normal");
    doc.text(msg, 30, 55);
    doc.addImage(banner, "JPEG", 300, 35, 130, 180);
    doc.setFontSize(20);
    doc.setFont("arial", "bold");
    doc.text("Prerna Youth Fest Entry Pass", 130, 280);
    doc.addImage(src, "JPEG", 130, 285, 180, 180);
    doc.setFont("arial", "bold");
    doc.setFontSize(15);
    doc.text(150, 475, "Name: ");
    doc.text(150, 495, "Phone: ");
    doc.text(150, 515, "Email: ");
    doc.setFont("arial", "Normal");
    doc.text(200, 475, `${name}`);
    doc.text(200, 495, `${phone}`);
    doc.text(200, 515, `${email}`);
    doc.setFontSize(8);
    doc.text(270, 610, `Date: ${new Date()}`);

    doc.save(`${name.split(" ").join("_")}_${new Date().toLocaleString()}`);
  };
  const handlePass = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setFormErrors(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isValid = formValidation();
      if (isValid) {
        const response = await fetch(
          "https://v1.nocodeapi.com/iyfrohini/google_sheets/YDLzNPLNCIaJTxkR?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                name,
                phone,
                email,
                age,
                city,
                education,
                occupation,
                college,
                new Date().toLocaleString(),
              ],
            ]),
          }
        );
        await response.json();
        let dataUrl = `Name: ${name}; Mobile: ${phone}; Current City: ${city}; Education: ${education}; Current Occupation: ${occupation}; Name of Company/Institute: ${college}; Age: ${age}; `;

        var imgSrc = await QRCode.toDataURL(dataUrl);
        setFormErrors({});
        setSrc(imgSrc);
        setform(false);
        notify(
          `Thank you for registering for Prerna Youth Fest in ISKCON Rohini. We have mailed your pass to your Email Id or you can Download your Pass from here also.
          
          See you on 8th May,2022`,
          true
        );
      }
    } catch (error) {}
  };

  const formValidation = () => {
    if (phone.length < 10) {
      setFormErrors({
        isInValid: true,
        message: "Your Phone number is Invalid",
      });
      isValid = false;
    } else {
      setFormErrors({ isInValid: false, message: "" });
      isValid = true;
    }
    return isValid;
  };
  const newPass = () => {
    setform(true);
    setData({
      ...data,
      name: "",
      phone: "",
      email: "",
      age: "",
      city: "",
      education: "",
      occupation: "",
      collage: "",
    });
  };
  const notify = (message, type) => {
    type ? toast.success(`${message}`) : toast.error(`${message}`);
  };

  return (
    <>
      {!form && (
        <div className="container text-center">
          <button className="btn btn-primary px-4" onClick={newPass}>
            New Pass
          </button>
        </div>
      )}
      <div className="py-0">
        {form && (
          <div className="px-5">
            <h1 className="text-center">Entry Pass Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  Name:<sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handlePass}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Phone:<sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={handlePass}
                  minLength={10}
                  required
                />
                {formErrors && formErrors.isInValid
                  ? notify(`${formErrors.message}`, false)
                  : null}
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Email:<sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handlePass}
                  minLength={10}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">
                  Age:<sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="age"
                  value={age}
                  onChange={handlePass}
                  min={16}
                  max={30}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">
                  City:<sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  value={city}
                  onChange={handlePass}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="education">
                  Education: <sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="education"
                  value={education}
                  onChange={handlePass}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="occupation">
                  Current Occupation:<sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="occupation"
                  value={occupation}
                  onChange={handlePass}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="collage">
                  Name of Company/Institute:<sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="collage"
                  value={college}
                  onChange={handlePass}
                  required
                />
              </div>

              <div className="text-center my-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        )}
        {src && !form && (
          <div className="col-12">
            <h1 className="text-center">Entry Pass Generated</h1>
            <div className="container text-center">
              <img src={src} alt="" width="150px" height="150px" />
            </div>
            <div className="container pass-data">
              <p>
                <b>Name:</b> {name}
              </p>
              <p>
                <b>Mobile:</b> {phone}
              </p>
              <p>
                <b>Age:</b> {age}
              </p>
              <p>
                <b>Current City:</b> {city}
              </p>
              <p>
                <b>Education:</b> {education}
              </p>
              <p>
                <b>Current Occupation:</b> {occupation}
              </p>
              <p>
                <b>Name of Company/Institute:</b> {college}
              </p>
            </div>
            <div className="container text-center">
              <button className="btn btn-primary" onClick={saveEntryPass}>
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PassGenerator;
