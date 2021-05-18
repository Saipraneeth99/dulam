import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html'
})
export class PostCreateComponent{
  newPost='No content'
  newPostWithData=''
  douleBinding=''
  onAddPost()
  {
    this.newPost='User\'s post'
    alert("Post added")
  }
  onAddPostwithData(inputPost : HTMLTextAreaElement)
  {
    this.newPostWithData=inputPost.value;
  }
  onDoubleBinding()
  {
    this.douleBinding=''
  }

}
