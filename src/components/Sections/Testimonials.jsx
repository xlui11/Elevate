// Helper
import { SectionsWrapper } from "../../hoc";

// Components
import SectionText from "../Reusables/SectionText";
import TestimonialTileSection from "../TestimonialCards/TestimonialTileSection";

// Data

const TestimonialSection = () => {
	// console.log(Testimonials);
	return (
		<section className="md:py-[180px] flex flex-col gap-[64px] lg:px-32 text-primary">
			<SectionText
				title="Testimonials"
				tag="Hear from our students"
				paragraph="Our tutors work diligently to establish a comfortable and supportive learning environment, where students can feel confident in asking questions, sharing their thoughts, and making mistakes. Overall students feel more confident through personalised and relationship-based approach to learning."
			/>
			<TestimonialTileSection />
		</section>
	);
};

export default SectionsWrapper(TestimonialSection, "testimonials");
