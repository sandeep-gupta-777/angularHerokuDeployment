import {ChangeDetectorRef, Injectable} from '@angular/core';
import {Global} from "./Global.service";
import {BlogPost} from "./models";

declare let tinymce: any;

@Injectable()
export class ComponentService {

  constructor(private global:Global) {

  }

  createNewBlogPostObject():BlogPost{
    let tempBlogPost:BlogPost = {
      blogRelevency: 0,
      blogAuthor_id: localStorage.getItem('userID'),
      blogAuthor_fullName:localStorage.getItem('fullName'),
      blogCreationDate: new Date(),
      blogIsDirty: true,
    };
    return tempBlogPost;
  }


}
