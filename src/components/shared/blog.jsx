import { useQuery } from "@apollo/client";
import React, { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_DETAILS } from "../../graphql/queries";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { styled } from "styled-components";
import sanitizeHtml from 'sanitize-html';
import Loader from "./loader";
import CommentForm from "../commentForm";
import Comments from "./comments";

const BlogImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: -4px 2px 15px rgba(0,0,0,0.1);
 
`;

const Blog = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { loading, data, error } = useQuery(GET_BLOG_DETAILS, {
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
    const { title, authors: author, photoCover, content } = data.post;

    return (
        <Container maxWidth='lg' sx={{ minHeight: '78vh' }} className="blog-container">
            <Grid container>
                {/* HEADER */}
                <Grid item xs={12} mt={5} display='flex' alignItems='center'>
                    <ArrowBackRounded fontSize="large" onClick={() => navigate(-1)} className="blog-arrow-icon" />
                    <Typography variant='h4' component='h1' color='primary' className="blog-main-title">{title}</Typography>
                </Grid>

                {/* BLOG COVER */}
                <Grid item xs={12} mt={4} textAlign='center'>
                    <BlogImage src={photoCover.url} alt={title} />
                </Grid>

                {/* AUTHOR INFO */}
                <Grid item xs={12} mt={4} display='flex' alignItems='center'>
                    <Avatar src={author.avatar.url} alt={author.name} sx={{ width: '80px', height: '80px', marginRight: 2 }} />
                    <Box component='div'>
                        <Link to={`/authors/${author.slug}`}>
                            <Typography variant='h5' component='p' fontWeight="bold">{author.name}</Typography>
                        </Link>
                        <Typography variant='p' component='p' color='text.secondary' mt={1}>{author.field}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={4} >
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }} style={{ fontSize: '1.2rem', color: '#444', lineHeight: 2.2 }}></div>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <CommentForm slug={slug} />
                </Grid>
                <Grid item xs={12}>
                    <Comments slug={slug} />
                </Grid>
            </Grid>
        </Container >
    )
};

export default Blog;
