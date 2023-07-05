import PropTypes from "prop-types";

import MathIcon from "../../assets/Subjects/MathIcon.svg";

const SubjectButton = ({ buttonText, selected }) => {
	return (
		<button
			className={`${
				selected
					? " border-2 border-[#E99762] bg-[#F4D3A8] shadow-lg"
					: "shadow-sm"
			} px-[24px] py-[12px] text-black font-medium text-[20px] rounded-lg cursor-pointer`}
		>
			{buttonText}
		</button>
	);
};

const SubjectTiles = () => {
	return (
		<section className="w-full flex gap-[16px]">
			<div className="flex flex-col  p-[8px] gap-[12px]">
				<SubjectButton buttonText="Senior High School" selected />
				<SubjectButton buttonText="Junior High School" />
				<SubjectButton buttonText="Kindergarten & Primary" />
			</div>
			<div className="p-[8px]">
				<div className="border-2 border-[#547197] bg-[#F5EDE3] p-[12px] rounded-lg">
					<div className="py-[4px] w-full">
						<img src={MathIcon} />
						<div>
							<h3>Advanced Mathematics</h3>
							<p>10 weeks of weekly quizzes and exam preparations</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SubjectTiles;

SubjectButton.propTypes = {
	buttonText: PropTypes.string.isRequired,
	selected: PropTypes.bool
};
