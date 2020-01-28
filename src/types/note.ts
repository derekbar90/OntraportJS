import { ObjectType } from './object';

export enum NoteType {
    'Manual' = 1,
    'Form' = 2,
    'Phone_Call' = 3,
    'Phone_Call_2' = 4,
    'API' = 5,
}

export interface Note {
    data: string,
    author: number,
    contact_id: number,
    type: NoteType,
    object_type_id: ObjectType,
    id: number,
    time: number,
    dlm: number,
    'author//firstname': string,
    'author//lastname': string
}

export interface CreateNoteRequest {
    time?: number,
    data?: string;
    author?: number;
    contact_id: number;
    type?: NoteType;
    object_type_id?: ObjectType;
}