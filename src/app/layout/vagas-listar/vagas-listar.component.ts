import { Component, inject } from '@angular/core';
import { VagaService } from '../../services/vaga.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

import { AsyncPipe, CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Vaga } from '../../models/vagas.models';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

declare var UIkit: any;

@Component({
  selector: 'app-vagas-listar',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './vagas-listar.component.html',
  styleUrls: ['./vagas-listar.component.css']
})
export class VagasListarComponent {
  private vagaService = inject(VagaService);
  private sanitizer = inject(DomSanitizer);

  vagas$ = this.vagaService.getVagas();
  selectedVaga: Vaga | null = null;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      message: ['', Validators.required, Validators.minLength(10)],
    });
  }


  isSending = false;

  submitForm(event: Event) {
    event.preventDefault();

    if (this.isSending) return;

    this.isSending = true;

    this.contactForm.markAllAsTouched();


    if (this.contactForm.invalid) {
      window.alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const formData = {
      ...this.contactForm.value,
      position: this.selectedVaga?.posicao,  // Add the position from selectedVaga
      //to_email: this.selectedVaga?.emailDepartamento  // Depois activar esta opção para selecção automática do email do departamento a partir da vaga selecionada
    };

    emailjs.send('service_yhmv9kn', 'template_5cejkm2', formData, {
      publicKey: 's3ApW9433DP5gZtVb'
    })
      .then(() => {
        console.log('SUCESSO');
        window.alert('Mensagem enviada com sucesso! 🎉');
        this.contactForm.reset();
      })
      .catch((error: EmailJSResponseStatus) => {
        console.error('Falhou...', error.text);
        window.alert('Não foi possível enviar sua candidatura.');
      })
  .finally(() => {
    this.isSending = false;
  });
  }


  openModal(vaga: Vaga): void {
    console.log('Vaga data:', vaga);
    console.log('Responsibilities content:', vaga.content);
    this.selectedVaga = vaga;
    setTimeout(() => UIkit.modal('#vaga-modal').show(), 0);
  }

  // Simplified function - just returns the raw content
  getResponsabilidades(): string {
    return this.selectedVaga?.content || '';
  }

  // Helper to safely render HTML
  getSafeContent(): SafeHtml {
    if (!this.selectedVaga?.content) {
      return this.sanitizer.bypassSecurityTrustHtml('<p>No content available</p>');
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.selectedVaga.content);
  }
}