import {IoAddCircleOutline} from "react-icons/all";
import { IconContext } from "react-icons";

const AddCommendButton = () => {
    return (
        <div className={"addCommentButton"}>
            <IconContext.Provider
                value={{size: '4rem'}}
            >
                <p>ADD COMMENT<IoAddCircleOutline/></p>
            </IconContext.Provider>
        </div>
    );
};

export default AddCommendButton;