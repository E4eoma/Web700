/*********************************************************************************
 *  WEB700 – Assignment 2
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Ifeoma Okoye Student ID: 149746216 Date: 2023-02-04
 *
 ********************************************************************************/

const comData = require("./modules/collegeData");

let entireData = comData.initialize()[0].then(
  (data) => {
    comData.getAllStudents().then((data) => {
      console.log(
        "Successfully retrieved " + data.length.toString() + " students"
      );
    });
    comData.getCourses().then((data) => {
      console.log(
        "Successfully retrieved " + data.length.toString() + " courses"
      );
    });
    comData.getTAs().then((data) => {
      console.log("Successfully retrieved " + data.length.toString() + " TAs");
    });
  },
  function (error) {
    console.log("Unexpected error occured when loading data");
    console.log(error);
  }
);
