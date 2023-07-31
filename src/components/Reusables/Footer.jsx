import ElevateIcon from "../../assets/ElevateIcon.svg";
import Instagram from "../../assets/Instagram.svg";

const Footer = () => {
	return (
		<footer className="w-full lg:flex justify-between md:px-[64px]  mx-auto md:py-[8px] hidden">
			<div className="flex py-[12px] w-[450px] border-r-2 border-r-[#DCB299]/30">
				<img src={ElevateIcon} alt="Elevate logo" />
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
			<div className="lg:px-[24px] flex lg:gap-[88px] md:gap-[44px] border-r-2 border-r-[#DCB299]/30">
				<div className="w-1/3 space-y-3">
					<h3 className="lg:text-[20px] font-medium italic">Our mission</h3>
					<p className="font-regular">
						We believe that building a positive relationship between the tutor
						and student can significantly impact the student's academic progress
						and success.
					</p>
				</div>
				<div className="w-1/2 space-y-3">
					<h3 className="lg:text-[20px] font-medium italic">
						Stay in the loop
					</h3>
					<form action="" className="w-full relative">
						<input
							className="w-full placeholder-gray-800 py-3 rounded-xl border-2 border-primary/40  bg-secondary/40 px-4 text-[20px] focus:ring-blue-500 focus:border-blue-500 bg-none"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
						/>
						<button
							type="submit"
							className="w-1/5 rounded-xl border-2 border-primary/40  ml-[-2px] text-lg font-bold text-primary absolute top-0 right-0 p-2.5 h-full bg-secondary"
						>
							Sign up
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
