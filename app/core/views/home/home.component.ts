import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public title: string = "Home component" 

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
     
    }

}
