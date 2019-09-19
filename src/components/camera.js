import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const CameraModal = props => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.isVisible}
      onHide={props.onHide}
    >
      <Modal.Body>
        <Camera imageCompression={1} onTakePhoto={dataUri => props.onTake(dataUri)} />
      </Modal.Body>
    </Modal>
  );
};

export default CameraModal;
