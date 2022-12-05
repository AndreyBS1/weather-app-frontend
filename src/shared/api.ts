import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;
const appid = process.env.REACT_APP_API_KEY;

export const baseRequest = axios.create({
  baseURL,
  timeout: 2500,
  params: { appid },
});

export function handleRequestError(error: any) {
  console.group("Request error");
  if (error.response) {
    console.log("data:", error.response.data);
    console.log("status:", error.response.status);
    console.log("headers:", error.response.headers);
  } else if (error.request) {
    console.log("request:", error.request);
  } else {
    console.log("message:", error.message);
  }
  console.log("config:", error.config);
  console.groupEnd();
}
