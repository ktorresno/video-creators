export interface Video {
    id: number;
    title: string;
    url: string;
    description?: string;
    published?: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }