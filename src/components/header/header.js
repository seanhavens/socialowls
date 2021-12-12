import React from "react";

import Logo from '../../assets/owl.png'
import il from '../../assets/OPENSEA_Banner.png'

//import css
import './header.css';

import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';


import './footer.css';

//import social icons
import { BsTwitter,
        BsDiscord,
        BsInstagram } from 'react-icons/bs';
//import components
import YButton from "../basic/YButton";
function onMintClick() {
    document.getElementById("mint").scrollIntoView();
    // alert("Your dick is hard!");
}
function onTeamClick() {
    document.getElementById("team").scrollIntoView();
}
function onRoadClick() {
    document.getElementById("roadmap").scrollIntoView();
}
function onWhitelistClick() {
    document.getElementById("whitelist").scrollIntoView();
}

function onSocialsClick() {
    document.getElementById("socials").scrollIntoView();
}

function openSea() {
    window.open("https://opensea.io/"); 
}
class Header extends React.Component {
    render() {
        return (
            <>

                <div className='header-control'>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img src={Logo} width={100} height={100} alt='logo' />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Link style={{fontWeight: 900}}
                                        onClick={onMintClick} >MINT</Nav.Link>
                                    {/* <Nav.Link style={{fontWeight: 900}}
                                        onClick={onTeamClick} >ARTIST</Nav.Link> */}
                                    <Nav.Link style={{fontWeight: 900}}
                                        onClick={onRoadClick}>ROADMAP</Nav.Link>
                                    {/* onClick={() => window.location.replace('/#roadmap')} >ROADMAP</Nav.Link> */}
                                
                                    {/* <Nav.Link style={{fontWeight: 900}}
                                        onClick={onWhitelistClick} >JUNK MAIL</Nav.Link> */}
                                    {/* <Nav.Link> */}
                                    
                                    <Nav.Link style={{fontWeight: 900}}
                                        onClick={openSea}>OPENSEA</Nav.Link>
                                        <text style={{width: 20}}></text>
                                        <div>
                       <a style={{textDecoration: "none", color:"white", paddingRight: 10}}target="_blank" rel="noopener noreferrer"href="https://instagram.com/socialowlsnft"> <BsInstagram size={32} /></a>
                       <a style={{textDecoration: "none", color:"white", paddingLeft: 10, paddingRight: 10}}target="_blank" rel="noopener noreferrer"href="https://twitter.com/socialowlsnft"> <BsTwitter size={32} /></a>
                       <a style={{textDecoration: "none", color:"white", paddingLeft: 10}}target="_blank" rel="noopener noreferrer"href="https://discord.gg/D2GEzhzygy"> <BsDiscord size={32} />   </a>     
                    </div>
                                        {/* <a href="https://google.com/"><YButton text='OPENSEA' /></a>
                                    </Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className='header-content'>
                        <h1><img className="thePicture" src={il}/></h1>
                    <div className='header-content-buttons-container'>
                        {/* <YButton text='DISCORD' /> &nbsp;
                        <YButton text='TWITTER' /> */}
                    </div>
                    </div>
                    <div></div>
                </div>
            </>
        );
    }
}

export default Header;