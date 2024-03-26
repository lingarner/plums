export interface Topic {
  id: number;
  name: string;
  description: string;
  pinned: boolean;
  parentId: number | null;
}

export interface TagsOnTopic {
  tag: Tag;
  tagId: number;
}


export interface Tag {
  id: number;
  name: string;
  topics: Topic[];

}

export interface Url {
  id: number;
  name: string;
  url: string;
  comments: string;
  pinned: boolean;
  topicId: number;
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
