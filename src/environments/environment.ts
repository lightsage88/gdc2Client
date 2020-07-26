// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //production: false, 
  API_BASE_URL: "http://localhost:8000",
  // API_BASE_URL: "https://pacific-cove-32502.herokuapp.com/https://floating-gorge-12561.herokuapp.com",
  JWT_SECRET: "FELIBO",
  JWT_EXPIRY: "1d"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack fra mes such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
