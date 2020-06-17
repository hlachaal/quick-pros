// Full Documentation - https://docs.turbo360.co
const express = require("express")
const router = express.Router()

const Profile = require("../models/Profile")

router.get("/profile", (req, res) => {
  const query = req.query
  Profile.find(query)
    .then(profiles => {
      res.json({
        confirmation: "success",
        data: profiles,
      })
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        data: err.message,
      })
    })
})

module.exports = router
