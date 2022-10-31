import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { get } from "../utils/apiHelper";

const Product = (props) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        get("https://jsonplaceholder.typicode.com/photos", null)
            .then(res => {
                setState(res.data.slice(0, 100))
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (<>
        <Grid container spacing={1}>
            {
                state.map((item, index) => (<>
                    {index % 5 === 0 && index !== 0 && (
                        <Grid key={`${index}_0`} item xs={1}>
                        </Grid>
                    )}
                    {index % 5 === 0 && (
                        <Grid key={`${index}_1`} item xs={1}>
                        </Grid>
                    )}
                    <Grid key={index} item xs={2}>
                        <div>
                            <img src={item.url} style={{ width: "100%", maxWidth: "200px" }} />
                            <Typography>{item.id}</Typography>
                            <Typography style={{ fontWeight: "600", fontSize: "20px" }} >{item.title}</Typography>
                        </div>
                    </Grid>
                </>
                ))
            }
        </Grid>
    </>)
};

export default Product;