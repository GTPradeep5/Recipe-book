import { Store } from '@ngrx/store';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import * as fromApp from './store/app.reducer'
import { LoggingService } from './logging.service';
import * as AuthActions from './auth/store/auth.actions'
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store : Store<fromApp.AppState>,
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platform
  ) {}

  ngOnInit() {
    if(isPlatformBrowser(this.platform)){

    this.store.dispatch(new AuthActions.AutoLogin());
    }
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
