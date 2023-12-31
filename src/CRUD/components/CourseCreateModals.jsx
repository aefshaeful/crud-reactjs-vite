import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CourseCreateModals = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function untuk mengirim data course baru
  const submitData = () => {
    const timeStamp = new Date().valueOf();
    const submitPayload = {
      id: timeStamp,
      title: title,
      description: description,
    };

    console.log("submit", submitPayload);
    handleSubmit(submitPayload);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="course title"
              autoFocus
              onChange={(e) => setTitle(e.target.value)} //Untuk mengambil value dari input
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setDescription(e.target.value)} //Untuk mengambil value dari input
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitData}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CourseCreateModals.propTypes = {
  show: PropTypes.bool.isRequired, // Assuming 'show' is a boolean
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CourseCreateModals;
