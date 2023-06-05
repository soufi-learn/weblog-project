import React, { useContext, useEffect } from "react"
import { Container, Grid } from "@mui/material";
import Blogs from "./blogs";
import Authors from "./authors";

const HomePage = () => {


    return (
        <Container maxWidth="xl" sx={{ minHeight: '82vh' }}>
            <Grid container spacing={4} p={3}>
                {/* BLOGS SECTION */}
                <Grid item xs={12} sm={7} md={9}>
                    <Blogs />
                </Grid>
                {/* AUTHORS SECTION */}
                <Grid item xs={12} sm={5} md={3}>
                    <Authors />
                </Grid>
            </Grid>
        </Container >
    )
};

export default HomePage;
