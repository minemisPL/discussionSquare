import "./comment/commentContent/commentContent.css"
import Comment from "./comment/Comment";
import styled from "styled-components";
import {useCommentData} from "../../dataManagment/commentData";

const CommentFeed = () => {

    const commentsData = useCommentData()

    const makeComments = (commentsData) => {
        const comments = []
        commentsData.forEach(commentData => {
            comments.push(
                {
                    id: commentData.id,
                    comment: <Comment
                        commentData={commentData}
                    />
                }
            )
        })

        if (!comments.length) {
            comments.push(
                {
                    id: 0,
                    comment: <Comment
                        commentData={{
                            dateTime: null,
                            username: "Minemis Blog",
                            content: "Looks like we don't have any posts yet... Let's be first!",
                            likes: NaN
                        }}
                    />
                }
            )
        }

        return comments.reverse()
    }

    const comments = makeComments(commentsData)

    const Feed = styled.div`
      outline: 0.4rem ${props => props.theme.primaryDark} solid;
      background-color: ${props => props.theme.shadowRGB};
      box-shadow: 0.2rem 0.2rem 3rem -0.3rem ${props => props.theme.shadowColor};
    `

    return (
        <Feed className={"feed"}>
            {comments.map(comment => comment.comment)}
        </Feed>
    );
};

export default CommentFeed;