var http = require("http");

const model = {
  // TODO: Check the exact nature of m3u8 files and find out
  // whether they support single url for stream OR each URL show an
  // interactive UI just like a DVD.

  channels: [
    {
      id: "jgoi49sk894uhk933h94hg1",
      url:
        "http://rmtvlive-lh.akamaihd.net/i/rmtv_1@154306/index_1000_av-p.m3u8?sd=10&rebase=on?iptvgratis?chile.m3u8",
      name: "Real Madrid TVS",
      description: "",
    },
    {
      id: "jgoi49sk894uhk933h94hg2",
      url:
        "http://103.199.161.254/Content/bbcworld/Live/Channel(BBCworld)/index.m3u8",
      name: "BBC World News!",
      description:
        "",
    },
    {
      id: "jgoi49sk894uhk933h94hg3",
      url:
        "http://rbetis-hls.flumotion.com/rbetis/live/chunklist.m3u8?iptvgratis?chile.m3u8",
      name: "Betis tv",
      description: "",
    },
    {
      id: "jgoi49sk894uhk933h94hg4",
      url:
        "http://sevillafc_live-lh.akamaihd.net/i/video_0@354142/index_0300_av-b.m3u8?iptvgratis?chile.m3u8",
      name: "Sevilla FC",
      description: "",
    },
    {
      id: "jgoi49sk894uhk933h94hg5",
      url:
        "http://173.236.10.10:1935/dgrau/dgrau/live.m3u8?iptvgratis?chile.m3u8",
      name: "All Sports",
      description: "",
    },
    {
      id: "jgoi49sk894uhk933h94hg6",
      url:
        "http://evo.eltelon.com:1935/trailertv/smil:trailertv.smil/playlist.m3u8",
      name: "Trailer TV",
      description: "",
    },
    {
      id: "jgoi49sk894uhk933h94hg7",
      url:
        "http://cl-a1-p-e-tz2.cdn.mdstrm.com/live-stream/591f607e06b52d200a6066ea/playout/index-v1-a1.m3u8?",
      name: "TVN Kids",
      description: "",
    },
    {
      id: "jgoi49sk894uhk933h94hg8",
      url: "http://ar.watcha.live/ch16/hi.m3u8",
      name: "Tateti",
      description: "",
    },
    {
      id: "jgoi49sk894uhk933h94hg9",
      url: "http://v3.tustreaming.cl:80/tvpop/live1/index.m3u8",
      name: "TV Pop",
      description:
        "",
    },
    {
      id: "jgoi49sk894uhk933h94hg10",
      url: "https://593b04c4c5670.streamlock.net/8702/8702/chunklist.m3u8",
      name: "Mundo Auto Tv",
      description:
        "",
    },
    {
      id: "jgoi49sk894uhk933h94hg11",
      url: "http://149.56.17.92:1935/8404/8404/master.m3u8",
      name: "Arab Tv",
      description:
        "",
    },
    {
      id: "jgoi49sk894uhk933h94hg12",
      url: "http://a3live-lh.akamaihd.net/i/a3shds/geoa3series_1@122775/index_1_av-b.m3u8?iptvgratis?chile.m3u8",
      name: "Atreseries",
      description:
        "",
    },
    {
      id: "jgoi49sk894uhk933h94hg13",
      url: "http://a3live-lh.akamaihd.net/i/mghds/geomega_1@328914/index_1_av-b.m3u8?iptvgratis?chile.m3u8",
      name: "MEGA",
      description:
        "",
    },
    {
      id: "jgoi49sk894uhk933h94hg14",
      url: "http://runway.videocdn.scaleengine.net/runway-iphone/play/runway/chunklist.m3u8",
      name: "Runway Fashion",
      description:
        "",
    },
    {
      id: "jgoi49sk894uhk933h94hg15",
      url: "http://d2ai41bknpka2u.cloudfront.net/live/iss.stream_source/playlist.m3u8",
      name: "NASA Space Station",
      description:
        "",
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
