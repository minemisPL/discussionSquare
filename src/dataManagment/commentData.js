import React, {useContext, useEffect, useState} from "react";
import {v4 as UUID} from "uuid";
import {addLike, addOwnComment, removeLike, removeOwnComment} from "../localStorage/localStorageAPI";
import {commentsData} from "../container/feed/commentDataDummy";

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

    useEffect(() => {
        setCommentData(commentsData)
    }, [])

    const addComment = (name, content) => {
        const commentsList = [...commentData]

        const id = UUID()

        commentsList.push({
            id: id,
            dateTime: new Date(),
            username: name,
            content: content,
            likes: 0,
            isEdited: false,
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
        applyOnComment(id, commentData => {
            commentData.likes++
        })
    }

    const removeLikeFromComment = (id) => {
        removeLike(id)
        applyOnComment(id, commentData => {
            commentData.likes--
        })
    }

    const changeContent = (id, content) => {
        applyOnComment(id,
                commentData => {
            commentData.content = content
            commentData.isEdited = true
        })
    }

    const applyOnComment = (id, consumer) => {
        let commentsList = [...commentData]

        commentsList.forEach(commentData => {
            if (commentData.id === id) {
                consumer(commentData)
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
        changeContent: changeContent,
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
