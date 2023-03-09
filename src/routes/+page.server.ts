import type { PageServerLoad } from './$types';
import type { Post, Comment, Tag } from '$lib/types';

export const load: PageServerLoad<{ posts: Post[] }> = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/blog/posts/');
    const data: { posts: Post[]; comments: Comment[]; tags: Tag[] } = await response.json();
    return { posts: data.posts, comments: data.comments, tags: data.tags };
  } catch (e) {
    console.error('Error fetching data:', e);
    return { posts: [] };
  }
};
