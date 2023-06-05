import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../graphql/mutations";

// TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";

const CommentForm = ({ slug }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [commentText, setCommentText] = useState('');
    const [pressed, setPressed] = useState(false);
    const [isCommenting, setIsCommenting] = useState(false);

    // SEND COMMENT TO POST
    const [sendComment, { data, error }] = useMutation(SEND_COMMENT, {
        variables: { name, email, comment: commentText, slug }
    });


    // VALIDATION FORM INPUTS
    const setCommentHandler = () => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name === '') {
            toast.error("Please enter your name!", {
                position: 'top-left'
            });
        } else if (!email.toLowerCase().match(emailRegex)) {
            toast.error("Please enter valid email!", {
                position: 'top-left'
            });
        }
        else if (commentText === '') {
            toast.error("Please enter comment!", {
                position: 'top-left'
            });
        } else {
            setPressed(true);
            setIsCommenting(true);
            sendComment();
        }
    }

    // WHEN COMMENT SENT SUCCESSFULY
    if (data && pressed) {
        toast.success('Comment Sent! It will show when accepted by soufi joon 😊', {
            position: 'top-left'
        });

        setPressed(false);
        setIsCommenting(false);
        // clear inputs after sending comment
        setName('');
        setEmail('');
        setCommentText('');

    }

    return (
        <Grid id='commentForm' container sx={{
            boxShadow: '0 4px 12px rgba(0, 0, 0 ,.2)',
            borderRadius: 2,
            p: 2,
            mt: 5
        }
        }>
            <Grid item xs={12}>
                <Typography variant='h5' component='h4' mb={3} color='primary'>Comment form</Typography>
            </Grid>
            <Grid item xs={12} my={2}>
                <TextField variant="outlined"
                    label='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ width: '100%', background: '#f9f9f9' }} />
            </Grid>

            <Grid item xs={12} my={2}>
                <TextField variant="outlined"
                    label='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ width: '100%', background: '#f9f9f9' }} />
            </Grid>

            <Grid item xs={12} my={2}>
                <TextField variant="outlined"
                    label='comment'
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    sx={{ width: '100%', background: '#f9f9f9' }}
                    multiline
                    minRows={4} />
            </Grid>

            <Grid item xs={12} my={2}>
                {/* <Button variant="contained" color='primary' onClick={setCommentHandler}>Send Comment</Button> */}
                <LoadingButton
                    size='medium'
                    endIcon={<Send />}
                    loading={isCommenting}
                    loadingPosition="end"
                    variant="contained"
                    onClick={() => setCommentHandler()}
                >
                    <span>Add Comment</span>
                </LoadingButton>
            </Grid>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </ Grid>
    );
}

export default CommentForm;