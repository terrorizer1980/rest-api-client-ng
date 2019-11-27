import { TestBed } from '@angular/core/testing';

import { EntityGraphService } from './entityGraph.service';
import { ApiModule } from '../api.module';
import { Configuration } from '../configuration';
import { HttpClientModule } from '@angular/common/http';
//
describe('EntityGraphService', () => {
    const confFactory = () => {
        return new Configuration({ basePath: '/'});
    }
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ApiModule.forRoot( confFactory ), HttpClientModule ]
    }));

    it('should be created', () => {
        const service: EntityGraphService = TestBed.get(EntityGraphService);
        expect(service).toBeTruthy();
    });
});
