import Hero from "../components/Sections/Hero.jsx";
import About from "../components/Sections/About.jsx";
import MeetTheTeam from "../components/Sections/MeetTheTeam.jsx";
import Testimonials from "../components/Sections/Testimonials.jsx";
import SubjectOfferings from "../components/Sections/SubjectOfferings.jsx";
import EnrollForm from "../components/Sections/EnrolFormSection.jsx";

const Index = () => {
	return (
		<>
			<Hero />
			<About />
			<MeetTheTeam />
			<Testimonials />
			<SubjectOfferings />
			<EnrollForm/>
		</>
	);
};

export default Index;
