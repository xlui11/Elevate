import ElevateIcon from "../assets/ElevateIcon.svg"

import MainButton from "./MainButton.jsx"

const Navbar = () => {
    return (
        <nav className="w-full flex justify-between md:px-[64px]">
            <img src={ElevateIcon} alt="Elevate's signature logo" className="w-[168px] h-[182px]"/>
            <ul className="flex gap-[80px] items-center px-[16px] text-xl">
                <li className="p-[12px] uppercase"><a href="#about">About us</a></li>
                <li className="p-[12px] uppercase"><a href="#subjects">Subjects</a></li>
                <MainButton buttonText="Enrol now" location="#contacts"/>

            </ul>
        </nav>
    );
};

export default Navbar;
