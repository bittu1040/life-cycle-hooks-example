import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  counter=0;
  interval:any;
  @Input() channelName1:"";
  constructor() { 
    console.log("child constructor is called")
  }

  ngOnInit() {
    console.log("child oninit is called")
  //  this.interval= setInterval(()=>{
  //     this.counter= this.counter+1;
  //     console.log(this.counter)
  //   }, 1000)

  }

  ngOnChanges(){
    console.log("child onchanges called")
  }
  ngOnDestroy(){
      // clearInterval(this.interval);
    
    console.log("child ondestroy is called")
  }

}