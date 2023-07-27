import WhyElevateIllustration1 from "../../assets/WhyElevate/ElevateIllustration1.svg"

const WhyElevateBanner = () => {
    return (
        <section className="py-12 text-primary mt-32">
            <section className="lg:max-w-[1280px] flex justify-center gap-16 mx-auto h-full">
                {/* Card */}
                <div className="w-full bg-white/30 flex flex-col text-center justify-center items-center rounded-lg px-8 py-8 gap-8">
                    <div className="space-y-4 flex flex-col items-center">
                        <h2 className="font-bold text-2xl">Invested & Experienced Tutors</h2>
                        <img src={WhyElevateIllustration1} alt="" className="w-1/2"/>
                        <p>Every lesson is catered to the needs and capabilities of our students. From the first day your child steps into our tutoring centre, they will be cared for because we believe in the potential of every student.</p>
                    </div>
                </div>
                <div className="w-full bg-white/30 flex flex-col text-center justify-center items-center rounded-lg px-8 py-8 gap-8">
                    <div className="space-y-4 flex flex-col items-center">
                        <h2 className="font-bold text-2xl">Invested & Experienced Tutors</h2>
                        <img src={WhyElevateIllustration1} alt="" className="w-1/2"/>
                        <p>Every lesson is catered to the needs and capabilities of our students. From the first day your child steps into our tutoring centre, they will be cared for because we believe in the potential of every student.</p>
                    </div>
                </div>
                <div className="w-full bg-white/30 flex flex-col text-center justify-center items-center rounded-lg px-8 py-8 gap-8">
                    <div className="space-y-4 flex flex-col items-center">
                        <h2 className="font-bold text-2xl">Invested & Experienced Tutors</h2>
                        <img src={WhyElevateIllustration1} alt="" className="w-1/2"/>
                        <p>Every lesson is catered to the needs and capabilities of our students. From the first day your child steps into our tutoring centre, they will be cared for because we believe in the potential of every student.</p>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default WhyElevateBanner;
