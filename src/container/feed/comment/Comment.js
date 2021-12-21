import CommentContent from "./commentContent/CommentContent";
import CommentBottom from "./commentBottom/CommentBottom";
import "./commentBottom/commentBottom.css"

const Comment = ({ commentData }) => {

    const makeCommentBottom = (likes) => {
        if (!isNaN(likes)) return <CommentBottom
            likes={likes}
            id={commentData.id}
        />
    }

    return (
        <div>
            <CommentContent
                dateTime={commentData.dateTime}
                username={commentData.username}
                content={commentData.content}
            />
            {makeCommentBottom(commentData.likes)}
        </div>
    );
};

export default Comment;