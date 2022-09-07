import "./app.css";
import request from "./models/request";

const root = document.getElementById("root");

async function init() {
  const data = await request();
  root.innerHTML = data;
}

init();
