import React from 'react';

const AuthContext = React.createContext({
    sessionToken: '',
    setToken: () => {},
});

export default AuthContext;