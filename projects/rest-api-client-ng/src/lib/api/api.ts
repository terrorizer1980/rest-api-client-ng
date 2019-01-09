export * from './admin.service';
import { AdminService } from './admin.service';
export * from './config.service';
import { ConfigService } from './config.service';
export * from './entityData.service';
import { EntityDataService } from './entityData.service';
export * from './entityGraph.service';
import { EntityGraphService } from './entityGraph.service';
export const APIS = [AdminService, ConfigService, EntityDataService, EntityGraphService];
