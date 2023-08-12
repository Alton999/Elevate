// Libraries
import PropTypes from "prop-types";
// Data
import { cardColorPool } from "../../constants";

import { motion } from "framer-motion";

const ProfileCard = ({  profileImg, name, role, tag }) => {
	const random = (colorsArr) => {
		return colorsArr[Math.floor(Math.random() * colorsArr.length)];
	};
	const colorProfile = random(cardColorPool);

	return (
		<motion.div
			layout
			style={{
				border: `4px solid ${colorProfile.border}`,
				backgroundColor: colorProfile.background
			}}
			className={`border-4  w-[340px] py-8 rounded-xl flex flex-col justify-center items-center gap-[16px]`}
		>
			<img
				style={{
					border: `4px solid ${colorProfile.border}`
				}}
				className={`rounded-full w-[214px] h-[214px] border-4 border-[${colorProfile.border}] object-cover`}
				src={profileImg}
				alt={`Photo of ${name}`}
			/>
			<h3 className="text-[24px] font-bold">{name}</h3>
			<div className="text-[20px] text-[#202020] text-center">
				<p className="font-semibold">{role}</p>
				<p>{tag}</p>
			</div>
		</motion.div>
	);
};

export default ProfileCard;

ProfileCard.propTypes = {
	profileImg: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	tag: PropTypes.string
};
