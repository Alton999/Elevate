import {SectionsWrapper} from "../../hoc";

import ClassPicture from "../../assets/classPicture.png"

import {motion} from "framer-motion";

// Animation helpers
import {fadeIn} from "../../utils/motion.js"

const About = () => {
    return (
        <section className="lg:h-screen lg:justify-center lg:py-0 pb-12 text-primary bg-line bg-no-repeat bg-right bg-cover flex flex-col space-y-16">
            {/*<div></div>*/}
            <motion.section
                className="lg:flex items-center justify-center mx-auto space-y-[20px] px-8">
                <motion.section
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="flex flex-col gap-[16px]">

                    <div className="gap-[8px]">
                        <h2 className="lg:text-[20px] mb-1 uppercase">Why Elevate tutoring</h2>
                        <h1 className="lg:text-[48px] text-[24px] font-semibold lg:leading-[56px] leading-[32px]">Personalised and <br/>relationship based tutoring</h1>
                    </div>
                    <p className="lg:text-[20px]">We are a tutoring centre based in Cabramatta specialising in small group learning. At Elevate Tutoring we understand the importance of building relationships with our students. We aim to help you achieve your personal best academic success. </p>
                </motion.section>
                <motion.figure
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className="flex w-full justify-center">
                    <img src={ClassPicture} alt="Image showing the classroom" className="w-[400px] "/>
                </motion.figure>
            </motion.section>
            {/*<div className="w-full lg:flex justify-between lg:h-[100px] items-center text-center">*/}
            {/*    <div className="w-full lg:text-[24px] text-[20px] bg-[#E99762]/60 h-full items-center flex justify-center py-6">Meet the team</div>*/}
            {/*    <div className="w-full lg:text-[24px] text-[20px] bg-[#F4E1C7] h-full items-center flex justify-center py-6">Testimonial</div>*/}
            {/*    <div className="w-full lg:text-[24px] text-[20px] bg-[#B8DDD0] h-full items-center flex justify-center py-6">Subject offerings</div>*/}
            {/*</div>*/}
        </section>
    );
};

export default SectionsWrapper(About, "about");
