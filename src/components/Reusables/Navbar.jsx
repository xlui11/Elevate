import ElevateIcon from "../../assets/ElevateIcon.svg"

import MainButton from "./MainButton.jsx"

const Navbar = () => {
    return (
        <nav className="w-full flex justify-between md:px-[64px] md:max-w-[1440px] mx-auto md:py-[8px]">
            <img src={ElevateIcon} alt="Elevate's signature logo" className="w-[168px] "/>
            <ul className="flex gap-[80px] items-center px-[16px] text-xl">
                <li className="p-[12px] uppercase text-links"><a href="#about">About us</a></li>
                <li className="p-[12px] uppercase text-links"><a href="#subjects">Subjects</a></li>
                <MainButton buttonText="Enrol now" location="#contacts" primary/>

            </ul>
        </nav>
    );
};

export default Navbar;
