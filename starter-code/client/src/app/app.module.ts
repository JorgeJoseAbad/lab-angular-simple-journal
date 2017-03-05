import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JournalService } from './journal.service';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { Routes, RouterModule } from "@angular/router";
import { SingleEntryComponent } from './single-entry/single-entry.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: EntryListComponent },
  { path: 'home/:id', component : SingleEntryComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
