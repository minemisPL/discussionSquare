import {AiFillCloseCircle} from "react-icons/all";
import {useState} from "react";
import {useCommentDataFunctions} from "../../../dataManagment/commentData";

const AddCommentForm = ({ setIsAddComment }) => {

    const [isNameError, setNameError] = useState(false)
    const [isContentError, setContentError] = useState(false)

    const [name, setName] = useState("")
    const [content, setContent] = useState("")

    const addComment = useCommentDataFunctions().add

    return (
        <div className={"addCommentForm"}>
            <form>
                <div className={"closeButton"}
                        onClick={() => setIsAddComment(false)}
                ><AiFillCloseCircle/></div>
                <div>
                    <label id={"userNameLabel"} htmlFor="userName">Your name:</label>
                    <input id={"userNameInput"} name="userName" type="text"
                           onChange={event => setName(event.target.value)}
                           placeholder={isNameError ? "You need a name!" : ""}
                    />
                </div>

                <div>
                    <label id={"contentLabel"} htmlFor="content">Your message:</label>
                    <textarea id={"contentInput"} name="content" type="text"
                              onChange={event => setContent(event.target.value)}
                              placeholder={isContentError ? "You need content!" : ""}/>
                </div>

                <button type={"submit"} className={"submitButton"}
                    onClick={event => {
                        event.preventDefault()
                        setNameError(!name)
                        setContentError(!content)

                        if (name && content) {
                            console.log("name: " + name)
                            console.log("content: " + content)
                            addComment(name, content)
                            setIsAddComment(false)
                        }
                    }}
                >Add comment</button>

            </form>
        </div>
    );
};

export default AddCommentForm;