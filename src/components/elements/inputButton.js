import React, { useState } from "react"
import { Input, Modal, ModalBody } from "reactstrap"
import Button from "./button"
import StylesInput from "./inputButton.scss"
import styles from './inputbutton.module.scss'
import Formulario from "../elements/form"
import StylesModal from "../../styles/modal.scss"

const InputButton = props => {
  
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  const onChange = event => {
    localStorage.setItem('email1', event.target.value);
    //this.setValue(event.target.value);
  };

  
  
  return (
    <div className={styles.containerInput}>
      <div className={styles.inputset}>
      <Input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.holder}
        className={StylesInput }
        onChange={onChange}
        //value={email1}
      />
      </div>
      <div className={styles.containerbutton + " mx-auto"}>
        <Button
          text="Open account"
          color="greenNav"
          alt={props.alt}
          className={"py-3 "}
          onClick={toggleModal}
        />
      </div>
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
              className={styles.ibanLogo + " pr-0 pl-md-5"}
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
          <Formulario field={props.field} type="Apply"/>
        </div>
      </ModalBody>
    </Modal>
    </div>
    
  )

}

export default InputButton
