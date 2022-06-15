import Config from "./config.json";
import Axios from "axios";

export async function get_readme(user, project) {
    
    const options = {
        method: "GET",
        baseURL: Config.readme.baseUrl,
        url: `/${user}/${project}/${Config.readme.path}`
    }

    return Axios.request(options);
}
