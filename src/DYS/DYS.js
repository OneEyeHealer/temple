import React, { useState } from "react";
import { toast } from "react-toastify";
// import "./PassGenerator.css";

const DYS = (props) => {
  var isValid = false;
  const [formErrors, setFormErrors] = useState({});
  const [form, setform] = useState(true);
  const [data, setData] = useState({
    name: "",
    phone: "",
    gender: "",
    city: "",
    college: "",
    age: "",
    platform: "",
  });
  const { name, phone, gender, city, college, age, platform } = data;
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
          `https://v1.nocodeapi.com/iyfrohini/google_sheets/YDLzNPLNCIaJTxkR?tabId=${"DYS"}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                name,
                phone,
                city,
                age,
                gender,
                college,
                platform,
                new Date().toLocaleString(),
              ],
            ]),
          }
        );
        await response.json();

        setFormErrors({});
        setform(false);
        notify(
          `Thank you for registering for Discover Yourself (DYS) course in ISKCON Rohini.`,
          true
        );
        setData({
          ...data,
          name: "",
          phone: "",
          gender: "",
          city: "",
          college: "",
          age: "",
          platform: "",
        });
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
  const notify = (message, type) => {
    type ? toast.success(`${message}`) : toast.error(`${message}`);
  };

  return (
    <>
      {!form && (
        <div className="container text-center mt-2">
          <button
            className="btn btn-success px-5"
            onClick={() => (setform(true), props.formReset())}
          >
            New Entry
          </button>
        </div>
      )}
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
                  <option value="Other">Not to say</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="city">
                  Locality/Area:<sup className="text-danger">*</sup>
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
                  College/School/Institute/Company Name:{" "}
                  <sup className="text-danger">*</sup>
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
      </div>
    </>
  );
};

export default DYS;
