import PropTypes from "prop-types";

const SectionText = ({ title, tag, paragraph }) => {
	return (
		<section className="text-center flex gap-[16px] flex-col lg:px-[120px]">
			<h1 className="lg:text-[20px] mb-1 uppercase">{title}</h1>
			<h2 className="lg:text-[48px] text-[32px] leading-[40px] font-semibold lg:leading-[56px]">{tag}</h2>
			<p className="lg:text-[20px]">{paragraph}</p>
		</section>
	);
};

export default SectionText;

SectionText.propTypes = {
	title: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired
};
