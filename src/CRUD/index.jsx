import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModals from "./components/CourseCreateModals";
import { useEffect, useState } from "react";
import courseService from "./utils/services";
import "/src/index.css";
import CourseUpdateModals from "./components/CourseUpdateModals";
import CourseDeleteModals from "./components/CourseDeleteModals";

export default function AppCRUD() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [courses, setCourses] = useState([]);

  // Function untuk menampilkan modal create
  const handleShowCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  // Function untuk menambahkan data course dan di simpan dalam local storage
  const handleNewCourse = (payload) => {
    courseService.addCourses(payload);
    handleShowCreateModal();
    fetchCourses();
  };

  // Function untuk menampilkan modal update
  const handleShowUpdateModal = (itemCourse) => {
    setSelectedCourse(itemCourse);
    setShowUpdateModal(true);
  };

  // Function untuk menutup modal update
  const handleCloseUpdateModal = () => {
    setSelectedCourse({});
    setShowUpdateModal(false);
  };

  // Function untuk mengupdate data course dan di simpan dalam local storage
  const handleUpdateCourse = (payload) => {
    const { id, ...others } = payload;
    courseService.updateCourses(id, others);
    fetchCourses();
    handleCloseUpdateModal();
  };


  // Function untuk menampilkan modal delete
  const handleShowDeleteModal = (courseItem) => {
    setSelectedCourse(courseItem);
    setShowDeleteModal(true);
  };

  // Function untuk menutup modal delete
  const handleCloseDeleteModal = () => {
    setSelectedCourse({});
    setShowDeleteModal(false);
  };

  // Function untuk menghapus data course dan di simpan dalam local storage
  const handleDeleteCourse = () => {
    courseService.deleteCourses(selectedCourse.id);
    fetchCourses();
    handleCloseDeleteModal();
  };

  // Function untuk mengambil data course dan di maping ke dalam table
  const fetchCourses = () => {
    const result = courseService.getCourses();
    console.log("result", result); // Melakukan pengecekan API
    setCourses(result.data); // Menyesuaikan dengan response dari API
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container style={{ padding: "50px" }}>
      <Row>
        <Col md={{ offset: 2, span: 8 }}>
          <h3 style={{ marginBottom: "20px" }}>Course Management</h3>
          <Button
            variant="primary"
            style={{ marginBottom: "10px" }}
            onClick={handleShowCreateModal}
          >
            Add
          </Button>
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => {
                return (
                  <tr key={course.id}>
                    <td>{index + 1}</td>
                    <td>{course.title}</td>
                    <td>{course.description}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleShowUpdateModal(course)}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="danger" 
                        style={{ marginLeft: "10px" }}
                        onClick={() => handleShowDeleteModal(course)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CourseCreateModals
        show={showCreateModal}
        handleClose={handleShowCreateModal}
        handleSubmit={handleNewCourse}
      />
      <CourseUpdateModals
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        handleSubmit={handleUpdateCourse}
        data={selectedCourse}
      />
      <CourseDeleteModals 
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        onAgree={handleDeleteCourse}
      />
    </Container>
  );
}
