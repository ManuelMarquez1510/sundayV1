import React from "react"
import styles from "./form.module.scss"
import { Form, FormGroup, Input, FormFeedback, Label } from "reactstrap"
import StylesForm from "./form.scss"
import Button from "./button"
import axios from "axios"
import swal from "sweetalert2"
import TermsPublish from "./../../../static/docs/Terms-publish-program.pdf"

class Formulario extends React.Component {
  url = "https://hooks.zapier.com/hooks/catch/6485212/odlm7vq/silent/"
  url_general = "https://hooks.zapier.com/hooks/catch/6485212/odlm7vq/silent/"
  state = {
    nameOfCompany: "",
    name: "",
    Country: "",
    email: "",
    phone: "",
    linkedin: "",
    check: false,
    validator: false,
    errors: {
      nameOfCompany: {
        value: false,
        text: "",
      },
      name: {
        value: false,
        text: "",
      },
      country: {
        value: false,
        text: "",
      },
      email: {
        value: false,
        text: "",
      },
      phone: {
        value: false,
        text: "",
      },
      linkedin: {
        value: false,
        text: "",
      },
      check: {
        value: false,
      },
    },
  }
  headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  }
  successAlert = () => {
    swal
      .fire({
        title: "Thank you",
        text: "we will contact you soon.",
        icon: "success",
        confirmButtonColor: "#30bbad",
        confirmButtonText: "Accept",
        customClass: {
          confirmButton: "confirmButton",
        },
      })
      .then(function() {
        window.location.href = ""
      })
    this.setState({
      nameOfCompany: "",
      name: "",
      country: "",
      email: "",
      phone: "",
      linkedin: "",
      check: false,
      validator: false,
      errors: {
        nameOfCompany: {
          value: false,
          text: "",
        },
        name: {
          value: false,
          text: "",
        },
        country: {
          value: false,
          text: "",
        },
        email: {
          value: false,
          text: "",
        },
        phone: {
          value: false,
          text: "",
        },
        linkedin: {
          value: false,
          text: "",
        },
        others: {
          value: false,
          text: "",
        },
        check: {
          value: false,
        },
      },
    })
  }
  errorAlert = () => {
    swal.fire({
      title: "Ops",
      text: "An error occurred, please try again later.",
      icon: "error",
      confirmButtonColor: "rgb(56,85,134)",
      confirmButtonText: "Accept",
      customClass: {
        confirmButton: "confirmButton",
      },
    })
  }
  onFormSubmit = event => {
    const DateTime = new Date()
    const Type = this.props.type
    event.preventDefault()
    if (this.props.field) {
      axios
        .post(
          this.url,
          {
            nameOfCompany: this.state.nameOfCompany || this.state.name,
            country: this.state.country,
            phone: this.state.phone,
            email: this.state.email || window.localStorage.getItem("email1"),
            others: this.state.others || this.state.linkedin,
            check: this.state.check,
            DateTime,
            Type,
          },
          { headers: this.headers }
        )
        .then(
          res => {
            this.successAlert()
          },
          error => {
            this.errorAlert()
          }
        )
    } else {
      axios
        .post(
          this.url_general,
          {
            nameOfCompany: this.state.nameOfCompany || this.state.name,
            country: this.state.country,
            phone: this.state.phone,
            email: this.state.email || window.localStorage.getItem("email1"),
            others: this.state.others || this.state.linkedin,
            check: this.state.check,
            DateTime,
            Type,
          },
          { headers: this.headers }
        )
        .then(
          res => {
            this.successAlert()
          },
          error => {
            this.errorAlert()
          }
        )
    }
  }
  handleInputChange = event => {
    const regexp = new RegExp(`^-?[0-9]*$`)
    const target = event.target
    const value = target.value
    const name = target.name
    this.errorsConst = this.state.errors
    switch (name) {
      case "nameOfCompany":
        if (value.length === 0) {
          this.errorsConst[name].value = true
          this.errorsConst[name].text = "Please fill in the field"
        } else {
          this.errorsConst[name].value = false
          this.errorsConst[name].text = ""
        }
        break
      case "name":
        if (value.length === 0) {
          this.errorsConst[name].value = true
          this.errorsConst[name].text = "Please fill in the field"
        } else {
          this.errorsConst[name].value = false
          this.errorsConst[name].text = ""
        }
        break
      case "country":
        if (value.length === 0) {
          this.errorsConst[name].value = true
          this.errorsConst[name].text = "Please fill in the field"
        } else {
          this.errorsConst[name].value = false
          this.errorsConst[name].text = ""
        }
        break
      case "phone":
        if (value.length === 0) {
          this.errorsConst[name].value = true
          this.errorsConst[name].text = "This value is not a valid Phone number"
        } else {
          if (value.length <= 6 || value.length >= 11) {
            this.errorsConst[name].value = true
            this.errorsConst[name].text = ""
          } else {
            if (!regexp.test(value)) {
              this.errorsConst[name].value = true
              this.errorsConst[name].text = "Only numbers are allowed"
            } else {
              this.errorsConst[name].value = false
              this.errorsConst[name].text = ""
            }
          }
        }
        break
      case "email":
        if (value.length === 0) {
          this.errorsConst[name].value = true
          this.errorsConst[name].text =
            "This value is not a valid Email address"
        } else {
          if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.errorsConst[name].value = true
            this.errorsConst[name].text = "Please fill in the field"
          } else {
            this.errorsConst[name].value = false
            this.errorsConst[name].text = ""
          }
        }

        break
      case "check":
        if (value.length === 0) {
          this.errorsConst[name].value = true
          this.errorsConst[name].text = "Please check in the field"
        } else {
          this.errorsConst[name].value = false
          this.errorsConst[name].text = ""
        }
        break
      default:
        break
    }
    this.setState({
      [name]: value,
      errors: this.errorsConst,
    })
    if (
      this.errorsConst.nameOfCompany.value ||
      this.errorsConst.country.value ||
      (this.errorsConst.email.value || window.localStorage.getItem("email1"))||
      this.errorsConst.phone.value ||
      this.errorsConst.check.value
    ) {
      this.setState({
        validator: false,
      })
    } else {
      this.setState({
        validator: true,
      })
    }
    console.log(this.errorsConst, "error")
  }
  typeForm = props => {
    const type = this.props.type
    switch (type) {
      case "Companies":
        return (
          <Form onSubmit={this.onFormSubmit} className="py-4 py-lg-0">
            <FormGroup className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-0 px-3 "}>
              <div className={styles.halfInput + " mr-lg-2"}>
                <p className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}>
                  Name of Company
                </p>
                <Input
                  type="text"
                  cssModule={StylesForm}
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={this.state.email || window.localStorage.getItem("email1")}
                  onChange={this.handleInputChange}
                  required
                  invalid={this.state.errors.nameOfCompany.value}
                />
                <FormFeedback>
                  {this.state.errors.nameOfCompany.text}
                </FormFeedback>
              </div>
              <div className={styles.halfInput + " ml-lg-2"}>
                <p className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}>
                  Country
                </p>
                <Input
                  type="text"
                  cssModule={StylesForm}
                  className={this.props.field && "blue"}
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                  required
                  invalid={this.state.errors.country.value}
                />
                <FormFeedback>{this.state.errors.country.text}</FormFeedback>
              </div>
            </FormGroup>
            {!this.props.field && (
              <FormGroup
                className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-3 px-3 "}
              >
                <div className={styles.halfInput + " mr-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Email
                  </p>
                  <Input
                    type="text"
                    cssModule={StylesForm}
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                    invalid={this.state.errors.email.value}
                  />
                  <FormFeedback>{this.state.errors.email.text}</FormFeedback>
                </div>
                <div className={styles.halfInput + " ml-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Phone
                  </p>
                  <Input
                    type="phone"
                    cssModule={StylesForm}
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    required
                    invalid={this.state.errors.phone.value}
                  />
                  <FormFeedback>{this.state.errors.phone.text}</FormFeedback>
                </div>
              </FormGroup>
            )}
            {!this.props.field && (
              <FormGroup className={"mt-3 d-flex justify-content-center "}>
                <div className={styles.halfInput + " mr-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Linkedin
                  </p>
                  <Input
                    type="text"
                    cssModule={StylesForm}
                    className={this.props.field && "blue"}
                    name="linkedin"
                    id="linkedin"
                    placeholder="Linkedin"
                    value={this.state.linkedin}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
            )}
            {!this.props.field && (
              <div className=" pl-4 d-flex justify-content-center">
                <FormGroup className={" mt-0 ml-3"}>
                  <Label check className={"m-0 p-0 w-100"}>
                    <Input
                      type="checkbox"
                      value={this.state.check}
                      onChange={this.handleInputChange}
                      required
                      invalid={this.state.errors.check.value}
                    />
                    <p className={styles.subtittleDark}>
                      Accept{" "}
                      <a href={"./PrivacyPolicy"} className={styles.subtittle}>
                        Privacy Policy
                      </a>
                    </p>
                  </Label>
                  <FormFeedback>{this.state.errors.check.text}</FormFeedback>
                </FormGroup>
              </div>
            )}
            <div className=" mt-0 d-flex justify-content-center">
              <Button
                disabled={!this.state.validator}
                text="SEND"
                color="greenNav"
                disable
              />
            </div>
          </Form>
        )
      case "Apply":
        return (
          <Form onSubmit={this.onFormSubmit} className="py-4 py-lg-0">
            <FormGroup className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-0 px-3 "}>
              <div className={styles.halfInput + " mr-lg-2"}>
                <p className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}>
                  Name
                </p>
                <Input
                  type="text"
                  cssModule={StylesForm}
                  className={this.props.field && "blue"}
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                  invalid={this.state.errors.name.value}
                />
                <FormFeedback>{this.state.errors.name.text}</FormFeedback>
              </div>
              <div className={styles.halfInput + " ml-lg-2"}>
                <p className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}>
                  Country
                </p>
                <Input
                  type="text"
                  cssModule={StylesForm}
                  className={this.props.field && "blue"}
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                  required
                  invalid={this.state.errors.country.value}
                />
                <FormFeedback>{this.state.errors.country.text}</FormFeedback>
              </div>
            </FormGroup>
            {!this.props.field && (
              <FormGroup
                className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-3 px-3 "}
              >
                <div className={styles.halfInput + " mr-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Email
                  </p>
                  <Input
                    type="text"
                    cssModule={StylesForm}
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={window.localStorage.getItem("email1")}
                    onChange={this.handleInputChange}
                    required
                    invalid={this.state.errors.email.value}
                  />
                  <FormFeedback>{this.state.errors.email.text}</FormFeedback>
                </div>
                <div className={styles.halfInput + " ml-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Phone
                  </p>
                  <Input
                    type="phone"
                    cssModule={StylesForm}
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    required
                    invalid={this.state.errors.phone.value}
                  />
                  <FormFeedback>{this.state.errors.phone.text}</FormFeedback>
                </div>
              </FormGroup>
            )}
            {!this.props.field && (
              <div className=" pl-4 d-flex justify-content-center">
                <FormGroup className={" mt-0 ml-3"}>
                  <Label check className={"m-0 p-0 w-100"}>
                    <Input
                      type="checkbox"
                      value={this.state.check}
                      onChange={this.handleInputChange}
                      required
                      invalid={this.state.errors.check.value}
                    />
                    <p className={styles.subtittleDark}>
                      Accept{" "}
                      <a href={"./PrivacyPolicy"} className={styles.subtittle}>
                        Privacy Policy
                      </a>
                    </p>
                  </Label>
                  <FormFeedback>{this.state.errors.check.text}</FormFeedback>
                </FormGroup>
              </div>
            )}
            <div className={" mt-0 d-flex justify-content-center"}>
              <Button
                disabled={!this.state.validator}
                text="SEND"
                color="greenNav"
                disable
              />
            </div>
          </Form>
        )
      case "Affiliate":
        return (
          <Form onSubmit={this.onFormSubmit} className="py-4 py-lg-0">
            <FormGroup className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-0 px-3 "}>
              <div className={styles.halfInput + " mr-lg-2"}>
                <p className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}>
                  Name of Company
                </p>
                <Input
                  type="text"
                  cssModule={StylesForm}
                  className={this.props.field && "blue"}
                  name="nameOfCompany"
                  id="nameOfCompany"
                  placeholder="Name of company"
                  value={this.state.nameOfCompany}
                  onChange={this.handleInputChange}
                  required
                  invalid={this.state.errors.nameOfCompany.value}
                />
                <FormFeedback>
                  {this.state.errors.nameOfCompany.text}
                </FormFeedback>
              </div>
              <div className={styles.halfInput + " ml-lg-2"}>
                <p className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}>
                  Country
                </p>
                <Input
                  type="text"
                  cssModule={StylesForm}
                  className={this.props.field && "blue"}
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                  required
                  invalid={this.state.errors.country.value}
                />
                <FormFeedback>{this.state.errors.country.text}</FormFeedback>
              </div>
            </FormGroup>
            {!this.props.field && (
              <FormGroup
                className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-3 px-3 "}
              >
                <div className={styles.halfInput + " mr-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Email
                  </p>
                  <Input
                    type="text"
                    cssModule={StylesForm}
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                    invalid={this.state.errors.email.value}
                  />
                  <FormFeedback>{this.state.errors.email.text}</FormFeedback>
                </div>
                <div className={styles.halfInput + " ml-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Phone
                  </p>
                  <Input
                    type="phone"
                    cssModule={StylesForm}
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    required
                    invalid={this.state.errors.phone.value}
                  />
                  <FormFeedback>{this.state.errors.phone.text}</FormFeedback>
                </div>
              </FormGroup>
            )}
            {!this.props.field && (
              <FormGroup className={"mt-3 d-flex justify-content-center "}>
                <div className={styles.halfInput + " mr-lg-2"}>
                  <p
                    className={styles.textGrey + " pb-0 pt-0 m-0 p-0  mx-auto"}
                  >
                    Linkedin
                  </p>
                  <Input
                    type="text"
                    cssModule={StylesForm}
                    className={this.props.field && "blue"}
                    name="linkedin"
                    id="linkedin"
                    placeholder="Linkedin"
                    value={this.state.linkedin}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
            )}
            {!this.props.field && (
              <div className=" pl-4 d-flex justify-content-center">
                <FormGroup className={" mt-0 ml-3"}>
                  <Label check className={"m-0 p-0 w-100"}>
                    <Input
                      type="checkbox"
                      value={this.state.check}
                      onChange={this.handleInputChange}
                      required
                      invalid={this.state.errors.check.value}
                    />
                    <p className={styles.subtittleDark}>
                      Accept{" "}
                      {
                        <a
                          href={TermsPublish}
                          target="_blank"
                          className={styles.subtittle}
                        >
                          Terms and Conditions{" "}
                        </a>
                      }{" "}
                      and{" "}
                      <a href={"./PrivacyPolicy"} className={styles.subtittle}>
                        Privacy Policy
                      </a>
                    </p>
                  </Label>
                  <FormFeedback>{this.state.errors.check.text}</FormFeedback>
                </FormGroup>
              </div>
            )}
            <div className=" mt-0 d-flex justify-content-center">
              <Button
                disabled={!this.state.validator}
                text="SEND"
                color="greenNav"
                disable
              />
            </div>
          </Form>
        )
      default:
        return <h1>Shit</h1>
    }
  }
  render(props) {
    return <div>{this.typeForm(props)}</div>
  }
}

export default Formulario
