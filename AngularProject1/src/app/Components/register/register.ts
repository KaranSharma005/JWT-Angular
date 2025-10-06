import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { RouterLink } from '@angular/router';
import { AuthApiService } from '../../Services/auth.api.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  constructor(private api : AuthApiService){}

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onRegister(data : any){
    console.log(data.value);
    this.api.addUser(data?.value).subscribe({
      next : (res) => console.log("User added successfully"),
      error : (err) => console.log(err)
    })
  }
}
