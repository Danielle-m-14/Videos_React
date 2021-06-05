import axios from "axios";

const KEY = "AIzaSyApvb4jlaKUGeu-W0SCIJNfonGo_4oNUrs";

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
       part: "snippet",
       type: "video",
       maxResults: 5,
       key: KEY
   }
});