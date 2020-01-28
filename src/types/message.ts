import { ObjectType, Binary } from './object';

export interface Message {
    id: number,
    alias: string,
    type: string,
    last_save: number,
    last_auto: number,
    autosave: string,
    date: number,
    mcsent: number,
    mcopened: number,
    mcclicked: number,
    mcabuse: number,
    mcunsub: number,
    spam_score: number,
    subject: string,
    object_type_id: number,
    dlm: number,
    transactional_email: number,
    json_data: string,
    owner: number,
    from: string,
    message_body: string,
    send_out_name: string,
    reply_to_email: string,
    plaintext: string,
    send_from: string,
    send_to: string,
    word_wrap_checkbox: number,
    utm_tracking: number
}

export type MessageType = 'e-mail' | 'template' | 'sms' | 'task';

export type MessageFromType = 'custom' | 'owner';

export interface CreateMessageRequest {
    alias?: String,
    type?: MessageType;
    transactional_email?: Binary;
    subject?: string;
    object_type_id?: ObjectType,
    from?: MessageFromType | string;
    send_out_name?: string;
    reply_to_email?: string;
    plaintext?: string;
    send_from?: string;
    sent_to?: string;
    message_body?: string;
    resource?: string;
    email_title?: string;
    task_owner?: number;
    task_form?: number;
    utm_tracking?: Binary;
}

export interface UpdateMessageRequest {
    id: number,
    alias?: String,
    type?: MessageType;
    transactional_email?: Binary;
    subject?: string;
    object_type_id?: ObjectType,
    from?: MessageFromType | string;
    send_out_name?: string;
    reply_to_email?: string;
    plaintext?: string;
    send_from?: string;
    sent_to?: string;
    message_body?: string;
    resource?: string;
    email_title?: string;
    task_owner?: number;
    task_form?: number;
}