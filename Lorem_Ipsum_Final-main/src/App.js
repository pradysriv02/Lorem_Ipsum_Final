import { Stack } from "@mui/system"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import "./App.css"
import LoginPage from "./Components/register";
import App2 from "./App2";
import { useDispatch, useSelector } from "react-redux";
import state, { setLoginModal } from "./state";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./Assets/theme";
import { useMemo } from "react";
import { light } from "@mui/material/styles/createPalette";
import Cart from "./Components/Cart";
import Pay from "./Components/Pay";


function App() {
	const theme = useMemo(() => createTheme(themeSettings()),[]);
	const isAuth = useSelector((state) => state.token);
	return (
		<>
			<Stack direction='column' sx={{ backgroundColor: "beige", height:"100vh" }}>
				<BrowserRouter>
				<ThemeProvider theme={theme}>
				<Routes>
					{/* <Route path="/login" element={isAuth? <App2 />: <LoginPage />} /> */}
					<Route path="/" element={<App2 />} />
					<Route path="/pay" element={<Pay />} />
				</Routes>
				</ThemeProvider>
				</BrowserRouter>
			</Stack>
		</>
	)
}

export default App
