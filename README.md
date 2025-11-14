# gözümün nuru

Zarif mücevher ve özel tasarım koleksiyonu web sitesi.

## 🚀 GitHub Pages Deployment

Bu proje GitHub Pages'de yayınlanmak üzere yapılandırılmıştır.

### GitHub Pages'i Aktif Etme

1. GitHub repository'nize gidin: https://github.com/efecanzaim/gozumunnuru
2. **Settings** → **Pages** sekmesine gidin
3. **Source** bölümünde:
   - **Branch**: `main` seçin
   - **Folder**: `/ (root)` seçin
4. **Save** butonuna tıklayın

### Otomatik Deployment

Proje, GitHub Actions workflow ile otomatik olarak deploy edilir:
- Her `main` branch'e push yapıldığında otomatik build ve deploy yapılır
- Workflow dosyası: `.github/workflows/deploy.yml`

### Site URL

Deployment tamamlandıktan sonra siteniz şu adreste yayınlanacak:
**https://efecanzaim.github.io/gozumunnuru/**

## 🛠️ Local Development

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev

# Production build
npm run build
```

## 📝 Notlar

- Görseller `public/` klasöründe bulunur ve GitHub Pages'de otomatik olarak servis edilir
- Instagram API entegrasyonu için `.env.local` dosyasına credentials eklemeniz gerekir (production'da GitHub Secrets kullanın)

## 🔧 Environment Variables

Production için GitHub Secrets kullanın:
- `INSTAGRAM_ACCESS_TOKEN`
- `INSTAGRAM_BUSINESS_ACCOUNT_ID`
