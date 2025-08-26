# 🎯 Portfolio Template - Template Portofolio Gratis

Template portofolio profesional yang responsif dan mudah dikustomisasi untuk berbagai jenis profesi. Dibuat dengan HTML, CSS, dan JavaScript vanilla.

## ✨ Fitur Utama

- 🎨 **Design Modern** - Layout yang elegan dan profesional
- 📱 **Responsive** - Optimal di semua device (desktop, tablet, mobile)
- 🚀 **Fast Loading** - Tanpa framework berat, loading cepat
- 🎭 **Customizable** - Mudah disesuaikan dengan kebutuhan
- 🌈 **Color Scheme** - Warna yang menarik dan modern
- 📝 **SEO Friendly** - Struktur HTML yang baik untuk SEO

## 🎨 Preview

Template ini memiliki layout horizontal dengan:
- **Header** - Navigasi yang fixed dan mudah diakses
- **Hero Section** - Foto profil di kiri, informasi di kanan
- **About Section** - Tentang saya dan keahlian
- **Portfolio Section** - Showcase karya/proyek
- **Contact Section** - Form kontak dan informasi
- **Footer** - Copyright dan informasi tambahan

## 📁 Struktur File

```
portfolio-template/
├── 📄 index.html          # File HTML utama
├── 📄 style.css           # File CSS styling
├── 📄 script.js           # File JavaScript interaktif
├── 📖 README.md           # Dokumentasi ini
├── 🖼️ foto.png            # Foto profil (300x300px)
├── 🖼️ proyek1.png        # Gambar proyek 1 (300x200px)
├── 🖼️ proyek2.png        # Gambar proyek 2 (300x200px)
└── 🖼️ proyek3.png        # Gambar proyek 3 (300x200px)
```

## 🚀 Cara Penggunaan

### 1. Download Template
```bash
# Clone repository (jika menggunakan git)
git clone [repository-url]
cd portfolio-template

# Atau download langsung dari file
```

### 2. Siapkan Gambar
- **Foto Profil:** Ganti `foto.png` dengan foto Anda (ukuran 300x300px)
- **Portfolio:** Ganti `proyek1.png`, `proyek2.png`, `proyek3.png` dengan karya Anda

### 3. Edit Konten
Buka file `index.html` dan edit bagian-bagian berikut:

#### Hero Section
```html
<h1>Nama Lengkap Anda</h1>
<p class="title">Profesi / Spesialisasi</p>
<p class="description">Deskripsi singkat tentang diri Anda...</p>
```

#### About Section
```html
<p>Saya adalah seorang profesional yang passionate...</p>
<div class="skills">
    <span class="skill">Keahlian 1</span>
    <span class="skill">Keahlian 2</span>
    <!-- Tambah keahlian sesuai kebutuhan -->
</div>
```

#### Portfolio Section
```html
<h3>Judul Proyek 1</h3>
<p class="project-desc">Deskripsi singkat tentang proyek ini...</p>
```

#### Contact Section
```html
<p>Email: email@example.com</p>
<p>Telepon: +62 812-3456-7890</p>
<p>Lokasi: Kota, Provinsi</p>
```

### 4. Upload ke Web
- Upload semua file ke hosting web Anda
- Pastikan semua gambar dan file ter-upload dengan benar

## 🎨 Kustomisasi

### Mengubah Warna
Edit file `style.css` dan ubah variabel warna:

```css
:root {
    --primary-color: #4F46E5;    /* Warna utama */
    --secondary-color: #6366F1;  /* Warna sekunder */
    --accent-color: #8B5CF6;     /* Warna aksen */
}
```

### Mengubah Font
Ganti Google Font di `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

### Menambah Portfolio Item
Copy dan paste section portfolio item:

```html
<div class="portfolio-item">
    <img src="proyek4.png" alt="Proyek 4">
    <h3>Judul Proyek 4</h3>
    <p class="project-desc">Deskripsi proyek 4</p>
</div>
```

## 📱 Responsive Design

Template ini sudah responsive dan akan menyesuaikan dengan berbagai ukuran layar:

- **Desktop (>768px):** Layout horizontal
- **Mobile (≤768px):** Layout vertical dengan text center
- **Tablet:** Otomatis menyesuaikan

## 🔧 Fitur JavaScript

- **Smooth Scrolling** - Navigasi halus antar section
- **Interactive Buttons** - Efek visual pada tombol
- **Form Handling** - Validasi dan handling form kontak
- **Portfolio Hover Effects** - Efek hover pada portfolio items
- **Scroll Animations** - Animasi fade in saat scroll

## 🌟 Contoh Penggunaan untuk Berbagai Profesi

### Designer/Artist
- Title: "Graphic Designer & Illustrator"
- Skills: "Adobe Creative Suite, UI/UX Design, Branding"
- Portfolio: Logo designs, website mockups, illustrations

### Photographer
- Title: "Professional Photographer"
- Skills: "Portrait Photography, Event Coverage, Photo Editing"
- Portfolio: Photo collections, event photos, portraits

### Writer/Content Creator
- Title: "Content Writer & Copywriter"
- Skills: "Content Writing, SEO, Social Media, Copywriting"
- Portfolio: Articles, blog posts, marketing copy

### Consultant/Business
- Title: "Business Strategy Consultant"
- Skills: "Strategic Planning, Market Analysis, Business Development"
- Portfolio: Case studies, business plans, strategy documents

## 📋 Persyaratan Sistem

- **Browser:** Chrome, Firefox, Safari, Edge (versi terbaru)
- **JavaScript:** Harus diaktifkan
- **CSS:** Harus didukung
- **Hosting:** Web hosting dengan dukungan HTML/CSS/JS

## 🚀 Performance Tips

1. **Optimasi Gambar:**
   - Kompres gambar sebelum upload
   - Gunakan format yang sesuai (JPG untuk foto, PNG untuk grafis)
   - Resize gambar sesuai kebutuhan

2. **Loading Speed:**
   - Template sudah dioptimasi untuk loading cepat
   - Gunakan hosting yang cepat
   - Aktifkan GZIP compression di hosting

## 🐛 Troubleshooting

### Gambar Tidak Muncul
- Pastikan nama file gambar sesuai dengan yang ada di HTML
- Check apakah file gambar sudah ter-upload
- Periksa path file gambar

### Layout Rusak di Mobile
- Pastikan viewport meta tag sudah ada
- Check CSS media queries
- Test di berbagai device

### JavaScript Tidak Berfungsi
- Pastikan file `script.js` ter-upload
- Check browser console untuk error
- Pastikan JavaScript diaktifkan di browser

## 📞 Support

Jika ada pertanyaan atau masalah:

1. **Check Issues** - Lihat apakah masalah sudah ada di issues
2. **Create Issue** - Buat issue baru dengan detail lengkap
3. **Documentation** - Baca dokumentasi ini dengan teliti

## 📄 License

Template ini gratis untuk digunakan secara personal maupun komersial. Silakan modifikasi sesuai kebutuhan.

## 🙏 Credits

- **Fonts:** Google Fonts (Inter)
- **Icons:** Placeholder images (ganti dengan gambar Anda)
- **Design:** Modern portfolio template design

## 🔄 Changelog

### Version 1.0.0
- Initial release
- Responsive design
- Interactive features
- General portfolio template

---

**Happy Coding! 🎉**

Template ini dibuat dengan ❤️ untuk membantu Anda membuat portofolio yang profesional dan menarik.
