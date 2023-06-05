import { Box, Container } from "@mui/material";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { styled } from "styled-components";

const SpinnerWrapper = styled.div`
    transform: scale(1.7);
    @media screen and (max-width: 575px){
    transform: scale(1.3);
    }
`;

const Loader = () => {
    return (
        <Box component='div' mx='auto' mt={6} display='flex' justifyContent='center' alignItems='center'>
            <SpinnerWrapper>
                <InfinitySpin
                    width='200'
                    color="#555"

                />
            </SpinnerWrapper>

        </Box >
    )
};

export default Loader;
