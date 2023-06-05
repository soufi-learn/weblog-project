import { FavoriteRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react"

const Footer = () => {
    return (
        <div>
            <Typography variant='p' component='p' color='primary' bgcolor='#f7f7f7' p={1.5} textAlign='center' mt={6}>
                Weblog Project | Created By Tahsin Soufizade <FavoriteRounded />
            </Typography>
        </div>
    )
};

export default Footer;
