import styled from "styled-components";

const Comment = ({ dateTime, username, content, likes }) => {

    const Comment = styled.div`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.secondaryColor};
    `

    return (
        <Comment className={"comment"}>
            <div className={"commentTitle"}>
                <p className={"username"}>{username}</p>
                <p className={"dateTime"}>{dateTime.toLocaleString()}</p>
            </div>
            <p className={"content"}>{content}</p>
            <p className={"likes"}>{likes}</p>
        </Comment>
    );
};

export default Comment;