/**
 ** Module : EXT-Autostart
 ** @bbjoern
 ** ©03-2023
 ** support: https://forum.bugsounet.fr
 **/

Module.register("EXT-Autostart", {
  defaults: {
    notifications: [
      {
        type: "GA_ACTIVATE",
        value: {type: "TEXT", key: "EXT-Autostart working", chime: false}
      }
    ]
  },

  getDom: function() {
    var dom = document.createElement("div")
    dom.style.display = 'none'
    return dom
  },

  notificationReceived: function(noti, payload,sender) {
    switch(noti) {
      case "DOM_OBJECTS_CREATED":
        this.sendSocketNotification("INIT")
        this.sendNotification("EXT_HELLO", this.name)
		console.log("[Autostart] Sending Notifications")
        this.config.notifications.forEach(startNotification => {
		  console.log("[Autostart] Notification type=" + startNotification.type)
          this.sendNotification(startNotification.type, startNotification.value);
        });
        break
    }
  }
})
