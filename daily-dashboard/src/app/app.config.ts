// import { firebaseConfig } from './../enviroments/enviroment';
// import { environment } from './../enviroments/enviroment';
// import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// import { provideFirebaseApp } from '@angular/fire/app';
// import { initializeApp } from 'firebase/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';


// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideBrowserGlobalErrorListeners(),
//     // provideZonelessChangeDetection(),
//     provideRouter(routes),
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//     provideFirestore(() => getFirestore()), // <-- aquí Firestore

//   ]
// };

import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../enviroments/enviroment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // ✅ inicialización
    provideFirestore(() => getFirestore()) // ✅ Firestore después de Firebase
  ]
};
