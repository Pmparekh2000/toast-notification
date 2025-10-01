import {AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose, AiOutlineInfoCircle, AiOutlineWarning} from "react-icons/ai";

const iconsStyles = {marginRight: "10px"}

export const ICONS = {
    success: <AiOutlineCheckCircle style={iconsStyles}/>,
    info: <AiOutlineInfoCircle style={iconsStyles}/>,
    warning: <AiOutlineWarning style={iconsStyles}/>,
    error: <AiOutlineCloseCircle style={iconsStyles}/>,
    close: <AiOutlineClose />
}