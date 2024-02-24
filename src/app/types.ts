export interface Topic {
    id: number;
    name: string;
    description: string;
    pinned: boolean;
  }

export interface LinkAttachment {
  name: string;
  url: string;
  pinned: boolean;
}

export interface Attachment {
  name: string;
  file: string;
  pinned: boolean;
}