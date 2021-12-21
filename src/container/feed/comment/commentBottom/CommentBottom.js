import styled from "styled-components";
import {AiFillLike, AiOutlineDelete, AiOutlineEdit, AiOutlineLike} from "react-icons/all";
import {IconContext} from "react-icons";
import {useCommentDataFunctions} from "../../../../dataManagment/commentData";
import {isLiked, isOwnComment as isOwnCommentFromApi} from "../../../../localStorage/localStorageAPI";

const CommentBottom = ({ id ,likes, setIsEdit }) => {

    const deleteComment = useCommentDataFunctions().remove
    const likeComment = useCommentDataFunctions().like
    const removeLike = useCommentDataFunctions().removeLike

    const isOwnComment = isOwnCommentFromApi(id)

    const ComBot = styled.div`
      color: ${props => props.theme.secondaryColor};
    `

    const makeCommentBottom = (isOwnComment) => {
        return isOwnComment ?
            <IconContext.Provider
                value={{margin: '1rem', size: '1.3rem'}}>
                {makeLike(isLiked(id))}
                <div className={"commentBottomElement"}
                     onClick={() => setIsEdit(true)}>
                    <AiOutlineEdit/>
                    <p>edit</p>
                </div>
                <div
                    className={"commentBottomElement"}
                    onClick={() => deleteComment(id)}
                >
                    <AiOutlineDelete/>
                    <p>delete</p>
                </div>
            </IconContext.Provider>
            :
            <IconContext.Provider
                value={{margin: '1rem', size: '1.3rem'}}>
                <div className={"commentBottomElement"}>
                    <AiOutlineEdit/>
                    <p>{likes}</p>
                </div>
            </IconContext.Provider>
    }

    const makeLike = (isLiked) => {
        return (
            <div className={"commentBottomElement"}
                 onClick={() => {
                     isLiked ?
                         removeLike(id)
                         :
                         likeComment(id)

                 }}>
                {isLiked ? <AiFillLike /> : <AiOutlineLike />}
                <p>{likes}</p>
            </div>
        )
    }

    return (
        <ComBot className={isOwnComment ? "commentBottomOwn" : "commentBottom"}>
            {makeCommentBottom(isOwnComment)}
        </ComBot>
    );
};

export default CommentBottom;