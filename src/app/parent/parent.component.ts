import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  IsChild:boolean=true
  channelName:'';
  constructor() {

    console.log("parent constructor is called")
   }

  ngOnInit() {
    console.log("parent oninit is called")
  }

  ngOnChanges(){
    console.log("parent onchanges called")
  }
  

  toggleChild(){
this.IsChild= !this.IsChild
  }

 

}