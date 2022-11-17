export async function createPost(info) {}

export async function getPosts() {
  return [
    {
      image:
        "https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Frank%20Bienewald%20,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1550055652/wmfy2jlwpwdenepocvwd.jpg",
      date: "03.05.2012",
      location: "Val d'Orcia",
      flower: "Poppies",
      id: 2,
      owner: {
        username: "Diana",
        pfp: "",
        id: "",
      },
    },
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/02/35/92/41/500_F_235924153_5SOFEtzFcgXtiRJIXyeJA6WfKoDIYYNU.jpg",
      date: "15.04.2014",
      location: "Bellagio",
      flower: "Wisteria",
      id: 5,
      owner: {
        username: "Diana",
        pfp: "",
        id: "",
      },
      comments: [
        {
          owner: {
            username: "Moshe",
            pfp: "",
          },
        },
        {
          owner: {
            username: "Moshe",
            pfp: "",
          },
        },
        {
          owner: {
            username: "Moshe",
            pfp: "",
          },
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
      owner: {
        username: "Diana",
        pfp: "https://www.creativefabrica.com/wp-content/uploads/2021/07/07/1625642389/Fairy-silhouette-580x386.jpg",
        id: "",
      },
      comments: [
        {
          owner: {
            username: "Moshe",
            pfp: "https://tools.bard.edu/wwwmedia/pubs/articles/images/1206826/The-Moon-Fairy-Samatar.png",
          },
          content: "hi",
        },
        {
          owner: {
            username: "Moshe",
            pfp: "https://tools.bard.edu/wwwmedia/pubs/articles/images/1206826/The-Moon-Fairy-Samatar.png",
          },
          content: "byebyebyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        },
        {
          owner: {
            username: "Moshe",
            pfp: "https://tools.bard.edu/wwwmedia/pubs/articles/images/1206826/The-Moon-Fairy-Samatar.png",
          },
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
      owner: {
        username: "Diana",
        pfp: "",
        id: "",
      },
      comments: [],
    },
  ];
}

export async function signUp(email, username, password) {
  return this._request("signup", "POST", { password, email, username });
}
