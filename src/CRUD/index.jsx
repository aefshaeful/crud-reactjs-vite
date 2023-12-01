import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModals from "./components/CourseCreateModals";
import { useEffect, useState } from "react";
import courseService from "./utils/services";

export default function AppCRUD() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const handleShowCreateModal = () => {
    setShowCreateModal(!showCreateModal)
  };

  const handleNewCourse = (payload) => {
    courseService.addCourses(payload)
    handleShowCreateModal()
    fetchCourses()
  };

  const fetchCourses = () => {
    const result = courseService.getCourses();
    console.log('result', result); // Melakukan pengecekan API
    setCourses(result.data); // Menyesuaikan dengan response dari API
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  return (
    <Container style={{padding: '50px'}}>
      <Row>
        <Col md={{ offset: 2, span: 8 }}>
          <h3 style={{marginBottom: '20px'}}>Course Management</h3>
          <Button variant="primary" style={{marginBottom: '10px'}} onClick={handleShowCreateModal}>Add</Button>
          <Table striped bordered hover>
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
                    <td>Edit | Hapus</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CourseCreateModals show={showCreateModal} handleClose={handleShowCreateModal} handleSubmit={handleNewCourse} />
    </Container>
  );
}
