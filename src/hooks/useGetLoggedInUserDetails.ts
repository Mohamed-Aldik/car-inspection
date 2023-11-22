import { useEffect } from "react";
import { User } from "../types/user";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/slices/userSlice";

export const useGetLoggedInUserDetails = () => {
	const dispatch = useDispatch();
	const loggedInUserEmail = localStorage.getItem("loggedInUser");

	useEffect(() => {
		if (loggedInUserEmail) {
			const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

			const loggedInUser = users.find((user: User) => user.email === loggedInUserEmail);

			if (loggedInUser) {
				dispatch(logIn({ name: loggedInUser.name, email: loggedInUser.email, phoneNumber: loggedInUser.phoneNumber }));
			}
		}
	}, [dispatch, loggedInUserEmail]);
};
