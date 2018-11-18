import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { AppRoutingModule } from "~/app-routing.module";
import { AppComponent } from "~/app.component";


//import { SentryModule } from 'nativescript-sentry/angular';

@NgModule({
    bootstrap: [
        AppComponent       
    ],
    imports: [
        NativeScriptModule,
        NativeScriptLocalizeModule,    
        AppRoutingModule,
        NativeScriptUIChartModule
      //  SentryModule.forRoot({dsn: 'https://d5a1c1a5b7514036bd033ea158245419@sentry.io/1268432'})
    ],
    declarations: [
        AppComponent   
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
     
    ]
})
export class AppModule { }
