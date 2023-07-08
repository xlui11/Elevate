import PropTypes from "prop-types";

import { motion } from "framer-motion";

import {textFade} from "../../utils/motion.js"


const SectionText = ({ title, tag, paragraph }) => {
	return (
		<section className="text-center flex gap-[16px] flex-col lg:px-[120px]">
			<motion.h1
				variants={textFade(0.2)}
				className="text-[20px] uppercase"
			>
				{title}
			</motion.h1>
			<motion.h2
				variants={textFade(0.5)}
				className="text-[48px] font-semibold leading-[56px]"
			>
				{tag}
			</motion.h2>
			<motion.p
				variants={textFade(0.5)}
				className="text-[20px]"
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
