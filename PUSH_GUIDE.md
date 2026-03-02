# Panduan Push ke GitHub & Auto-Deploy Vercel

## Status Saat Ini
✅ Repository GitHub sudah terhubung: https://github.com/rizkihidayat15/My-Portofolio
✅ Initial commit sudah berhasil di-push
✅ Vercel akan auto-deploy setiap ada push ke GitHub

---

## Cara Push Perubahan (Setiap Kali Edit File)

### Cara 1: Menggunakan VSCode (Disarankan)
1. Buka VSCode
2. Ada ikon "Source Control" (Ctrl+Shift+G) di sidebar kiri
3. Klik tombol "Commit" (✓) setelah melihat perubahan
4. Masukkan pesan commit, contoh: "Update portofolio"
5. Klik tombol "Push" (↑) untuk upload ke GitHub
6. Tunggu beberapa detik, Vercel akan otomatis deploy!

### Cara 2: Menggunakan Terminal/Command Prompt
Setiap kali ingin upload perubahan, jalankan 3 perintah ini:

```
cmd
cd "d:\BERKAS PRIBADI\PORTOFOLIO PROJECT"
git add .
git commit -m "Pesan commit Anda di sini"
git push
```

---

## Cara Kerja Auto-Deploy
1. Anda push kode ke GitHub
2. Vercel mendeteksi perubahan secara otomatis
3. Vercel membangun ulang website
4. Website otomatis ter-update di: https://portfolio-muhammadrizkihidayat.vercel.app/

---

## Catatan Penting
- Pastikan sudah login ke GitHub di VSCode
- Setiap kali edit file, langsung push agar Vercel auto-update
- Tidak perlu membuka dashboard Vercel手动
