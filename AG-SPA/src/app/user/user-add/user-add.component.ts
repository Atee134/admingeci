import { Component, OnInit } from '@angular/core';
import { UserForRegisterDto, Role } from 'src/app/_models/generatedDtos';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public user: UserForRegisterDto;
  public rePassword: string;

  constructor(private alertify: AlertifyService, private authService: AuthService, private router: Router) {
    this.user = new UserForRegisterDto();
    this.rePassword = '';
  }

  ngOnInit() {
  }

  get roles(): Role[] {
    return Object.keys(Role).map(k => Role[k]);
  }

  onSubmit() {
    if (this.user.password !== this.rePassword) {
      this.alertify.error('A két jelszó különböző');
    } else {
      this.authService.register(this.user).subscribe(resp => {
        this.alertify.success('Felhasználó hozzáadva.');
        this.router.navigate(['/users/' + resp.id]);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

}
