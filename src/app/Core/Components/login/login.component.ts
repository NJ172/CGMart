import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../Shared/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [
        style({opacity : 0}),
        animate(3000)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  tIds :string;
  passcode:string;
  isCheckRC: boolean;
  constructor(private Auth : AuthService, 
    private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }
  SubmitCredentials(loginValues){
    //localStorage.setItem('returnUrl', this.route.snapshot.queryParamMap.get('returnUrl') || '/');
    //let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    const target = loginValues.value;
    this.Auth.getUserDetails(target.tId, target.password).subscribe((data:any) =>{
      //this.router.navigateByUrl(localStorage.getItem('returnUrl'));
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl'));
    }, (error)=>{
      if(error.status === 400)
        window.alert('Invalid Credentials');
        if(error.status === 504)
        window.alert('Server down');
    })
  }
}
