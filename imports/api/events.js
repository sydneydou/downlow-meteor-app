import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  Meteor.publish("events", function eventsPublication() {
    return Events.find({});
  });
}
Meteor.methods({
  "events.newEvent"(newEvent) {
    Events.insert({ ...newEvent });
  },
  "events.addUserReservation"(eventId, userId) {
    Events.update({ _id: eventId }, { $addToSet: { reserved: userId } });
  },
  "events.deleteUserEvent"(eventId) {
    Events.remove(eventId);
  },
  "events.removeUserReservation"(eventId, userId) {
    Events.update({ _id: eventId }, { $pull: { reserved: userId } });
  }
});
