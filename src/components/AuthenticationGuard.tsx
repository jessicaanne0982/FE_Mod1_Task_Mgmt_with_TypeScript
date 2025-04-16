import { withAuthenticationRequired } from "@auth0/auth0-react";

type AuthenticationGuardProps = {
    component: React.ReactNode | any;
}

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({component}) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <div>Redirecting you to the Log In page...</div>,
    })

    return (
        <Component />
    );
};

export default AuthenticationGuard;