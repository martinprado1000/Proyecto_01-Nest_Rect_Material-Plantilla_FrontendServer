interface ImportMetaEnv {
  readonly VITE_TEMPLATE_IMAGE_URL: string; // ← Asegúrate de que coincida con tu variable en .env
  readonly VITE_URL_BACK: string;
  // Otras variables de entorno de Vite...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
