import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {IconButton, Typography} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import {Link as RouterLink, useNavigate} from "react-router-dom"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Navbar, Container, Nav, Carousel } from 'react-bootstrap'
import './mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export const MainPage = () => {
    const navigate = useNavigate()
    function makeAppointment() {
        
        const googleFormUrl = "https://forms.gle/BALhrnCF8CmRDVWo7";
        
        
        window.open(googleFormUrl, "_blank");
      }

    return (
        <>
            <main>
                <section id="home">
                    <Carousel>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 h-70"
                                src="https://cdn.discordapp.com/attachments/1125374453220638731/1133366802211160114/inabatron_a_brown_haired_girl_in_a_whimsical_cozy_fairy_tale_ci_0c03d64d-75c6-4210-a6cd-5f9f46608760.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                taspa

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-70"
                                src="https://cdn.discordapp.com/attachments/1125374453220638731/1133366012536954890/inabatron_a_brown_haired_girl_in_a_whimsical_cozy_fairy_tale_ci_b20ce78f-a972-411e-9d07-a8e14b49f428.png"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                taspa

                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </section>

                <section id="about">
                    <div class="container-fluid bg-light text-dark p-5">
                        <div class="container bg-light p-5">
                            <h1 class="display-4 fw-bold">Қосымша жайлы</h1>

                            <p> Ағылшын тілі білімін арттыруға тағы бір қадам. </p>
                            <p>
                                Қазақ тілді азаматшалар мен азаматтарға арналған, жасанды зият қолданатын, қосымша.
                            </p>
                            <Button
                                variant="outline-primary"
                                onClick={makeAppointment}
                            >Қосымшаны жүктеп аламын!</Button>{' '}
                        </div>
                    </div>
                </section>



            </main>

            <footer>
                <Container>
                    <p className='text-center'>by Inabat with love, 2023</p>

                </Container>

            </footer>

        </>
    );
}
