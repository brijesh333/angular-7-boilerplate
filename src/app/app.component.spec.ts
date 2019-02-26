import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SpinnerComponent
            ],
            imports:[
                RouterModule,
                BrowserModule
            ]
        }).compileComponents();
    }));

    it('initital test case', () => {
        expect(true).toBe(true);
    })
});
