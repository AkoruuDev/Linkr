import axios from "axios";

const BASE_URL = `http://localhost:4000`;

export function searchProfile(user_id) {
    const promise = axios.get(`${BASE_URL}/users/${user_id}`);

    return promise;
};

export function searchProfileList() {
    const promise = axios.get(`${BASE_URL}/users/list`);

    return promise;
};

export function likePost(post_id, user_id) {
    const body = {
        post_id,
        user_id
    }

    const promise = axios.post(`${BASE_URL}/like-post`, body);

    return promise;
}