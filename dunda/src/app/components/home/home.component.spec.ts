import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init message as NULL', ()=>{
    expect(component.message).toBeNull();
  });

  it('should say hello', ()=>{
    component.saysHello();
    expect(component.message).toBe('Hello world!');
  });


  it('should add a and b', ()=>{
      component.add(1,2);
      expect(component.sum).toBe(3);
  });
  
  it('should validate the age', ()=>{
    component.isValid(18);
    expect(component.isValidAge).toBeTruthy();
  })

  it('should return true', async ()=>{
    const res = await component.test();
    expect(res).toBeTruthy();
  })

});
