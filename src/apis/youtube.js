import axios from "axios";

const KEY = "AIzaSyBxrRwoCPjNTe0XxHWGdqEgIp6aw50CPQY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
