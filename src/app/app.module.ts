import { BrowserModule  } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { CheckguardGuard } from './checkguard.guard';

import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { AndroidComponent } from './android/android.component';
import { AngularComponent } from './angular/angular.component';
import { SpringComponent } from './spring/spring.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { AndroidIdeComponent } from './android-ide/android-ide.component';

const approutes: Routes= [
  {path : 'android',  component : AndroidComponent , canDeactivate: [CheckguardGuard] },
  {path : 'java',  component : JavaComponent , canActivate: [ CheckguardGuard ] ,canActivateChild : [ CheckguardGuard ],
    children: [
    {path : 'spring' , component : SpringComponent },
    {path : 'hibernate' , component : HibernateComponent}
  ]
},
  {path : 'angular',  component : AngularComponent },
  {path : ' ',  component : AndroidComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    AndroidComponent,
    AngularComponent,
    SpringComponent,
    HibernateComponent,
    AndroidIdeComponent,
   
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(approutes)
  ],
  providers: [CheckguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
