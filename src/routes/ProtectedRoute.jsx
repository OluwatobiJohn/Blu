import { Navigate, Outlet } from "react-router-dom";
// import jwtDecode from "jwt-decode";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";

// const isTokenValid = (token) => {
//   try {
//     const decoded = jwtDecode(token);
//     console.log(decoded);
//     const currentTime = Math.floor(Date.now() / 1000);

//     if (decoded.exp < currentTime) {
//       console.error("Token has expired");
//       toast.info("Token has expired");
//       localStorage.clear();
//       return false;
//     }

//     return true;
//   } catch (error) {
//     console.error("Token decoding failed:", error);
//     toast.error("Token decoding failed");
//     return false;
//   }
// };

const ProtectedRoute = () => {
  //   const token = Cookies.get("hitchpayjwt");
  //   if (token && isTokenValid(token)) {
  //     return <Outlet />;
  //   } else {
  //     return <Navigate to="/auth/login" />;
  //   }
  return <Outlet />;
};

export default ProtectedRoute;
