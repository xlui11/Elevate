// Helper
import { SectionsWrapper } from "../../hoc";

// Components
import SectionText from "../Reusables/SectionText";
import SubjectTiles from "../SubjectTiles/SubjectTiles";

const SubjectOfferings = () => {
	return (
		<section className="text-primary md:py-[180px] flex flex-col gap-[64px]">
			<SectionText
				title="Subject offerings"
				tag="Curriculum created for you"
				paragraph="We're committed to helping you achieve your academic goals. Our tutors are experienced and passionate about their subjects, and will work with you to create a customised learning plan that fits your unique needs. Contact us today to learn more about our tutoring services and how we can help you succeed!"
			/>
			<SubjectTiles />
		</section>
	);
};

export default SectionsWrapper(SubjectOfferings, "subject-offerings");
