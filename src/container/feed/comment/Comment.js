import CommentContent from "./commentContent/CommentContent";
import CommentBottom from "./commentBottom/CommentBottom";
import "./commentBottom/commentBottom.css"

const Comment = ({ commentData, likes, isOwnComment, deleteCommentMain }) => {

    const deleteComment = () => {
        deleteCommentMain(0)
    }

    const makeCommentBottom = (likes) => {
        if (!isNaN(likes)) return <CommentBottom
            likes={likes}
            isOwnComment={isOwnComment}
            deleteComment={deleteComment}
        />
    }

    return (
        <div>
            <CommentContent
                dateTime={commentData.dateTime}
                username={commentData.username}
                content={commentData.content}
            />
            {makeCommentBottom(likes)}
        </div>
    );
};

export default Comment;