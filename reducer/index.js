import { combineReducers } from "@reduxjs/toolkit";
import { contactData } from "./dataReducer";

export default combineReducers({
    contact:contactData,
})