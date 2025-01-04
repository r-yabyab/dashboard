import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {ResourceListBase} from '@common/resources/list';
import {EnvVar, EnvVarList} from '@api/root.api';
import {NotificationsService} from '@common/services/global/notifications';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'kd-env-var-list',
  templateUrl: './env-var-list.component.html',
  styleUrls: ['./env-var-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnvVarListComponent extends ResourceListBase<EnvVarList, EnvVar> {
  @Input() envVarList: EnvVarList;
  @Input() id: string; 

  constructor(
    notifications: NotificationsService,
    cdr: ChangeDetectorRef
  ) {
    super('envvar', notifications, cdr);
  }

  getResourceObservable(): Observable<EnvVarList> {
    console.log('envVarList: ', this.envVarList);
    return of(this.envVarList);
  }

  map(envVarList: EnvVarList): EnvVar[] {
    return envVarList.items;
  }

  getDisplayColumns(): string[] {
    return ['name', 'value'];
  }
}