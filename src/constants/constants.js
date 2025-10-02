import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineCloseCircle, AiOutlineWarning, AiOutlineClose } from "react-icons/ai";


export const ICONS = {
    "success": <AiOutlineCheckCircle />,
    "info": <AiOutlineInfoCircle />,
    "warning": <AiOutlineWarning />,
    "error": <AiOutlineCloseCircle />,
    "cross": <AiOutlineClose />
}

export const POSITIONS_OPTIONS = [
    {
        value: "top-right",
        text: "Top Right",
    },
    {
        value: "top-left",
        text: "Top Left",
    },
    {
        value: "bottom-right",
        text: "Bottom Right",
    },
    {
        value: "bottom-left",
        text: "Bottom Left",
    }
];
