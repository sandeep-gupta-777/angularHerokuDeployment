import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Helper} from "./helper.service";
import {BlogPost} from "./models";

@Injectable()
export class IsUserAlsoOwnerService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean>
    | Promise<boolean>
    | boolean {
    let user_id =localStorage.getItem('userID');
    let blog_id = this.activatedRouteSnapshot.queryParams['id'];
    this.helper.makePostRequest('getBlogPost',{_id: blog_id}).subscribe((value)=>{
      console.log();
      let blogInstance:BlogPost = value[0];
      if(blogInstance.blogAuthor_id=== user_id){
        return true
      }
      else {
        return false;
      }
    });
  }

  constructor(private helper:Helper, private activatedRouteSnapshot:ActivatedRouteSnapshot) {

  }


}
