import ElevateIcon from "../../assets/ElevateIcon.svg";
import Instagram from "../../assets/Instagram.svg";

import emailjs from "@emailjs/browser"
import {useRef, useState} from "react";
const Footer = () => {
	const formRef = useRef();

	const [subForm, setSubForm] = useState({
		userEmail: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const {name, value} = e.target;
		// console.log(e.target)
		setSubForm({...subForm, [name]: value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs.send(
			"service_9xlhznp",
			"template_frzoxvf",
			{
				to_email: subForm.userEmail
			},
			"PsFDrxNN0fVhcLU7c"
		).then(() => {
			setLoading(false);
			// Possible show alert message on screen?
			alert("Thank you for subscribing, please check your inbox for the next steps.");
			setSubForm({
				userEmail: ""
			});
		}, (error) => {
			setLoading(false);
			console.log(error);
			alert("Something went wrong while trying to subscribe please give us a call.")
			}

		)

	}
	return (
		<footer className="w-full lg:flex block justify-between md:px-[64px] px-8  mx-auto md:py-[20px] space-y-8 lg:space-y-0 text-primary pb-8">
			<div className="flex items-center py-[12px] lg:w-[450px] w-full lg:border-r-2 border-r-[#DCB299]/30 space-y-3">
				<img src={ElevateIcon} alt="Elevate logo" className="w-1/2"/>
				<nav>
					<ul className="text-base font-medium text-right lg:text-[20px] space-y-3">
						<li>
							<a href="#meet-the-team">Meet the team</a>
						</li>
						<li>
							<a href="#testimonials">Testimonials</a>
						</li>
						<li>
							<a href="#subject-offerings">Subjects</a>
						</li>
						<li>
							<a href="#enroll-form">Contact us</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="lg:px-[24px] flex lg:flex-row flex-col lg:gap-[88px] md:gap-[44px] lg:border-r-2 border-r-[#DCB299]/30">
				<div className="lg:w-1/3 space-y-3">
					<h3 className="lg:text-[20px] font-medium italic">Our mission</h3>
					<p className="font-regular">
						We believe that building a positive relationship between the tutor
						and student can significantly impact the student&rsquo;s academic progress
						and success.
					</p>
				</div>
				<div className="lg:w-1/2 space-y-3">
					<h3 className="lg:text-[20px] font-medium italic">
						Stay in the loop
					</h3>
					<form onSubmit={handleSubmit} ref={formRef} className="w-full relative">
						<label htmlFor="email">
							<input type="email" name="userEmail" value={subForm.userEmail} className="w-full placeholder-gray-800 lg:py-3 text-[16px] py-2 rounded-xl border-2 border-primary/40  bg-secondary/40 px-4 lg:text-[20px] focus:ring-blue-500 focus:border-blue-500 bg-none" onChange={handleChange} placeholder="Email"/>
							{/*<input*/}
							{/*	className="w-full placeholder-gray-800 lg:py-3 text-[16px] py-2 rounded-xl border-2 border-primary/40  bg-secondary/40 px-4 lg:text-[20px] focus:ring-blue-500 focus:border-blue-500 bg-none"*/}

							{/*	type="text"*/}
							{/*	name="email"*/}
							{/*	id="email"*/}
							{/*	placeholder="Email"*/}
							{/*	value={subForm.userEmail}*/}
							{/*	onChange={handleChange}*/}
							{/*/>*/}
						</label>
						<button
							type="submit"
							className="lg:w-1/5 px-2 rounded-xl border-2 border-primary/40  ml-[-2px] lg:text-lg text-[16px] font-bold text-primary absolute top-0 right-0 lg:p-2.5 h-full bg-secondary"
						>
							{loading? "Subscribing...." : "Sign up"}
						</button>
					</form>
				</div>
			</div>
			<div className="w-[240px] lg:px-[60px] flex flex-col space-y-3">
				<h3 className="lg:text-[20px] font-medium italic">Follow us</h3>
				<a href="">
					<img src={Instagram} alt="Instagram icon" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
