// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  env: 'DEFAULT',
  production: false,
  serverBaseUrl: 'http://localhost:9000',
  serverUrl: 'http://localhost:9000/cpm'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performanimport { TestBed } from '@angular/core/testing';

// import { DataProviderService } from './data-provider.service';

// describe('DataProviderService', () => {
//     beforeEach(() => TestBed.configureTestingModule({}));

//     it('should be created', () => {
//         const service: DataProviderService = TestBed.get(DataProviderService);
//         expect(service).toBeTruthy();
//     });
// });
ce impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
