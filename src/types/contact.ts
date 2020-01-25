export enum Priority {
    'High' = 8,
    'Medium' = 9,
    'Low' = 10,
    'None' = 0
}

export enum Status {
    'Closed_Lost' = 1,
    'Closed_Won' = 2,
    'Committed' = 3,
    'Consideration' = 4,
    'Demo_Scheduled' = 5,
    'Qualified_Lead' = 6,
    'New_Prospect' = 7
}

export enum BulkMailStatus {
    'Transactional_Only' = 0,
    'Opted_In' = 1,
    'Double_Opt_In' = 2,
    'Hard_Bounce' = -2,
    'Under_Review' = -5
}

export enum BulkSmsStatus {
    'Opted_Out' = 0,
    'Opted_In' = 1,
    'Double_Opt_In' = 2,
    'Hard_Bounce' = -2,
}

export interface Contact {
    firstname?: string;
    lastname?: string;
    email: string;
    freferrer?: number;
    lreferrer?: number;
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    timezone?: string;
    birthday?: number;
    priority?: Priority
    cell_phone?: string;
    home_phone?: string;
    sms_number?: string;
    office_phone?: string;
    fax?: string;
    company?: string;
    title?: string;
    website?: string;
    bulk_mail?: BulkMailStatus;
    bulk_sms?: BulkSmsStatus;
}