import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DataProviderService } from '../services/data-provider.service';
import { MockBackend } from '@angular/http/testing';
import {
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent
            ],
            imports: [
                HttpClientModule,
                // HttpClientTestingModule
            ],
            providers: [
                DataProviderService,
                {
                    provide: XHRBackend,
                    useClass: MockBackend
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return an Observable<Array<Video>>',
        inject([DataProviderService, XHRBackend], (dataProviderService:DataProviderService, mockBackend:any) => {
            const mockResponse = {
                data: [
                    { id: 0, name: 'abc' },
                    { id: 1, name: 'qwe' },
                    { id: 2, name: 'xyz' },
                    { id: 3, name: 'plp' },
                ]
            };
            mockBackend.connections.subscribe((connection:any) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });
            dataProviderService.fetchdata()
                .subscribe((data) => {
                    expect(true).toBe(true)
                })
        }));

});