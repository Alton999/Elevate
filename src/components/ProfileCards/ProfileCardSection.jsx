import { useState } from "react";

// Libraries
import PropTypes from "prop-types";

// Components
import ProfileCard from "./ProfileCard";

import {  motion } from "framer-motion";
import { fadeIn, textFade } from "../../utils/motion.js";

const ProfileCardSection = ({ teamProfiles }) => {
	const [expanded, setExpanded] = useState(false);

	//
	return (
		<motion.section
			variants={fadeIn("right", "tween", 0, 1)}
			className="flex justify-between flex-wrap gap-[24px] text-gray-900 relative"
		>
			<motion.div
				className={`w-full lg:h-[700px] h-[500px] top-0 left-0 right-0 bottom-0 bg-/30  bg-gradient-to-t from-[#F8F3F0] ${
					expanded ? "hidden" : "absolute"
				}`}
			/>
			<motion.div
				className={`flex justify-between flex-wrap gap-[24px]  ${
					expanded ? "h-[100%]" : "lg:max-h-[480px] max-h-[500px] overflow-hidden"
				}`}
				transition={{
					type: "linear",
					duration: 0.2,
					ease: "easeInOut"
				}}
				layout
			>
				{teamProfiles.map((profile, index) => (
					<ProfileCard
						key={index}
						profileImg={profile.profileImg}
						name={profile.name}
						role={profile.role}
						tag={profile.tag}
					/>
				))}
			</motion.div>

			<motion.div
				variants={textFade(2)}
				className="w-full flex flex-col items-end py-[8px]"
			>
				<button
					className="uppercase w-full lg:w-fit lg:px-[36px] py-[12px] lg:text-[20px] rounded-lg text-links cursor-pointer border border-black z-3 relative"
					onClick={() => setExpanded(!expanded)}
					role="button"
				>
					{expanded ? "Minimise team section": "Meet the rest of the team"}
				</button>
			</motion.div>
		</motion.section>
	);
};

export default ProfileCardSection;

ProfileCardSection.propTypes = {
	teamProfiles: PropTypes.array
};
