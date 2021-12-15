import styled from "styled-components";

const CommentContent = ({ dateTime, username, content }) => {

    const CommentContent = styled.div`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.secondaryColor};
      outline: 0.2rem ${props => props.theme.secondaryDark} solid;
    `

    return (
        <CommentContent className={"comment"}>
            <div className={"commentTitle"}>
                {username && <p className={"username"}>{username}</p>}
                {dateTime && <p className={"dateTime"}>{dateTime.toLocaleString()}</p>}
            </div>
            <p className={"content"}>{content}</p>
        </CommentContent>
    );
};

export default CommentContent;