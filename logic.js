<<<<<<< HEAD

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGC-gt-9Lo0Z5D0968vBNuhN9lsCAr4pY",
    authDomain: "week-7-hw.firebaseapp.com",
    databaseURL: "https://week-7-hw.firebaseio.com",
    storageBucket: "week-7-hw.appspot.com",
    messagingSenderId: "207833580778"
  };
  

  firebase.initializeApp(config);
  
  var database = firebase.database();


  // var trainName = "";
  // var destination = "";
  // var firstTrainTime = "";
  // var frequency = "";

 // 2. Button for adding trains

    $("#add-employee-btn").on("click", function() {
      // Grabs user input
      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrainTime = $("#first-train-time").val().trim();
      var frequency= $("#frequency-input").val().trim();

      // Creates local "temporary" object for holding employee data
      var newTrain = {
       name: trainName,
       dest: destination,
       firstTime: firstTrainTime,
       freq: frequency
      };
      // debugger;

      // Uploads employee data to the database
         database.ref().push(newTrain);

      // Logs everything to console
      console.log(newTrain.name);
      console.log(newTrain.dest);
      console.log(newTrain.firstTime);
      console.log(newTrain.freq);

      // Alert
      alert("Employee successfully added");

      // Clears all of the text-boxes
      $("#train-name-input").val(""); 
      $("#destination-input").val("");
      $("#first-train-time").val("");
      $("#frequency-input").val("");

      // Prevents moving to new page
      return false;
    });
   
    // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

      // Store everything into a variable.
      var trainName = childSnapshot.val().name;
      var destination = childSnapshot.val().dest;
      var firstTrainTime = childSnapshot.val().firstTime;
      var frequency= childSnapshot.val().freq;

      // Employee Info
      console.log(trainName);
      console.log(destination);
      console.log(firstTrainTime);
      console.log(frequency);

            //formatting firstTrainTime
        var firstTimeConverted = moment(firstTrainTime, 'HH:mm');
          console.log(firstTimeConverted);
            

           // Current Time
        var currentTime = moment();
          console.log(moment(currentTime).format("hh:mm"));

            // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), 'minutes');
          console.log(diffTime);
       
           // Time apart (remainder)
          var tRemainder = diffTime % frequency;
          console.log(tRemainder);

          // // Minute Until Train
          var tMinutesTillTrain = frequency - tRemainder;
          console.log(tMinutesTillTrain);

          // // Next Train
          var nextTrain = moment().add(tMinutesTillTrain, "minutes");
          console.log(moment(nextTrain).format("hh:mm"));
         
           var nextTrainConverted = moment(nextTrain).format("hh:mm A")


      // Add each train's data into the table
      $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
       frequency+ "</td><td>" + nextTrainConverted+ "</td><td>" + tMinutesTillTrain  + "</td></tr>");
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
=======

 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGC-gt-9Lo0Z5D0968vBNuhN9lsCAr4pY",
    authDomain: "week-7-hw.firebaseapp.com",
    databaseURL: "https://week-7-hw.firebaseio.com",
    storageBucket: "week-7-hw.appspot.com",
    messagingSenderId: "207833580778"
  };
  

  firebase.initializeApp(config);
  
  var database = firebase.database();


  // var trainName = "";
  // var destination = "";
  // var firstTrainTime = "";
  // var frequency = "";

 // 2. Button for adding trains

    $("#add-employee-btn").on("click", function() {
      // Grabs user input
      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrainTime = $("#first-train-time").val().trim();
      var frequency= $("#frequency-input").val().trim();

      // Creates local "temporary" object for holding employee data
      var newTrain = {
       name: trainName,
       dest: destination,
       firstTime: firstTrainTime,
       freq: frequency
      };
      // debugger;

      // Uploads employee data to the database
         database.ref().push(newTrain);

      // Logs everything to console
      console.log(newTrain.name);
      console.log(newTrain.dest);
      console.log(newTrain.firstTime);
      console.log(newTrain.freq);

      // Alert
      alert("Employee successfully added");

      // Clears all of the text-boxes
      $("#train-name-input").val(""); 
      $("#destination-input").val("");
      $("#first-train-time").val("");
      $("#frequency-input").val("");

      // Prevents moving to new page
      return false;
    });
   
    // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

      // Store everything into a variable.
      var trainName = childSnapshot.val().name;
      var destination = childSnapshot.val().dest;
      var firstTrainTime = childSnapshot.val().firstTime;
      var frequency= childSnapshot.val().freq;

      // Employee Info
      console.log(trainName);
      console.log(destination);
      console.log(firstTrainTime);
      console.log(frequency);

            //formatting firstTrainTime
        var firstTimeConverted = moment(firstTrainTime, 'HH:mm');
          console.log(firstTimeConverted);
            

           // Current Time
        var currentTime = moment();
          console.log(moment(currentTime).format("hh:mm"));

            // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), 'minutes');
          console.log(diffTime);
       
           // Time apart (remainder)
          var tRemainder = diffTime % frequency;
          console.log(tRemainder);

          // // Minute Until Train
          var tMinutesTillTrain = frequency - tRemainder;
          console.log(tMinutesTillTrain);

          // // Next Train
          var nextTrain = moment().add(tMinutesTillTrain, "minutes");
          console.log(moment(nextTrain).format("hh:mm"));
         
           var nextTrainConverted = moment(nextTrain).format("hh:mm A")


      // Add each train's data into the table
      $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
       frequency+ "</td><td>" + nextTrainConverted+ "</td><td>" + tMinutesTillTrain  + "</td></tr>");
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
>>>>>>> 2fe6c32834db6ae92c7a87e2f12c2a2b700218ed
