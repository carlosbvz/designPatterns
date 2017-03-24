
'use strict';
var APP = window.APP = window.APP || {};

APP.PubSub = (function(){

    let events = {};

    // Create key(string):value(array of functions) pair
    const subscribe = (eventName, fn) => {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn);
    };
    // finds and removes the eventName in the events array
    const unsubscribe = (eventName, fn) => {
        if (events[eventName]) {
            for (var i = 0; i < events[eventName].length; i++) {
                if (events[eventName][i] === fn) {
                events[eventName].splice(i, 1);
                break;
                }
            };
        }
    };
    // if eventName exits on events, loops thru :value(array) triggering all fns
    const publish = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  }

    return {
        subscribe,
        unsubscribe,
        publish
    }

}());