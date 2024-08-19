import React, { useState, useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import "./style.scss";
import Logo from '../../../assets/Logo/1000018120-transformed.jpeg'
import Menu from "./Menu";

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const controlNavbar = () => {
            if(window.scrollY > 200){
                if(window.scrollY > lastScrollY){
                    setShow("hide")
                } else {
                    setShow("show")
                }
            } else {
                setShow("top")
            }
            setLastScrollY(window.scrollY)
        }
        window.addEventListener("scroll", controlNavbar)

        return () => window.removeEventListener("scroll", controlNavbar)
    }, [lastScrollY])


    return (
        <header className="bg-gray-300 p-4">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="cursor-pointer" onClick={() => navigate("/")}>
                    <img src={Logo} className="rounded-full w-[80px] h-[70px]" alt="LOGO" />
                </div>
                <Menu />
            </div>
        </header>
    );
};

export default Header;