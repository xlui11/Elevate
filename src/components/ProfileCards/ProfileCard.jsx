// Libraries
import PropTypes from "prop-types";
// Data
import { cardColorPool } from "../../constants";

const ProfileCard = ({ index, profileImg, name, role, tag }) => {
	const random = (colorsArr) => {
		return colorsArr[Math.floor(Math.random() * colorsArr.length)];
	};
	const colorProfile = random(cardColorPool);
	return (
		<div
			className={`border-4 border-[${colorProfile.border}] w-[340px] h-[380px] bg-[${colorProfile.background}] rounded-xl flex flex-col justify-center items-center gap-[16px]`}
		>
			<img
				className={`rounded-full w-[214px] h-[214px] border-4 border-[${colorProfile.border}] object-cover`}
				src={profileImg}
				alt={`Photo of ${name}`}
			/>
			<h3 className="text-[20px] font-bold">{name}</h3>
			<div className="text-[16px] text-[#202020] text-center">
				<p>{role}</p>
				<p>{tag}</p>
			</div>
		</div>
	);
};

export default ProfileCard;

ProfileCard.propTypes = {
	index: PropTypes.number.isRequired,
	profileImg: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	tag: PropTypes.string
};
