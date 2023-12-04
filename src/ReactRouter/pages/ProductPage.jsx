import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { httpService } from "../utils/services";

const ProductPage = () => {
  const [productList, setProductList] = useState([]);

  const fetchProduct = async () => {
    const response = await httpService.get("/product");
    console.log("response", response);
    setProductList(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Container
      style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {productList.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <p>$ {item.price}</p>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ProductPage;
