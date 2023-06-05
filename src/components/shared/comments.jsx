import { useQuery } from "@apollo/client";
import React, { useRef } from "react"
import { GET_BLOG_COMMENTS } from "../../graphql/queries";
import { Alert, Avatar, Box, Button, Grid, Typography } from "@mui/material";

const Comments = ({ slug }) => {

    const { loading, data, error } = useQuery(GET_BLOG_COMMENTS, {
        variables: {
            slug
        }
    });

    // SCROLL TO COMMENT FORM WHEN CICK TO ADD COMMENT BUTTON
    const scrollToComment = () => {
        const commentForm = document.querySelector('#commentForm');
        const yOffset = -80;
        const y = commentForm.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' })
    }

    if (data) return (
        <Grid container sx={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', mt: 8, borderRadius: 2, p: 1 }}>
            <Grid item xs={12} m={1}>
                <Typography variant='h5' component='h4' mb={3} color='primary'>Comments</Typography>
                {data.comments.length === 0 &&
                    <div>
                        <Alert severity="info" sx={{ alignItems: 'center' }}>
                            <Typography variant='p' component='p' color='#777'>There is no comment for this blog!</Typography>
                        </Alert>
                        <Button variant='text' sx={{ marginTop: 2 }} onClick={scrollToComment}> Add Comment</Button>
                    </div>
                }

                {data.comments.map(comment => (
                    <Grid item xs={12} key={comment.id} m={2} bgcolor='#f8f8f8' p={2} border='1px solid silver' borderRadius={2} >
                        <Grid container>
                            <Box component='div' sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                                <Avatar sx={{ marginRight: 1 }}>{comment.name[0].toUpperCase()}</Avatar>
                                <Typography variant='h6' component='h5'>{comment.name}</Typography>
                            </Box>
                        </Grid>
                        <Typography variant='p' component='p' color='#777'>{comment.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    )
};

export default Comments;
