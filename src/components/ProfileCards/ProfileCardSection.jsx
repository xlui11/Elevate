// Libraries
import PropTypes from "prop-types";


// Components
import ProfileCard from "./ProfileCard";
import MainButton from "../Reusables/MainButton";

import {motion} from "framer-motion";
import {textFade} from "../../utils/motion.js";
import {useState} from "react";


const ProfileCardSection = ({ teamProfiles }) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<section className="flex lg:justify-between justify-center flex-wrap gap-[24px] text-gray-900">
			{teamProfiles.map((profile, index) => {
				if(expanded) {
					return (
							<ProfileCard
								key={profile.name}
								profileImg={profile.profileImg}
								name={profile.name}
								role={profile.role}
								tag={profile.tag}
								index={index}
							/>
						)
				} else {
					if(index < 3) {
						return (
							<ProfileCard
								key={profile.name}
								profileImg={profile.profileImg}
								name={profile.name}
								role={profile.role}
								tag={profile.tag}
								index={index}
							/>
						)
					}
				}
			})}

			<motion.div variants={textFade(2.5)} className="w-full flex flex-col lg:items-end py-[8px]">
				<button className={`uppercase lg:px-[36px] py-[12px] lg:text-[20px] rounded-lg text-links cursor-pointer border border-black`} onClick={() => setExpanded(!expanded)}>
					Meet the rest of the team
				</button>
				{/*<MainButton buttonText="Meet the rest of the team" location="/Team"/>*/}
			</motion.div>



		</section>
	);
};

export default ProfileCardSection;

ProfileCardSection.propTypes = {
	teamProfiles: PropTypes.array
};
