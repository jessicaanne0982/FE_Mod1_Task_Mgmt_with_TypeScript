import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "../components/PageLayout";

const CallbackPage: React.FC = () => {
    const { error } = useAuth0();

    if (error) {
        return <div>Error - {error.message}</div>;
    }

    return (
        <PageLayout>
            <h1>Call back Page</h1>
        </PageLayout>
    );
};

export default CallbackPage;