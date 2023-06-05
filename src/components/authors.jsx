import React from "react"
import { GET_AUTHORS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Box, Card, CardHeader, Divider, Grid, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Authors = () => {
    const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

    if (loading) return (
        <>
            <Skeleton variant="text" sx={{ fontSize: '3rem', marginBottom: '1.5rem' }} width='150px' />
            <Card sx={{ background: "#f7f7f7" }}>
                <CardHeader
                    avatar={

                        <>
                            <Skeleton animation="wave" variant="circular" width={50} height={50} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem', marginLeft: '10px' }} width={200} />
                        </>
                    } />
                <CardHeader
                    avatar={

                        <>
                            <Skeleton animation="wave" variant="circular" width={50} height={50} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem', marginLeft: '10px' }} width={200} />
                        </>
                    } />
                <CardHeader
                    avatar={

                        <>
                            <Skeleton animation="wave" variant="circular" width={50} height={50} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem', marginLeft: '10px' }} width={200} />
                        </>
                    } />
                <CardHeader
                    avatar={

                        <>
                            <Skeleton animation="wave" variant="circular" width={50} height={50} />
                            <Skeleton variant="text" sx={{ fontSize: '1.4rem', marginLeft: '10px' }} width={200} />
                        </>
                    } />

            </Card>
        </>
    )
    if (error) return null;

    const { authors } = data;
    return (
        <>


            <Typography variant="h5" fontWeight='bold' component='h3' mb={3}> Authors</Typography>
            <Grid container sx={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                {authors.map((author, index) => (
                    <Grid item xs={12} key={author.id}>
                        <Link to={`/authors/${author.slug}`} style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
                            <Avatar src={author.avatar.url} alt={author.name} sx={{ marginRight: 2, width: '55px', height: '55px' }} />
                            <Typography variant="p" component='p' color='text.secondary'>{author.name}</Typography>
                        </Link>
                        {index !== authors.length - 1 && <Divider variant="middle" />}
                    </Grid>
                ))}
            </Grid>
        </>
    )
};

export default Authors;
