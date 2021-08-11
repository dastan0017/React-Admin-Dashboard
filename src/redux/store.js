import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer/themeSlice";

export default configureStore({
	reducer: { theme: themeReducer },
});
