import { Row, Col, Container } from "react-bootstrap";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const HomePage: React.FC = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Row className="text-center">
                <Col>
                        <h1>Task Management Application</h1>
                        <h2>Log in to view your Dashboard</h2>
                        <LoginButton />
                        <LogoutButton />
                    </Col>
            </Row>
                
        </Container>
    );
};

export default HomePage;