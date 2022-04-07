import React, {Fragment, useState} from 'react';
import Joi from 'joi-browser';
import { toast } from "react-toastify";
import auth from "../../services/authService";
import * as userService from "../../services/userService";
import {validate, validateFormState} from "../../services/validateData";
import Input from "../common/input";
import PageHeading from "../common/pageHeading";

const RegisterForm = (props) => {
    const [data, setData ] = useState({username: "", password: "", name: ""});
    const [errors, setErrors] = useState({});

    const schema = {
        username: Joi.string().required().min(3).email().label("Username"),
        password: Joi.string().required().min(6).max(20).label("Password"),
        name: Joi.string().required().label("Name"),
    };

    const handleChange = ({currentTarget: input}) => {
        const {item, e} = validateFormState(input, data, errors, schema);
        setData(item);
        setErrors(e);
    };

    const renderInput=(name, label, type='text')=>{
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
    }
    const renderButton =(label)=>{
        return (
            <button
                disabled={validate(data, schema)}
                type="submit"
                className="btn btn-primary">
                {label}
            </button>
        );
    };
    const handleSubmit = async e => {
        e.preventDefault();

        const err = validate(data, schema);
        setErrors(err || {});
        if(err) return;

        await doSubmit();
    };
    const doSubmit = async (key, value) => {
        // call the server
        try {
            const response = await userService.register(data);
            toast.success("You are Register Successfully");
            auth.loginWithJwt(response.headers["x-auth-token"]);
            window.location = "/";
            // this.props.history.push("/");
        } catch (e) {
            if (e.response && e.response.status === 400) {
                const errors = { ...errors };
                errors.username = e.response.data;
                toast.error("something wrong occurred");
                 setErrors(errors);
            }
        }
    }
    return (
        <Fragment>
            <div className="container">
                <PageHeading title="Register Form"/>
                <div className="m-auto w-25">
                    <div className="App">
                        <i className="fa fa-user-circle-o"
                           style={{fontSize: "3em"}}
                        />
                        <form onSubmit={handleSubmit}>
                            {renderInput("username", "Username")}
                            {renderInput("password", "Password", "password")}
                            {renderInput("name", "Name")}
                            {renderButton("Register")}
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default RegisterForm;
