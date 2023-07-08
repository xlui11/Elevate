import TestimonialTile from "./TestimonialTile";

// Data
import { Testimonials } from "../../constants";



const TestimonialTileSection = () => {
	return (
		<section className="w-full flex flex-col lg:flex-row gap-[24px] px-4">
			{Testimonials.map((testimonial, index) => (
				<TestimonialTile
					key={index}
					name={testimonial.name}
					photo={testimonial.photo}
					title={testimonial.title}
					testimonial={testimonial.testimonial}
					index={index}
				/>
			))}
		</section>
	);
};

export default TestimonialTileSection;
