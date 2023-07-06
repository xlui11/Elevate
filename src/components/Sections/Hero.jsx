import {SectionsWrapper} from "../../hoc/"

import {motion} from "framer-motion";

import HeroBooks from "../../assets/HeroBooks.svg"
import DownArrow from "../../assets/DownArrow.svg"

import MainButton from "../Reusables/MainButton.jsx"

const Hero = () => {
    return (
        <section>
            <section className="flex h-[86vh]  items-center gap-[80px] text-primary bg-line  bg-no-repeat bg-right-bottom bg-cover">
                <div className="text-center flex flex-col gap-[16px]">
                    <div>
                        <h1 className="text-[128px] uppercase tracking-wider">Elevate</h1>
                        <h2 className="text-[48px] uppercase tracking-wider mt-[-20px]">Tutoring</h2>
                    </div>
                    <h3 className="text-[32px]">Making learning easy & enjoyable</h3>
                    <div className="flex gap-[32px] py-[20px] px-[12px]">
                        <MainButton buttonText="Subject offerings" location="/"/>
                        <MainButton buttonText="Elevate your learning" location="/" primary/>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-left">
                            <p className="text-[24px]"><strong>500 students</strong></p>
                            <p className="text-[20px]">90 ATAR+</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[24px]"><strong>10 students</strong></p>
                            <p className="text-[20px]">Achieved state ranks (2022)</p>
                        </div>
                    </div>
                </div>
                <figure>
                    <img src={HeroBooks} alt="Stack of books to represent learning"/>
                </figure>
            </section>
            <a className="absolute md:bottom-8 hidden md:flex cursor-pointer md:w-[1440px] justify-center">
                <motion.div
                    animate={{y: [0, 28, 0]}}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        type: "tween"
                    }}
                >
                    <img className="w-8 h-8" src={DownArrow} alt="Clickable down arrow for next section"/>
                </motion.div>
            </a>
        </section>
    );
};


export default SectionsWrapper(Hero, "hero");
