import React, { useContext, useState } from "react";
import { FavoriteRounded } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton, Modal, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { lovelyTextContext } from "../../context/lovelyTextProvider";


const Header = () => {
    const location = useLocation();
    const lovelyTexts = useContext(lovelyTextContext);
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);



    const changeText = () => {
        setOpen(true);
        const index = Math.floor(Math.random() * lovelyTexts.length);
        setText(lovelyTexts[index])
    }

    const handleClose = () => {
        setOpen(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 2,
    };

    return (
        <AppBar position='sticky' color='primary' className="main-header">
            <Container maxWidth='xl'>
                <Toolbar sx={{ height: '65px !important' }} >
                    <Link to='weblogs' style={{ flex: "1" }}>
                        <Typography variant='h4' component='h2' color='white.main' className="header-title">Soufi Weblog</Typography>
                    </Link>
                    {location.pathname === '/weblogs' &&
                        <IconButton color='white' title=':)' onClick={changeText}>
                            <FavoriteRounded />
                        </IconButton>
                    }
                </Toolbar>

                {/* MODAL TEXT BOX */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{ backdropFilter: 'blur(3px)' }}
                >
                    <Box sx={style}>
                        <Typography variant="h6" component="h2" textAlign='center' mb={2}>
                            :)
                        </Typography>
                        <Typography className="modal-text" textAlign='center'>
                            {text.text}
                        </Typography>
                    </Box>
                </Modal>
            </Container>
        </AppBar>
    )
};

export default Header;
