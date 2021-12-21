import React, {useContext, useState} from "react";
import {v4 as UUID} from "uuid";
import {addLike, addOwnComment, removeLike, removeOwnComment} from "../localStorage/localStorageAPI";

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
        let commentsList = [...commentData]

        commentsList = commentsList.filter(commentData => {
             return commentData.id !== id
         })

         removeOwnComment(id)
         setCommentData(commentsList)
    }

    const likeComment = (id) => {
        addLike(id)
        changeLikes(id, 1)
    }

    const removeLikeFromComment = (id) => {
        removeLike(id)
        changeLikes(id, -1)
    }

    const changeLikes = (id, amount) => {
        let commentsList = [...commentData]

        commentsList.forEach(commentData => {
            if (commentData.id === id) {
                commentData.likes = commentData.likes + amount
            }
        })

        setCommentData(commentsList)
    }

    const functions = {
        add: addComment,
        remove: removeComment,
        set: setCommentData,
        like: likeComment,
        removeLike: removeLikeFromComment,
    }

    return (
        <CommentDataContext.Provider value={commentData}>
            <CommentDataFunctions.Provider value = {functions}>
                {children}
            </CommentDataFunctions.Provider>
        </CommentDataContext.Provider>
    );
};

export default CommentDataProvider;
