import { Mongo } from "meteor/mongo";

export const events = new Mongo.Collection("events");


if (Meteor.isServer) {
    // Meteor.publish('getEvents', function eventsPublication() {

    //   return events.find({ owner: this.userId });
    // });
  }