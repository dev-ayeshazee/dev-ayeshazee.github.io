import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { appIcons } from './lucide-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick(appIcons)),
  ],
};
