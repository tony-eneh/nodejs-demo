const app = require("express")();

const images = [
  "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
  "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
  "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
  "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
  "https://homepages.cae.wisc.edu/~ece533/images/frymire.png",
  "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
  "https://homepages.cae.wisc.edu/~ece533/images/goldhill.png",
  "https://homepages.cae.wisc.edu/~ece533/images/lenacolor.png",
  "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
  "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
  "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  "https://homepages.cae.wisc.edu/~ece533/images/sails.png",
  "https://homepages.cae.wisc.edu/~ece533/images/serrano.png",
  "https://homepages.cae.wisc.edu/~ece533/images/tulips.png",
  "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
  "https://homepages.cae.wisc.edu/~ece533/images/zelda.png",
];

app.get("/images", (req, res) => {
  res.status(200).send(images);
});

app.listen(process.env.PORT || 3000);
