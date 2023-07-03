import {SectionsWrapper} from "../../hoc"
import Jazmine from "../../assets/TeamProfiles/Jazmine.webp"
import Erina from "../../assets/TeamProfiles/Erina.webp"
import DaDog from "../../assets/TeamProfiles/DaDog.webp"
import MainButton from "../Reusables/MainButton.jsx";

const MeetTheTeam = () => {
    return (
        <section className="text-primary py-[200px] flex flex-col gap-[54px] lg:px-32">
            <section className="text-center flex gap-[16px] flex-col lg:px-[240px]">
                <h2 className="text-[20px] uppercase">Meet our tutors</h2>
                <h1 className="text-[48px] font-semibold leading-[56px]">World class, friendly & professional</h1>
                <p className="text-[20px]">At Elevate Tutoring our tutors primary goal is to create an environment  that allows students to feel empowered to take control of their learning and gain the confidence they need to succeed. As a result, students look forward to tutoring and many have told us that the education we provide is far more effective than traditional methods of learning.</p>
            </section>
            <section className="flex justify-between flex-wrap gap-[24px]">
                <div className="border-4 border-[#FFB430] w-[340px] h-[380px] bg-[#FFDFA7] rounded-xl flex flex-col justify-center items-center gap-[16px] ">
                    <img className="rounded-full w-[214px] h-[214px] border-4 border-[#FFB430] object-cover" src={Jazmine} alt="Photo of the founder Jazmine"/>
                    <h3 className="text-[20px] font-bold">Jazmine Le</h3>
                    <div className="text-[16px]">
                        <p>Founder | Director</p>
                        <p>Founded in 2023</p>
                    </div>
                </div>

                <div className="border-4 border-[#FABCA3] w-[340px] h-[380px] bg-[#EED2C7] rounded-xl flex flex-col justify-center items-center gap-[16px] text-center">
                    <img className="rounded-full w-[214px] h-[214px] border-4 border-[#FABCA3] object-cover" src={Erina} alt="Photo of the Erina"/>
                    <h3 className="text-[20px] font-bold">Erina Mai</h3>
                    <div className="text-[16px]">
                        <p>Mathematics Tutor</p>
                        <p>99.00 ATAR</p>
                    </div>
                </div>

                <div className="border-4 border-[#7DC3A7] w-[340px] h-[380px] bg-[#DCEBE5] rounded-xl flex flex-col justify-center items-center gap-[16px] text-center">
                    <img className="rounded-full w-[214px] h-[214px] border-4 border-[#7DC3A7] 	object-cover" src={DaDog} alt="Photo of the dog"/>
                    <h3 className="text-[20px] font-bold">Ciri</h3>
                    <div className="text-[16px]">
                        <p>Teaching support | Therapy dog</p>
                        <p>Husky</p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-end">

                    <MainButton buttonText="Meet the rest of the team"/>
                </div>
            </section>
        </section>
    );
};

export default SectionsWrapper(MeetTheTeam, "meet-the-team");
