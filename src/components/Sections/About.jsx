import {SectionsWrapper} from "../../hoc";

import ClassPicture from "../../assets/classPicture.png"

const About = () => {
    return (
        <section className="text-primary lg:px-32">
            <section className=" h-screen flex items-center justify-center h-full mx-auto gap-[42px] bg-line bg-no-repeat bg-right bg-cover">
                <section className="flex flex-col gap-[16px]">
                    <div className="gap-[8px]">
                        <h2 className="text-[20px] uppercase">Why Elevate tutoring</h2>
                        <h1 className="text-[48px] font-semibold leading-[56px]">Personalised and <br/>relationship based tutoring</h1>
                    </div>
                    <p className="text-[20px]">We are a tutoring centre based in Cabramatta specialising in small group learning. At Elevate Tutoring we understand the importance of building relationships with our students. We aim to help you achieve your personal best academic success. </p>
                </section>
                <figure className="flex w-full justify-center">
                    <img src={ClassPicture} alt="Image showing the classroom" className="w-[400px] h-[400px]"/>
                </figure>
            </section>
            <div className="w-full flex justify-between h-[100px] items-center text-center">
                <div className="w-full text-[24px] bg-[#E99762]/60 h-full items-center flex justify-center">Meet the team</div>
                <div className="w-full text-[24px] bg-[#F4E1C7] h-full items-center flex justify-center">Testimonial</div>
                <div className="w-full text-[24px] bg-[#B8DDD0] h-full items-center flex justify-center">Subject offerings</div>
            </div>
        </section>
    );
};

export default SectionsWrapper(About, "about");
