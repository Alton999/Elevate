import { motion } from "framer-motion";


const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
}

const SectionsWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section id={idName} variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.25}} className="lg:max-w-[1280px] mx-auto pb-[48px]"
            >
                <Component/>
            </motion.section>
        );
    };


export default SectionsWrapper;
