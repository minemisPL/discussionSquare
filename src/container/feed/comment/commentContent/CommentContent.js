import styled from "styled-components";
import {MdCancel, MdDone} from "react-icons/all";

const CommentContent = ({ dateTime, username, content }) => {

    const CommentContent = styled.div`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.secondaryColor};
      outline: 0.2rem ${props => props.theme.secondaryDark} solid;
    `

    const makeContent = (isEdit) => {
        return  isEdit ?
                <form className={"content edit"}>
                    <textarea type={"text"}
                        value={content}
                    />
                    <button><MdDone /></button>
                    <button><MdCancel /></button>
                </form>
                :
                <p className={"content"}>{content}</p>
    }

    return (
        <CommentContent className={"comment"}>
            <div className={"commentTitle"}>
                {username && <p className={"username"}>{username}</p>}
                {dateTime && <p className={"dateTime"}>{dateTime.toLocaleString()}</p>}
            </div>
            {makeContent(true)}
        </CommentContent>
    );
};

export default CommentContent;