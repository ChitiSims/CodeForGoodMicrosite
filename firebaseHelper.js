Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @yodahekinsew
Sign out
0
0 0 robertvunabandi/cfd Private
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
cfd/cfdBackup/js/fbHelpers.js
b3cd40b  8 days ago
@robertvunabandi robertvunabandi added stuff
     
160 lines (159 sloc)  5.55 KB
"use strict";
/*
 * firebaseHelper
 * this will be used for various interactions with the database
 * see methods below
 * */
const firebaseHelper = {
  /** creates the base event, which contains a key
   * "country" with all the country codes initialized
   * to 0, "count", which is the number of countries
   * that people identify with, initialized to 0, and
   * responses, which is the number of recorded
   * responses also initialized to 0.
   * */
  createBaseEvent() {
    const countries = {};
    Object.keys(COUNTRY_DATA).forEach(function (country_name) {
      let country_code = COUNTRY_DATA[country_name];
      countries[country_code] = 0;
    });
    return { countries, count: 0, responses: 0 };
  },
  /** creates a new event with the title "event_name" from
   * the parameter and saves it into the firebase database
   * directly. Once created, this calls the callback. */
  createEvent(event_name, callback) {
    const db = firebase.database();
    db.ref(event_name).set(firebaseHelper.createBaseEvent()).then(function (success) {
      if (callback) {
        callback();
      }
    }, function (error) {
      if (callback) {
        console.error(error);
        callback(error);
      }
    });
  },
  /** delete an event from the firebase database. this
   * methods calls the callback when done. */
  deleteEvent(event_name, callback) {
    const db = firebase.database();
    db.ref(event_name).remove().then(function () {
      if (callback){
        callback();
      }
    }, function (error) {
      if (callback){
        callback(error);
      }
    });
  },
  /** loads the list of events that are currently in the
   * firebase database and calls the callback function with it */
  loadAllEventNames(callback) {
    const db = firebase.database();
    db.ref().once("value").then(function (snapshot) {
      callback(Object.keys(snapshot.val()));
    }, function (error) {
      let isError = true;
      callback(error, isError);
    });
  },
  /** loads the list of events that are currently in the
   * firebase database and calls the callback function with it
   * this listens for changes, which usually will happen a lot.
   * so, this methods expects the callback to handle the checking
   * of whether a change actually happened i.e. additions & such */
  loadAllEventNamesWithListener(callback) {
    const db = firebase.database();
    db.ref().on("value", function (snapshot) {
      db.ref().once("value").then(function (snapshot) {
        callback(Object.keys(snapshot.val()));
      }, function (error) {
        let isError = true;
        callback(error, isError);
      });
    });
  },
  /** loads the data that is specific to one event and calls
   * the callback function with it. */
  loadEvent(event_name, callback) {
    const db = firebase.database();
    db.ref(event_name).once("value").then(function (snapshot) {
      callback(snapshot.val());
    }, function (error) {
      let isError = true;
      callback(error, isError);
    });
  },
  /** same as loadEvent except now it will run the callback
   * whenever a change happens to the data as it listens, from
   * the firebase server, for changes in the data. */
  loadEventWithListener(event_name, callback) {
    const db = firebase.database();
    const event_ref = db.ref(event_name).on("value", function (snapshot) {
      callback(snapshot.val());
    });
    return event_ref;
  },
  /** save a list of countries into an event. this updates the
   * event with the new list of countries given in the parameters.
   * this runs the callback with the result of the saved version. */
  saveIntoEvent(event_name, list, callback) {
    const db = firebase.database();
    db.ref(event_name).once("value").then(function (snapshot) {
      // get then update the current set of data
      let data = snapshot.val();
      data.responses = parseFloat(data.responses) + 1;
      if (isNaN(data.responses)) {
        data.responses = 1;
      }
      list.forEach(function (country_code) {
        data.countries[country_code] = parseFloat(data.countries[country_code]) + 1;
        data.count = parseFloat(data.count) + 1;
      });

      // save the updated version into firebase database
      db.ref(event_name).set(data).then(function (result) {
        if (callback) {
          callback(result);
        }
      }, function (error) {
        let is_error = true;
        if (callback) {
          callback(error, is_error);
        }
      });
    }, function (error) {
      let is_error = true;
      if (callback) {
        callback(error, is_error);
      }
    });
  },
  /** download the data as json into the computer. also includes
   * the mapping from country code to country name for reference */
  downloadData() {
    const db = firebase.database();
    db.ref().once("value").then(function (snapshot) {
      // event data
      firebaseHelper._initializeDownload(snapshot.val(), "events_data");
      // code to country mapping
      firebaseHelper._initializeDownload(CODE_TO_COUNTRY, "code_to_country_map");
    }, function (error) {
      console.error(error);
    });
  },
  /* helper to start the download of a json file*/
  _initializeDownload(obj, download_file_name) {
    // from https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
    const data_str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    const anchor = document.createElement("a");
    anchor.setAttribute("href", data_str);
    anchor.setAttribute("download", download_file_name + ".json");
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
};
