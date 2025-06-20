import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { pendingRequestsInterceptor$ } from "ng-http-loader";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideHttpClient(
            withInterceptors([pendingRequestsInterceptor$])
        ),
    ]
};
