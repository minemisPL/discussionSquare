import AddCommendButton from "./button/AddCommentButton";
import "./button/addCommentButton.css"
import "./form/addCommentForm.css"
import AddCommentForm from "./form/AddCommentForm";
import {useState} from "react";

const AddCommentSection = () => {

    const [isAddComment, setIsAddComment] = useState(false)

    const makeFormOrButton = (isAddComment) => {
        return isAddComment ?
            <AddCommentForm setIsAddComment={setIsAddComment}/>
            :
            <AddCommendButton
                setIsAddComment={setIsAddComment}
            />
    }

    return (
        <div>
            {makeFormOrButton(isAddComment)}
        </div>
    );
};

export default AddCommentSection;