import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingFilesComponent } from './coding-files.component';

describe('CodingFilesComponent', () => {
  let component: CodingFilesComponent;
  let fixture: ComponentFixture<CodingFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
