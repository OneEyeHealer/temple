import React, {Fragment, useState} from 'react';
import Joi from 'joi-browser';
import PageHeading from "../common/pageHeading";
import Input from "../common/input";
import auth from "../../services/authService";
import {validate, validateFormState} from '../../services/validateData';
import {toast} from "react-toastify";

const LoginForm = (props) =>{
    const [data, setData ] = useState({username: "", password: ""})
    const [errors, setErrors] = useState({});
    const schema = {
        username: Joi.string().required().label('Username').min(5).max(31),
        password: Joi.string().required().label('Password').min(6).max(12),
    }

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

    const handleSubmit = e => {
        e.preventDefault();

        const err = validate(data, schema);
        setErrors(err || {});
        if(err) return;

        doSubmit();
    };

     const doSubmit = async ()=>{
        // call the server
         try {
             const { username, password } = data;
             await auth.login(username, password);
             toast.success("You are login Successfully");
             const { state } = props.location;
             window.location = state ? state.from.pathname : "/";
             // window.location = "/"; // to reload the "compoment did mount" or the whole page.
         } catch (e) {
             if (e.response && e.response.status === 400) {
                 toast.error(e.response.data);
                 const authError = { ...errors };
                 authError.username = e.response.data;
                 setErrors(authError);
                 window.location = props.match.url;
             }
         }
    }

    return (
        <Fragment>
            <div className="container">
                <PageHeading title="Login Form"/>
                <div className="m-auto w-25">
                    <div className="App">
                        <i className="fa fa-user-circle-o"
                           style={{fontSize: "3em"}}/>
                        <form onSubmit={handleSubmit}>
                            {renderInput("username", "Username")}
                            {renderInput("password", "Password", "password")}
                            {renderButton("login")}
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginForm;
