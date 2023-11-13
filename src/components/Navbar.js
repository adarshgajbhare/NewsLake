import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Navbar = (props) => {
    const handleCountryChange = (e) => {
        props.onCountryChange(e.target.value);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" id="glass">
                <div className="container-fluid">
                    <img src={logo} alt="" />
                    <Link className="navbar-brand" to="/">NEWSLAKE</Link>
                    {/* <Link className="navbar-brand" id="h2-feed" to="/">FEED</Link> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-color">
                            <li className="nav-item">  <Link className="nav-link" to="/general">GENERAL</Link> </li>
                            <li className="nav-item">  <Link className="nav-link" to="/business">BUSINESS</Link> </li>
                            <li className="nav-item">  <Link className="nav-link" to="/entertainment ">ENTERTAINMENT</Link> </li>
                            <li className="nav-item">  <Link className="nav-link" to="/health">HEALTH</Link> </li>
                            <li className="nav-item">  <Link className="nav-link" to="/science">SCIENCE</Link> </li>
                            <li className="nav-item">  <Link className="nav-link" to="/sports">SPORTS</Link></li>
                            <li className="nav-item">  <Link className="nav-link" to="/technology">TECHNOLOGY</Link></li>
                            <li className="nav-item country-toggle">
                                <FormControl fullWidth sx={{
                                    color: 'red'
                                }}>
                                    <InputLabel id="demo-simple-select-label" sx={{
                                        color: 'rgba(255, 255, 255, 0.6) ',
                                    }}></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={props.country}
                                        label="Country"
                                        onChange={handleCountryChange}
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            color: 'black',
                                            fontSize: '1rem',
                                            height: '32px',
                                            width: '100px',
                                            position: 'absolute',
                                            top: '8px',
                                            left: '10px',
                                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                            '& .MuiSelect-select': {
                                                borderRadius: 8,
                                                background: 'transparent',
                                                color: 'white',
                                                '&:focus': {
                                                    backgroundColor: 'transparent',
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem value="in" sx={{
                                            color: 'blue',
                                            fontWeight: '600',
                                        }}>INDIA</MenuItem>
                                        <MenuItem value="us" sx={{
                                            color: 'blue',
                                            fontWeight: '600',
                                        }}>USA</MenuItem>
                                        <MenuItem value="jp" sx={{
                                            color: 'blue',
                                            fontWeight: '600',
                                        }}>JAPAN</MenuItem>
                                        <MenuItem value="cn" sx={{
                                            color: 'blue',
                                            fontWeight: '600',
                                        }}>CHINA</MenuItem>
                                        <MenuItem value="gb" sx={{
                                            color: 'blue',
                                            fontWeight: '600',
                                        }}>UK</MenuItem>
                                        <MenuItem value="RU" sx={{
                                            color: 'blue',
                                            fontWeight: '600',
                                        }}>RUSSIA</MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
