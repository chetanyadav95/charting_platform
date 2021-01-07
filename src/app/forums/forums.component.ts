import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {

  comments = [
  	{
  		author:"SHubh1",
  		message:"Yo man first comment.",
      votes:2,
      id:1
  	},
  	{
  		author:"Shubh2",
  		message:"@nd one",
      votes:0,
      id:2
  	}
  ];
  forum={
    title:"My title, how to earn more money",
    author:"shubh101295",
    date:"04-01-2020, 12:30 pm",
    contribution:"+200",
    contributionColor:"red",
    tags:["Intraday","Daily","frgthyju"],
    votes:4,
    text:"YO man text is there.Lorem ipsum.\nLorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.n\n\n\nLorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum."
  };
  constructor() { }

  upVoteToComment(id){
    let l=this.comments.length;
    for(let i=0;i<l;i++){
      if(id==this.comments[i].id)
      {
        this.comments[i].votes+=1;
        break;
      }
    }
  }

  downVoteToComment(id){
    let l=this.comments.length;
    for(let i=0;i<l;i++){
      if(id==this.comments[i].id)
      {
        this.comments[i].votes-=1;
        break;
      }
    }
  }

  ngOnInit() {
  }

}
