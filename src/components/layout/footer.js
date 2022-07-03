import React, { useState } from "react"
import styles from "./footer.module.scss"
import {
  Row,
  Col,
  Modal,
  ModalBody,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import ReferFriendTermsConditions from "./../../../static/docs/ReferFriendTermsConditions2.pdf"
import UserAgreement from "./../../../static/docs/UserAgreement.pdf"
import Formulario from "../elements/form"
import StylesModal from "../../styles/modal.scss"

const GridFooter = props => {
  const [modal3, setModal3] = useState(false)
  const toggleModal3 = () => setModal3(!modal3)

  const [modal2, setModal2] = useState(false)
  const toggleModal2 = () => setModal2(!modal2)

  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  return (
    <Row className="m-0 mt-0 mt-md-0">
      <section className={styles.sectionDark}>
        <Row className="p-0 m-0 mx-5">
          <Col
            xs="12"
            lg="4"
            className="justify-content-center justify-content-around align-items-center"
          >
            <div
              className={
                styles.iconcontainer +
                "container my-auto d-flex justify-content-start mx-0 mx-lg-0 px-5 px-lg-0"
              }
            >
              <img
                src="/images/logos/sunday-market-place-logo-green.png"
                alt="Card"
                className={styles.ibanLogo + " "}
              />
            </div>
            <div className="d-flex flex-column">
                <span className={styles.powered + " pb-0 pt-0 w-100  mx-auto"}>
                  <a onClick={toggleModal}>
                  For investors
                  </a>
                </span>
                <span className={styles.powered + " pb-0 pt-0 w-100  mx-auto"}>
                  <a onClick={toggleModal2}>
                  For lending companies
                  </a>
                </span>
                <span className={styles.powered + " pb-0 pt-0 w-100  mx-auto"}>
                  <a onClick={toggleModal3} >
                  Affiliate program
                  </a>
                </span>
            </div>
          </Col>
          <Col
            xs="12"
            lg="4"
            className="justify-content-center justify-content-around align-items-center h-100"
          >
            <div className="d-flex justify-content-center flex-column my-5 mx-lg-5 px-5">
              <h4
                className={
                  styles.powered + " pb-0 pt-0 w-100  mx-auto"
                }
              >
                About us
              </h4>
              <span
                className={
                  styles.powered + " pb-0 pt-0 w-100  mx-auto"
                }
              >
                <a href="/howItWorks">How it works</a>
              </span>
              <span
                className={
                  styles.powered + " pb-0 pt-0 w-100  mx-auto"
                }
              >
                <a href="/security">Security</a>
              </span>
              <span
                className={
                  styles.powered + " pb-0 pt-0 w-100  mx-auto"
                }
              >
                <a href="/risk">Risk</a>
              </span>
              <span
                className={
                  styles.powered + " pb-0 pt-0 w-100  mx-auto"
                }
              >
                <a href="/pspInfo">PSP info</a>
              </span>
            </div>
          </Col>
          <Col
            xs="12"
            lg="4"
            className="justify-content-center justify-content-around align-items-center"
          >
            <div className="d-flex justify-content-center flex-column my-5">
              <h4
                className={
                  styles.powered + " pb-0 pt-0 w-100  mx-auto"
                }
              >
                Support
              </h4>
              <span
                className={
                  styles.powered + " pb-0 pt-0 w-100  mx-auto"
                }
              >
                <a href="">info@mysundaymarketplace.com</a>
              </span>
            </div>
          </Col>
        </Row>
      </section>
      <section className={styles.sectionDarkLigth}>
        <Col
          className="text-justify px-3 px-lg-5 py-4 d-flex align-items-center justify-content-center"
          sm="12"
          md="12"
        >
          <small>
            <span className={styles.powered}>
              <a href={UserAgreement} target="_blank" >User Agreement</a> <a href={"./PrivacyPolicy"} className="mx-4">Privacy policy</a>{" "}
              <a href={ReferFriendTermsConditions} target="_blank" >Refer-a-Friend T&C</a>
              <br />
              <br />
              © 2020 All rights reserved. By using our website you agree to the
              use of cookies in accordance with our Privacy and Cookies policy.
              <br />
              <br />
              “Sundaymarketplace” is a
              company registered in the Commercial Register of the Republic of
              Estonia under registration No. 14580113, with legal address at
              Jarvevana tee 9-40, Tallinn, Harju maakond, 11314, Estonia.
              Sundaymarketplace is not regulated under any financial services license.
              Sundaymarketplace is a global online marketplace for loans. When
              you invest on Sundaymarketplace, you buy claim rights for loan
              receivables and those are not deposits. Investments in loan
              receivables are subject to risks. Your capital is at risk and is
              not protected by any financial services compensation scheme. You
              should carefully evaluate the risks and diversify investments.
            </span>
          </small>
        </Col>
      </section>
      <Modal isOpen={modal} cssModule={StylesModal} toggle={toggleModal}>
        <div className="text-right py-3 px-4">
          <img
            src="/images/icons/x-blue.svg"
            className={styles.hoverCursor}
            alt="close icon"
            onClick={toggleModal}
          />
        </div>
        <div className={styles.iconcontainer + " my-auto d-flex justify-content-center"}>
              <img
              src="/images/logos/sunday-market-place-logo-green.png"
              alt="Card"
              className={styles.ibanLogoModal + " pr-0 pl-md-5"}
              />
        </div>
        <ModalBody className="px-3 my-3">
          <h1
            className={styles.subtittle + " py-3 font-weight-bold text-center"}
          >
            Do you want to apply?
          </h1>
          <div className="d-none d-lg-block mx-auto">
            <Formulario field={props.field} type={"Apply"}/>
          </div>
          <div className="d-lg-none mx-auto">
            <Formulario field={props.field} type={"Apply"}/>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal2} cssModule={StylesModal} toggle={toggleModal2}>
        <div className="text-right py-3 px-4">
          <img
            src="/images/icons/x-blue.svg"
            className={styles.hoverCursor}
            alt="close icon"
            onClick={toggleModal2}
          />
        </div>
        <div className={styles.iconcontainer + " my-auto d-flex justify-content-center"}>
              <img
              src="/images/logos/sunday-market-place-logo-green.png"
              alt="Card"
              className={styles.ibanLogoModal + " pr-0 pl-md-5"}
              />
        </div>
        <ModalBody className="px-3 my-3">
          <h1
            className={styles.subtittle + " py-3 font-weight-bold text-center"}
          >
            Do you want to apply?
          </h1>
          <div className="d-none d-lg-block mx-auto">
            <Formulario field={props.field} type={"Companies"}/>
          </div>
          <div className="d-lg-none mx-auto">
            <Formulario field={props.field} type={"Companies"}/>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal3} cssModule={StylesModal} toggle={toggleModal3}>
        <div className="text-right py-3 px-4">
          <img
            src="/images/icons/x-blue.svg"
            className={styles.hoverCursor}
            alt="close icon"
            onClick={toggleModal3}
          />
        </div>
        <div className={styles.iconcontainer + " my-auto d-flex justify-content-center"}>
              <img
              src="/images/logos/sunday-market-place-logo-green.png"
              alt="Card"
              className={styles.ibanLogoModal + " pr-0 pl-md-5"}
              />
        </div>
        <ModalBody className="px-3 my-3">
          <h1
            className={styles.subtittle + " py-3 font-weight-bold text-center"}
          >
            Do you want to apply?
          </h1>
          <div className="d-none d-lg-block mx-auto">
            <Formulario field={props.field}  type={"Affiliate"}/>
          </div>
          <div className="d-lg-none mx-auto">
            <Formulario field={props.field} type={"Affiliate"} />
          </div>
        </ModalBody>
      </Modal>
    </Row>
  )
}
export default props => (
  <footer className={styles.footerContainer}>
    <GridFooter />
  </footer>
)
