import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth} from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule }  from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { MembersComponent } from './views/members/members.component';
import { MainComponent } from './views/main/main.component';
import { SidenavComponent } from './views/main/sidenav/sidenav.component';
import { SubscriptionsComponent } from './views/subscriptions/subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent,
    MainComponent,
    SidenavComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
