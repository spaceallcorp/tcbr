export interface Post {
  id?: string;
  title: string;
  content: string;
  author?: string;
  createdAt: Date | any;  // 'any' for Firestore timestamps
  updatedAt?: Date | any;
  imageUrl?: string;
}