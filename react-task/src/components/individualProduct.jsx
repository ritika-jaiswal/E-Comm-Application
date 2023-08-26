import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import axios from 'axios';
import { useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { NavLink } from 'react-router-dom';

export default function IndividualProduct() {
    const [data,setData] = React.useState([]);
    const { id } = useParams();
    console.log(id);
    const getProductDetail = () => {
        axios
            .get(
                `https://fakestoreapi.com/products/${id}`,
            )
            .then((response) => {
                setData(response.data);
                console.log(response)

            })
    }
    React.useEffect(() => {
        getProductDetail();
    },[]);
  return (
    <Card>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
      <div className='flex w-60 h-60 shadow-md' sx={{width: "400"}}> 
          <img alt="Remy Sharp" src={data.image} width="400" height="400" />
        </div>
        <div className='flex ml-4 pl-4 pt-2 h-60 shadow-md'>
        <ListItemText
          primary={"Product Name : " + data.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* {"Rating : " + data.rating.rate&&data.rating.rate}<br/> */}
              </Typography>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {"Price : " + data.price}<br/>
              </Typography>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {"Category : " + data.category}<br/>
              </Typography>
              {"Description : " + data.description}
              <br/>
              <Button className=''> <NavLink to={`/cart`}>Add To Cart</NavLink></Button>
            </React.Fragment>
          }
        />
        
        </div>
      </ListItem>
     
      
    </List>

      {/* <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea> */}
    </Card>
  );
}