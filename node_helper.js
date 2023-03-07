"use strict"

var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  socketNotificationReceived: function (noti, payload) {
    switch (noti) {
      case "INIT":
        console.log("[WELCOME] EXT-Autostart Version:", require('./package.json').version, "rev:", require('./package.json').rev)
        break
    }
  }

})
