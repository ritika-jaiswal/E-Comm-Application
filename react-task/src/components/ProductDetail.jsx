import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { border } from '@mui/system';

export default function ProductDetail() {
    const history = useNavigate();
    const [data, setData] = React.useState([]);
    const [filter, setFilter] = React.useState("");
    const handleChange = (id) => {
        history(`/product/${id}`);
    }
    const getProductList = () => {
        axios
            .get(
                `https://fakestoreapi.com/products`,
            )
            .then((response) => {
                setData(response.data);
            })
    }
    React.useEffect(() => {
        getProductList();
    }, []);


    return (
        <div>
            <h2 className='flex h-10 bg-gradient-to-tl from-green-400 to-indigo-900 font-semibold text-white justify-center items-center'>Product List</h2>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for Product Name" title="Type Product Name " style={{variant:"outlined" , border:"2" }} 
                className='px-3 ml-3 my-4' onChange={(e) => setFilter(e.target.value)}></input>
            {
                data && data.filter((data) => data.title.toLowerCase().includes(filter)).map((value) => {
                    return (
                        <div className='container mt-2'>
                            <NavLink to={`/product/${value.id}`}>
                                <List sx={{ width: '100%', maxWidth: 'full', bgcolor: 'background.paper', cursor: 'pointer' }} >
                                    <ListItem alignItems="flex-start">
                                        <div className='w-40 h-40 shadow-md' style={{ maxWidth: 300 }}>
                                            <img alt="Remy Sharp" src={value.image} width="100" height="100" />
                                        </div>
                                        <div className='flex shadow-md h-40  w-full pl-4'>
                                            <ListItemText
                                                primary={"Product Title : " + value.title}
                                                onClick={handleChange}
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {"Product Price : " + value.price}
                                                        </Typography>
                                                        <br />
                                                        {"Product Category : " + value.category}
                                                        <br />
                                                        {"Product Description : " + value.description}
                                                    </React.Fragment>
                                                }
                                            />
                                        </div>

                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            </NavLink>
                        </div>
                    );
                })}
        </div>
    );
}