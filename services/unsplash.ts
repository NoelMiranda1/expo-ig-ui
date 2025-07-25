import axios from 'axios';
import { UNSPLASH_ACCESS_KEY } from '@env';
import { UnsplashPhoto, UnsplashSearchResponse } from '@/types/unsplash';

class UnsplashService {
  private api = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });

  /**
   * Get random photos for the explore grid
   */
  async getRandomPhotos(count: number = 30): Promise<UnsplashPhoto[]> {
    try {
      const response = await this.api.get<UnsplashPhoto[]>('/photos/random', {
        params: {
          count,
          orientation: 'squarish',
        },
      });
      console.log(`Fetched ${response.data.length} random photos`);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching random photos:', error.response?.data || error.message);
      return [];
    }
  }

  /**
   * Search photos by query
   */
  async searchPhotos(
    query: string,
    page: number = 1,
    perPage: number = 30
  ): Promise<UnsplashSearchResponse> {
    try {
      const response = await this.api.get<UnsplashSearchResponse>('/search/photos', {
        params: {
          query,
          page,
          per_page: perPage,
          orientation: 'squarish',
        },
      });
      console.log(`Search "${query}" returned ${response.data.results.length} photos`);
      return response.data;
    } catch (error: any) {
      console.error('Error searching photos:', error.response?.data || error.message);
      return {
        total: 0,
        total_pages: 0,
        results: [],
      };
    }
  }

  /**
   * Get a specific photo by ID
   */
  async getPhoto(id: string): Promise<UnsplashPhoto | null> {
    try {
      const response = await this.api.get<UnsplashPhoto>(`/photos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching photo:', error);
      return null;
    }
  }
}

export default new UnsplashService();