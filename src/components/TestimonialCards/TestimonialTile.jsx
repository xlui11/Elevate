// Helper
import PropTypes from "prop-types";

import {motion} from "framer-motion";
import {fadeIn} from "../../utils/motion.js";

const TestimonialTile = ({ index, name, photo, title, testimonial }) => {
	// console.log(name);
	return (
		<motion.div
			variants={fadeIn("right", "tween", index*0.5 + 1, 0.5)}
			className="border-2 border-[#FFB430] w-full rounded-xl lg:px-[32px] px-[16px] flex flex-col items-center lg:h-auto py-8 justify-center text-center bg-white gap-[20px] shadow-xl bg-testimonial bg-no-repeat bg-bottom bg-contain">
			<p className="lg:text-[20px] ">&quot;{testimonial}&quot;</p>
			<div className="flex flex-col gap-[8px]">
				<h3 className="text-[20px] font-bold">{name}</h3>
				<p>{title}</p>
			</div>
			<img
				className="w-[120px] h-[120px] object-cover rounded-full"
				src={photo}
				alt={`Image of ${name} who gave the testimonial`}
			/>
		</motion.div>
	);
};

export default TestimonialTile;

TestimonialTile.propTypes = {
	index: PropTypes.number.isRequired,
	photo: PropTypes.string,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	testimonial: PropTypes.string.isRequired
};
