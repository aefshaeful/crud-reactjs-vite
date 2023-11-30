import { Col, Container, Row, Tab, Table } from "react-bootstrap";

export default function AppCRUD() {
  return (
    <Container>
      <Row>
        <Col md={{ offset: 2, span: 8 }}>
          <h1>Course Management</h1>
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
              <tr>
                <td>1</td>
                <td>Belajar React JS</td>
                <td>Belajar React JS itu mudah</td>
                <td>Edit | Hapus</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Belajar React JS</td>
                <td>Belajar React JS itu mudah</td>
                <td>Edit | Hapus</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Belajar React JS</td>
                <td>Belajar React JS itu mudah</td>
                <td>Edit | Hapus</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
