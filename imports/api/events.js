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
  "events.usersEvents"(userId) {
    return Events.find({ createdBy: userId }).fetch();
  },
  "events.addUserReservation"(eventId, userId) {
    Events.update({ _id: eventId }, { $addToSet: { reserved: userId } });
  }
  // “events.removeEvent”(){
  //   // if current user id matches created by user id
  // },
  // “events.findCreatedEvent”(){
  //   // if created by user id matches current user id
  // },
  // “events.usersEvents”(){
  //   // userid === events.createdBy

  // }
});
