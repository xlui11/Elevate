import PropTypes from "prop-types";

const MainButton = ({buttonText, location, primary}) => {
    return (
        <a href={location}>
            <button className={`uppercase lg:px-[36px] py-[12px] lg:text-[20px] w-full rounded-lg text-links cursor-pointer ${primary ? "bg-secondary border border-black shadow-button" : "border border-black"}`}>
                {buttonText}
            </button>
        </a>
    );
};

export default MainButton;


MainButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    location: PropTypes.string,
    primary: PropTypes.bool
};
