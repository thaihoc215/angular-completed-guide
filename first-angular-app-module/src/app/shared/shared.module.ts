import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

// declare NgModule
@NgModule({
    declarations: [CardComponent],
    //define modules that available to any other module
    exports: [CardComponent]
})
export class SharedModule {}