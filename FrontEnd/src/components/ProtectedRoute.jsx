import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for the current user asynchronously
    setUser(netlifyIdentity.currentUser());

    // Subscribe to the login and logout events
    netlifyIdentity.on('login', user => setUser(user));
    netlifyIdentity.on('logout', () => setUser(null));

    // Clean up the event listeners when the component unmounts
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  if (user === null) {
    // If user is null, we're still determining the login status
    return <div>Checking login status...</div>;
  }

  if (!user) {
    // If there is no user, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, proceed to the requested route
  return children;
};

export default ProtectedRoute;
