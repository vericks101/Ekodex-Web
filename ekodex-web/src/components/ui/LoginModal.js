import React from '../../../node_modules/react';
import Button from '../../../node_modules/react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { Nav } from 'react-bootstrap';
import LoginForm from './LoginForm';

function LoginLink() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Nav.Link eventKey="1" onClick={() => setModalShow(true)}>
          Login
        </Nav.Link>
  
        <LoginModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default LoginLink;