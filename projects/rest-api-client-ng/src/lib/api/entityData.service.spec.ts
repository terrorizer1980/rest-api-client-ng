import { TestBed } from '@angular/core/testing';

import { EntityDataService } from './entityData.service';
import { ApiModule } from '../api.module';
import { Configuration } from '../configuration';
import { HttpClientModule } from '@angular/common/http';
//
describe('EntityDataService', () => {
    const confFactory = () => {
        return new Configuration({ basePath: '/'});
    }
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ApiModule.forRoot( confFactory ), HttpClientModule ]
    }));

    it('should be created', () => {
        const service: EntityDataService = TestBed.get(EntityDataService);
        expect(service).toBeTruthy();
    });
});
