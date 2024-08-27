import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authService:AuthService){}

  formRegister = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    passwordRepeat:new FormControl('',[Validators.required, Validators.minLength(4)])
  })

  register(){
    if(this.formRegister.invalid){
      alert('cuack')
    }
    if(this.formRegister.value.password !=this.formRegister.value.passwordRepeat ){
      alert('cuack 2')
    }
    else{
      let username = this.formRegister.value.username as string
      let pass = this.formRegister.value.password as string
      
      
      this.authService.register(username , pass)
    }
    
  }
}
