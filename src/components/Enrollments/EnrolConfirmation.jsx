import { MdAutorenew } from "react-icons/md";


const EnrolConfirmation = ({name, phoneNumber, email, grade, subjectChoice}) => {
    return (
        // <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center mt-0 z-20">
        //     <div className="bg-white p-2 rounded">My modal</div>
        // </div>
        <div className="space-y-3 lg:mr-12">
            <h2 className="lg:text-[40px] text-[32px] font-bold">Reach out to us!</h2>
            <div className="space-y-2">
                <p className="lg:text-[20px]">Thank you for enrolling! Your information has been sent to our team and we will reach out to you! We would like to confirm the information you have sent:</p>
                <ul className="lg:text-[20px] space-y-1">
                    <li><span className="font-bold">Name:</span> {name}</li>
                    <li><span className="font-bold">Email:</span> {email}</li>
                    <li><span className="font-bold">Grade:</span> {grade}</li>
                    <li><span className="font-bold">Subject choice:</span> {subjectChoice}</li>
                    <li><span className="font-bold">Phone number:</span> {phoneNumber !== "" ? phoneNumber : "Not provided"}</li>
                </ul>
                <button className='w-fit flex items-center px-4 border-2 border-primary/40 bg-secondary rounded-xl py-2 space-x-4'>
                    <MdAutorenew/>
                    Reset form
                </button>
            </div>
        </div>
    );
};

export default EnrolConfirmation;
