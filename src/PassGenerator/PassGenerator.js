import React, { useState } from "react";
import QRCode from "qrcode";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import "./PassGenerator.css";

const PassGenerator = () => {
  const [form, setform] = useState(true);
  const [src, setSrc] = useState("");
  const [data, setData] = useState({
    name: "",
    phone: "",
    city: "",
    education: "",
    occupation: "",
    collage: "",
    age: "",
  });
  const { name, phone, city, education, occupation, collage, age } = data;
  const saveFile = () => {
    saveAs(src, `${name}.png`);
  };
  const handlePass = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
              age,
              city,
              education,
              occupation,
              collage,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      let dataUrl = `Name: ${name}; Mobile: ${phone}; Current City: ${city}; Education: ${education}; Current Occupation: ${occupation}; Name of Company/Institute: ${collage}; Age: ${age}; `;

      var imgSrc = await QRCode.toDataURL(dataUrl);
      setSrc(imgSrc);
      setform(false);
      notify(`Thank you for registering for Prerna Youth Fest in ISKCON Rohini. We have mailed your pass to your Email Id or you can Download your Pass from here also. 
    
    See you on 8th May,2022`);
    } catch (error) {}
  };

  const newPass = () => {
    setform(true);
    setData({
      ...data,
      name: "",
      phone: "",
      age: "",
      city: "",
      education: "",
      occupation: "",
      collage: "",
    });
  };
  const notify = (message) => toast.success(`${message}`);

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
                <label htmlFor="name">Name:</label>
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
                <label htmlFor="phone">Phone:</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handlePass}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
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
                <label htmlFor="city">City:</label>
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
                <label htmlFor="education">Education: </label>
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
                <label htmlFor="occupation">Current Occupation:</label>
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
                <label htmlFor="collage">Name of Company/Institute:</label>
                <input
                  className="form-control"
                  type="text"
                  name="collage"
                  value={collage}
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
                <b>Name of Company/Institute:</b> {collage}
              </p>
            </div>
            <div className="container text-center">
              <button className="btn btn-primary" onClick={saveFile}>
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
