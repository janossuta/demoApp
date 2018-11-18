import { Component, OnInit } from "@angular/core";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        firebase.init(
            {
              persist: false
            })
            .then(() => console.log(">>>>> Firebase initialized"))
            .catch(err => console.log(">>>>> Firebase init error: " + err));
    }
  }
  
