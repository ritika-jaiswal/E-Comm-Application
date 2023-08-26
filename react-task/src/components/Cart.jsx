import React from "react";
import axios from "axios";
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import GroupedButtons from "./QuantityButton";
import { Card } from "@mui/material";
const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const getCartData = () => {
        
        axios
        .get(
            'https://fakestoreapi.com/carts/5',
        )
        .then((response) => {
            setCartData(response.data);
            console.log(response)

        })
}
React.useEffect(() => {
    getCartData();
},[]);
    return (
      
        <div className="flex-col h-screen w-screen px-4 items-center mt-6  ">
              <Card >
            <div className="h-10 w-screen ml-4 font-semibold text-20px py-3">
            Shoping Cart
            </div>
            <Divider sx={{ borderBottomColor: "black", mx: "14px" }} />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary={"User Id : " + cartData.userId }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {"Date : " + cartData.date}
              </Typography>
              {cartData.products&&cartData.products.map((value) => {
                return(<> 
                <br/>
                 {"Product Id : " + value.productId}
                 <br/>
                 {"Quantity : " }
               {<GroupedButtons/>}
               <br/>
                </>
    
                )
          
              })}
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <br/>
               
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
 
    </Card> 
        </div>
       
    )
}
export default Cart;