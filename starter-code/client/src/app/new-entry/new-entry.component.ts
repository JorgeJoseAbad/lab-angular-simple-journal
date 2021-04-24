import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  private error : string;

  constructor(
    private journalService : JournalService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addEntry(myForm){
    let newEntry ={
      title: myForm.value.title,
      content: myForm.value.content
    }

    this.journalService.addEntry(newEntry)
      .subscribe(
        (entry)=>{
          console.log(entry);
          this.router.navigate(['']);  //changed 'private' to ''
          },
          (err) => this.error = err
      );
  }
}
