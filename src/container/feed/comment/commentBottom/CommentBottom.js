import styled from "styled-components";
import { BiLike } from "react-icons/all";
import {IconContext} from "react-icons";
const CommentBottom = ({ likes }) => {

    const ComBot = styled.div`
      color: ${props => props.theme.secondaryColor};
    `
    return (
        <ComBot className={"commentBottom"}>
            <IconContext.Provider
                value={{margin: '1rem', size: '1.3rem'}}>
                <div className={"likes"}>
                    <BiLike />
                    <p>{likes}</p>
                </div>

            </IconContext.Provider>
        </ComBot>
    );
};

export default CommentBottom;