import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row, 
  Col,
  Modal,
  ModalBody,
} from 'reactstrap';
import styles from "./header.module.scss"
import Button from "./../elements/button"
import Formulario from "../elements/form"
import StylesModal from "../../styles/modal.scss"

  const NavbarI = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  return (
    
    <Row className={styles.navIbanContainer + " m-0 w-100 "}>
      <Col xs="12" className={"p-0 d-flex align-items-center"}>
        <Navbar
          color="light"
          expand="md"
          className=" d-flex justify-content-around align-items-center h-100 w-100 p-0"
        >
          <NavbarBrand href="/" className=" pl-4">
            <img
              alt="menu-logo"
              src={"/images/logos/sunday-market-place-logo-green.png"}
              className={styles.brand + " py-2 py-md-0"}
            />
          </NavbarBrand>
          
          <NavbarToggler onClick={toggle} className={styles.navbarTogglerIcon} />
          <Collapse
            isOpen={isOpen}
            navbar
          >
            <Nav
              navbar
              className="d-flex justify-content-around align-items-center w-100"
            >
              <NavItem>
                <NavLink href="/howItWorks" className={styles.tittle}>How it works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/invest" className={styles.tittle}>Invest</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/security" className={styles.tittle}>Security</NavLink>
              </NavItem>
              <NavItem className={"d-flex justify-content-around align-items-center"}>
                <div className={"mr-2 mr-sm-0"}>
                  <Button color="greenNav" text="Signup"
                    href="https://app.secureuserarea.com/register/email?profileType=personal&lang=es" />
                </div>
                <div>
                  <Button color="greenNav" text="Login"
                    href="https://app.secureuserarea.com/personal" />
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
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
            <Formulario field={props.field} type="Apply" />
          </div>
          <div className="d-lg-none mx-auto">
            <Formulario field={props.field} type="Apply" />
          </div>
        </ModalBody>
      </Modal>
    </Row>
  )
}
const GridHeader = props => {
  return (
    <div className="nav">
      <NavbarI className="" />
    </div>
  )
}

export default props => (
  <header>
    <GridHeader active={props.active} />
  </header>
)