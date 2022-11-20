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
    })
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  };
}

let currentOwnerId = 0;
let posts = [
  {
    image:
      "https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Frank%20Bienewald%20,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1550055652/wmfy2jlwpwdenepocvwd.jpg",
    date: "03.05.2012",
    location: "Val d'Orcia",
    flower: "Poppies",
    id: 2,
    ownerId: 3,
    comments: []
  },
  {
    image:
      "https://as2.ftcdn.net/v2/jpg/02/35/92/41/500_F_235924153_5SOFEtzFcgXtiRJIXyeJA6WfKoDIYYNU.jpg",
    date: "15.04.2014",
    location: "Bellagio",
    flower: "Wisteria",
    id: 5,
    ownerId: 2,
    comments: [
      {
        ownerId: 1,
        content: "jsdfhjghlaughiwrhjsdfhjghlaughiwrhawhjavhaghqawrajjsdfhjghlaughiwrhawhjavhaghqawrsdfhjghlaughiwrhawhjavhaghqawrwhjavhaghqawrjsdfhjghlaughiwrhawhjavhaghqawr"
      },
      {
        ownerId: 3,
      },
      {
        ownerId: 2,
      },
    ],
  },
  {
    image:
      "https://www.flyinghighonpoints.com/wp-content/uploads/2020/05/IMG_9542-1-scaled.jpg",
    date: "01.03.2016",
    location: "Antelope valley",
    flower: "Poppies",
    id: 6,
    ownerId: 1,
    comments: [
      {
        ownerId: 1,
        content: "hi",
      },
      {
        ownerId: 2,
        content: "byebyebyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      },
      {
        ownerId: 3
      },
    ],
  },
  {
    image:
      "https://www.lelongweekend.com/wp-content/uploads/2022/02/DSC04162-scaled.jpg",
    date: "10.07.2020",
    location: "Valensole",
    flower: "Lavender",
    id: 56,
    ownerId: 0,
    comments: [],
  },
];

let users = [
  {
    username: "Diana",
    pfp: "https://www.creativefabrica.com/wp-content/uploads/2021/07/07/1625642389/Fairy-silhouette-580x386.jpg",
    id: 0
  },
  {
    username: "Moshe",
    pfp: "https://tools.bard.edu/wwwmedia/pubs/articles/images/1206826/The-Moon-Fairy-Samatar.png",
    id: 1
  },  
  {
    username: "Lavie",
    pfp: "",
    id: 2
  },
  {
    username: "Matan",
    pfp: "",
    id: 3
  },
]


export  async function createPost(info) {
  let newId = Math.max(...posts.map((post) => post.id)) + 1;
  info.id = newId;
  info.ownerId = currentOwnerId;
  info.comments = [];
  posts.push(info);
  return {ok:true};
}

export async function getPosts() {
  return posts;
}

export async function getUser(id) {
  return users[id];
}

export async function signUp(email, username, password) {
  return this._request("signup", "POST", { password, email, username });
}

