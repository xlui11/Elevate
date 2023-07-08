import PropTypes from "prop-types"


// Assets
import MathIcon from "../../assets/Subjects/MathIcon.svg";
import RightIcon from "../../assets/rightArrowCircle.jsx";

import {motion} from "framer-motion";

// variants={fadeIn("right", "tween", index*0.5 + 1, 0.2)}

const SubjectTile = ({subject, classification, tag, years, href, index}) => {
	const GeneratingCardColors = (classification) => {
		switch(classification) {
			case classification = "Maths":
				return "border-[#547197] lg:shadow-[3px_2px_0px_0px_rgba(84,113,151,0.3)]";
			case classification = "Science":
				return "border-[#71705E] lg:shadow-[3px_2px_0px_0px_rgba(113,112,94,0.3)]"
			case classification = "Humanities":
				return "border-[#5C925C] lg:shadow-[3px_2px_0px_0px_rgba(92,146,92,0.3)]"
		}
	// 	Should return a string we can use as a tailwind utility class
	}
	return (
		<motion.div
			initial={{ opacity: 0, x: -100}}
			animate={{ opacity: 1, x: 0 }}
			transition={{delay: index * 0.2, type: "spring", duration: 0.5}}
			exit={{
				opacity: 0,
				x: 250,
				transition: {
					duration: 0.5,
					type: "spring",

				}
			}}
			className={`lg:border-2 lg:bg-[#F5EDE3] p-[12px] rounded-lg lg:w-[290px] w-full ${GeneratingCardColors(classification)}`}>
			<div className="py-[4px] w-full">
				<img src={MathIcon}  alt="Math icon" className="pb-1"/>
				<div className="flex flex-col gap-[16px]">
					<div className="space-y-[8px]">
						<h3 className="text-[20px] font-bold">{subject}</h3>
						<p className="text-[#8A8A89]">{tag}</p>
					</div>
					<div className="flex gap-[12px]">
						{years.map((year, index) => {
							return index === 0 ? <p key={index} className="rounded-md bg-[#FFB6A399]/60 py-[4px] px-[8px]">{year}</p> : <p key={index} className="rounded-md bg-[#F1BD6999]/60 py-[4px] px-[8px]">{year}</p>
						})}
					</div>
					<div className="h-px bg-[#5B5B5B]/20 w-full"/>
				</div>
				<a className="w-full flex justify-between p-[12px] items-center" href={href}>
					Learn more
					<RightIcon/>
				</a>
			</div>
		</motion.div>
	)
}


export default SubjectTile;

SubjectTile.propTypes = {
	subject: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	years: PropTypes.array.isRequired,
	classification: PropTypes.string,
	href: PropTypes.string,
	category: PropTypes.string,
	index: PropTypes.number.isRequired
}
