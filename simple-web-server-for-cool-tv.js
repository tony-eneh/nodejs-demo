var http = require("http");

const model = {
  // TODO: Check the exact nature of m3u8 files and find out
  // whether they support single url for stream OR each URL show an
  // interactive UI just like a DVD.

  channels: [
    {
      id: "jgoi49sk894uhk933h94hg1",
      url: "http://45.126.83.51/uq2663/h/h03/index.m3u8",
      name: "Bloomberg TV Asia (HK)!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg2",
      url: "http://103.199.161.254/Content/bbcworld/Live/Channel(BBCworld)/index.m3u8",
      name: "BBC World News!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg3",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Nwa nigga!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg4",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Heyoo!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg5",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Dats we roh!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg6",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Enweee!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg7",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "O nweee buru ya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg8",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Chineke Umunwanyi eeh!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg9",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Naso!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg10",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Looks at you!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg11",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Plans and bensicle!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg12",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Aru na aru!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg13",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg14",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg15",
      url: "https://ewoo.com/egwu-diya.m3u8",
      name: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
  ],

  getChannels: () => {
    return JSON.stringify(model.channels);
  },

  getChannel: (id) => {
    const data = model.channels.filter((channel) => channel.id === id);
    console.log("data from model:", data);
    return JSON.stringify(data);
  },
};

http
  .createServer(function (req, res) {
    // A parsed url to work with in case there are parameters
    var _url;
    // In case the client uses lower case for methods.
    req.method = req.method.toUpperCase();
    console.log(req.method + " " + req.url);

    // allow cors requests
    res.setHeader("Access-Control-Allow-Origin", "*");

    if ((_url = /^\/api\/channels$/i.exec(req.url))) {
      // return a list of channels
      res.writeHead(200);
      return res.end(model.getChannels());
    } else if ((_url = /^\/api\/channels\/([A-Za-z0-9]+)$/i.exec(req.url))) {
      // find the channel by the id in the route
      console.log("got channel shit");
      console.log(_url);
      res.writeHead(200);
      let id = _url[1]; /** the second item in the array is my desired id */
      return res.end(model.getChannel(id));
    } else {
      res.end("couldn't fetch no sh*t");
    }
  })
  .listen(process.env.PORT || 4200);
