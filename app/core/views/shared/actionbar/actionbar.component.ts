import { Component, Input } from "@angular/core";


@Component({
    selector: "ActionBarComponent",
    moduleId: module.id,
    templateUrl: "./actionbar.component.html"
})
export class ActionBarComponent{

    @Input() actionbarTitle: string;

    constructor() {
        // Use the component constructor to inject providers.     
    }
}
