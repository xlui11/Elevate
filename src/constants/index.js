import { Jazmine, Erina, DaDog } from "../assets";

const TeamProfiles = [
	{
		name: "Jazmine Le",
		profileImg: Jazmine,
		role: "Founder | Director",
		tag: "Founded in 2023"
	},
	{
		name: "Erina Mai",
		profileImg: Erina,
		role: "Mathematics Tutor",
		tag: "99.00 ATAR"
	},
	{
		name: "Ciri",
		profileImg: DaDog,
		role: "Teaching support | Therapy dog",
		tag: "He's a Husky"
	}
];

const cardColorPool = [
	{
		border: "#FFB430",
		background: "#FFDFA7"
	},
	{
		border: "#FF9A73",
		background: "#EED2C7"
	},
	{
		border: "#7DC3A7",
		background: "#DCEBE5"
	}
];

const Testimonials = [
	{
		name: "Freddy Chan",
		title: "Year 12 student",
		photo: Jazmine,
		testimonial:
			"I used to struggle with math, but since coming here, I feel much more confident and my grades have improved a lot. Thank you for helping me succeed!"
	},
	{
		name: "Paerlana Tanawat",
		title: "Year 12 student",
		photo: Jazmine,
		testimonial: "Elevate tutoring offers the best tutors that motivate you to do well and are very supportive. They provide a safe and comfortable environment where students are able to express any concerns and troubles in their learning."
	},
	{
		name: "Trena-Talita",
		title: "Parent",
		photo: Jazmine,
		testimonial: "Both our children have been coming to Elevate tutoring for 3 years. In this time they have both drastically improved and are still doing amazing... I would highly recommend this school to everyone it’s a great learning environment and the teachers genuinely care."
	}
];

const SubjectOfferings = [
	// Senior High School
	{
		name: "Advanced Mathematics",
		classification: "Maths",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "Extension Mathematics 1",
		classification: "Maths",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "Extension Mathematics 2",
		classification: "Maths",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "Physics",
		classification: "Science",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "Chemistry",
		classification: "Science",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "Biology",
		classification: "Science",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "Economics",
		classification: "Humanities",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "Business Studies",
		classification: "Humanities",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},
	{
		name: "High School English",
		classification: "Humanities",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 11", "Year 12"],
		category: "Senior High School",
		href: "/"
	},

	// 	Junior High School
	{
		name: "Science",
		classification: "Science",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Years 7-10"],
		category: "Junior High School",
		href: "/"
	},
	{
		name: "High School English",
		classification: "Humanities",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Years 7-10"],
		category: "Junior High School",
		href: "/"
	},
	{
		name: "High School Mathematics",
		classification: "Maths",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Years 7-10"],
		category: "Junior High School",
		href: "/"
	},

	// Kindergarten - Primary
	{
		name: "Primary School Mathematics",
		classification: "Maths",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Kindergarten - Year 6"],
		category: "Kindergarten & Primary",
		href: "/"
	},
	{
		name: "Primary School English",
		classification: "Humanities",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Kindergarten - Year 6"],
		category: "Kindergarten & Primary",
		href: "/"
	},
	{
		name: "Selective School Preparation",
		classification: "Maths",
		tag: "10 weeks of weekly quizzes and exam preparations",
		years: ["Year 5", "Year 6"],
		category: "Kindergarten & Primary",
		href: "/"
	},
]

export { TeamProfiles, cardColorPool, Testimonials, SubjectOfferings };
