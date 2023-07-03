import PropTypes from "prop-types";

const MainButton = ({buttonText, location, primary}) => {
    return (
        <a href={location}>
            <button className={`uppercase px-[36px] py-[12px] rounded-lg text-links text-[20px]  cursor-pointer  ${primary ? "bg-secondary border border-black shadow-button" : "border border-black"}`}>
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
