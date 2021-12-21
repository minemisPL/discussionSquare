import CommentContent from "./commentContent/CommentContent";
import CommentBottom from "./commentBottom/CommentBottom";
import "./commentBottom/commentBottom.css"
import {useState} from "react";

const Comment = ({ commentData }) => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [isEdited, setIsEdited] = useState(false)

    const makeCommentBottom = (likes) => {
        if (!isNaN(likes)) return <CommentBottom
            likes={likes}
            id={commentData.id}
            setIsEdit={setIsEditMode}
        />
    }

    return (
        <div>
            <CommentContent
                commentData={commentData}
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}
                isEdited={isEdited}
                setIsEdited={setIsEdited}
            />
            {makeCommentBottom(commentData.likes)}
        </div>
    );
};

export default Comment;