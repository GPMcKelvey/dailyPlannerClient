export interface ITodos {
    task: string;
    complete: boolean;
    id: string;
}

export interface IEvents {
    eventDate: Date,
    eventDescription: string,
    eventEndTime: number,
    eventStartTime: number,
    eventTitle: string,
    eventPrivacy: boolean,
    id: string
}

export interface INotes {
    title: string;
    content: string;
    id: string
}

export interface IAdmin {
    username: string;
    id: string;
}

export interface IUser {
    user: string;
    message: string;
    sessionToken: string;
}