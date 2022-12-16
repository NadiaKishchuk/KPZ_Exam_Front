export interface RecordInfo{
    dateTime:Date;
    id:number;
    doctorId:number;
    description:string;
    name:string;
    repeatness:number;
}

export interface AddRecordInfo{
    dateTime:Date;
    doctorId:number;
    description:string;
    name:string;
    repeatness:number;
}