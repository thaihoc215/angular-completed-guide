import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
    imports: [BrowserModule, FormsModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}