import PropTypes from "prop-types";

const InputField = ({label, type, name,  id, placeholder, handleChange, value}) => {
    return (
        <div className="space-y-1">
            <label htmlFor={id} className="font-bold xl:text-lg">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                onChange={handleChange}
                value={value}
                name={name}
                className="lg:py-4 py-3 lg:px-6 pl-3 placeholder:text-gray-500 text-primary rounded-lg outlined-none border border-primary/40 font-medium w-full"/>
        </div>
    );
};

export default InputField;

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
};

