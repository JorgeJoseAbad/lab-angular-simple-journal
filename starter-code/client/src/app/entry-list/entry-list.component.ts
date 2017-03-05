import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [ JournalService ]
})
export class EntryListComponent implements OnInit {
  journals : Array<Object>;
  constructor(private journal : JournalService) { }

  ngOnInit() {
    this.journal.getList().subscribe((journal) => {
        this.journals = journal});
      }

}
