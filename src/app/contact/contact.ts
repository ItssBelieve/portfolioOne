import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  showSuccess = false;

onSubmit(form: any) {

  emailjs.send(
    'service_ihle8vc',
    'template_kwxm8fb',
    {
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message
    },
    '8XJ6TXOW7_Rp6hGrR'
  ).then(() => {
    this.showSuccess = true;
    form.reset();

    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);

  }).catch((error) => {
    console.error('Email error:', error);
  });

}
}