import {useState} from "react";
// Components
import SubjectButton from "./SubjectButton.jsx";
import SubjectTile from "./SubjectTile.jsx";

// Data
import {SubjectOfferings} from "../../constants";

const SubjectTiles = () => {
	// console.log(SubjectOfferings)
	const [currCategory, setCurrCategory] = useState("Senior High School");
	const handleToggle = (e, buttonText) => {
		e.preventDefault()
		setCurrCategory(buttonText);
	}

	return (
		<section className="w-full lg:flex gap-[16px]">
			<div className="flex flex-col p-[8px] gap-[12px] flex-initial w-full lg:w-auto">
				<SubjectButton buttonText="Senior High School"  currCategory={currCategory} handleToggle={handleToggle}/>
				<SubjectButton buttonText="Junior High School" currCategory={currCategory} handleToggle={handleToggle}/>
				<SubjectButton buttonText="Kindergarten & Primary" currCategory={currCategory} handleToggle={handleToggle}/>
			</div>
			<div className="py-[8px] flex flex-wrap gap-[12px] flex-end">
				{SubjectOfferings.map((subject, index) => {
					if (currCategory === subject.category) {
						return (
							<SubjectTile key={index} subject={subject.name} classification={subject.classification} tag={subject.tag} years={subject.years} href={subject.href}/>
						)
					}
				})}
			</div>
		</section>
	);
};

export default SubjectTiles;

