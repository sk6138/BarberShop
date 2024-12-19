import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginSignup = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  const handleLogin = (role) => {
    // You can pass role as query params or via the Auth0 rules
    loginWithRedirect({
      appState: { role },
    });
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <button onClick={() => handleLogin("user")}>Login as User</button>
        </div>
      ) : (
        <div>
          <h3>Welcome, {user.name}</h3>
          <p>Email: {user.email}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default LoginSignup;
