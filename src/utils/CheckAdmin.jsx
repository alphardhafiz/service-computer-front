import jwt_decode from 'jwt-decode';

const CheckAdmin = (token) => {
  if (token) {
    const decodedToken = jwt_decode(token);
    return decodedToken.role === 'admin';
  }
  return false;
};

export default CheckAdmin;
