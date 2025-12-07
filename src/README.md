# Alika's Blog - Student Personal Blog

Blog pribadi untuk pelajar dengan hobi memasak, traveling, dan fotografi.

## ✨ Fitur Utama

- **Hero Section Full Screen** dengan background foto dan border orange di mobile
- **Header Transparan** yang berubah menjadi sticky blur saat scroll
- **Mobile Menu** dengan sticky notes style background pink
- **Logo "Alika"** dengan bintang yang berubah warna saat scroll
- **Vertical Text** di mobile untuk tampilan yang unik
- **About Me Section** dengan 4 card info dan detail hobi
- **Blog Section** dengan 6 blog post cards yang interaktif
- **Photo Gallery** dengan filter kategori dan lightbox modal
- **Footer** dengan gradient styling dan social media links
- **Smooth Scroll** dan auto-detect active section
- **Responsive Design** untuk semua ukuran layar

## 🚀 Cara Setup di VS Code

### 1. Copy Semua File
Salin semua file dan folder dari template ini ke folder project baru di komputer kamu.

### 2. Install Dependencies
Buka terminal di VS Code (atau Command Prompt/Terminal) dan jalankan:

```bash
npm install
```

### 3. Jalankan Development Server
Setelah instalasi selesai, jalankan:

```bash
npm run dev
```

Blog akan berjalan di `http://localhost:5173`

### 4. Build untuk Production
Untuk membuat versi production:

```bash
npm run build
```

File hasil build akan ada di folder `/dist`

## 📁 Struktur Folder

```
student-blog/
├── src/
│   ├── components/
│   │   ├── ui/              # Komponen UI (Button, Card, Badge)
│   │   ├── lib/             # Utility functions
│   │   ├── Header.tsx       # Navigasi
│   │   ├── Hero.tsx         # Banner hero
│   │   ├── AboutMe.tsx      # Section About
│   │   ├── BlogSection.tsx  # Section Blog
│   │   ├── BlogCard.tsx     # Card blog
│   │   ├── Gallery.tsx      # Gallery foto
│   │   ├── Footer.tsx       # Footer
│   │   └── ImageWithFallback.tsx
│   ├── styles/
│   │   └── globals.css      # Global styling
│   ├── App.tsx              # Main component
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite config
├── tsconfig.json            # TypeScript config
└── postcss.config.js        # PostCSS config
```

## 🎨 Design Highlights

### Mobile View
- Border orange 8px di seluruh layar
- Vertical text "WELCOME TO MY WORLD" di sisi kiri
- Mobile menu dengan sticky notes style (background pink)
- Header transparan yang blur saat scroll

### Desktop View
- Hero section full screen dengan gradient overlay
- Header transparan dengan logo "Alika" dan bintang
- Grid layout untuk blog posts (3 columns)
- Masonry-like gallery layout

### Color Scheme
- Primary: Orange (#f97316) dan Pink (#ec4899)
- Secondary: Blue (#3b82f6) dan Purple (#a855f7)
- Accents: Yellow (#eab308) untuk highlights

## 🎯 Komponen Detail

### Header
- Fixed position dengan transparency effect
- Scroll-triggered blur background
- Logo dengan bintang yang responsive
- Mobile menu dengan sticky notes decoration

### Hero
- Full screen height (min-h-screen)
- Background image dengan gradient overlay
- Profile photo dengan wave emoji badge
- 3 hobby pills dengan icons

### About Me
- 4 colored cards (orange, pink, blue, purple)
- Large description card dengan gradient background
- Hover effects dengan translate animation
- Icon-based visual hierarchy

### Blog Section
- 6 blog posts dengan real Unsplash images
- Category badges dengan icon
- Hover effects (scale + shadow)
- Date dan read time info

### Gallery
- Filter buttons untuk kategori
- Masonry-style grid layout
- Hover overlay dengan gradient
- Lightbox modal untuk view detail

### Footer
- 3-column layout
- Animated social media icons
- Gradient background
- Quick links dengan hover effects

## 📦 Dependencies Utama

- **React 18** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **Radix UI** - UI primitives (untuk Shadcn)

## 💡 Tips Pengembangan

1. **Hot Reload**: Vite otomatis reload saat kamu save file
2. **TypeScript**: Gunakan types untuk menghindari error
3. **Tailwind**: Lihat dokumentasi Tailwind untuk class utilities
4. **Icons**: Browse icons di https://lucide.dev

## 🛠️ Troubleshooting

### Port 5173 sudah digunakan
Tambahkan flag port berbeda:
```bash
npm run dev -- --port 3000
```

### Error saat npm install
Pastikan Node.js versi minimal 16.x:
```bash
node --version
```

### Styling tidak muncul
Pastikan `globals.css` sudah diimport di `main.tsx`

## 📝 To-Do Ideas

- [ ] Tambahkan dark mode
- [ ] Buat halaman detail blog post
- [ ] Tambahkan form kontak
- [ ] Integrasi dengan CMS (Sanity/Contentful)
- [ ] Tambahkan fitur search
- [ ] Deploy ke Vercel/Netlify

## 📧 Kontak

Jika ada pertanyaan atau butuh bantuan, feel free to reach out!

## 📄 License

MIT License - Bebas digunakan untuk project pribadi atau komersial

---

**Happy Coding! 🎉**