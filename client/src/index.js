import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import drizzle functions and contract artifact
import { Drizzle } from "drizzle";
import MyStringStore from "./contracts/MyStringStore.json";

// let drizzle know what contracts we want
const options = { contracts: [MyStringStore] };

// setup the drizzle store and drizzle
const drizzle = new Drizzle(options);

// pass in the drizzle instance
ReactDOM.render(<App drizzle={drizzle} />, document.getElementById("root"));