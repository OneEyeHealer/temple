import React, { useState } from "react";
import QRCode from "qrcode";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import "./PassGenerator.css";
import { NameFormat } from "./../utils/Helper";
import banner from "../img/Prerna_poster_1.jpg";
import emailjs from "emailjs-com";

const PassGenerator = (props) => {
  var isValid = false;
  const [base64, setBase64] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [form, setform] = useState(true);
  const [src, setSrc] = useState("");
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    city: "",
    education: "",
    occupation: "",
    college: "",
    age: "",
    platform: "",
    branch: "",
    year: "",
  });
  const {
    name,
    phone,
    email,
    gender,
    city,
    education,
    occupation,
    college,
    age,
    platform,
    branch,
    year,
  } = data;
  var doc = new jsPDF("portrait", "px", "a4", false);
  let msg = `

  Congratulations !

  ${NameFormat(name)}, ${phone} 

  You are successfully registered !



  See you at Prerna Youth Fest On May 8, 2022 !


  `;
  // const saveEntryPass = async (srcImage) => {
  //   // saveAs(src, `${name}.png`);
  //   doc.setFontSize(20);
  //   doc.setFont("arial", "bold");
  //   doc.text("Welcome to Prerna Youth Fest", 30, 45);
  //   doc.setFontSize(13);
  //   doc.setFont("arial", "Normal");
  //   doc.text(msg, 30, 55);
  //   doc.addImage(banner, "JPEG", 300, 35, 130, 180);
  //   doc.setFontSize(20);
  //   doc.setFont("arial", "bold");
  //   doc.text("Prerna Youth Fest Entry Pass", 130, 280);
  //   doc.addImage(srcImage, "JPEG", 130, 285, 180, 180);
  //   doc.setFont("arial", "bold");
  //   doc.setFontSize(15);
  //   doc.text(150, 475, "Name: ");
  //   doc.text(150, 495, "Phone: ");
  //   doc.text(150, 515, "Email: ");
  //   doc.setFont("arial", "Normal");
  //   doc.text(200, 475, `${name}`);
  //   doc.text(200, 495, `${phone}`);
  //   doc.text(200, 515, `${email}`);
  //   doc.setFontSize(8);
  //   doc.text(270, 610, `Date: ${new Date()}`);
  //   doc.save(`${name.split(" ").join("_")}_${new Date().toLocaleString()}`);
  //   let pdfUrl =
  //     "data:application/pdf;base64," +
  //     Buffer.from(doc.output()).toString("base64");
  //   setBase64(pdfUrl);
  // };
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
          `https://v1.nocodeapi.com/iyfrohini/google_sheets/YDLzNPLNCIaJTxkR?tabId=${props.title}`,
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
                gender,
                city,
                education,
                occupation,
                college,
                platform,
                branch,
                year,
                new Date().toLocaleString(),
              ],
            ]),
          }
        );
        await response.json();
        let dataUrl = `Name: ${name}; Mobile: ${phone}; Gender: ${gender}; Current City: ${city}; Education: ${education}; Current Occupation: ${occupation}; Name of Company/Institute: ${college}; Age: ${age}; platform: ${platform}; Branch: ${branch}; Year: ${year}; Email: ${email}`;

        // var imgSrc = await QRCode.toDataURL(dataUrl);
        setFormErrors({});
        // setSrc(imgSrc);
        setform(false);
        notify(
          `Thank you for registering for Prerna Youth Fest in ISKCON Rohini. We have mailed your pass to your Email Id or you can Download your Pass from here also.

          See you on 8th May,2022`,
          true
        );

        // for sending mail
        // const mailResponse = await fetch(
        //   "https://x3leop5kti.execute-api.us-east-1.amazonaws.com/send-email",
        //   {
        //     mode: "no-cors",
        //     method: "POST",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       senderName: "prernayouthfest@gmail.com",
        //       senderEmail: "prernayouthfest@gmail.com",
        //       message: `Hello, ${name}
        //       Thank You for Registering for Prerna Youth Festival.

        //       When u come for the event Make sure to Download this entry pass which is attached with this Mail
        //       for your smooth entry.

        //       Thank you
        //       `,
        //       base64Data: base64,
        //       date: new Date(),
        //       fileName: pdfFileName,
        //     }),
        //   }
        // );
        // console.log(await mailResponse.json());
        // emailjs.sendForm(
        //   "service_d9p378x",
        //   "template_g9qdrbj",
        //   e.target,
        //   "i_MjOVtaujbEz1TAI"
        // );

        // await saveEntryPass(imgSrc);
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
  // const newPass = () => {
  //   setform(true);
  //   setData({
  //     ...data,
  //     name: "",
  //     phone: "",
  //     email: "",
  //     age: "",
  //     gender: "",
  //     city: "",
  //     education: "",
  //     occupation: "",
  //     college: "",
  //     platform: "",
  //     branch: "",
  //     year: "",
  //   });
  // };
  const notify = (message, type) => {
    type ? toast.success(`${message}`) : toast.error(`${message}`);
  };

  return (
    <>
      {/* {!form && (
        <div className="container text-center mt-2">
          <button
            className="btn btn-success px-5"
            onClick={() => props.formReset()}
          >
            New Pass
          </button>
        </div>
      )} */}
      <div className="py-0">
        {form && (
          <div className="px-5 mt-3">
            <h2 className="text-center">
              {props.title[0].toUpperCase() + props.title.slice(1)}
              Form
            </h2>
            <div className="under-line"></div>
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
                  Whatsapp Number:<sup className="text-danger">*</sup>
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
              {/* <div className="form-group">
                <label htmlFor="email">
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
              </div> */}
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
              {/* <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select
                  className="form-control"
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={handlePass}
                >
                  <option value="">--Select--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div> */}
              <div className="form-group">
                <label htmlFor="city">
                  Locality/Address:<sup className="text-danger">*</sup>
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
                <label htmlFor="college">
                  {props.title === "dysWorking"
                    ? "Company"
                    : "College/School/Institute "}
                  Name: <sup className="text-danger">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="college"
                  value={college}
                  onChange={handlePass}
                  required
                />
              </div>
              {/* {props.title === "dysWorking" && (
                <>
                  <div className="form-group">
                    <label htmlFor="education">Education:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="education"
                      value={education}
                      onChange={handlePass}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="occupation">Current Occupation:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="occupation"
                      value={occupation}
                      onChange={handlePass}
                    />
                  </div>
                </>
              )}
              {props.title !== "dysWorking" && (
                <>
                  <div className="form-group">
                    <label htmlFor="branch">Branch/Stream:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="branch"
                      value={branch}
                      onChange={handlePass}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Studying Year:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="year"
                      value={year}
                      onChange={handlePass}
                    />
                  </div>
                </>
              )} */}
              <div className="form-group">
                <label htmlFor="platform">
                  From where you get to know about this event:
                  <sup className="text-danger">*</sup>
                </label>
                <select
                  className="form-control"
                  type="text"
                  name="platform"
                  value={platform}
                  onChange={handlePass}
                  required
                >
                  <option value="">--Select--</option>
                  <option value="Friends">Friends</option>
                  <option value="Volunteers">Volunteers</option>
                  <option value="Temple">Temple</option>
                  <option value="College">College</option>
                  <option value="Rathyatra/Kirtan">Rathyatra / Kirtan</option>
                  <option value="My Asraya">My Asraya</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="text-center my-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary px-5"
                />
              </div>
            </form>
          </div>
        )}
        {/* {src && !form && (
          <div className="col-12">
            <h1 className="text-center">Entry Pass Generated</h1>
            <div className="under-line"></div>
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
                <b>Gender:</b> {gender}
              </p>
              <p>
                <b>Locality:</b> {city}
              </p>
              {props.title === "dysWorking" && (
                <>
                  <p>
                    <b>Education:</b> {education}
                  </p>
                  <p>
                    <b>Current Occupation:</b> {occupation}
                  </p>
                </>
              )}
              <p>
                <b>
                  {props.title === "dysWorking"
                    ? "Company"
                    : "College/School/Institute "}
                  Name:{" "}
                </b>{" "}
                {college}
              </p>
              {props.title !== "dysWorking" && (
                <>
                  <p>
                    <b>Branch:</b> {branch}
                  </p>
                  <p>
                    <b>Year:</b> {year}
                  </p>
                </>
              )}
            </div>
            <div className="container text-center">
              <button className="btn btn-primary px-5" onClick={saveEntryPass}>
                Download
              </button>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default PassGenerator;
