// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC_9nha7-VGPV_WRkKRlscyvipZ-wcrmFM",
    authDomain: "ng-fitness-tracker-4bcdb.firebaseapp.com",
    databaseURL: "https://ng-fitness-tracker-4bcdb.firebaseio.com",
    projectId: "ng-fitness-tracker-4bcdb",
    storageBucket: "ng-fitness-tracker-4bcdb.appspot.com",
    messagingSenderId: "232593831676"
  }
};
