// Helper
import PropTypes from "prop-types";

const TestimonialTile = ({ index, name, photo, title, testimonial }) => {
	// console.log(name);
	return (
		<div className="border-2 border-[#FFB430] w-full rounded-xl px-[32px] flex flex-col items-center h-[420px] justify-center text-center bg-white gap-[20px] shadow-xl bg-testimonial bg-no-repeat bg-bottom bg-contain">
			<p className="text-[16px]">&quot;{testimonial}&quot;</p>
			<div className="flex flex-col gap-[8px]">
				<h3 className="text-[20px] font-bold">{name}</h3>
				<p className="text-[16px]">{title}</p>
			</div>
			<img
				className="w-[120px] h-[120px] object-cover rounded-full"
				src={photo}
				alt={`Image of ${name} who gave the testimonial`}
			/>
		</div>
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
