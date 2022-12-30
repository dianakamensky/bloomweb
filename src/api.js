class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _request(path, method, body, headers = {}) {
  const jwt = localStorage.getItem("jwt");
    if (jwt) {
      headers.authorization = `Bearer ${jwt}`;
    }
    const url = new URL(`${this._url}/${path}`);
    if (method === "GET") {
      Object.keys(body || {}).forEach((key) =>
        url.searchParams.append(key, body[key])
      );
    }
    const allHeaders = { ...this._headers, ...headers };
    return fetch(url, {
      method,
      headers: allHeaders,
      body: method === "GET" ? null : JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 401) {
        localStorage.removeItem("userId");
        localStorage.removeItem("jwt");
      }
      return Promise.reject(res);
    });
  }

  signUp(username, password) {
    return this._request("users/signup", "POST", { password, username });
  }

  signIn(username, password) {
    return this._request("users/signin", "POST", { password, username });
  }

  getUser() {
    return this._request("users/profile", "GET");
  }

  getUserById(id) {
    return this._request(`users/user/${id}`, "GET");
  }

  updateUser(data) {
    return this._request("users/profile", "PATCH", data);
  }

  savePost(id) {
    return this._request(`users/save/${id}`, "PUT");
  }

  unsavePost(id) {
    return this._request(`users/save/${id}`, "DELETE");
  }

  getSavedPosts() {
   return this._request("users/profile/saved", "GET");
    
  }

  getUserPosts() {
    return this._request("users/profile/posts", "GET");
  }

  getPosts(query) {
    return this._request("posts", "GET", query);
  }

  getPost(id) {
    return this._request(`posts/${id}`, "GET");
  }

  deletePost(id) {
    return this._request(`posts/${id}`, "DELETE");
  }

  createComment(content, id) {
    return this._request(`posts/${id}/comments`, "POST", content);
  }

  createPost(data) {
    return this._request("posts", "POST", data);
  }
}

const api = new Api({
  baseUrl: "http://localhost:3000",
  //baseUrl: "http://bloomweb.verymad.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
