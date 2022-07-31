import * as mongoose from 'mongoose';
export declare type IspeakTagDocument = IspeakTag & mongoose.Document;
export declare class IspeakTag {
    name: string;
    bgColor: string;
    user: mongoose.Schema.Types.ObjectId;
    orderNo: number;
    description: string;
}
export declare const IspeakTagSchema: mongoose.Schema<IspeakTag, mongoose.Model<IspeakTag, any, any, any, any>, {}, {}, {}, {}, "type", IspeakTag>;
