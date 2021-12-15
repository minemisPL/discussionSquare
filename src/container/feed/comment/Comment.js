import CommentContent from "./commentContent/CommentContent";
import CommentBottom from "./commentBottom/CommentBottom";
import "./commentBottom/commentBottom.css"

const Comment = ({ dateTime, username, content, likes }) => {

    return (
        <div>
            <CommentContent
                dateTime={dateTime}
                username={username}
                content={content}
            />
            {likes &&
            <CommentBottom
                likes={likes}
            />}
        </div>
    );
};

export default Comment;