import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";
import { LoginComponent } from "./login/login.component";
import { AuthenticationRoutingModule } from "./authentication.routing";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptLocalizeModule,
        AuthenticationRoutingModule,
        TNSCheckBoxModule,
    ],
    declarations:[
        LoginComponent,
    ],
    exports: [     
    ]
})
export class AuthenticationModule{

}