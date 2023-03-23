// Define types for an Author
export interface Author {
  id: number;
  username: string;
}

// Define types for a Tag
export interface Tag {
  id: number;
  name: string;
  slug: string;
}

// Define types for a Comment
export interface Comment {
  id: number;
  postId: number;
  author: Author;
  content: string;
  created_at: string;
  updated_at: string | null;
}

// Define types for a Post
export interface Post {
  id: number;
  title: string;
  content: string;
  author: Author;
  created_at: string;
  updated_at: string | null;
  image: string | null;
  tags: number[];
  isOpen: boolean | null;
}

// Define types for Posts
export interface Posts {
  id: number;
  title: string;
  content: string;
  author: Author;
  created_at: string;
  updated_at: string | null;
  image: string | null;
  tags: string[];
  comments: Comment[];
  isOpen: boolean | null;
}

// Define types for the JSON response returned by the server
export interface BlogData {
  posts: Post[];
  comments: Comment[];
  tags: Tag[];
}
