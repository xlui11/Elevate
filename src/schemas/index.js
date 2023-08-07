import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    phoneNumber: yup.number().positive().integer(),
    name: yup.string().required("Required"),
    grade: yup.string().required("Required"),
    subjectChoice: yup.string().required("Required")

})
