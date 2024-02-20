import axios from "axios";
import { getHomeList } from "../redux/slicers/homeslice";

export const getJsonDataApi = (dispatch) => {
    const data = axios('https://jsonplaceholder.typicode.com/posts')
    data?.then((res) => {
        dispatch(getHomeList(res?.data))
    })
}