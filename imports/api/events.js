import { Mongo } from "meteor/mongo";

export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  Meteor.publish("events", function eventsPublication() {
    return Events.find({ owner: this.userId });
  });
}

Meteor.methods({});
