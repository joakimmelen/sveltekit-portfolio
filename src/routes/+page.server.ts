import type { PageServerLoad } from './$types';
import type { Post, Comment, Tag } from '$lib/types';

export const load: PageServerLoad<{ posts: Post[] }> = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/blog/posts/');
    const data: { posts: Post[]; comments: Comment[]; tags: Tag[] } = await response.json();
    console.log('JSON data:', data);

    const enrichedPosts = data.posts.map((post: Post) => {
      const postComments = data.comments.filter((comment: Comment) => comment.fields.post === post.pk);
      console.log('postComments:', postComments);
      const postTags = data.tags.filter((tag: Tag) => post.tags && post.tags.includes(tag.pk));
      console.log('postTags:', postTags);
    
      return {
        ...post,
        fields: {
          ...post.fields,
          comments: postComments,
          tags: postTags.map((tag: Tag) => tag.fields.name),
        },
      };
    });
    

    console.log('enrichedPosts:', enrichedPosts);

    return { posts: enrichedPosts };
  } catch (e) {
    console.error('Error fetching data:', e);
    return { posts: [] };
  }
};
