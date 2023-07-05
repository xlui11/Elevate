import PropTypes from "prop-types";

const SubjectButton = ({ buttonText, selected }) => {
    return (
        <button
            className={`${
                selected
                    ? "border-2 border-[#E99762] bg-[#F4D3A8] shadow-xl"
                    : "border-1 shadow-sm"
            }  px-[24px] py-[12px] text-black font-medium text-[20px] rounded-lg cursor-pointer w-[256px]`}
        >
            {buttonText}
        </button>
    );
};

export default SubjectButton;

SubjectButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    selected: PropTypes.bool
};
