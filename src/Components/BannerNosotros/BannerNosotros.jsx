import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"
import '../BannerNosotros/BannerNosotros.css';
import Location from '../../assets/Location.png'
import Team from '../../assets/Teamwork.png'
import AgusYFlor from '../../assets/FyA DecoArte(Flor y Agus).jpg'


function BannerNosotros() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: "",
                }}
            >
                <Container >
                    <Typography variant="h2" component="h1" gutterBottom>
                        <div className='title_nosotros'>
                            FyA DecoArte
                        </div>
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        <div className='description_nosotros__1'>
                            Es una empresa familiar que inicia sus actividades en wl año 2019, dedicada a la elaboración de mermeladas endulzadas con jugo de uva concentrado y dirigida por Ingenieros en Alimentos.
                        </div>
                    </Typography>
                </Container>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'Column',
                    background: "",
                }}
            >
                <Container >
                    <div className='container_location'>
                        <Grid container>
                            <Grid item xs={12} md={6} lg={6} justifyContent="center" display={"flex"}>
                                <img src={Location} alt="Location" />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    <Typography variant="h2" component="h1" gutterBottom>
                                        <div className='title_location'>
                                            Ubicados
                                        </div>
                                    </Typography>
                                    <div className='location'>
                                        Ubicada en el departamento Santa Lucia, provincia de San Juan Argentina.
                                    </div>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Container>

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: "",
                }}
            >
                <Container>
                    <Typography variant="h5" component="h2" gutterBottom>
                        <div className='description_nosotros__1'>
                        Realizamos mate pintados a mano, mediante material en crudo, de la más alta calidad, madurez óptima y tamaño.          </div>
                    </Typography>
                </Container>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Container>
                    <Typography variant="h2" component="h1" gutterBottom>
                        <div className='title_nosotros'>
                            Nuestro compromiso
                        </div>
                    </Typography>
                    <div className='container_compromiso'>
                        <Grid container>
                            <Grid item xs={12} md={6} lg={6} display="flex" alignItems={"center"}>
                                <Typography variant="h1" component="h2" gutterBottom>
                                    <div className='description_nosotros'>
                                        Sabemos lo importante que es conservar una salud óptima a través una alimentación sana y natural, es por eso que nuestros productos son elaborados con materia prima de excelente calidad,
                                        obteniendo productos de sabores únicos, especiales para satisfacer a los paladares más exigentes, que eligen con dedicación cada producto que llevan a su mesa, permitiéndoles experimentar una sensación única de bienestar personal.
                                    </div>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={6} lg={6} justifyContent="center" display={"flex"} paddingY="60px">
                                <img src={Team} alt="Team" />
                            </Grid>
                        </Grid>
                    </div>
                </Container>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Container>
                    <div className='container_perfil'>
                        <Grid container>
                            <Grid item xs={12} md={6} lg={6} display="flex" justifyContent={"flex-end"}>
                                <div className='perfil'>
                                    <img src={AgusYFlor} alt="Ana Gerente" />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} paddingY="70px">

                                <Typography variant="h1" component="h1" gutterBottom marginTop={"100px"} className="Card_perfil">
                                    Fundadoras
                                </Typography>
                                <Typography variant="h5" component="h2" gutterBottom marginTop={"25px"} className="Card_perfil">
                                    Agustina Burguez Sosa
                                </Typography>
                                <Typography variant="h5" component="h2" gutterBottom marginTop={"25px"} className="Card_perfil">
                                    Florencia Burguez Sosa
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Container>

            </Box>


        </>
    )
}

export default BannerNosotros
