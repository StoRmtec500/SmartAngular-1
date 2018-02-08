import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { SidePanelItem } from '../side-panel/side-panel-item';

@Injectable()
export class EventBusService {
  
  private sideCMDs: BehaviorSubject<SidePanelItem[] | null> = new BehaviorSubject(null);
  SideCMDs: Observable<SidePanelItem[]> = this.sideCMDs.asObservable();

  private panel: Subject<string> = new Subject<string>()
  Panel = this.panel.asObservable();

  constructor() { }

  setSideCMDs(items: SidePanelItem[]){
    this.sideCMDs.next(items);
  }

  triggerCmd(action: string){
    this.panel.next(action);
  }
}