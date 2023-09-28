import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Box, CardActionArea, Rating } from "@mui/material"
import image from "../../Assets/food.jpg"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useDispatch, useSelector } from "react-redux"
import  { setItems }  from "../../state"
import { Toaster, toast } from "react-hot-toast"

const SingleMenuCard = ({ item }) => {
	
	const _id = useSelector((state) => state?.user?._id);
	const token = useSelector((state) => state.token);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const getCartItems = async () => {
		const response = await fetch(`http://localhost:3001/cart/${_id}/get`, {
		  method: "GET",
		  headers: { Authorization: `Bearer ${token}` },
		});
		const ans = await response.json();
		dispatch(setItems({ items: ans }));
	  };
	  const handleClick = () => {
		const addItems = async() =>{
			const response = await fetch('http://localhost:3001/cart/add',{
				method:"POST",
				headers:{Authorization : `Bearer ${token}`,"Content-Type": "application/json"},
				body: JSON.stringify({id:user._id, itemId:item._id})
			}).then(() => {
				getCartItems();
				toast.success(`${item.name} Added to Cart!`);
			});
		};
		addItems();
	  }
	
	return (
		<>
		<Toaster />
		<Card
			elevation={4}
			sx={{
				minWidth: {
					sm: "23%",
				},
				maxWidth: {
					xs: "29%",
				},
				margin: ".5rem",
				borderRadius: "0",
			}}
		>
			<CardActionArea>
			
				<CardMedia
					component='img'
					sx={{
						height: {
							sm: "200px",
							xs: "100px",
						},
					}}
					image={image}
					alt={item.name}
				/>
				
				<CardContent
					sx={{
						display: "flex",
						textAlign: "center",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					
					<Rating
						name='read-only'
						value={parseInt(item.rating)}
						sx={{
							fontSize: "1em",
						}}
						readOnly
					/>
					
					<Typography
						sx={{
							fontFamily: "Sofia Sans Extra Condensed",
						}}
						variant='h4'
						component='div'
						color='var(--primary_clr)'
					>
						{`₹${item.price}`}
					</Typography>
					
					
					<Typography
						sx={{
							fontFamily: "Sofia Sans Extra Condensed",
							letterSpacing: ".2rem",
							fontSize: "1.1rem",
						}}
						color='#9a9a9a'
					>
						{item.name.toUpperCase()}
					</Typography>
					<Box position={"absolute"}
						 top={"0.8rem"}
						 left={"0.6rem"}
						 display={"flex"}
						 justifyContent={"space-between"}
						 >
							<i
						class='fa-solid fa-circle'
						style={{
							fontSize: ".7rem",
							
							padding: "0.125rem",
							border: `0.125rem solid ${
								item.veg === "true" ? "green" : "#a02929"
							}`,
							color: `${
								item.veg === "true" ? "green" : "#a02929"
							}`,
						}}
					></i>
					<Box position={"absolute"} left={"14rem"}  onClick = {handleClick}>
					<AddShoppingCartOutlinedIcon color="#"/>
					</Box>
					
					</Box>
					
					
				</CardContent>
			</CardActionArea>
		</Card>
		</>
		
	)
}

export default SingleMenuCard
