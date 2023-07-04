import { SectionsWrapper } from "../../hoc";
import ProfileCards from "../ProfileCards/ProfileCardSection";

import { TeamProfiles } from "../../constants";

const MeetTheTeam = () => {
	return (
		<section className="text-primary py-[200px] flex flex-col gap-[54px] lg:px-32">
			<section className="text-center flex gap-[16px] flex-col lg:px-[240px]">
				<h2 className="text-[20px] uppercase">Meet our tutors</h2>
				<h1 className="text-[48px] font-semibold leading-[56px]">
					World class, friendly & professional
				</h1>
				<p className="text-[20px]">
					At Elevate Tutoring our tutors primary goal is to create an
					environment that allows students to feel empowered to take control of
					their learning and gain the confidence they need to succeed. As a
					result, students look forward to tutoring and many have told us that
					the education we provide is far more effective than traditional
					methods of learning.
				</p>
			</section>
			<ProfileCards teamProfiles={TeamProfiles} />
		</section>
	);
};

export default SectionsWrapper(MeetTheTeam, "meet-the-team");
