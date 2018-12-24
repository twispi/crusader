import { juggler } from '@loopback/repository';
export declare class FirestoreDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
