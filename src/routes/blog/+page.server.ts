import type { PageServerLoad } from './$types';
import type { Post, Comment, Tag, Posts } from '$lib/types';

export const load: PageServerLoad<{ posts: Posts[] }> = async () => {
    try {
    const response = await fetch('http://127.0.0.1:8000/api/blog/posts/');
    const data: { posts: Post[]; comments: Comment[]; tags: Tag[] } = await response.json();

    const tagLookup: { [key: number]: Tag } = {};
    data.tags.forEach((tag) => {
      tagLookup[tag.id] = tag;
    });

    const posts: Posts[] = data.posts.map((post) => {
      return {
        ...post,
        comments: data.comments.filter((comment) => comment.postId === post.id),
        tags: post.tags.map((tagId) => tagLookup[tagId]?.name ?? ''),
      };
    });

    return { posts };
    
  } catch (e) {
    console.error('Error fetching data:', e);
    return { posts: [] };
    }
};
