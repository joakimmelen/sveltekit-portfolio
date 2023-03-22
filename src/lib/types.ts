// Define types for a Tag
export interface Tag {
    id: number;
    name: string;
    slug: string;
  }
  
  // Define types for a Comment
  export interface Comment {
    id: number;
    post: number;
    author: number;
    content: string;
    created_at: string;
    updated_at: string | null;
  }
  
  // Define types for a Post
  export interface Post {
    model: string;
    pk: number;
    fields: {
      title: string;
      content: string;
      author: number;
      created_at: string;
      updated_at: string | null;
      tags: Tag[];
    };
  }
  
  // Define types for the JSON response returned by the server
  export interface BlogData {
    posts: Post[];
    comments: Comment[];
    tags: Tag[];
  }
  