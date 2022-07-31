import * as mongoose from 'mongoose';
export declare class Post {
    title: string;
    link: string;
    author: string;
    avatar: string;
    rule: string;
    updated: Date;
    created: Date;
    createdAt: Date;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, any>, {}, {}, {}, {}, "type", Post>;
export declare type PostDocument = Post & mongoose.Document;
