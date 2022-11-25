import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Gambar from "./image.jpeg";

function App() {
  return (
    <>
      <Container
        className={`fluid py-5`}
        style={{ backgroundColor: "#E8E8E8" }}
      >
        <Container>
          <Row>
            <Col md={`12 text-center`} xs={`12 text-center`}>
              <h1>Grid System</h1>
            </Col>
          </Row>
          <Row className="py-3">
            <Col lg={`6 text-end`} md={6} sm={`12`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </Col>
            <Col lg={`5 offset-lg-1`} md={6} sm={`12`}>
              Lorem Test Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="fluid py-5">
        <Container>
          <Row>
            <Col md="12 text-center">
              <h1>My Galery</h1>
              <p>Foto Collection since 2000</p>
            </Col>
          </Row>
          <Row>
            <Col lg="2" md="4  mt-3" sm="6" xs={`12 text-center`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
            <Col lg="2" md="4 mt-3" sm="6" xs={`12 text-center`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
            <Col lg="2" md="4 mt-3" sm="6" xs={`12 text-center`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
            <Col lg="2" md="4 mt-3" sm="6" xs={`12 text-center`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
            <Col lg="2" md="4 mt-3" sm="6" xs={`12 text-center`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
            <Col lg="2" md="4 mt-3" sm="6" xs={`12 text-center`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
          </Row>
          <Row className="my-3">
            <Col lg={`3 offset-lg-0`} md={`5 mt-3 offset-md-1`} sm={`12`}>
              <Image src={Gambar} className="img-fluid" width={`100%`} />
            </Col>
            <Col lg={`3`} md={`5 mt-3`} sm={`12`}>
              <Image src={Gambar} className="img-fluid" width={`100%`} />
            </Col>
            <Col lg={`3 offset-lg-0`} md={`5 mt-3 offset-md-1`} sm={`12`}>
              <Image src={Gambar} className="img-fluid" width={`100%`} />
            </Col>
            <Col lg={`3`} md={`5 mt-3`} sm={`12`}>
              <Image src={Gambar} className="img-fluid" width={`100%`} />
            </Col>
          </Row>
          <Row>
            <Col md="3 offset-md-3" sm={`6`} xs={`12 text-center  mt-3`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
            <Col md="3" sm={`6 `} xs={`12 text-center mt-3`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        className="my-3 py-5 fluid"
        style={{ backgroundColor: "#E8E8E8" }}
      >
        <Container>
          <Row>
            <Col md="12 text-center">
              <h1>Layout Website</h1>
              <p>with grid system bootstrap 5</p>
            </Col>
          </Row>
          <Row className="align-items-center pt-3">
            <Col lg={`4`} md={`6`} sm={`12 text-center mt-3`}>
              <Image src={Gambar} className="img-fluid" />
            </Col>
            <Col lg={`4`} md={`6`} sm={`12 text-center mt-3`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </Col>
            <Col
              lg={`2 offset-lg-1`}
              md={`12 text-center mt-4`}
              sm={`12 text-center mt-3`}
            >
              <Button>let's start</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
