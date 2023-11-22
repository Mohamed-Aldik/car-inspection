import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { User } from "../../../types/user";
import { URL } from "../../../utils/constants";

// Validation Schema
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^(\+\d{1,3}[- ]?)?\d{4,10}$/, "Invalid phone number") // Changed the regex to allow 5 to 12 digits
      .required("Phone number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm password is required"),
  });

  export const useRegisterFormHandler =()=>{
    const navigate = useNavigate();
    const toast = useToast();
  
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
      });
    
      const onSubmit = (data: User) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.some((user: User) => user.email === data.email)) {
          toast({
            title: "Registration failed.",
            description: "Email already registered.",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
          return;
        }
    
        const newUser = {
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          password: data.password, // In a real application, password should be hashed
        };
    
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    
        toast({
          title: "Registration successful.",
          description: "You have successfully registered!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
    
        navigate(URL.LOGIN_PAGE);
      };

      return {
        errors,
        handleSubmit,
        register,
        onSubmit,
      };
  }