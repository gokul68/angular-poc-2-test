import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroLoadingComponent } from './hero-loading.component';

describe('HeroLoadingComponent', () => {
  let component: HeroLoadingComponent;
  let fixture: ComponentFixture<HeroLoadingComponent>;


  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
