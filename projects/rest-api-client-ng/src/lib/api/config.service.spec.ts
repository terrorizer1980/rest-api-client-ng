import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { ApiModule } from '../api.module';
import { Configuration } from '../configuration';
import { HttpClientModule } from '@angular/common/http';
//
describe('ConfigService', () => {
    const confFactory = () => {
        return new Configuration({ basePath: '/'});
    }
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ApiModule.forRoot( confFactory ), HttpClientModule ]
    }));

    it('should be created', () => {
        const service: ConfigService = TestBed.get(ConfigService);
        expect(service).toBeTruthy();
    });
});
