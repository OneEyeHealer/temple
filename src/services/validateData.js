import Joi from "joi-browser";

const validate = (data, schema) => {
    const options = {abortEarly: false};
    const {error} = Joi.validate(data, schema, options);
    if(!error) return null;

    const err = {}
    for(let item of error.details)
        err[item.path[0]] = item.message;
    return err;
}
const validateProperty =({name, value}, schema) =>{
    const obj = {[name]: value};
    const instance = {[name]: schema[name]}
    const {error} = Joi.validate(obj, instance);

    return error? error.details[0].message : null;
}
const validateFormState =(input, data, errors, schema)=>{
    const e = {...errors};
    const eMessage = validateProperty(input, schema);

    if(eMessage) e[input.name] = eMessage;
    else delete e[input.name];

    const item = {...data}
    item[input.name] = input.value;
    return {item, e}
}
export {validate, validateProperty, validateFormState};
