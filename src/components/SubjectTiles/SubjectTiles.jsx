import {useState} from "react";
// Components
import SubjectButton from "./SubjectButton.jsx";
import SubjectTile from "./SubjectTile.jsx";

// Data
import {SubjectOfferings} from "../../constants";

import {AnimatePresence, motion} from "framer-motion";
import {fadeIn, textFade} from "../../utils/motion.js";

const SubjectTiles = () => {
	// console.log(SubjectOfferings)
	const [currCategory, setCurrCategory] = useState("Senior High School");
	const handleToggle = (e, buttonText) => {
		e.preventDefault()
		setCurrCategory(buttonText);
	}

	return (
		<section className="w-full lg:flex gap-[16px]">
			<motion.div
				variants={textFade(0)}
				className="flex flex-col p-[8px] gap-[12px] flex-initial w-full lg:w-auto">
				<SubjectButton buttonText="Senior High School"  currCategory={currCategory} handleToggle={handleToggle}/>
				<SubjectButton buttonText="Junior High School" currCategory={currCategory} handleToggle={handleToggle}/>
				<SubjectButton buttonText="Kindergarten & Primary" currCategory={currCategory} handleToggle={handleToggle}/>
			</motion.div>
			<motion.div
				variants={fadeIn("left", "spring", 1, 1)}
				className="py-[8px] flex flex-wrap gap-[12px] flex-end">
				<AnimatePresence>
					{SubjectOfferings.map((subject, index) => {
						if (currCategory === subject.category) {
							return (
								<SubjectTile index={index} key={index} subject={subject.name} classification={subject.classification} tag={subject.tag} years={subject.years} href={subject.href}/>
							)
						}
					})}
				</AnimatePresence>
			</motion.div>
		</section>
	);
};

export default SubjectTiles;

