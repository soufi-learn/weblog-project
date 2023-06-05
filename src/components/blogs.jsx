import React from "react"
import { GET_BLOGS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import CardElement from './shared/blogCard';
import { Card, CardHeader, Grid, Skeleton, Typography } from "@mui/material";

const Blogs = () => {
    const { loading, data, error } = useQuery(GET_BLOGS_INFO);

    if (loading) return (
        <>
            <Skeleton variant="text" sx={{ fontSize: '3rem', marginBottom: '1.5rem' }} width='150px' />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ background: "#f7f7f7" }}>
                        <CardHeader
                            avatar={

                                <>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                    <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                                </>
                            } />
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                        <Skeleton variant="rounded" sx={{ borderRadius: '50px', margin: '1rem auto' }} width='85%' height='35px' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ background: "#f7f7f7" }}>
                        <CardHeader
                            avatar={

                                <>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                    <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                                </>
                            } />
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                        <Skeleton variant="rounded" sx={{ borderRadius: '50px', margin: '1rem auto' }} width='85%' height='35px' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ background: "#f7f7f7" }}>
                        <CardHeader
                            avatar={

                                <>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                    <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                                </>
                            } />
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                        <Skeleton variant="rounded" sx={{ borderRadius: '50px', margin: '1rem auto' }} width='85%' height='35px' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ background: "#f7f7f7" }}>
                        <CardHeader
                            avatar={

                                <>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                    <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                                </>
                            } />
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                        <Skeleton variant="rounded" sx={{ borderRadius: '50px', margin: '1rem auto' }} width='85%' height='35px' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ background: "#f7f7f7" }}>
                        <CardHeader
                            avatar={

                                <>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                    <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                                </>
                            } />
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                        <Skeleton variant="rounded" sx={{ borderRadius: '50px', margin: '1rem auto' }} width='85%' height='35px' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ background: "#f7f7f7" }}>
                        <CardHeader
                            avatar={

                                <>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                    <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                                </>
                            } />
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '10px' }} width={200} />
                        <Skeleton variant="rounded" sx={{ borderRadius: '50px', margin: '1rem auto' }} width='85%' height='35px' />
                    </Card>
                </Grid>
            </Grid>
        </>
    )
    if (error) return <h2 style={{ color: 'red' }}>There is problem honey :)</h2>

    return (
        <>

            <Typography variant="h5" fontWeight='bold' component='h3' mb={3}> Weblogs</Typography>
            <Grid container spacing={2}>
                {data.posts.map(post => <CardElement key={post.id} post={post} />)}
            </Grid>
        </>
    )
};

export default Blogs;
