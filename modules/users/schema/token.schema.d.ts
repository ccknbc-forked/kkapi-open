import * as mongoose from 'mongoose';
export declare type TokenDocument = Token & Document;
export declare class Token {
    title: string;
    value: string;
    user: string;
}
export declare const TokenSchema: mongoose.Schema<Token, mongoose.Model<Token, any, any, any, any>, {}, {}, {}, {}, "type", Token>;
