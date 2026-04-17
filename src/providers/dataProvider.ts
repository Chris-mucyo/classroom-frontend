import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { mockSubjects } from "@/constants/MOCK_SUBJECTS";
export const dataProvider: DataProvider = {
    getList: async <TDATA extends BaseRecord = BaseRecord>({ resource }:
    GetListParams): Promise<GetListResponse<TDATA>> => {
        if( resource !== 'subjects'){
            return { data: [] as TDATA[], total: 0 };
        }

        return {
            data: mockSubjects as unknown as TDATA[],
            total: mockSubjects.length,
        }
    },

    getOne: async () => {throw new Error('this is not present in mock data provider') },
    create: async () => {throw new Error('this is not present in mock data provider') },
    update: async () => {throw new Error('this is not present in mock data provider') },
    deleteOne: async () => {throw new Error('this is not present in mock data provider') },
   
    getApiUrl: () => '',
}