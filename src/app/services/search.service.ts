import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    private searchTerm = new BehaviorSubject('');
    private searchTargets = new BehaviorSubject([true, false]);
    sharedTerm = this.searchTerm.asObservable();
    sharedTargets = this.searchTargets.asObservable();

    constructor() {};

    nextTerm(term: string) {
        this.searchTerm.next(term);
    }

    nextTargets(targets : any) {
    	this.searchTargets.next(targets);
    }
}
