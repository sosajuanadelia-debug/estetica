# 📖 Guía Completa de Desarrollo y Administración del Proyecto

Este documento es una guía explicativa creada para consultar el funcionamiento del proyecto, comandos útiles, integración con Instagram, uso de GitHub y buenas prácticas. **No afecta en nada el funcionamiento del código.**

---

## 📑 Tabla de Contenidos
1. [🚀 Cómo arrancar y ejecutar el proyecto](#1-cómo-arrancar-y-ejecutar-el-proyecto)
2. [🐙 Cómo usar GitHub (Control de Versiones)](#2-cómo-usar-github-control-de-versiones)
3. [📸 Integración con la API de Instagram](#3-integración-con-la-api-de-instagram)
4. [📁 Estructura del Proyecto y Dónde Editar](#4-estructura-del-proyecto-y-dónde-editar)
5. [🔐 Seguridad y Variables de Entorno (.env)](#5-seguridad-y-variables-de-entorno-env)
6. [🌐 Cómo publicar el sitio web (Deployment)](#6-cómo-publicar-el-sitio-web-deployment)

---

## 1. 🚀 Cómo arrancar y ejecutar el proyecto

### Requisitos previos
- Tener instalado **Node.js** (incluye `npm`).

### Comandos principales en la Terminal

Abre tu terminal (PowerShell, CMD o Terminal integrada de VS Code/IDE) en la carpeta del proyecto y utiliza estos comandos:

| Comando | ¿Para qué sirve? |
| :--- | :--- |
| `npm run dev` | **Inicia el servidor de desarrollo local.** Abre la aplicación en `http://localhost:5173`. Todos los cambios que guardes se verán al instante. |
| `Ctrl + C` | **Detiene el servidor** en la terminal cuando termines de trabajar. |
| `npm install` | Instala todas las librerías necesarias del proyecto (solo necesario la primera vez o si te descargas el proyecto en otra PC). |
| `npm run build` | Compila y genera la carpeta `dist/` optimizada y lista para subir a producción (hosting). |
| `npm run preview` | Permite probar localmente la versión compilada de producción. |

---

## 2. 🐙 Cómo usar GitHub (Control de Versiones)

GitHub te permite guardar versiones del código en la nube, colaborar y no perder tus avances.

### Flujo de trabajo diario en Git

Cada vez que hagas un cambio importante que quieras guardar en GitHub, sigue estos 4 pasos en la terminal:

```bash
# 1. Ver qué archivos se modificaron o crearon
git status

# 2. Agregar todos los cambios al área de preparación
git add .

# 3. Guardar una "foto" o commit con una breve descripción de lo que hiciste
git commit -m "Agregada guía de desarrollo y actualización de contenidos"

# 4. Subir tus commits locales a tu repositorio en GitHub
git push origin main
```

### Comandos útiles de Git

- **Descargar los últimos cambios desde GitHub (si trabajas desde otra PC):**
  ```bash
  git pull origin main
  ```
- **Ver el historial de commits guardados:**
  ```bash
  git log --oneline
  ```

---

## 3. 📸 Integración con la API de Instagram

Para mostrar las fotos o publicaciones de Instagram en tu sitio web existen dos caminos principales:

### Opción A: Widgets sin código (Recomendada para empezar rápida y fácil)
Servicios de terceros generan un código de incrustado (iframe o script) para mostrar tu feed actualizado automáticamente:
- **Behold** ([behold.so](https://behold.so)): Muy rápido, 1 feed gratis, diseñado específicamente para React/Vite.
- **Elfsight** ([elfsight.com](https://elfsight.com)): Muy popular, fácil de personalizar con estilos visuales.
- **SnapWidget** ([snapwidget.com](https://snapwidget.com)): Gratis con opciones avanzadas.

**Cómo se implementa:** Creas una cuenta en la plataforma, vinculas tu Instagram y pegas el componente/script que te proveen en tu código React.

---

### Opción B: API Oficial de Meta (Instagram Graph API / Basic Display API)
Si deseas construir un carrusel o galería personalizada leyendo directamente los datos de tu cuenta de Instagram:

#### Pasos de Configuración en Meta:
1. Ir a [Meta for Developers](https://developers.facebook.com/).
2. Crear una cuenta de desarrollador y crear una **App** de tipo "Consumidor" o "Empresa".
3. Agregar el producto **Instagram Basic Display**.
4. Agregar tu cuenta de Instagram como "Instagram Tester".
5. Aceptar la invitación desde la configuración de tu cuenta de Instagram (Aplicaciones y sitios web -> Testers).
6. Generar el **Access Token de Larga Duración** (dura 60 días).

#### Ejemplo de llamada API en JavaScript / React:

```javascript
import { useEffect, useState } from 'react';

export function InstagramFeed() {
  const [photos, setPhotos] = useState([]);
  const INSTAGRAM_TOKEN = import.meta.env.VITE_INSTAGRAM_TOKEN;

  useEffect(() => {
    async function fetchInstagram() {
      try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${INSTAGRAM_TOKEN}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.data) {
          setPhotos(data.data.slice(0, 6)); // Tomar las últimas 6 publicaciones
        }
      } catch (error) {
        console.error("Error cargando Instagram:", error);
      }
    }
    fetchInstagram();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map(item => (
        <a key={item.id} href={item.permalink} target="_blank" rel="noreferrer">
          <img 
            src={item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url} 
            alt={item.caption || 'Instagram Post'} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </a>
      ))}
    </div>
  );
}
```

> ⚠️ **Importante:** Los Access Tokens de Instagram caducan cada 60 días. Se recomienda refrescarlos mediante un backend/cronjob o usar la Opción A (Widget) para no preocuparte por el vencimiento de tokens.

---

## 4. 📁 Estructura del Proyecto y Dónde Editar

- `src/data/siteContent.js`: Contiene todos los datos editables del sitio (textos, servicios, teléfono, horarios, enlaces de redes sociales).
- `src/components/`: Contiene los elementos visuales de la web (Header, Hero, Services, Footer, Contact, etc.).
- `public/`: Guarda imágenes o archivos estáticos a los que se accede directamente.
- `index.html`: El archivo principal HTML del sitio (título SEO, meta descripciones, fuentes Google Fonts).

---

## 5. 🔐 Seguridad y Variables de Entorno (.env)

Nunca guardes claves privadas, contraseñas o Tokens de API directamente dentro de tus archivos de código que subes a GitHub.

1. Crea un archivo en la raíz del proyecto llamado `.env.local`.
2. Guarda tus variables con el prefijo `VITE_`:
   ```env
   VITE_INSTAGRAM_TOKEN=tu_token_aqui
   VITE_WHATSAPP_NUMBER=5491112345678
   ```
3. En tu código JavaScript/React las lees así:
   ```javascript
   const token = import.meta.env.VITE_INSTAGRAM_TOKEN;
   ```
4. Asegúrate de que `.env.local` esté en tu `.gitignore` para que Git nunca suba tus secretos.

---

## 6. 🌐 Cómo publicar el sitio web (Deployment)

Opciones recomendadas gratuitas o de bajo costo para publicar este sitio Vite React:
- **Vercel** ([vercel.com](https://vercel.com)): Te conectas con tu cuenta de GitHub, seleccionas este repositorio y se publica en 1 minuto con HTTPS automático gratis.
- **Netlify** ([netlify.com](https://netlify.com)): Mismo proceso que Vercel, excelente integración con GitHub.
- **Hostinger / cPanel tradicional**: Ejecutas `npm run build` en tu PC y subes el contenido de la carpeta `dist/` a la carpeta `public_html` de tu servidor mediante FTP o File Manager.

---
*Documento informativo generado para consulta interna del proyecto.*
