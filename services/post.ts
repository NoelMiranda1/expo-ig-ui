import { Post } from '@/types/post';
import api from './index';

class PostService {
  private endpoint = '/posts';

  /**
   * Obtiene todos los posts
   */
  async getAllPosts(): Promise<Post[]> {
    try {
      const response = await api.get<Post[]>(this.endpoint);
      
      if (!response || !Array.isArray(response)) {
        throw new Error('La respuesta del servidor no contiene datos válidos');
      }
  
      return response;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  /**
   * Maneja errores del servicio
   */
  private handleError(error: any): void {
    if (error.response) {
      const errorMap = {
        400: {
          log: () => console.error('Error de validación:', error.response.data),
          message: 'Los datos enviados no son válidos'
        },
        401: {
          log: () => console.error('Error de autenticación'),
          message: 'No estás autorizado para realizar esta acción'
        },
        404: {
          log: () => console.error('Recurso no encontrado'),
          message: 'El post no fue encontrado'
        },
        429: {
          log: () => console.error('Límite de peticiones excedido'),
          message: 'Demasiadas peticiones. Por favor, espera un momento'
        },
        500: {
          log: () => console.error('Error del servidor'),
          message: 'Error en el servidor, intenta más tarde'
        }
      };

      const errorHandler = errorMap[error.response.status as keyof typeof errorMap];
      
      if (errorHandler) {
        errorHandler.log();
        throw new Error(errorHandler.message);
      } else {
        console.error('Error desconocido:', error.response.status);
        throw new Error('Ocurrió un error inesperado');
      }
    } else if (error.request) {
      console.error('Error de red:', error.request);
      throw new Error('No se pudo conectar con el servidor');
    } else {
      console.error('Error:', error.message);
      throw error;
    }
  }
}

export default new PostService();
