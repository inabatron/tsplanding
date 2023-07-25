import React, {Suspense} from "react";
import './App.css';
import {Container} from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom"
import { AppLayout } from "./components/layout/app-layout"
import {NotificationContainer} from "react-notifications"


export const App = () => (
    // !! UNCOMMENT UserProvider
    
        <Suspense fallback={null}>
            <Container className="page-container">
                <Router>
                    <AppLayout />
                    <NotificationContainer/>
                </Router>
            </Container>
        </Suspense>
     
)

