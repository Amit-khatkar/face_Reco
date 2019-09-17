import React, { Component } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "react-html5-camera-photo/build/css/index.css";
import Navigation from "../../components/Navigation";
import { FaLock, FaUnlock } from 'react-icons/fa';
import CameraModal from "../../components/camera";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      isCameraVisible: false,
      isLocked: false,
    };
    this.onTakePhoto = this.onTakePhoto.bind(this);
  }

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log(dataUri);
    this.setState({ isCameraVisible: false, image: dataUri, isLocked: true });

  }

  render() {
    const {isLocked} = this.state;
    return (
      <>
        <Navigation />
        <div
          style={{
            alignItems: "center",
            height: "100vh",
            width: "20vw",
            minWidth: '200px',
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            margin: '0 auto',
          }}
        >
          <Button
            onClick={() => this.setState({ isCameraVisible: true })}
            variant="primary"
            style={{ width: '100%' }}
          >
            Open Camera
          </Button>
          <div style={{ marginTop: 20 }}>
            {isLocked ? <FaLock color="#007bff"  size={50}/> : <FaUnlock color="#007bff"  size={50}/>}
          </div>
          <div style={{ marginTop: 20 }}>
          <p>Current Status: {isLocked ? 'Locked' : "Unlocked"}</p>
          </div>
        </div>
        <CameraModal
          onTake={this.onTakePhoto}
          onHide={() => this.setState({ isCameraVisible: false })}
          isVisible={this.state.isCameraVisible}
        />
      </>
    );
  }
}
