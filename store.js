import { createStore } from "@reduxjs/toolkit";

import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import rootIndex from './reducer/index'



export const store = createStore(rootIndex, composeWithDevTools());

