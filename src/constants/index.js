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
		border: "#FABCA3",
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
		name: "Freddy Chan",
		title: "Year 12 student",
		photo: Jazmine,
		testimonial:
			"I used to struggle with math, but since coming here, I feel much more confident and my grades have improved a lot. Thank you for helping me succeed!"
	},
	{
		name: "Freddy Chan",
		title: "Year 12 student",
		photo: Jazmine,
		testimonial:
			"I used to struggle with math, but since coming here, I feel much more confident and my grades have improved a lot. Thank you for helping me succeed!"
	}
];

export { TeamProfiles, cardColorPool, Testimonials };
