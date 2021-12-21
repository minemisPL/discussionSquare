import {likedComments, ownComments} from "./keys";

export const isOwnComment = (id) => {
    const ownCommentsIds = getFromStorage(ownComments)

    let isFound = false

    ownCommentsIds.forEach(ownId => {
        if (ownId === id) {
            isFound = true
        }
    })
    if (!isFound) {
    }

    return isFound
}

export const addOwnComment = id => {
    addToStorage(id, ownComments)
}

export const addLike = id => {
    addToStorage(id, likedComments)
}

export const removeOwnComment = id => {
    removeFromStorage(id, ownComments)
}

export const removeLike = id => {
    removeFromStorage(id, likedComments)
}

const getFromStorage = (storageName) => {
    const commentIds = localStorage.getItem(storageName)
    return JSON.parse(commentIds) || []
}

const addToStorage = (id, storageName) => {
    const commentIds = getFromStorage(storageName)
    commentIds.push(id)

    localStorage.setItem(storageName, JSON.stringify(commentIds))
}

const removeFromStorage = (id, storageName) => {
    let commentIds = getFromStorage(storageName)

    commentIds = commentIds.filter(commentId => {
        return commentId !== id
    })

    localStorage.setItem(storageName, JSON.stringify(commentIds))
}