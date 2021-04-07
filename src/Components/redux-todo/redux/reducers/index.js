import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todoCr from "./todos";

export default combineReducers({
    todoCr,
    visibilityFilter
});