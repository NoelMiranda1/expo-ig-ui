export interface UnsplashPhoto {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  likes: number;
  description: string | null;
  alt_description: string | null;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}