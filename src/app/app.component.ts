import { Component, Inject, OnInit } from '@angular/core';
import { Users } from './models/users';
import { UserClientService } from './infraestructure/userClientService';
import { ComunaDto } from './models/comunaDto';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public userArray: Users[] = [];
  public comunas: ComunaDto[] = [];
  public reactiveForm: FormGroup = this.defineReactiveForm();

  constructor(
    private userClientService: UserClientService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.userClientService.getUsers().subscribe((data) => {
      this.userArray = data;
    });
    this.userClientService.getComuna().subscribe((data) => {
      this.comunas = data;
    });
  }

  private defineReactiveForm(): FormGroup {
    return this.formBuilder.group({
      id: null,
      name: null,
      surname: null,
      phone: null,
      comuna: null,
      codecomuna: null,
    });
  }

  selectedUser: Users = new Users();

  getUsers() {
    this.userClientService.getUsers().subscribe((data) => {
      this.userArray = data;
    });
  }
  addOrEdit() {
    const data = this.reactiveForm.value;

    let dataToSend = {
      id: data['id'],
      nombre: data['name'],
      apellido: data['surname'],
      telefono: data['phone'],
      comuna: this.comunas.find(
        (comuna: ComunaDto) => comuna.code == data['codecomuna']
      )?.name,
      codecomuna: data['codecomuna'],
    };

    if (this.reactiveForm.get('id')?.value == null) {
      this.userClientService.saveUser(dataToSend).subscribe((data2: any) => {});
    } else {
      this.userClientService
        .updateUser(dataToSend)
        .subscribe((data2: any) => {});
    }

    this.getUsers();
    this.reactiveForm = this.defineReactiveForm();
  }
  openForEdit(user: Users) {
    this.selectedUser = user;
    this.reactiveForm.get('id')?.setValue(user.id);
    this.reactiveForm.get('name')?.setValue(user.nombre);
    this.reactiveForm.get('surname')?.setValue(user.apellido);
    this.reactiveForm.get('phone')?.setValue(user.telefono);
    this.reactiveForm.get('codecomuna')?.setValue(user.codecomuna);
    this.reactiveForm.get('comuna')?.setValue(user.comuna);
  }
  delete() {
    if (confirm('desea eliminarlo')) {
      const data = this.reactiveForm.value;

      this.userClientService
        .deleteUser(data['id'])
        .subscribe((data2: any) => {});
      
    }
    this.getUsers();
    this.reactiveForm = this.defineReactiveForm();
  }

  listComuna() {
    this.userClientService.getComuna().subscribe((data2: any) => {
    });
  }
}
