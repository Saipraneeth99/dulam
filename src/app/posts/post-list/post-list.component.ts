import { Component, Input } from '@angular/core';

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent
{
  // posts=[
  //   {title:"First Post",content:"This is the content for First Post"},
  //   {title:"Second Post",content:"This is the content for Second Post"},
  //   {title:"Third Post",content:"This is the content for Third Post"}
  // ]
  @Input() posts:any[]=[];

}
