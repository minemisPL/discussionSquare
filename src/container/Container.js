import CommentFeed from "./feed/CommentFeed";
import "./feed/commentFeed.css"
import styled from "styled-components";
import AddCommentSection from "./addComment/AddCommentSection";
import {commentsData as dataDummy} from "./feed/commentDataDummy";
import {v4 as UUID} from "uuid";
import {useEffect, useState} from "react";
import {addOwnComment, removeOwnComment} from "../localStorage/localStorageAPI";
import CommentDataProvider from "../dataManagment/commentData";

const Container = () => {

    const [commentData, setCommentData] = useState([])

    useEffect(() => {
        setCommentData(dataDummy)
    }, [])

    const Main = styled.main`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.primaryColor};
    `

    const addComment = (name, content) => {
        const commentsList = [...commentData]

        const id = UUID()

        commentsList.push({
            id: id,
            dateTime: new Date(),
            username: name,
            content: content,
            likes: 0,
        })

        addOwnComment(id)
        setCommentData(commentsList)
    }

    const deleteComment = (id) => {
        const commentsList = [...commentData]

        commentsList.filter(commentData => commentData.id === id)

        removeOwnComment(id)
        setCommentData(commentsList)
    }

    return (
        <Main className={"main"}>
            <CommentDataProvider>
                <div className={"containerFeed"}>
                    <CommentFeed
                        commentsData={commentData}
                        deleteComment={deleteComment}
                    />
                </div>

                <div>
                    <AddCommentSection
                        addComment={addComment}
                    />
                </div>
            </CommentDataProvider>
        </Main>
    );
};

export default Container;