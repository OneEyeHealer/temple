import React, { Fragment, useState, useEffect } from "react";
import Joi from "joi-browser";
import { validate, validateFormState } from "../../services/validateData";
import { getCategories } from "../../services/categoryService";
import { getOffering, saveOffering } from "../../services/offeringService";
import Input from "../common/input";
import PageHeading from "../common/pageHeading";
import Select from "../common/select";
import { toast } from "react-toastify";
const OfferingForm = ({ match, history }) => {
  const [data, setData] = useState({
    nameBv: "",
    categoryId: "",
    noOfRounds: "",
    bookDistribute: "0",
    lectureHeard: "0",
    slokasLearn: "0",
    submitDate: new Date(),
  });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const schema = {
    _id: Joi.string(),
    nameBv: Joi.string().required().min(2).max(50).label("Bv Name"),
    categoryId: Joi.string().required().label("Category"),
    noOfRounds: Joi.number()
      .required()
      .min(0)
      .max(255)
      .label("Number of Rounds"),
    bookDistribute: Joi.number()
      .required()
      .min(0)
      .max(2000)
      .label("Number of Book Distribute"),
    lectureHeard: Joi.number()
      .required()
      .min(0)
      .max(2000)
      .label("Number of Lecture Heard"),
    slokasLearn: Joi.number()
      .required()
      .min(0)
      .max(2000)
      .label("Number of Slokas Learn"),
    submitDate: Joi.date().required(),
  };

  useEffect(async () => {
    await populateCategories();
    await populateOfferings();
  }, []);
  async function populateCategories() {
    const { data: categories } = await getCategories();
    setCategories(categories);
  }
  async function populateOfferings() {
    try {
      const offerId = match.params.id;
      if (offerId === "new") return;

      const { data: offer } = await getOffering(offerId);
      setData(mapToViewModel(offer));
    } catch (e) {
      if (e.response && e.response.status === 404)
        history.replace("/not-found");
    }
  }
  function mapToViewModel(offer) {
    return {
      _id: offer._id,
      nameBv: offer.nameBv,
      categoryId: offer.category._id,
      noOfRounds: offer.noOfRounds,
      bookDistribute: offer.bookDistribute,
      lectureHeard: offer.lectureHeard,
      slokasLearn: offer.slokasLearn,
      submitDate: offer.submitDate,
    };
  }

  const handleChange = ({ currentTarget: input }) => {
    const { item, e } = validateFormState(input, data, errors, schema);
    setData(item);
    setErrors(e);
    toast.error(e);
  };

  const renderInput = (name, label, type = "text") => {
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={handleChange}
        error={errors[name]}
        type={type}
      />
    );
  };
  const renderSelect = (name, label, options) => {
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        options={options}
        onChange={handleChange}
      />
    );
  };

  const renderButton = (label) => {
    return (
      <button
        disabled={validate(data, schema)}
        // onClick={()=> history.push("/offerings")}
        type="submit"
        className="btn btn-primary"
      >
        {label} <i className="fa fa-arrow-circle-right" />
      </button>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate(data, schema);
    setErrors(err || {});
    toast.error(err);
    if (err) return;
    await doSubmit();
  };

  const doSubmit = async () => {
    // call the server
    await saveOffering(data);
    history.push("/offerings");
    toast("Your Offering submitted successfully");
  };
  return (
    <Fragment>
      <div className="container">
        <PageHeading title="Offering Form" />
        <div className="text-center">
          <code>Offering / Day</code>
        </div>
        <div className="m-auto w-50">
          <form onSubmit={handleSubmit}>
            {renderInput("nameBv", "Bv Name")}
            {renderSelect("categoryId", "Category", categories)}
            {renderInput(
              "noOfRounds",
              `Number of Rounds: ${
                data.noOfRounds > 0
                  ? data.noOfRounds * 16 * 108 + " Hari Naam"
                  : ""
              } `
            )}
            {renderInput("bookDistribute", "Number of Book Distribute")}
            {renderInput("lectureHeard", "Number of Lecture Heard")}
            {renderInput("slokasLearn", "Number of Slokas Learn")}
            {renderInput("submitDate", "Date of Submission")}
            {renderButton("save")}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default OfferingForm;
