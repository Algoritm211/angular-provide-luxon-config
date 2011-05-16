import {ModuleWithProviders, NgModule} from '@angular/core';
import {Settings} from "luxon";

@NgModule({})
export class LuxonConfigDateModule {
  static forRoot(config: Partial<typeof Settings>): ModuleWithProviders<LuxonConfigDateModule> {
    LuxonConfigDateModule.setCustomConfig(config);
    return {
      ngModule: LuxonConfigDateModule,
    };
  }

  static setCustomConfig(config: Partial<typeof Settings>) {
    Settings.defaultLocale = config.defaultLocale!;
  }
}
