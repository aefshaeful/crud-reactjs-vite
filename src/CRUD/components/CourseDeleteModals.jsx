import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CourseDeleteModals = ({ show, handleClose, onAgree }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Cource</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure delete?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={onAgree}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseDeleteModals;

CourseDeleteModals.propTypes = {
  show: PropTypes.bool.isRequired, // Assuming 'show' is a boolean
  handleClose: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired,
};
