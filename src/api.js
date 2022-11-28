import { json } from "react-router-dom";

export class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  async _request(path, method, body, headers = {}) {
    const url = new URL(`${this._url}/${path}`);
    if (method === "GET") {
      Object.keys(body || {}).forEach((key) =>
        url.searchParams.append(key, body[key])
      );
    }
    const allHeaders = { ...this._headers, ...headers };
    res = await fetch(url, {
      method,
      headers: allHeaders,
      body: method === "GET" ? null : JSON.stringify(body),
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }
}

let currentCommentId = 7;
let posts = [
  {
    image:
      "https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Frank%20Bienewald%20,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1550055652/wmfy2jlwpwdenepocvwd.jpg",
    date: new Date("May 5, 2005"),
    location: "Val d'Orcia",
    flower: "Poppies",
    id: 0,
    ownerId: 3,
    comments: [],
  },
  {
    image:
      "https://as2.ftcdn.net/v2/jpg/02/35/92/41/500_F_235924153_5SOFEtzFcgXtiRJIXyeJA6WfKoDIYYNU.jpg",
    date: new Date("April 15, 2023"),
    location: "Bellagio",
    flower: "Wisteria",
    id: 1,
    ownerId: 2,
    comments: [
      {
        id: 3,
        ownerId: 1,
        content:
          "jsdfhjghlaughiwrhjsdfhjghlaughiwrhawhjavhaghqawrajjsdfhjghlaughiwrhawhjavhaghqawrsdfhjghlaughiwrhawhjavhaghqawrwhjavhaghqawrjsdfhjghlaughiwrhawhjavhaghqawr",
      },
      {
        id: 4,
        ownerId: 3,
      },
      {
        id: 5,
        ownerId: 2,
      },
    ],
  },
  {
    image:
      "https://www.flyinghighonpoints.com/wp-content/uploads/2020/05/IMG_9542-1-scaled.jpg",
    date: new Date("March 21, 2002"),
    location: "Antelope valley",
    flower: "Poppies",
    id: 2,
    ownerId: 1,
    comments: [
      {
        ownerId: 1,
        content: "hi",
        id: 0,
      },
      {
        ownerId: 2,
        content: "bubbles",
        id: 1,
      },
      {
        ownerId: 3,
        content: "ugaaaaaaaaaaaa",
        id: 2,
      },
    ],
  },
  {
    image:
      "https://www.lelongweekend.com/wp-content/uploads/2022/02/DSC04162-scaled.jpg",
    date: new Date("July 21, 2003"),
    location: "Valensole",
    flower: "Lavender",
    id: 3,
    ownerId: 0,
    comments: [],
  },
];

let users = [
  {
    username: "Diana",
    password: "0",
    pfp: "https://www.creativefabrica.com/wp-content/uploads/2021/07/07/1625642389/Fairy-silhouette-580x386.jpg",
    id: 0,
    savedPosts: new Set(),
  },
  {
    username: "Moshe",
    password: "1",
    pfp: "https://tools.bard.edu/wwwmedia/pubs/articles/images/1206826/The-Moon-Fairy-Samatar.png",
    id: 1,
    savedPosts: new Set(),
  },
  {
    username: "Lavie",
    password: "2",
    pfp: "",
    id: 2,
    savedPosts: new Set(),
  },
  {
    username: "Matan",
    password: "3",
    pfp: "",
    id: 3,
    savedPosts: new Set(),
  },
];

export async function createPost(info) {
  let newId = Math.max(...posts.map((post) => post.id)) + 1;
  info.id = newId;
  info.ownerId = getCurrentUser();
  info.comments = [];
  posts.push(info);
  return json({ info });
}

export async function postComment(comment, postId) {
  const post = posts.find((post) => post.id == postId);
  const newComment = {
    id: currentCommentId,
    content: comment.comment,
    ownerId: getCurrentUser(),
  };
  post.comments.push(newComment);
  currentCommentId += 1;
  return json(newComment);
}

export async function getPosts(query) {
  let results = posts;
  if (!query) {
    return results;
  }
  if (query.ownerId != undefined) {
    results = results.filter((post) => post.ownerId === query.ownerId);
  }
  if (query.saverId != undefined) {
    const saver = await getUser(query.saverId);
    const savedPosts = saver.savedPosts;
    results = results.filter((post) => savedPosts.has(post.id));
  }
  if (query.flower != undefined) {
    results = results.filter((post) =>
      post.flower.toLowerCase().includes(query.flower.toLowerCase())
    );
  }
  if (query.location != undefined) {
    results = results.filter((post) =>
      post.location.toLowerCase().includes(query.location.toLowerCase())
    );
  }
  if (query.from) {
    const date = new Date(query.from);
    results = results.filter((post) => date <= post.date);
  }
  if (query.to) {
    const date = new Date(query.to);
    results = results.filter((post) => date >= post.date);
  }
  return results;
}

export async function getUser(id = getCurrentUser()) {
  return users[id];
}

export function getCurrentUser() {
  return Number(localStorage.getItem("userId"));
}

export async function signUp(username, password) {
  //return this._request("signup", "POST", { password, email, username });
  if (
    users.some((user) => user.username.toLowerCase() === username.toLowerCase())
  ) {
    throw new Error("Username already in use");
  }
  if (password.length < 10) {
    throw new Error("Password is too short");
  }
  const newId = Math.max(...users.map((user) => user.id)) + 1;
  users.push({ username, password, pfp: "", id: newId, savedPosts: new Set() });
  return json(users[users.length - 1]);
}

export async function signIn(username, password) {
  localStorage.setItem("userId", undefined);
  const user = users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
  if (user === undefined) {
    throw json({ username: "Username doesn't exist" }, { status: 400 });
  }
  if (user.password != password) {
    throw json({ password: "Password is incorrect"}, {status: 400});
  }
  localStorage.setItem("userId", user.id);
}

export async function savePost(data, postId, userId) {
  if (data.save === "true") {
    users[userId].savedPosts.add(Number(postId));
  } else users[userId].savedPosts.delete(Number(postId));
}

export async function deletePost(postId) {
  const postIndex = posts.findIndex((post) => post.id === Number(postId));
  if (postIndex >= 0) {
    posts.splice(postIndex, 1);
  }
}
