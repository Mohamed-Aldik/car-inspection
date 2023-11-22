import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user";

interface UserState {
	user: Omit<User, "password"> | undefined;
	isAuthenticated: boolean;
}

const initialState: UserState = {
	user: undefined,
	isAuthenticated: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logIn: (state, action: PayloadAction<UserState["user"]>) => {
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		logOut: (state) => {
			state.user = undefined;
			state.isAuthenticated = false;
		},
	},
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
