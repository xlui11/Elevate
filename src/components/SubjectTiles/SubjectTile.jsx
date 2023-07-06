import PropTypes from "prop-types"


// Assets
import MathIcon from "../../assets/Subjects/MathIcon.svg";
import RightIcon from "../../assets/rightArrowCircle.jsx";

const SubjectTile = ({subject, classification, tag, years, href}) => {
	const GeneratingCardColors = (classification) => {
		switch(classification) {
			case classification = "Maths":
				return "border-[#547197] shadow-[3px_2px_0px_0px_rgba(84,113,151,0.3)]";
			case classification = "Science":
				return "border-[#71705E] shadow-[3px_2px_0px_0px_rgba(113,112,94,0.3)]"
			case classification = "Humanities":
				return "border-[#5C925C] shadow-[3px_2px_0px_0px_rgba(92,146,92,0.3)]"
		}
	// 	Should return a string we can use as a tailwind utility class
	}

	return (
		<div className={`border-2 bg-[#F5EDE3] p-[12px] rounded-lg w-[290px] ${GeneratingCardColors(classification)}`}>
			<div className="py-[4px] w-full">
				<img src={MathIcon}  alt="Math icon" className="pb-1"/>
				<div className="flex flex-col gap-[16px]">
					<div className="space-y-[8px]">
						<h3 className="text-[20px] font-bold">{subject}</h3>
						<p className="text-[#8A8A89]">{tag}</p>
					</div>
					<div className="flex gap-[12px]">
						<p className="rounded-md bg-[#FFB6A399]/60 py-[4px] px-[8px]">Year 11</p>
						<p className="rounded-md bg-[#F1BD6999]/60 py-[4px] px-[8px]">Year 12</p>
					</div>
					<div className="h-px bg-[#5B5B5B]/20 w-full"/>
				</div>
				<a className="w-full flex justify-between p-[12px] items-center" href={href}>
					Learn more
					<RightIcon/>
				</a>
			</div>
		</div>
	)
}


export default SubjectTile;

SubjectTile.propTypes = {
	subject: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	years: PropTypes.array.isRequired,
	classification: PropTypes.string,
	href: PropTypes.string,
	category: PropTypes.string
}
