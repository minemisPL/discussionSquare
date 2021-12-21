import AddCommendButton from "./button/AddCommentButton";
import "./button/addCommentButton.css"
import "./form/addCommentForm.css"
import AddCommentForm from "./form/AddCommentForm";
import {useState} from "react";

const AddCommentSection = ({ addComment }) => {

    const [isAddComment, setIsAddComment] = useState(false)

    const returnFormIfButtonClicked = (isAddComment) => {
        if (isAddComment) {
            return <AddCommentForm
                    setIsAddComment={setIsAddComment}
                    addComment={addComment}
            />
        }
    }

    return (
        <div>
            {
                returnFormIfButtonClicked(isAddComment)
            }

            <AddCommendButton
                setIsAddComment={setIsAddComment}
            />
        </div>
    );
};

export default AddCommentSection;