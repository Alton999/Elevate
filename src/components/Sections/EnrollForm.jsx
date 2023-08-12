import {useState} from "react";

// Helper
import {SectionsWrapper} from "../../hoc/"
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import {useFormik} from "formik";

import {basicSchema} from "../../schemas/index.js";
import {fadeIn} from "../../utils/motion.js";
// Components
import SectionText from "../Reusables/SectionText.jsx";

import InputField from "../Reusables/InputField.jsx"
// Icons
import Clock from "../../assets/Clock.svg";
import Contact from "../../assets/Contact.svg";
import Address from "../../assets/Address.svg";
import SuccessModal from "../Reusables/SuccessModal.jsx";



const EnrollForm = () => {

    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = (values, action) => {
        setLoading(true);
        emailjs.send("service_9xlhznp",
            "template_dl6zd0s",
            {
                from_name: values.name,
                to_name: 'Elevate Tutoring',
                from_email: values.email,
                phone_number: values.phoneNumber,
                to_email: 'alton_ong@live.com.sg',
                grade: values.grade,
                subject_choice: values.subjectChoice
            },
            'PsFDrxNN0fVhcLU7c'
        ).then(() => {
            setLoading(false);
            alert('Thank you I will get back to you as soon as possible.');
            action.resetForm();
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong, please give us a call instead!');
        })
    }

    const {values, errors, handleBlur, handleChange, handleSubmit,  touched} = useFormik({
        initialValues: {
            name: "",
            phoneNumber: "",
            email: "",
            grade: "",
            subjectChoice: ""
        },
        validationSchema: basicSchema,
        onSubmit
    });

    const [loading, setLoading] = useState(false);

    return (
        <>
            {/*<SuccessModal/>*/}
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
                        <form className="flex flex-col py-3 space-y-4" onSubmit={handleSubmit}>
                            <InputField
                                placeholder="Type your full name..."
                                id="full name"
                                type="text"
                                name="name"
                                label="Full name"
                                handleChange={handleChange}
                                value={values.name}
                                handleBlur={handleBlur}
                                errors={errors.name}
                                touched={touched.name}
                            />

                            <InputField
                                placeholder="Type your phone number..."
                                name="phoneNumber"
                                id="phone number"
                                type="number"
                                label="Phone number - Optional*"
                                handleChange={handleChange}
                                value={values.phoneNumber}
                                handleBlur={handleBlur}
                                errors={errors.phoneNumber}
                                touched={touched.phoneNumber}
                            />
                            <InputField
                                placeholder="Type your email..."
                                name="email"
                                id="email"
                                type="email"
                                label="Email"
                                handleChange={handleChange}
                                value={values.email}
                                handleBlur={handleBlur}
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <div className="flex gap-4">
                                <InputField
                                    placeholder="Grade"
                                    name="grade"
                                    id="grade"
                                    type="text"
                                    label="Grade"
                                    handleChange={handleChange}
                                    value={values.grade}
                                    handleBlur={handleBlur}
                                    errors={errors.grade}
                                    touched={touched.grade}
                                />
                                <InputField
                                    placeholder="Select subject choice..."
                                    name="subjectChoice"
                                    type="text"
                                    id="subject choice"
                                    label="Subject choice"
                                    handleChange={handleChange}
                                    value={values.subjectChoice}
                                    handleBlur={handleBlur}
                                    errors={errors.subjectChoice}
                                    touched={touched.subjectChoice}
                                />
                            </div>
                            <div className="w-full flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-[32px] py-[8px] bg-secondary rounded-xl border-2 border-primary/40 font-bold w-full lg:w-auto"
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", "tween", 1.2, 1)}
                        className="lg:w-1/2 space-y-[40px]">
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
        </>
    );
};

export default SectionsWrapper(EnrollForm, "enroll-form");
