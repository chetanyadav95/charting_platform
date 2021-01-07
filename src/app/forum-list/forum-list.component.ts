import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss']
})
export class ForumListComponent implements OnInit {
	forums = [
  	{
  		title:"SHubh1",
  		message:"Yo man first forum/blog.\nYo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog."
  	},
  	{
  		title:"Shubh2",
  		message:"@nd one"
  	},
    {
      title:"SHubh1",
      message:"Yo man first forum/blog.\nYo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog."
    },
    {
      title:"Shubh2",
      message:"@nd one"
    },
    {
      title:"SHubh1",
      message:"Yo man first forum/blog.\nYo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog."
    },
    {
      title:"Shubh2",
      message:"@nd one"
    },
    {
      title:"SHubh1",
      message:"Yo man first forum/blog.\nYo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog.Yo man first forum/blog."
    },
    {
      title:"Shubh2",
      message:"@nd one"
    },
    
  ];
  getText(text){
    let l=text.length;
    if(l<200){
      return text;
    }
    else{
      return text.substring(0,200)+"..."; 
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
