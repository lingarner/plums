export interface Topic {
    id: number;
    name: string;
    description: string;
    pinned: boolean;
    parentId: number;
  }

export interface LinkAttachment {
  name: string;
  url: string;
  pinned: boolean;
}

export interface Attachment {
  id: number;
  name: string;
  file: string;
  pinned: boolean;
  url?: String;
  createdAt: String;
  attachmentData: any;
  attachmentType: string
  topicId: number;
  comments: string;
}


export interface NotebookEntry {
  id: number;
  title: string;
  content: string;
  pinned: boolean;
}