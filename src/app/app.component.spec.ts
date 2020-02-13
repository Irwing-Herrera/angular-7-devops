import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';

import {RouterTestingModule} from '@angular/router/testing';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

describe('AppComponent', () => {
  let appComponent;
  let navBarComponent;

  beforeAll(() => {
    console.log('beforeAll, antes del describe');
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent
      ],
      providers: [
        UserService
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
    appComponent = new AppComponent();
    navBarComponent = new NavBarComponent();
    console.log('beforeEach, antes de cada it');
  }));

  afterEach(() => {
    console.log('afterEach, despues de cada it');
  });

  afterAll(() => {
    console.log('afterAll al final de los it');
  });

  it('Debe de crear un componente AppComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Debe de crear un componente NavBarComponent', async(() => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const nav = fixture.debugElement.componentInstance;
    expect(nav).toBeTruthy();
  }));

  it('El valor de  myVar debe ser Hola Mundo', () => {
    const valor = appComponent.myVar;
    expect(valor).toEqual('Hola Mundo');
  });

  it('El valor de saludo debe contener Irwing', () => {
    const valor = appComponent.saludo;
    expect(valor).toContain('Irwing');
  });

  it('Debe retornar TRUE si es par', () => {
    const respuesta = appComponent.par(44);
    expect(respuesta).toBeTruthy();
  });

  it('Debe retornar FALSE si es impar', () => {
    const respuesta = appComponent.par(15);
    expect(respuesta).toBeFalsy();
  });

});
