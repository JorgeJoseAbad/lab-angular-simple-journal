import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers : [ JournalService ]
})
export class SingleEntryComponent implements OnInit {
  singleJournal : Object;
  contactId : string;

  constructor(private journal : JournalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
    this.contactId = params['id'];
});
    this.journal.getEntry(this.contactId)
      .subscribe((singleJournal) => {
        console.log(singleJournal);
        this.singleJournal = singleJournal});
      }

}
