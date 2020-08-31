import React, { Component } from "react";
import login from "../../components/account/login.svg";
import { Link } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
      formErrors: {
        name: "",
        email: "",
        password: "",
      },
    };
  }
  handleSubmit = (e) => {
    if (formValid(this.state)) {
      console.log(`
          --SUBMITTING--
          Name: ${this.state.name}         
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="base-container">
        <div className="header">Register here</div>
        <div className="content">
          <div className="image">
            <img alt="login logo" src={login}></img>
          </div>
          <div className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                placeholder="Full name.. "
                onChange={this.handleChange}
              ></input>
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </div>
            {/* <div className="form-group">
                        <label htmlFor="number">Contact Number: </label>
                        <input type="number" name="number" placeholder="Contact Number.." onChange={this.handleChange}></input> 
                     </div> */}
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="Email.."
                onChange={this.handleChange}
              ></input>
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                placeholder="Password.."
                onChange={this.handleChange}
              ></input>
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
        <div>
          <Link to="/Login">
            <h5 style={{ marginTop: "15px", color: "rgb(0,128,0)" }}>
              Already have an account?
            </h5>
          </Link>
        </div>
      </div>
    );
  }
}
