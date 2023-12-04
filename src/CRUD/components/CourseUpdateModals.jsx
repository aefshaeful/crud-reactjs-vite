import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CourseUpdateModals = ({ show, handleClose, handleSubmit, data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function untuk mengirim data course baru
  const submitData = () => {
    const submitPayload = {
      id: data.id,
      title,
      description,
    };

    console.log("submit", submitPayload);
    handleSubmit(submitPayload);
  };

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
  }, [data]);

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
              defaultValue={data.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setDescription(e.target.value)} //Untuk mengambil value dari input
              defaultValue={data.description}
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

export default CourseUpdateModals;

CourseUpdateModals.propTypes = {
  show: PropTypes.bool.isRequired, // Assuming 'show' is a boolean
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
