import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./Components/shared/Navigation/Navigation";
//import Register from "./pages/Register/Register";
//import Login from "./pages/Login/Login";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./Components/shared/Loader/Loader";
// const isAuth = false;
// const user = {
//   activated: true,
// };
function App() {
  // call refresh endpoint

  const { loading } = useLoadingWithRefresh();
  return loading ? (
    <Loader message="Loading, please wait.." />
  ) : (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        /> */}
        {/* 
        <Route element={<GuestRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Route> */}
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />

        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />

        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

//Reciving props as arguments
const GuestRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) {
    return <Navigate to="/rooms" />;
  } else {
    return children;
  }
};
const SemiProtectedRoute = ({ children }) => {
  //protected routes
  const { user, isAuth } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  } else if (isAuth && !user.activated) {
    return children;
  } else {
    return <Navigate to="/rooms" />;
  }
};

const ProtectedRoute = ({ children }) => {
  //protected routes
  const { user, isAuth } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  } else if (isAuth && !user.activated) {
    return <Navigate to="/activate" />;
  } else {
    return children;
  }
};

export default App;
