"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getTime(minutesAgo) {
    var ts = new Date(new Date().getTime() - minutesAgo * 60 * 1000);
    return "" + ts.getHours() + ":" + ts.getMinutes() + ":" + ts.getSeconds() + " " + ts.getDate() + "-" + (ts.getMonth() + 1) + "-" + ts.getFullYear();
}

exports["default"] = [[{
    attributes: {
        next_rising: "06:38:23 08-02-2015",
        next_setting: "17:28:06 08-02-2015"
    },
    entity_id: "sun.sun",
    last_changed: getTime(1440),
    state: "below_horizon"
}, {
    attributes: {
        next_rising: "06:37:32 09-02-2015",
        next_setting: "17:28:06 08-02-2015"
    },
    entity_id: "sun.sun",
    last_changed: getTime(940),
    state: "above_horizon"
}, {
    attributes: {
        next_rising: "06:37:32 09-02-2015",
        next_setting: "17:29:01 09-02-2015"
    },
    entity_id: "sun.sun",
    last_changed: getTime(720),
    state: "below_horizon"
}, {
    attributes: {
        next_rising: "06:37:32 09-02-2015",
        next_setting: "17:29:01 09-02-2015"
    },
    entity_id: "sun.sun",
    last_changed: getTime(420),
    state: "below_horizon"
}], [{
    attributes: {
        auto: true,
        entity_id: ["light.tv_back_light", "light.ceiling", "light.bowl", "light.bed_light"],
        friendly_name: "all lights"
    },
    entity_id: "group.all_lights",
    last_changed: getTime(1440),
    state: "on"
}, {
    attributes: {
        auto: true,
        entity_id: ["light.tv_back_light", "light.ceiling", "light.bowl", "light.bed_light"],
        friendly_name: "all lights"
    },
    entity_id: "group.all_lights",
    last_changed: getTime(1100),
    state: "off"
}, {
    attributes: {
        auto: true,
        entity_id: ["light.tv_back_light", "light.ceiling", "light.bowl", "light.bed_light"],
        friendly_name: "all lights"
    },
    entity_id: "group.all_lights",
    last_changed: getTime(900),
    state: "on"
}, {
    attributes: {
        auto: true,
        entity_id: ["light.tv_back_light", "light.ceiling", "light.bowl", "light.bed_light"],
        friendly_name: "all lights"
    },
    entity_id: "group.all_lights",
    last_changed: getTime(600),
    state: "off"
}, {
    attributes: {
        auto: true,
        entity_id: ["light.tv_back_light", "light.ceiling", "light.bowl", "light.bed_light"],
        friendly_name: "all lights"
    },
    entity_id: "group.all_lights",
    last_changed: getTime(400),
    state: "on"
}, {
    attributes: {
        auto: true,
        entity_id: ["light.tv_back_light", "light.ceiling", "light.bowl", "light.bed_light"],
        friendly_name: "all lights"
    },
    entity_id: "group.all_lights",
    last_changed: getTime(200),
    state: "off"
}, {
    attributes: {
        auto: true,
        entity_id: ["light.tv_back_light", "light.ceiling", "light.bowl", "light.bed_light"],
        friendly_name: "all lights"
    },
    entity_id: "group.all_lights",
    last_changed: getTime(100),
    state: "on"
}], [{
    attributes: {
        friendly_name: "Bed light"
    },
    entity_id: "light.bed_light",
    last_changed: getTime(1440),
    state: "off"
}, {
    attributes: {
        brightness: 254,
        friendly_name: "Bed light",
        xy_color: [0.4595, 0.4105]
    },
    entity_id: "light.bed_light",
    last_changed: getTime(720),
    state: "on"
}, {
    attributes: {
        friendly_name: "Bed light"
    },
    entity_id: "light.bed_light",
    last_changed: getTime(130),
    state: "off"
}], [{
    attributes: {
        auto: false,
        entity_id: ["light.Bed_light"],
        friendly_name: "bedroom"
    },
    entity_id: "group.bedroom",
    last_changed: getTime(1440),
    state: "off"
}, {
    attributes: {
        auto: false,
        entity_id: ["light.Bed_light"],
        friendly_name: "bedroom"
    },
    entity_id: "group.bedroom",
    last_changed: getTime(1300),
    state: "on"
}, {
    attributes: {
        auto: false,
        entity_id: ["light.Bed_light"],
        friendly_name: "bedroom"
    },
    entity_id: "group.bedroom",
    last_changed: getTime(1000),
    state: "off"
}, {
    attributes: {
        auto: false,
        entity_id: ["light.bed_light"],
        friendly_name: "bedroom"
    },
    entity_id: "group.bedroom",
    last_changed: getTime(100),
    state: "on"
}], [{
    attributes: {
        brightness: 144,
        friendly_name: "Ceiling",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.ceiling",
    last_changed: getTime(1440),
    state: "on"
}, {
    attributes: {
        friendly_name: "Ceiling"
    },
    entity_id: "light.ceiling",
    last_changed: getTime(1220),
    state: "off"
}, {
    attributes: {
        brightness: 144,
        friendly_name: "Ceiling",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.ceiling",
    last_changed: getTime(1000),
    state: "on"
}, {
    attributes: {
        friendly_name: "Ceiling"
    },
    entity_id: "light.ceiling",
    last_changed: getTime(700),
    state: "off"
}, {
    attributes: {
        brightness: 144,
        friendly_name: "Ceiling",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.ceiling",
    last_changed: getTime(560),
    state: "on"
}, {
    attributes: {
        friendly_name: "Ceiling"
    },
    entity_id: "light.ceiling",
    last_changed: getTime(300),
    state: "off"
}, {
    attributes: {
        brightness: 144,
        friendly_name: "Ceiling",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.ceiling",
    last_changed: getTime(150),
    state: "on"
}], [{
    attributes: {
        brightness: 144,
        friendly_name: "TV back light",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.tv_back_light",
    last_changed: getTime(1440),
    state: "on"
}, {
    attributes: {
        friendly_name: "TV back light"
    },
    entity_id: "light.tv_back_light",
    last_changed: getTime(800),
    state: "off"
}, {
    attributes: {
        brightness: 144,
        friendly_name: "TV back light",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.tv_back_light",
    last_changed: getTime(500),
    state: "on"
}, {
    attributes: {
        friendly_name: "TV back light"
    },
    entity_id: "light.tv_back_light",
    last_changed: getTime(300),
    state: "off"
}, {
    attributes: {
        brightness: 144,
        friendly_name: "TV back light",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.tv_back_light",
    last_changed: getTime(100),
    state: "on"
}], [{
    attributes: {
        brightness: 144,
        friendly_name: "Bowl",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.bowl",
    last_changed: getTime(1440),
    state: "on"
}, {
    attributes: {
        friendly_name: "Bowl"
    },
    entity_id: "light.bowl",
    last_changed: getTime(1200),
    state: "off"
}, {
    attributes: {
        friendly_name: "Bowl"
    },
    entity_id: "light.bowl",
    last_changed: getTime(1000),
    state: "off"
}, {
    attributes: {
        brightness: 144,
        friendly_name: "Bowl",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.bowl",
    last_changed: getTime(700),
    state: "on"
}, {
    attributes: {
        friendly_name: "Bowl"
    },
    entity_id: "light.bowl",
    last_changed: getTime(500),
    state: "off"
}, {
    attributes: {
        brightness: 144,
        friendly_name: "Bowl",
        xy_color: [0.5119, 0.4147]
    },
    entity_id: "light.bowl",
    last_changed: getTime(300),
    state: "on"
}, {
    attributes: {
        friendly_name: "Bowl"
    },
    entity_id: "light.bowl",
    last_changed: getTime(200),
    state: "off"
}], [{
    attributes: {
        auto: false,
        entity_id: ["light.Bowl", "light.TV_back_light", "light.Ceiling"],
        friendly_name: "living room"
    },
    entity_id: "group.living_room",
    last_changed: getTime(1440),
    state: "on"
}, {
    attributes: {
        auto: false,
        entity_id: ["light.Bowl", "light.TV_back_light", "light.Ceiling"],
        friendly_name: "living room"
    },
    entity_id: "group.living_room",
    last_changed: getTime(1000),
    state: "off"
}, {
    attributes: {
        auto: false,
        entity_id: ["light.Bowl", "light.TV_back_light", "light.Ceiling"],
        friendly_name: "living room"
    },
    entity_id: "group.living_room",
    last_changed: getTime(700),
    state: "on"
}, {
    attributes: {
        auto: false,
        entity_id: ["light.Bowl", "light.TV_back_light", "light.Ceiling"],
        friendly_name: "living room"
    },
    entity_id: "group.living_room",
    last_changed: getTime(200),
    state: "off"
}, {
    attributes: {
        auto: false,
        entity_id: ["light.Bowl", "light.TV_back_light", "light.Ceiling"],
        friendly_name: "living room"
    },
    entity_id: "group.living_room",
    last_changed: getTime(100),
    state: "on"
}], [{
    attributes: {
        entity_picture: "http://graph.facebook.com/anne.t.frederiksen/picture",
        friendly_name: "Anne Therese"
    },
    entity_id: "device_tracker.anne_therese",
    last_changed: getTime(1440),
    state: "home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/anne.t.frederiksen/picture",
        friendly_name: "Anne Therese"
    },
    entity_id: "device_tracker.anne_therese",
    last_changed: getTime(1200),
    state: "not_home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/anne.t.frederiksen/picture",
        friendly_name: "Anne Therese"
    },
    entity_id: "device_tracker.anne_therese",
    last_changed: getTime(100),
    state: "home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/anne.t.frederiksen/picture",
        friendly_name: "Anne Therese"
    },
    entity_id: "device_tracker.anne_therese",
    last_changed: getTime(50),
    state: "not_home"
}], [{
    attributes: {
        entity_picture: "http://graph.facebook.com/schoutsen/picture",
        friendly_name: "Paulus"
    },
    entity_id: "device_tracker.paulus",
    last_changed: getTime(1440),
    state: "home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/schoutsen/picture",
        friendly_name: "Paulus"
    },
    entity_id: "device_tracker.paulus",
    last_changed: getTime(1130),
    state: "not_home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/schoutsen/picture",
        friendly_name: "Paulus"
    },
    entity_id: "device_tracker.paulus",
    last_changed: getTime(1020),
    state: "home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/schoutsen/picture",
        friendly_name: "Paulus"
    },
    entity_id: "device_tracker.paulus",
    last_changed: getTime(780),
    state: "not_home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/schoutsen/picture",
        friendly_name: "Paulus"
    },
    entity_id: "device_tracker.paulus",
    last_changed: getTime(500),
    state: "home"
}, {
    attributes: {
        entity_picture: "http://graph.facebook.com/schoutsen/picture",
        friendly_name: "Paulus"
    },
    entity_id: "device_tracker.paulus",
    last_changed: getTime(200),
    state: "home"
}], [{
    attributes: {
        auto: true,
        entity_id: ["device_tracker.Anne_Therese", "device_tracker.Paulus"],
        friendly_name: "all devices"
    },
    entity_id: "group.all_devices",
    last_changed: getTime(1440),
    state: "home"
}, {
    attributes: {
        auto: true,
        entity_id: ["device_tracker.Anne_Therese", "device_tracker.Paulus"],
        friendly_name: "all devices"
    },
    entity_id: "group.all_devices",
    last_changed: getTime(700),
    state: "not_home"
}, {
    attributes: {
        auto: true,
        entity_id: ["device_tracker.Anne_Therese", "device_tracker.Paulus"],
        friendly_name: "all devices"
    },
    entity_id: "group.all_devices",
    last_changed: getTime(400),
    state: "home"
}, {
    attributes: {
        auto: true,
        entity_id: ["device_tracker.anne_therese", "device_tracker.paulus"],
        friendly_name: "all devices"
    },
    entity_id: "group.all_devices",
    last_changed: getTime(100),
    state: "not_home"
}, {
    attributes: {
        auto: true,
        entity_id: ["device_tracker.anne_therese", "device_tracker.paulus"],
        friendly_name: "all devices"
    },
    entity_id: "group.all_devices",
    last_changed: getTime(50),
    state: "home"
}], [{
    attributes: {
        friendly_name: "Chromecast"
    },
    entity_id: "media_player.living_room",
    last_changed: getTime(1440),
    state: "Plex"
}, {
    attributes: {
        friendly_name: "Chromecast"
    },
    entity_id: "media_player.living_room",
    last_changed: getTime(900),
    state: "idle"
}, {
    attributes: {
        friendly_name: "Chromecast"
    },
    entity_id: "media_player.living_room",
    last_changed: getTime(800),
    state: "YouTube"
}, {
    attributes: {
        friendly_name: "Chromecast"
    },
    entity_id: "media_player.living_room",
    last_changed: getTime(300),
    state: "idle"
}], [{
    attributes: {
        friendly_name: "Outside temperature",
        unit_of_measurement: "°C"
    },
    entity_id: "sensor.outside_temperature",
    last_changed: getTime(1440),
    state: "23"
}, {
    attributes: {
        friendly_name: "Outside temperature",
        unit_of_measurement: "°C"
    },
    entity_id: "sensor.outside_temperature",
    last_changed: getTime(900),
    state: "27"
}, {
    attributes: {
        friendly_name: "Outside temperature",
        unit_of_measurement: "°C"
    },
    entity_id: "sensor.outside_temperature",
    last_changed: getTime(800),
    state: "25"
}, {
    attributes: {
        friendly_name: "Outside temperature",
        unit_of_measurement: "°C"
    },
    entity_id: "sensor.outside_temperature",
    last_changed: getTime(300),
    state: "23"
}], [{
    attributes: {
        friendly_name: "Nest",
        unit_of_measurement: "°C"
    },
    entity_id: "thermostat.nest",
    last_changed: getTime(1440),
    state: "18"
}, {
    attributes: {
        friendly_name: "Nest",
        unit_of_measurement: "°C"
    },
    entity_id: "thermostat.nest",
    last_changed: getTime(1020),
    state: "20"
}, {
    attributes: {
        friendly_name: "Nest",
        unit_of_measurement: "°C"
    },
    entity_id: "thermostat.nest",
    last_changed: getTime(800),
    state: "23"
}, {
    attributes: {
        friendly_name: "Nest",
        unit_of_measurement: "°C"
    },
    entity_id: "thermostat.nest",
    last_changed: getTime(300),
    state: "26"
}], [{
    attributes: {
        friendly_name: "Outside humidity",
        unit_of_measurement: "%"
    },
    entity_id: "sensor.outside_humidity",
    last_changed: getTime(1440),
    state: "45"
}, {
    attributes: {
        friendly_name: "Outside humidity",
        unit_of_measurement: "%"
    },
    entity_id: "sensor.outside_humidity",
    last_changed: getTime(900),
    state: "49"
}, {
    attributes: {
        friendly_name: "Outside humidity",
        unit_of_measurement: "%"
    },
    entity_id: "sensor.outside_humidity",
    last_changed: getTime(800),
    state: "58"
}, {
    attributes: {
        friendly_name: "Outside humidity",
        unit_of_measurement: "%"
    },
    entity_id: "sensor.outside_humidity",
    last_changed: getTime(300),
    state: "52"
}]];
module.exports = exports["default"];