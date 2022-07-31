import * as mongoose from 'mongoose';
import { IspeakTag } from './ipseakTag.schema';
export declare type IspeakDocument = Ispeak & Document;
export declare class Ispeak {
    title: string;
    content: string;
    type: string;
    tag: IspeakTag;
    showComment: string;
    author: string;
    updatedAt: Date;
    createdAt: Date;
}
export declare const IspeakSchema: mongoose.Schema<Ispeak, mongoose.Model<Ispeak, any, any, any, any>, {}, {}, {}, {}, "type", Ispeak>;
