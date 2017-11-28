import { Injectable } from '@angular/core';
import { CanActivate , CanActivateChild , CanDeactivate , CanLoad } from '@angular/router';
import { AndroidComponent  } from './android/android.component';


@Injectable()
export class CheckguardGuard implements CanActivate , CanActivateChild, CanDeactivate<AndroidComponent> , CanLoad {
  canActivate(): boolean{
    return true;
  }
  canActivateChild() : boolean{
    return confirm('are u want to enroll');
  }
  canDeactivate(template : AndroidComponent){
    return confirm('are u really want to leave this page');
  }
  canLoad(){
    return confirm('are u really want load this module');
  }
 
}
