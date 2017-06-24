import { Component, OnInit, Input } from '@angular/core';
import { JournalService } from '../journal.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalService]

})
export class SingleEntryComponent implements OnInit {
  singleJournal : any;
  title:any;

  contactId : any;

  constructor(
    private journal : JournalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{this.contactId=params['id'];
                      console.log(this.contactId);});
    console.log(this.contactId);

    this.journal.getEntry(this.contactId).subscribe((entry)=>{
      this.singleJournal=entry;
      console.log(entry);
      this.title=entry.title;
      console.log(this.singleJournal);
    })

  }

  }
