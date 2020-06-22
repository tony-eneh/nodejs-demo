const express = require("express");

const app = express();

const model = {
  // TODO: Check the exact nature of m3u8 files and find out
  // whether they support single url for stream OR each URL show an
  // interactive UI just like a DVD.

  channels: [
    {
      id: "jgoi49sk894uhk933h94hg1",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg2",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg3",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg4",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg5",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg6",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg7",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg8",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg9",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg10",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg11",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg12",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg13",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg14",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
    {
      id: "jgoi49sk894uhk933h94hg15",
      url: "https://ewoo.com/egwu-diya.m3u8",
      title: "Egwu Diya!",
      description:
        "ipsum lorem est in hoc nihi et haca at deoun git ata arakapatune egosum echial mongoose mongo node express hapi mysql in suru suru ewooo chai.",
    },
  ],

  getChannels: (callback) => {
    callback(channels);
  },

  getChannel: (id,(callback)=>{
     const data = channels.filter((channel)=> channel.id === id);
      callback(data);
  })
};

app.get(
  "/api/channels",
  (req, res) => {
    model.getChannels((err, data) => {
      res.send(data);      
    });
  }
);

app.get('/api/channels/:id',(req, res)=>{
    model.getChannels(id ,(err, data)=>{
        res.send(data);
    })
})

app.listen(4200, ()=> console.log`cool-tv API server started. Running at port 4200`);
