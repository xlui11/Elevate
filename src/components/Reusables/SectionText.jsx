import PropTypes from "prop-types";

import { motion } from "framer-motion";

import {textFade} from "../../utils/motion.js"


const SectionText = ({ title, tag, paragraph }) => {
	return (
		<section className="text-center flex gap-[16px] flex-col lg:px-[120px]">
			<motion.h1
				variants={textFade(0.2)}
				className="lg:text-[20px] mb-1 uppercase"
			>
				{title}
			</motion.h1>
			<motion.h2
				variants={textFade(0.5)}
				className="lg:text-[48px] text-[32px] leading-[40px] lg:leading-[56px]"
			>
				{tag}
			</motion.h2>
			<motion.p
				variants={textFade(0.5)}
				className="lg:text-[20px]"
			>
				{paragraph}
			</motion.p>
		</section>
	);
};

export default SectionText;

SectionText.propTypes = {
	title: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired
};
