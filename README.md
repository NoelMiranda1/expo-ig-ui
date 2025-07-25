# 📱 Expo Instagram UI Clone

Un clon de la interfaz de usuario de Instagram construido con React Native y Expo, implementando las características visuales principales de la popular red social.

## 🚀 Tecnologías Utilizadas

<div align="center">
  
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)

</div>

### Stack Principal

- **React Native 0.79.5** - Framework para desarrollo móvil multiplataforma
- **Expo SDK 53** - Plataforma de desarrollo y herramientas para React Native
- **TypeScript** - Tipado estático para JavaScript
- **React 19** - Con las nuevas características como el hook `use()` y Suspense mejorado
- **Expo Router** - Navegación basada en archivos

### Librerías Principales

- **expo-image** - Componente de imagen optimizado con caché y transiciones
- **expo-symbols** - Iconos SF Symbols para iOS
- **@expo/vector-icons** - Librería de iconos para React Native
- **axios** - Cliente HTTP para peticiones a APIs
- **moment** - Manejo de fechas y tiempos
- **react-native-dotenv** - Variables de entorno
- **react-native-safe-area-context** - Manejo de áreas seguras en dispositivos

### Herramientas de Desarrollo

- **ESLint** - Linter con configuración Airbnb
- **Prettier** - Formateador de código
- **Yarn** - Gestor de paquetes

## 📁 Estructura del Proyecto

```
expo-ig-ui/
├── app/                      # Navegación principal (Expo Router)
│   ├── (tabs)/              # Navegación por tabs
│   │   ├── index.tsx        # Feed/Home
│   │   ├── search/          # Búsqueda
│   │   ├── create/          # Crear publicación
│   │   ├── reels/           # Reels
│   │   └── profile/         # Perfil
│   ├── _layout.tsx          # Layout principal
│   └── +not-found.tsx       # Página 404
│
├── components/              # Componentes reutilizables
│   ├── core/               # Componentes base
│   │   ├── avatar.tsx      # Avatar reutilizable
│   │   └── image.tsx       # Wrapper de expo-image
│   ├── post/               # Componentes del feed
│   │   ├── PostCard.tsx    # Tarjeta de publicación
│   │   ├── PostHeader.tsx  # Cabecera del post
│   │   ├── PostImage.tsx   # Imagen del post
│   │   ├── PostActions.tsx # Botones de interacción
│   │   ├── PostFooter.tsx  # Likes y descripción
│   │   └── PostList.tsx    # Lista de posts
│   ├── profile/            # Componentes del perfil
│   │   ├── ProfileHeader.tsx
│   │   ├── ProfileHighlights.tsx
│   │   ├── ProfileTabs.tsx
│   │   └── ProfileGrid.tsx
│   ├── search/             # Componentes de búsqueda
│   │   ├── SearchBar.tsx
│   │   └── SearchGrid.tsx
│   └── ui/                 # Componentes UI generales
│       ├── Skeleton.tsx    # Loading skeleton
│       └── IconSymbol.tsx  # Wrapper de iconos
│
├── services/               # Servicios y APIs
│   ├── index.ts           # Configuración de axios
│   ├── post.ts            # Servicio de posts
│   └── unsplash.ts        # Integración con Unsplash
│
├── hooks/                  # Custom hooks
│   ├── useDebounce.ts     # Hook para debounce
│   └── useHeader.ts       # Hook para headers
│
├── types/                  # Definiciones TypeScript
│   ├── post.ts            # Tipos de posts
│   └── unsplash.ts        # Tipos de Unsplash
│
└── constants/             # Constantes de la app
```

## 🎨 Características Implementadas

### 📱 Feed Principal
- Lista de publicaciones con scroll infinito
- Componentes skeleton para carga
- Integración con API MockAPI
- Pull to refresh

### 🔍 Búsqueda
- Barra de búsqueda con debounce
- Grid de imágenes estilo Instagram (3 columnas)
- Integración con API de Unsplash
- Búsqueda en tiempo real

### 👤 Perfil
- Header con información del usuario
- Estadísticas (publicaciones, seguidores, seguidos)
- Historias destacadas
- Grid de publicaciones
- Tabs para diferentes tipos de contenido

### 🎯 Componentes Destacados

#### PostCard
Componente modular que representa una publicación con:
- Header con avatar y ubicación
- Imagen principal con soporte para doble tap
- Acciones (like, comentar, compartir, guardar)
- Footer con contador de likes y descripción

#### Avatar
Componente reutilizable que soporta:
- Imágenes o iniciales como fallback
- Diferentes tamaños
- Indicador de historia activa
- Estado de carga

#### Skeleton
Componente de carga animado para mejorar la UX durante la carga de datos.

## 🔧 Configuración

### Variables de Entorno
```env
API_URL=APIPOST
UNSPLASH_ACCESS_KEY=tu_clave_de_unsplash
```

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/expo-ig-ui.git

# Instalar dependencias
yarn install

# Iniciar el proyecto
yarn start
```

## 📱 Capturas de Pantalla

El proyecto implementa fielmente el diseño visual de Instagram, incluyendo:
- Navegación por tabs inferior
- Tema oscuro
- Animaciones y transiciones suaves
- Diseño responsive

## 📄 Licencia

Este proyecto es solo con fines educativos y no está afiliado con Instagram o Meta.

---

<div align="center">
  Desarrollado con ❤️ usando Expo y React Native
</div>