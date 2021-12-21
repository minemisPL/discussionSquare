import React, {useContext, useState} from "react";
import {v4 as UUID} from "uuid";
import {addOwnComment, removeOwnComment} from "../localStorage/localStorageAPI";

const CommentDataContext = React.createContext(undefined)
const CommentDataFunctions = React.createContext(undefined)

export const useCommentData = () => {
    return useContext(CommentDataContext)
}

export const useCommentDataFunctions = () => {
    return useContext(CommentDataFunctions)
}

const CommentDataProvider = ({ children }) => {
    const [commentData, setCommentData] = useState([])

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

    const removeComment = (id) => {
         const commentsList = [...commentData]

         commentsList.filter(commentData => commentData.id === id)

         removeOwnComment(id)
         setCommentData(commentsList)
    }

    const functions = {
        add: addComment,
        remove: removeComment
    }

    return (
        <CommentDataContext.Provider value={commentData}>
            <CommentDataFunctions value = {functions}>
                {children}
            </CommentDataFunctions>
        </CommentDataContext.Provider>
    );
};

export default CommentDataProvider;
