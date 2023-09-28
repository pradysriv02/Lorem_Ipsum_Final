import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Posts from "./Components/Posts";
import Bookings from "./Components/Bookings";
import Payments from "./Components/Payments";
import Footer from "./Components/Footer/Footer";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import state, { setItems, setLoginModal } from "./state";
import LoginPage from "./Components/register";
import { useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const App2 = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const open = useSelector((state) => state.loginModal);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCartItems = async () => {
      const response = await fetch(
        `http://localhost:3001/cart/${user?._id}/get`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setItems({ items: data }));
    };
    getCartItems();
  }, []);
  return (
    <Stack direction="column" sx={{ backgroundColor: "beige" }}>
      <Navbar />
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <LoginPage />
      </Modal>
      <Hero />
      <About />
      <Menu />
      <Posts />
      <Bookings />
      <Payments />
      <Footer />
    </Stack>
  );
};

export default App2;
