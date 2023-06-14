import Admin from "./Admin/Admin";
import Instructor from "./Instructor/Instructor";
import Student from "./Student/Student";

const Dashboard  = () => {
    const isAdmin = true;
    const isStudent = true;
    return (
        <div>
            {isAdmin && <Admin></Admin> }
            <Instructor></Instructor>
            {isStudent && <Student></Student>}
        </div>
    );
};

export default Dashboard ;