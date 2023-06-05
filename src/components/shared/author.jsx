import React, { useEffect } from "react"
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_DETAILS } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import Loader from "./loader";
import CardElement from './blogCard';

const Author = () => {
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_AUTHOR_DETAILS, {
        variables: { slug }
    });

    // WHEN LOADING
    if (loading) return <div style={{ minHeight: 'calc(100vh - 166px)', display: 'flex', justifyContent: "center" }}>
        <Loader />
    </div>

    // WHEN ERROR
    if (error) return <div style={{ minHeight: 'calc(100vh - 166px)', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <h2 style={{ color: 'red' }}>There is a problem honey :)</h2>
    </div>

    // RECIEVE DATA
    const { name, field, description, image, posts } = data.author;

    return (
        <Container maxWidth='xl' sx={{ minHeight: '78vh' }}>

            <Grid container p={3} >
                <Grid item xs={12} md={7} display='flex' flexDirection='column' justifyContent='center'>
                    <Typography variant="h4" component='h4' mb={1} fontWeight="bold">{name}</Typography>
                    <Typography variant="p" component='p' color='text.secondary' mb={5}>{field}</Typography>
                    <Grid item>
                        <div dangerouslySetInnerHTML={{ __html: description.html }} style={{ lineHeight: 2 }}></div>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src={image.url} alt={name} width='100%' style={{ height: '670px', objectFit: "contain" }} />
                </Grid>
            </Grid>

            {/* AUTHOR BLOGS */}
            <Grid container mt={3} spacing={2}>
                <Grid item xs={12} mb={1}>
                    <Typography variant='h5' color='primary' component='h3'>{name} Blogs:</Typography>
                </Grid>
                {posts.map(post => <CardElement key={post.slug} post={post} part='author' />)}
            </Grid>
        </Container >
    )
};

export default Author;
