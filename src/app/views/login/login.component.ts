import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  logoUrl = environment.loginLogoUrl;

  constructor(
    private auth: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void { }

  async signIn() {
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['home']);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
}
