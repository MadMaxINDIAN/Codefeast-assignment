import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const TodoComponent = (props) => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");

    console.log(items)

    return (
        <>
            <center>
                <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "10px", maxWidth: "300px" }}>
                    <Typography style={{ fontSize: "28px", fontWeight: "600" }}>TO DO LIST</Typography>
                    <Grid container spacing={2} style={{ padding: "5px 10px 5px 5px", marginBottom: "20px" }}>
                        <Grid item xs={9}>
                            <TextField
                                required
                                id="outlined-required"
                                placeholder="New Task"
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                                value={value}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" fullWidth style={{ height: "100%" }} onClick={() => {
                                setItems([...items, value]);
                                setValue("");
                            }}>
                                <AddIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider />
                    {items.map((item, index) => (
                        <Grid key={index} container spacing={2} style={{ padding: "5px 10px 5px 5px" }}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    placeholder="New Task"
                                    disabled
                                    value={item}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button color="warning" variant="contained" fullWidth style={{ height: "100%" }}>
                                    Update
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button color="error" variant="contained" fullWidth style={{ height: "100%" }}>
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            </center>
        </>
    )
}

export default TodoComponent;