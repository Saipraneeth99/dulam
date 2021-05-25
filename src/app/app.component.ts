import { Component } from '@angular/core';
import { Post } from './posts/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //storedPosts:any[]=[]; worked when tsconfig , strict is true
  storedPosts :Post[] = [];

  //onPostAdded(post: any[]){ worked when tsconfig , strict is true
  onPostAdded(post){
    this.storedPosts.push(post);
  }

}
