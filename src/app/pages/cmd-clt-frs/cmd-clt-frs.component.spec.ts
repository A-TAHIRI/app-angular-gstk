import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdCltFrsComponent } from './cmd-clt-frs.component';

describe('CmdCltFrsComponent', () => {
  let component: CmdCltFrsComponent;
  let fixture: ComponentFixture<CmdCltFrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmdCltFrsComponent]
    });
    fixture = TestBed.createComponent(CmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
