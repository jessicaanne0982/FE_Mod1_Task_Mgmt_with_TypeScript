import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "../components/PageLayout";
import { Col, Button } from "react-bootstrap";
import TaskComponent from "../components/TaskComponent";

const DashboardPage: React.FC = () => {
    const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();

    if (!isAuthenticated) {
        return <div>Not authenticated</div>
    }
    if (!user) {
        return <div>No User Profile</div>
    }

    getAccessTokenSilently().then(token => console.log('token', token))

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    };

    return (
        <PageLayout>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="mb-5">Welcome, {user.name}!</h1>
                <Button variant="outline-danger mb-5" onClick={handleLogout}>
                    Logout
                </Button>
            </div>

            <Col>
                <h2 className="text-center">Dashboard</h2>
                <TaskComponent />
            </Col>

            
        </PageLayout>
    );
};

export default DashboardPage;