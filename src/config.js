/**
 * Archivo de configuración global del proyecto
 * Aquí defines constantes que se usarán en toda la app
 * Ejemplo: tamaños, nombres, colores, API base, etc.
 */

// ==============================|| APP CONFIG ||============================== //

export const APP_NAME = 'Importadora Brice';
export const APP_VERSION = '1.0.0';

// ==============================|| DRAWER CONFIG ||============================== //

// Anchos del sidebar
export const DRAWER_WIDTH = 260; // ancho cuando está expandido
export const MINI_DRAWER_WIDTH = 80; // ancho cuando está minimizado

// ==============================|| LAYOUT CONFIG ||============================== //

// Altura del header
export const HEADER_HEIGHT = 64;

// ==============================|| API CONFIG ||============================== //

// Si más adelante tienes endpoints, centralízalos aquí
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// ==============================|| THEMES ||============================== //

export const THEME_MODE = 'light'; // o 'dark'

// ==============================|| EXPORT DEFAULT ||============================== //


export const APP_DEFAULT_PATH = '/';

export default {
  appName: APP_NAME,
  appVersion: APP_VERSION,
  DRAWER_WIDTH: DRAWER_WIDTH,
  MINI_DRAWER_WIDTH: MINI_DRAWER_WIDTH,
  headerHeight: HEADER_HEIGHT,
  apiBaseUrl: API_BASE_URL,
  themeMode: THEME_MODE
};
