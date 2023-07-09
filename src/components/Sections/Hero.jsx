import {SectionsWrapper} from "../../hoc/"

import {motion} from "framer-motion";

import HeroBooks from "../../assets/HeroBooks.svg"
import DownArrow from "../../assets/DownArrow.svg"

import MainButton from "../Reusables/MainButton.jsx"

const Hero = () => {
    return (
        <section>
            <section className="flex lg:flex-row lg:py-0 lg:h-[86vh] lg:gap-[80px] lg:px-0 flex-col-reverse pt-[48px]  items-center text-primary bg-line bg-no-repeat lg:bg-right-bottom bg-cover px-8">
                <div className="text-center flex flex-col gap-[40px] w-full">
                    <div>
                        <h1 className="lg:text-[128px] text-[64px] uppercase tracking-wider">Elevate</h1>
                        <h2 className="lg:text-[48px] text-[24px] uppercase tracking-wider lg:mt-[-20px]">Tutoring</h2>
                        <h3 className="lg:text-[32px] text-[20px]">Making learning easy & enjoyable</h3>
                    </div>
                    <div className="flex lg:gap-[32px] lg:py-[20px] lg:px-[12px] lg:flex-row flex-col gap-[16px]">
                        <MainButton buttonText="Subject offerings" location="#subject-offerings"/>
                        <MainButton buttonText="Elevate your learning" location="#enroll-form" primary/>
                    </div>
                    <div className="flex lg:flex-row lg:justify-between lg:gap0 flex-col gap-[12px] ">
                        <div className="text-left">
                            <p className="lg:text-[24px] text-[20px]"><strong>500 students</strong></p>
                            <p className="lg:text-[20px]">90 ATAR+</p>
                        </div>
                        <div className="lg:text-right text-left">
                            <p className="lg:text-[24px] text-[20px]"><strong>10 students</strong></p>
                            <p className="lg:text-[20px]">Achieved state ranks (2022)</p>
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
