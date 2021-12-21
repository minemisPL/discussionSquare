import {likedComments, ownComments} from "./keys";
import {addToStorage, isPresent, removeFromStorage} from "./utils";

export const isOwnComment = (id) => {
    return  isPresent(id, ownComments)
}

export const isLiked = (id) => {
    return isPresent(id, likedComments)
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
