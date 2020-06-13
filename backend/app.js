// Full Documentation - https://docs.turbo360.co
const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID })

const config = {
  views: "views", // Set views directory
  static: "public", // Set static assets directory
  // controllers: require('./controllers'), 	// only for CMS integration
  db: {
    url: "mongodb://localhost/backend",
    type: "mongo",
    onError: err => {
      console.log("DB Connection Failed.")
    },
    onSuccess: () => {
      console.log("DB connected!")
    },
  },
}

const app = vertex.app(config)

// import routes
const index = require("./routes/index")
const api = require("./routes/api")

// set routes
app.use("/", index)
app.use("/api", api) // sample API Routes

module.exports = app
