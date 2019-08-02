import { Mongo } from "meteor/mongo";

export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  // Meteor.publish('getEvents', function eventsPublication() {
  //   return events.find({ owner: this.userId });
  // });
}
