import {useState} from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (username: string, password: string) => {
    // Implement login logic here
  };

  const logout = () => {
    setUser(null);
  };

  return {user, login, logout};
};

export default useAuth;
