import PropTypes from "prop-types";

const SectionText = ({ title, tag, paragraph }) => {
	return (
		<section className="text-center flex gap-[16px] flex-col lg:px-[120px]">
			<h1 className="text-[20px] uppercase">{title}</h1>
			<h2 className="text-[48px] font-semibold leading-[56px]">{tag}</h2>
			<p className="text-[20px]">{paragraph}</p>
		</section>
	);
};

export default SectionText;

SectionText.propTypes = {
	title: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired
};
