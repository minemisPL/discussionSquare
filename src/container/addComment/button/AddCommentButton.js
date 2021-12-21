import {IoAddCircleOutline} from "react-icons/all";
import { IconContext } from "react-icons";
import styled from "styled-components";

const AddCommendButton = ({ setIsAddComment }) => {

    const addIconHeight = "4rem";

    const AddCommentP = styled.p`
      border: 0.2rem solid ${props => props.theme.shadowColor};
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.secondaryColor};
      display: flex;
      align-items: center;
      font-size: min(2rem, 5vh);
      border-radius: 3rem;
      padding-left: 0.8rem;
    `

    const SvgDiv = styled.div`
      height: ${addIconHeight};
      background-color: ${props => props.theme.primaryLight};
      border-radius: 2rem;
    `

    return (
        <div className={"addCommentButton"} onClick={() => setIsAddComment(true)}>

            <AddCommentP>ADD COMMENT
                <SvgDiv>
                    <IconContext.Provider
                        value={{size: addIconHeight}}
                    >
                        <IoAddCircleOutline/>
                    </IconContext.Provider>
                </SvgDiv>
            </AddCommentP>

        </div>
    );
};

export default AddCommendButton;