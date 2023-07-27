
import {SectionsWrapper} from "../../hoc/index.js";
import SectionText from "../Reusables/SectionText.jsx";
import ProfileCards from "../ProfileCards/ProfileCardSection.jsx";
import {TeamProfiles} from "../../constants/index.js";

const MeetTheTeam = () => {
    return (
        <section className="text-primary md:py-[180px] flex flex-col gap-[64px] px-4">
            <SectionText
                title="Meet our tutors"
                tag="World class, friendly & professional"
                paragraph="At Elevate Tutoring our tutors primary goal is to create an environment that allows students to feel empowered to take control of their learning and gain the confidence they need to succeed. As a result, students look forward to tutoring and many have told us that the education we provide is far more effective than traditional methods of learning."
            />
            <ProfileCards teamProfiles={TeamProfiles}/>

        </section>
    );
};

export default SectionsWrapper(MeetTheTeam, "meet-the-team");
