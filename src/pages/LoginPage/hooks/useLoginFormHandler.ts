import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { User } from "../../../types/user";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/slices/userSlice";

// Validation Schema
const schema = yup.object().shape({
	email: yup.string().email("Invalid email format").required("Email is required"),
	password: yup.string().required("Password is required"), // For security reasons we will not tell the guests what is the min value of the password
});


export const useLoginFormHandler =()=>{
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: Pick<User, "email" | "password">) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user) => user.email === data.email);

    if (!user) {
      toast({
        title: "Error",
        description: "Email not registered",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    if (user.password !== data.password) {
      toast({
        title: "Error",
        description: "Incorrect password",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    dispatch(logIn({ name: user.name, email: user.email, phoneNumber: user.phoneNumber }));
    localStorage.setItem("loggedInUser", user.email);
    navigate("/dashboard");
  };

    return {
      errors,
      handleSubmit,
      register,
      onSubmit,
    };
}