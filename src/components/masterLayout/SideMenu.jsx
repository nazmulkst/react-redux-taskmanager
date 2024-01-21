import {Container, Row, Col, Navbar, Nav} from "react-bootstrap";


const SideMenu = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Container>
                        <Navbar className="fixed-top px-o shadow-sm">
                            <Navbar.Brand href="#">
                                <img src='../../src/assets/react.svg' height={30} width={30} className="align-top" />
                                &nbsp;
                                Task Manger
                            </Navbar.Brand>
                            <Nav className="me-auto fw-bold">
                                <Nav.Link href="/">Dashboard</Nav.Link>
                                <Nav.Link href="#">Create</Nav.Link>
                                <Nav.Link href="#">Completed</Nav.Link>
                                <Nav.Link href="#">Pending</Nav.Link>
                                <Nav.Link href="#">Update</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Container>
                    <div className="mt-6 col-auto col-sm-2 bg-dark d-flex flex-colum justify-content-between min-vh-100 bg-dark">
                        <div className="mt-2">
                            <a className="text-decoration-none d-flex align-items-conter text-white d-none d-sm-inline">
                                <span className="fs-4">Side Menu</span>
                            </a>
                            <hr  className="text-white d-none"/>
                            <ul className="nav nav-pills flex-column bg-dark">
                                <li className="nav-item text-white my-1">
                                    <a className="nav-link text-white " href="/">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="/Create">Create</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="/All">New</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="/Completed">Completed</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="/Progress">Progress</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="/Canceled">Canceled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-10 mt-6 d-flex flex-colum justify-content-between">
                        <div>{props.children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideMenu;