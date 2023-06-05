import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";

const CardElement = ({ post, part }) => {
    const { photoCover, title, slug, authors: author } = post;
    return (
        <Grid item xs={12} sm={6} md={part === 'author' ? 3 : 4}>
            <Card sx={{ borderRadius: '5px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                {author &&
                    <CardHeader
                        avatar={
                            <Avatar src={author.avatar.url} alt={title} />
                        }
                        title={<Typography variant='p' component='p' color='text.secondary'>{author.name}</Typography>} />}

                <CardMedia component="img"
                    src={photoCover.url}
                    alt={slug}
                    title={title}
                    sx={{ height: '250px' }} />

                <CardContent sx={{ paddingBottom: "10px" }}>
                    <Typography variant="h6" component="h3" fontWeight={600}>{title}</Typography>
                </CardContent>

                <CardActions sx={{ paddingBottom: "20px" }}>
                    <Link to={`/weblogs/${slug}`} style={{ width: '100%' }}>
                        <Button variant='outlined' sx={{ width: '100%', fontWeight: 'bold', borderRadius: '30px' }}>Read Weblog</Button>
                    </Link>
                </CardActions>
            </Card>

        </Grid>
    )
};

export default CardElement;
