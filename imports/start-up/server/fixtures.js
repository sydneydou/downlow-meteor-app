import { Meteor } from "meteor/meteor";
import { Events } from "../../api/events";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    const users = [
      {
        email: "a@a.com",
        password: "a",
        username: "a"
      },
      {
        email: "b@b.com",
        password: "b",
        username: "b"
      }
    ];

    users.map(user => {
      const userID = Accounts.createUser(user);
      if (user) {
        console.log("user created: ", userID);
      } else {
        console.log("Can not create users");
      }
    });
  }

  if (Events.find().count() === 0) {
    const events = [
      {
        title: "Shambhala",
        artist: "Skrillex",
        date: "Aug.9th, 9:00p.m",
        genre: "Dub Step",
        location: "9999 Granville St",
        reserved: [],
        createdBy: []
      },
      {
        title: "F4ded",
        artist: "Griz",
        date: "July 6th, 9:00p.m",
        genre: "Future Funk",
        location: "Surrey",
        reserved: [],
        createdBy: []
      }
    ];

    Events.insert(events);
  }
});
