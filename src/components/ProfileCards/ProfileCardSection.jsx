// Libraries
import PropTypes from "prop-types";

// Components
import ProfileCard from "./ProfileCard";
import MainButton from "../Reusables/MainButton";

import {motion} from "framer-motion";
import {textFade} from "../../utils/motion.js";


const ProfileCardSection = ({ teamProfiles }) => {
	return (
		<section className="flex justify-between flex-wrap gap-[24px] text-gray-900">
			{teamProfiles.map((profile, index) => (
				<ProfileCard
					key={profile.name}
					profileImg={profile.profileImg}
					name={profile.name}
					role={profile.role}
					tag={profile.tag}
					index={index}
				/>
			))}

			<motion.div
				variants={textFade(2.5)}
				className="w-full flex flex-col items-end py-[8px]">
				<MainButton buttonText="Meet the rest of the team" />
			</motion.div>
		</section>
	);
};

export default ProfileCardSection;

ProfileCardSection.propTypes = {
	teamProfiles: PropTypes.array
};
