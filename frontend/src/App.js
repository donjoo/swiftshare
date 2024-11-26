// import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/protectedroutes/privateroutes";
import Logout from "./components/Logout";
import RequestDelivery from "./pages/Delivery/RequestDelivery";
import DeliveryList from "./pages/Delivery/Deliverylist";
import DeliverySearch from "./pages/Delivery/Courier/SearchDelivery";

function Signin(){
  // localStorage.clear()
  return <Login />
}

function RegisterAndLogout()  {
  // localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>


        {/* <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        /> */}

        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/" element={<Home />}/>
        <Route path="/logout" element={<Logout />} /> {/* Redirects and clears localStorage */}     
        <Route path="/request-delivery" element={<RequestDelivery />} />
        <Route path="/deliverylist" element={< DeliveryList />} />
        <Route path="/deliverysearch" element = {< DeliverySearch />} />

         </Routes>
    </BrowserRouter>
  );
}

export default App;
