import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    private searchTerm = new BehaviorSubject('');
    sharedTerm = this.searchTerm.asObservable();

    constructor() {};

    nextTerm(term: string) {
        this.searchTerm.next(term);
    }
}