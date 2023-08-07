import PropTypes from "prop-types";

import {AnimatePresence, motion} from "framer-motion";

const InputField = ({label, type, name,  id, placeholder, handleChange, value, handleBlur, errors, touched}) => {
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
                onBlur={handleBlur}
                className={`lg:py-4 py-3 lg:px-6 pl-3 placeholder:text-gray-500 text-primary rounded-lg outlined-none border  font-medium w-full ${errors && touched ? "border-red-400" : "border-primary/40"}`}/>

            <AnimatePresence>
                {errors && touched ?
                    <motion.p
                        initial={{y: -50, opacity: 0}}
                        animate={{y : 0, opacity: 1}}
                        transition={{type: "spring", duration: 0.4}}
                        exit={{
                            opacity: 0,
                            y: -150,
                            transition: {
                                duration: 0.5,
                                type: "linear"
                            }
                        }}
                        className="w-full flex flex-row-reverse text-red-500">
                            {errors}
                    </motion.p> : null}

            </AnimatePresence>
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
    handleBlur: PropTypes.any.isRequired,
    errors: PropTypes.any,
    touched: PropTypes.any
};

