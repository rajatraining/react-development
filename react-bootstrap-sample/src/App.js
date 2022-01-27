import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Button,
  Breadcrumb,
  Card,
  CardImg,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Sample from "./components/Sample/Sample";
import LoopSample from "./components/LoopSample";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Greeting from "./components/Greeting";
import BookForm from "./components/BookForm/BookForm";
import BookFormHooks from "./components/BookFormHooks";

function App() {
  const tileprops = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to={"/newbook"}>New Book</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/useFormHook"}>New Book use Hooks</Link>
                </Nav.Link>

                <Nav.Link href="/greeting">Home</Nav.Link>
                <Nav.Link>
                  <Link to={"/sample"}>Click to Sample</Link>
                </Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <header className="App-header">
          <Routes>
            <Route path="/sample" element={<Sample />}>
              {" "}
            </Route>
            <Route path="/greeting" element={<Greeting />}></Route>
            <Route path="/newbook" element={<BookForm />}></Route>
            <Route path="/useFormHook" element={<BookFormHooks />}></Route>
          </Routes>
        </header>
      </BrowserRouter>

      {/* <Card style={{color:'red', width: '50%' }}>
          <Card.Img variant="top" src="https://picsum.photos/200/300" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}

      {/* <Breadcrumb>
          <Breadcrumb.Item active>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant="success">Test ALert</Alert>
        <Button>Test Buton</Button>

<Container>
        <Row>
          <Col>
          
          </Col>
          <Col>
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="image2.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          </Col>
          <Col>
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="image1.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          </Col>
        </Row>

</Container> */}
    </div>
  );
}

export default App;
