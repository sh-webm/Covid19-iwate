import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPage } from './acdfhekjsmousjdiujndkfjgmekmf0-mikvomfomnfo.page';

describe('ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPage', () => {
  let component: ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPage;
  let fixture: ComponentFixture<ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
