import {useEffect, useState} from "react"
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material"

import AdbIcon from "@mui/icons-material/Adb"



import {MainPage} from "../../main_page";




export  const AppLayout = () => {
    const [openLoginDialog, setOpenLoginDialog] = useState(false)
    const [anchorElUser, setAnchorElUser] = useState(null)
    
    const [index, setIndex] = useState(null)
    const [response, setResponse] = useState("")
    const navigate = useNavigate()

    

   

   

    

    useEffect(() => {
        console.log(index)
        if(index === 0) {
            navigate(`/patient/${response}`)
        } else if(index === 1) {
            navigate(`/doctor/${response}`)
        } else if(index === 2){
            navigate(`/doctor/${response}`)
        } else {
            console.log("for ")
            navigate('/')
        }
    }, [])

    return(
        <>
            <AppBar position="static" sx={{ backgroundColor: "#6F473B" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: "flex", mr: 1 }} /> */}
                        <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 1,
                                    display: "flex",
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "white",
                                }}
                            >
                                taspa
                            </Typography>
                        </Link>


                        <Box
                            sx={{
                                display: "flex",
                                flexGrow: 0,
                                flexDirection: "row",
                                p: 1,
                                m: 1
                            }}
                        >
                            <Button
                                    onClick={() => {
                                        navigate("/")
                                    }}
                                    sx={{ my: 2, color: "white", display: "block" }}
                            >
                                Home
                            </Button>
                            <Button href="#about"
                                    sx={{ my: 2, mr: 3, color: "white", display: "block", whiteSpace: "nowrap" }}
                            >
                                About us
                            </Button>

                           
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Routes>
                <Route path="/" exact element={<MainPage/>}/>
                
                
               


            </Routes>
           
        </>
    )
}