import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Helper} from "./helper.service";
import {BlogPost} from "./models";

@Injectable()
export class IsUserAlsoOwnerService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return false;;
  }

  constructor(private helper:Helper, private activatedRouteSnapshot:ActivatedRouteSnapshot) {}


}
