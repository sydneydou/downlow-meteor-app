import { Mongo } from "meteor/mongo";

export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  Meteor.publish("events", function eventsPublication() {
    return Events.find({ owner: this.userId });
  });
}

Meteor.methods({
  "events.addEvent"(createEvent) {
    const createdBy = this.userId;
    Events.insert({ ...createEvent, createdBy });
  },
  "events.removeEvent"(createEvent){
    // if current user id matches created by user id
  },
  "events.findCreatedEvent"(){
    // if created by user id matches current user id
  }
});
