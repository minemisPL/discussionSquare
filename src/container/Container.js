import CommentFeed from "./feed/CommentFeed";
import "./feed/commentFeed.css"
import styled from "styled-components";
import AddCommentSection from "./addComment/AddCommentSection";
import {commentsData as dataDummy} from "./feed/commentDataDummy";
import { useEffect } from "react";
import {useCommentDataFunctions} from "../dataManagment/commentData";

const Container = () => {

    const setCommentData = useCommentDataFunctions().set

    useEffect(() => {
        //setCommentData(dataDummy)
    }, [])

    const Main = styled.main`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.primaryColor};
    `

    return (
        <Main className={"main"}>
            <div className={"containerFeed"}>
                <CommentFeed/>
            </div>

            <AddCommentSection/>
        </Main>
    );
};

export default Container;