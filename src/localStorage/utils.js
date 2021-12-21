export const isPresent = (id, storageName) => {
    const commentsIds = getFromStorage(storageName)

    let isFound = false

    commentsIds.forEach(ownId => {
        if (ownId === id) {
            isFound = true
        }
    })
    if (!isFound) {
    }

    return isFound
}

export const getFromStorage = (storageName) => {
    const commentIds = localStorage.getItem(storageName)
    return JSON.parse(commentIds) || []
}

export const addToStorage = (id, storageName) => {
    const commentIds = getFromStorage(storageName)
    commentIds.push(id)

    localStorage.setItem(storageName, JSON.stringify(commentIds))
}

export const removeFromStorage = (id, storageName) => {
    let commentIds = getFromStorage(storageName)

    commentIds = commentIds.filter(commentId => {
        return commentId !== id
    })

    localStorage.setItem(storageName, JSON.stringify(commentIds))
}