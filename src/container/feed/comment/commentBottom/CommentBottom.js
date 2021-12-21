import styled from "styled-components";
import {AiOutlineDelete, AiOutlineEdit, BiLike} from "react-icons/all";
import {IconContext} from "react-icons";
const CommentBottom = ({ likes, isOwnComment, deleteComment }) => {

    const ComBot = styled.div`
      color: ${props => props.theme.secondaryColor};
    `

    const makeCommentBottom = (isOwnComment) => {
        return isOwnComment ?
            <IconContext.Provider
                value={{margin: '1rem', size: '1.3rem'}}>
                <div className={"commentBottomElement"}>
                    <BiLike />
                    <p>{likes}</p>
                </div>
                <div className={"commentBottomElement"}>
                    <AiOutlineEdit/>
                    <p>edit</p>
                </div>
                <div
                    className={"commentBottomElement"}
                    onClick={() => deleteComment()}
                >
                    <AiOutlineDelete/>
                    <p>delete</p>
                </div>
            </IconContext.Provider>
            :
            <IconContext.Provider
                value={{margin: '1rem', size: '1.3rem'}}>
                <div className={"commentBottomElement"}>
                    <BiLike />
                    <p>{likes}</p>
                </div>
            </IconContext.Provider>
    }

    return (
        <ComBot className={isOwnComment ? "commentBottomOwn" : "commentBottom"}>
            {makeCommentBottom(isOwnComment)}
        </ComBot>
    );
};

export default CommentBottom;