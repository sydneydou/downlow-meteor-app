import { Mongo } from "meteor/mongo";

export const users = new Mongo.Collection("users");

if (Meteor.isServer) {
    // Meteor.publish('getUsers', function usersPublication() {

    //   return users.find({ owner: this.userId });
    // });
  }