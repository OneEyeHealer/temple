import React, { useState } from "react";
import QRCode from "qrcode";

const App = (props) => {
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
  // useEffect(async () => {
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var imgSrc = await QRCode.toDataURL(
      `Name: ${name}; Mobile: ${phone}; Current City: ${city}; Education: ${education}; Current Occupation: ${occupation}; Name of Company/Institute: ${collage}; Age: ${age}; `
    );
    setSrc(imgSrc);
  };
  const handleName = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-5 w-50">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="education">Education: </label>
                <input
                  className="form-control"
                  type="text"
                  name="education"
                  value={education}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="occupation">Current Occupation:</label>
                <input
                  className="form-control"
                  type="text"
                  name="occupation"
                  value={occupation}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="collage">Name of Company/Institute:</label>
                <input
                  className="form-control"
                  type="text"
                  name="collage"
                  value={collage}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  className="form-control"
                  type="text"
                  name="age"
                  value={age}
                  onChange={handleName}
                />
              </div>
              <div class="text-center my-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div className="col text-center">
            <img src={src} alt="" />
          </div>
        </div>
      </div>
      {/* <Testimonial Title={"Testimonial"} data={DUMMY_DATA} /> */}
      {/* <Game /> */}
    </>
  );
};

export default App;
