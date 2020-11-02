/**
 * an express API for image urls
 *
 * How to use
 * GET /images?n=no_of_images
 *
 * send a get request to the above url where the query parameter n should
 * be a number representing the no of images you want
 *
 * Example: to fetch 100 random images
 *
 * GET /images?n=100
 *
 * Sending a request without n query parameter results in a response
 * with an array containing 18 urls. This is the default.
 *
 *
 */

const app = require("express")();

console.log("image-server page actually ran");

// enable cross origin access
app.use((req, res, next) => {
  console.log("enable access control middleware was called");
  res.set("Access-Control-Allow-Origin", "*");
  return next();
});

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

const selectRandomImage = () =>
  images[Math.floor(Math.random() * images.length)];

app.get("/images", (req, res) => {
  console.log("image was actually fetched");
  console.log(req.query);

  // if number of images is specified, create an array with such number of urls.
  // If not, just return your predefined array of image urls
  const data = req.query.n
    ? Array.from({ length: req.query.n }).map(selectRandomImage)
    : images;

  res.status(200).send(data);
});

app.listen(process.env.PORT || 3000);
