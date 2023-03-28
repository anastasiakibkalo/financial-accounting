import axios from "axios";

//TODO:fix this
//@ts-ignore
const instance = axios.create({ baseUrl: "http://192.168.88.239:4444" });

export default instance;
