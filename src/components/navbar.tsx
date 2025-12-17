"use client";
import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar: React.FC = () => {
    return (
        <AppBar position = "static">
            <Toolbar>
                <Typography variant = "h6" style = {{ flexGrow: 1 }}>
                    Webby Assessment
                </Typography>
                <Button color = "inherit" component = { Link } href = "/">
                    Home
                </Button>
                <Button color = "inherit" component = { Link } href = "/about">
                    About
                </Button>
                <Button color = "inherit" component = { Link } href = "/tasks">
                    Tasks
                </Button>
                <Button color = "inherit" component = { Link } href = "/listing">
                Listing
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;