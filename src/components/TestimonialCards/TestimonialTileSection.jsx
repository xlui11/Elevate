import TestimonialTile from "./TestimonialTile";
import Carousel from "../Carousel/Carousel.jsx";

// Data

const TestimonialTileSection = () => {
	return (
		<>
			<section className="w-full lg:flex flex-col lg:flex-row gap-[24px] px-4 hidden">
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
			<section className="w-full lg:hidden">
				<Carousel testimonials={Testimonials}/>
			</section>
		</>
);
};



import { Testimonials } from "../../constants";

export default TestimonialTileSection;
