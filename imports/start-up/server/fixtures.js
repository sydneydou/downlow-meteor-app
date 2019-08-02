import { Meteor } from "meteor/meteor";
import { Events } from "../../api/events";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: "animal@party.com",
      password: "password",
      username: "Partyanimal"
    });
  }

  if (Events.find().count() === 0) {
    Events.insert({
      title: "Shambhala",
      artist: "Skrillex",
      date: "Aug.9th, 9:00p.m",
      genre: "Dub Step",
      location: "9999 Granville St",
      reserved: [],
      createdBy: []
    });
  }
});
