import { Container } from "react-bootstrap";
import "./PageLayout.css";

type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <Container className="page-layout-container text-center">
                <div className="content-wrapper mx-auto">
                    {children}
                </div>
        </Container>
    )
};

export default PageLayout;