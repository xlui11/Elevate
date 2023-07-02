const MainButton = ({buttonText, location}) => {
    return (
        <a href={location}>
            <button className="uppercase px-[36px] py-[12px] rounded-lg bg-[#F1BD69] border border-black shadow-[4px_4px_0px_0px_#313030] cursor-pointer">
                {buttonText}
            </button>
        </a>
    );
};

export default MainButton;
