// src/app/services/blog.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Post } from '../models/posts.models';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private firestore = inject(Firestore);
  private postsCollection = collection(this.firestore, 'postsNg'); // ✅ renamed

  posts = signal<Post[]>([]);

  constructor() {
    console.log('BlogService initialized');
    this.getPosts().subscribe(posts => {
      console.log('Loaded posts:', posts);
      this.posts.set(posts);
    });
  }

  getPosts(): Observable<Post[]> {
    console.log('Fetching all postsNg');
    return collectionData(this.postsCollection, { idField: 'id' }).pipe(
      map((posts: any[]) => posts.map(post => post as Post)),
      tap(posts => console.log('Posts from Firestore:', posts))
    ) as Observable<Post[]>;
  }

  getPostById(id: string): Observable<Post | undefined> {
    console.log('Fetching postNg with ID:', id);
    const postDoc = doc(this.firestore, `postsNg/${id}`); // ✅ renamed
    return docData(postDoc, { idField: 'id' }).pipe(
      map(post => {
        if (!post) {
          throw new Error('Post not found');
        }
        return post as Post;
      }),
      tap(post => console.log('Retrieved post:', post))
    ) as Observable<Post>;
  }
}
