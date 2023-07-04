// Libraries
import PropTypes from "prop-types";

// Components
import ProfileCard from "./ProfileCard";
import MainButton from "../Reusables/MainButton";

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

			<div className="w-full flex flex-col items-end py-[8px]">
				<MainButton buttonText="Meet the rest of the team" />
			</div>
		</section>
	);
};

export default ProfileCardSection;

ProfileCardSection.propTypes = {
	teamProfiles: PropTypes.array
};
