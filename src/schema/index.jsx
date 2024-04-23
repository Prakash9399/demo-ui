import * as Yup from "yup";

export const profileSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required(" * Please enter your first name"),
  
  last_name: Yup.string().min(2).max(25).required(" * Please enter your last name"),
    
  user_name: Yup.string().min(2).max(25).required(" * Please enter your user name"),

  email: Yup.string().email().required(" * Please enter your email"),

  phone_number: Yup.string().matches(/^[0-9]{10}$/, "* Please enter a valid phone number").required("* Please enter your phone number"),
 
  password: Yup.string().min(6).required(" * Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], " * Password must match"),
});