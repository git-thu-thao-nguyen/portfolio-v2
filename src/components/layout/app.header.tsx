/* eslint-disable @typescript-eslint/no-unused-vars */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useCurrentApp } from 'components/context/app.context';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';
import frFlag from 'assets/svg/language/fr.svg';
import enFlag from 'assets/svg/language/en.svg';
import { useState } from 'react';

type ThemeContextType = "light" | "dark";

function AppHeader() {

    const { theme, setTheme } = useCurrentApp();
    const [expanded, setExpanded] = useState(false);
    const { t, i18n } = useTranslation();

    const handleMode = (mode: ThemeContextType) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode);
        setTheme(mode);
        handleExpanded(false)
    }

    const renderFlag = (language: string) => {
        return (
            <img
                style={{ height: 20, width: 20 }}
                src={language === "en" ? enFlag : frFlag} alt={language}
            />
        )
    }

    const handleChangeLanguage = (langue: string) => {
        i18n.changeLanguage(langue)
        handleExpanded(false)
    }

    const handleExpanded = (value: boolean) => {
        setExpanded(value)
    }

    return (
        <Navbar
            data-bs-theme={theme}
            expand="lg"
            className="bg-body-tertiary"
            style={{ zIndex: 1 }}
            expanded={expanded}
            onToggle={(isExpanded) => handleExpanded(isExpanded)}
        >
            <Container>

                <Link className="navbar-brand" to="/">
                    <span className="font-mars">TTN</span>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/" onClick={() => handleExpanded(false)}>
                            {t("appHeader.home")}
                        </NavLink>
                        <NavLink className="nav-link" to="/project" onClick={() => handleExpanded(false)}>
                            {t("appHeader.project")}
                        </NavLink>
                        {/* <NavLink className="nav-link" to="/about" onClick={() => handleExpanded(false)}>
                            {t("appHeader.about")}
                        </NavLink> */}
                    </Nav>

                    <Nav className="ms-auto">
                        <div className='nav-link' style={{ cursor: "pointer" }}>
                            {theme === "light" ?
                                <MdOutlineLightMode
                                    onClick={() => handleMode("dark")}
                                    style={{ fontSize: 20 }}
                                />
                                :
                                <MdNightlight
                                    onClick={() => handleMode("light")}
                                    style={{ fontSize: 20 }}
                                />
                            }
                        </div>

                        {/* <NavDropdown title={renderFlag(i18n.resolvedLanguage!)}>
                            <div
                                onClick={() => handleChangeLanguage("fr")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={frFlag} alt='français'
                                />
                                <span>Français</span>
                            </div>
                            <div
                                onClick={() => handleChangeLanguage("en")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={enFlag} alt='english'
                                />
                                <span>English</span>

                            </div>
                        </NavDropdown> */}

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default AppHeader;
