import {useRef, useState} from "react";

// Helper
import {SectionsWrapper} from "../../hoc/"
import {motion} from "framer-motion";
import {fadeIn} from "../../utils/motion.js";

// Components
import SectionText from "../Reusables/SectionText.jsx";
import emailjs from "@emailjs/browser"

// Icons
import Clock from "../../assets/Clock.svg";
import Contact from "../../assets/Contact.svg";
import Address from "../../assets/Address.svg";



const EnrollForm = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        grade: "",
        subjectChoice: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setForm({...form, [name]: value});
    }

    // template_wmtj4md
    // service_ndsmgxs
    // a1UWjQH-V74I6zQsB

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send("service_ndsmgxs",
            "template_wmtj4md",
            {
                from_name: form.name,
                to_name: 'Elevate Tutoring',
                from_email: form.email,
                phone_number: form.phoneNumber,
                to_email: 'alton_ong@live.com.sg',
                grade: form.grade,
                subjectChoice: form.subjectChoice
            },
            'a1UWjQH-V74I6zQsB'
        ).then(() => {
            setLoading(false);
            alert('Thank you I will get back to you as soon as possible.');
            setForm({
                name: "",
                phoneNumber: "",
                email: "",
                grade: "",
                subjectChoice: ""
            })
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong, please give us a call instead!')
        })
    }

    return (
        <section className="text-primary lg:py-[180px] space-y-[64px] px-4">
            <SectionText
                title="How you can reach us"
                tag="Sign up for a risk free, free trial"
                paragraph="We would love to find out more about your needs and requirements. Kindly fill out the form or give us a call and we will reach out to you for a free trial."
            />
            <section className="lg:flex lg:space-x-[64px] space-y-[32px] lg:space-y-0">
                <motion.div
                    variants={fadeIn("right", "tween", 1.2, 1)}
                    className="lg:w-1/2 space-y-[16px]">
                    <h2 className="lg:text-[40px] text-[32px] font-bold">Reach out to us!</h2>

                    {/* This will be the form */}
                    <form ref={formRef} className="flex flex-col py-3 space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="lg:py-4 py-3 px-6 placeholder:text-gray-500 text-primary rounded-lg outlined-none border border-primary/40 font-medium w-full"/>
                        </label>
                        <label htmlFor="phoneNumber">
                            <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone number" className="lg:py-4 py-3 px-6 placeholder:text-gray-500 text-primary rounded-lg outlined-none border border-primary/40 font-medium w-full"/>
                        </label>
                        <label htmlFor="email">
                            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="lg:py-4 py-3 px-6 placeholder:text-gray-500 text-primary rounded-lg outlined-none border border-primary/40 font-medium w-full"/>
                        </label>
                        <div className="flex justify-between space-x-6">
                            <label htmlFor="grade" className="w-1/2">
                                <input type="text" name="grade" value={form.grade} onChange={handleChange} placeholder="Grade" className="lg:py-4 py-3 px-6 placeholder:text-gray-500 text-primary rounded-lg outlined-none border border-primary/40 font-medium w-full"/>
                            </label>
                            <label htmlFor="subjectChoice" className="w-1/2">
                                <input type="text" name="subjectChoice" value={form.subjectChoice} onChange={handleChange} placeholder="Subject choice" className="lg:py-4 py-3 px-6 placeholder:text-gray-500 text-primary rounded-lg outlined-none border border-primary/40 font-medium w-full"/>
                            </label>
                        </div>
                        <div className="w-full flex justify-end">
                            <button
                                type="submit"
                                className="px-[32px] py-[8px] bg-secondary rounded-xl border-2 border-primary/40 font-bold w-full lg:w-auto"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 1.2, 1)}
                    className="lg:w-1/2 space-y-[16px]">
                    <h2 className="lg:text-[40px] text-[32px] font-bold">Location & Hours</h2>
                    <div className="flex lg:gap-[32px] gap-[24px] py-3">
                        <img className="w-[70px] lg:w-[80px]" src={Clock} alt="Icon of a clock to represent the opening times"/>
                        <div className="space-y-[8px]">
                            <h3 className="font-bold lg:text-[20px]">Opening hours</h3>
                            <div className="lg:text-[20px]">
                                <p>Monday - Friday: 09:00 - 17:00</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:gap-[32px] gap-[24px] py-3">
                        <img className="w-[70px] lg:w-[80px]" src={Contact} alt="Icon of a speech bubble for contact us section"/>
                        <div className="space-y-[8px]">
                            <h3 className="font-bold lg:text-[20px]">Contact us</h3>
                            <div className="lg:text-[20px]">
                                <p><strong>Phone number: </strong> 0401 072 071</p>
                                <p><strong>Email: </strong> info@elevatetutoring.com.au</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:gap-[32px] gap-[24px] py-3">
                        <img className="w-[70px] lg:w-[80px]" src={Address} alt="Icon of a map to represent the location and address"/>
                        <div className="space-y-[8px]">
                            <h3 className="font-bold lg:text-[20px]">Address</h3>
                            <div className="lg:text-[20px]">
                                <p>46 Hill Street Cabramatta, New South Wales, 2166</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </section>
    );
};

export default SectionsWrapper(EnrollForm, "enroll-form");
