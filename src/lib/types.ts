// Define an interface for a comment
export interface Comment {
  model: string;
  pk: number;
  fields: {
    author: number;
    content: string;
    created_at: string;
    post: number;
    updated_at: string | null;
  };
}

// Define an interface for a post
export interface Post {
  model: string;
  pk: number;
  fields: {
    title: string;
    content: string;
    author: number;
    created_at: string;
    updated_at: string | null;
  };
  tags: number[];
}

// Define an interface for a tag
export interface Tag {
  model: string;
  pk: number;
  fields: {
    name: string;
    slug: string;
  };
}

// Define types for the JSON response returned by the server
export interface BlogData {
    posts: Post[];
    comments: Comment[];
    tags: Tag[];
  }
  