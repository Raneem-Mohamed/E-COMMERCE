import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ParentComponent } from './parent/parent.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CarditemComponent } from './carditem/carditem.component';
import { StockPipe } from './stock.pipe';
import { TempformComponent } from './tempform/tempform.component';
import { ReactivformComponent } from './reactivform/reactivform.component';

@NgModule({
  declarations: [
    AppComponent,
    CardlistComponent,
    CarditemComponent,
    StockPipe,
    TempformComponent,
    ReactivformComponent
    // ParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
