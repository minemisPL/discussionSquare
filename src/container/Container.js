import CommentFeed from "./feed/CommentFeed";
import AddCommendButton from "./addComment/AddCommentButton";
import "./feed/commentFeed.css"
import "./addComment/addCommentButton.css"
import styled from "styled-components";

const Container = () => {

    const Main = styled.main`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.primaryColor};
    `

    return (
        <Main className={"main"}>
            <div className={"containerFeed"}>
                <CommentFeed/>
            </div>
            <div>
                <AddCommendButton />
            </div>
        </Main>
    );
};

export default Container;