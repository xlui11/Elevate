import PropTypes from "prop-types";

const SubjectButton = ({ buttonText, currCategory, handleToggle }) => {
    return (
        <button
            onClick={(e) => handleToggle(e, buttonText)}
            className={`${
                currCategory === buttonText
                    ? "border-2 border-[#E99762] bg-[#F4D3A8] shadow-xl"
                    : "border-1 shadow-sm"
            }  px-[12px] py-[12px] text-black font-medium text-[20px] rounded-lg cursor-pointer w-[256px]`}
        >
            {buttonText}
        </button>
    );
};

export default SubjectButton;

SubjectButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    currCategory: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired
};
