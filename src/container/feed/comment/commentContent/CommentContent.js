import styled from "styled-components";
import {MdCancel, MdDone} from "react-icons/all";
import {useCommentDataFunctions} from "../../../../dataManagment/commentData";

const CommentContent = ({ commentData, isEditMode, setIsEditMode, isEdited, setIsEdited }) => {

    const changeContent = useCommentDataFunctions().changeContent

    let newContent = ""

    const CommentContent = styled.div`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.secondaryColor};
      outline: 0.2rem ${props => props.theme.secondaryDark} solid;
    `

    const makeContent = (isEditMode) => {
        return  isEditMode ?
                <form className={"content edit"}>
                        <textarea type={"text"}
                                  defaultValue={commentData.content}
                                  onChange={event => newContent = event.target.value}
                        />
                    <button
                        onClick={event => {
                            event.preventDefault()
                            if (newContent) {
                                changeContent(commentData.id, newContent)
                            }
                            setIsEditMode(false)
                        }}
                    ><MdDone /></button>
                    <button
                        onClick={event => {
                            event.preventDefault()
                            setIsEditMode(false)
                        }}
                    ><MdCancel /></button>
                </form>
                :
                <p className={"content"}>{
                    commentData.isEdited ?
                        commentData.content + " (edited)"
                        :
                        commentData.content
                }</p>
    }

    return (
        <CommentContent className={"comment"}>
            <div className={"commentTitle"}>
                {commentData.username && <p className={"username"}>{commentData.username}</p>}
                {commentData.dateTime && <p className={"dateTime"}>{commentData.dateTime.toLocaleString()}</p>}
            </div>
            {makeContent(isEditMode)}
        </CommentContent>
    );
};

export default CommentContent;