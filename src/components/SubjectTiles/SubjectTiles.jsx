// Components
import SubjectButton from "./SubjectButton.jsx";
import SubjectTile from "./SubjectTile.jsx";

// Data
import {SubjectOfferings} from "../../constants";
const SubjectTiles = () => {
	console.log(SubjectOfferings)
	return (
		<section className="w-full flex gap-[16px]">
			<div className="flex flex-col  p-[8px] gap-[12px] flex-initial">
				<SubjectButton buttonText="Senior High School" selected />
				<SubjectButton buttonText="Junior High School" />
				<SubjectButton buttonText="Kindergarten & Primary" />
			</div>
			<div className="p-[8px] flex flex-wrap gap-[12px] flex-end">
				{SubjectOfferings.map((subject, index) => (
					<SubjectTile key={index} subject={subject.name} classification={subject.classification} tag={subject.tag} years={subject.years} href={subject.href}/>
				))}
			</div>
		</section>
	);
};

export default SubjectTiles;

