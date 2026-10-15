<div align="center">

# AethelonTV

**Yüksek Performanslı Modüler Medya ve Akış Dağıtım Çekirdeği**

[![Sürüm](https://img.shields.io/badge/S%C3%BCr%C3%BCm-v0.0.6-blue?style=flat-square)](https://github.com/aethelondev-stack/aethelontv/releases)
[![Altyapı](https://img.shields.io/badge/Altyap%C4%B1-Cloudflare%20Edge%20%7C%20QuickJS-orange?style=flat-square)](https://www.aetheloncore.space)
[![Durum](https://img.shields.io/badge/Durum-%C3%87al%C4%B1%C5%9F%C4%B1yor-success?style=flat-square)](https://www.aetheloncore.space)
[![Lisans](https://img.shields.io/badge/Lisans-ARIL%20v1.0-lightgrey?style=flat-square)](LICENSE)

---

AethelonTV; internet üzerindeki kamuya açık içerik sağlayıcılarını, dinamik katalogları ve canlı yayın akışlarını modern medya oynatıcıları için tek bir standartta toplayan hafif, optimize edilmiş ve yüksek hızlı bir istemci mimarisidir.

</div>

---

## 📌 Mimari ve Öne Çıkan Özellikler

- **Edge Düzeyinde Hızlı Yönlendirme:** Dağıtık V8 Edge Workers altyapısı ile sıfıra yakın gecikme ve kesintisiz yük dengeleme.
- **QuickJS Motor Uyumluluğu:** 64 KB yığın (stack) sınırına ve düşük donanımlı Android TV / TV Box cihazlarına uygun bellek dostu mimari.
- **Akıllı Çift Kaynak (Multi-Stream):** Canlı yayınlarda otomatik hat geçişi ve yüksek erişilebilirlik.
- **Sıfır Reklam ve Temiz Arayüz:** Kullanıcı deneyimini bozan hiçbir harici enjeksiyon veya aracı yönlendirme içermez.

---

## 🌐 Manifest Bağlantıları

Medya merkezinize eklemeniz gereken güncel resmi manifest adresleri:

| Bileşen | Açıklama | Manifest URL |
| :--- | :--- | :--- |
| **AethelonTV Scrapers** | 79 bağımsız medya çözümleme motoru | `https://www.aetheloncore.space/AethelonTV/manifest.json` |
| **AethelonTV Katalog** | Film, dizi, belgesel ve canlı yayın kataloğu | `https://www.aetheloncore.space/AethelonTV/katalog/manifest.json` |

---

## 🚀 Kurulum Rehberi (Nuvio Media Center)

AethelonTV, Android TV, Google TV ve Android mobil cihazlarda Nuvio Media Center ile tam uyumludur.

1. Cihazınızda **Nuvio** uygulamasını açın.
2. **Ayarlar > Eklentiler (Plugins) > Eklenti Ekle** bölümüne gidin.
3. Yukarıdaki **AethelonTV Scrapers** ve **AethelonTV Katalog** manifest linklerini sırayla ekleyin.
4. Eklentileri etkinleştirin; katalog ve arama dizini otomatik olarak senkronize edilecektir.

> ⚠️ **Önemli Kurulum Notu:**  
> Aethelon Katalog eklentisini kurduğunuzda, arama ve katalog çakışmalarını önlemek için **altyazı eklentileri hariç diğer tüm eklentileri devre dışı bırakınız**.

---

## 📺 Yayın ve İçerik Yelpazesi

AethelonTV ekosistemi, içerikleri kategorik ve düzenli akış hatları üzerinden organize eder:

- **Ulusal ve Yerel Kanallar:** Kesintisiz yüksek çözünürlüklü yayın hatları.
- **Spor Kanalları:** Çoklu canlı hat (Hat 1 / Hat 2) destekli dinamik spor yayınları.
- **Haber Kanalları:** 7/24 güncel canlı haber akışları.
- **Sinema, Dizi ve Tematik Kanallar:** Yerli ve yabancı içerikler, belgesel ve kültür yayınları.

---

## 📲 CloudStream Eklentisi

> **Bilgilendirme:** AethelonTV CloudStream eklentisi şu anda geliştirme ve uyumluluk testleri aşamasındadır. Çok yakında resmi olarak yayınlanacaktır. Güncellemeleri Telegram kanalımızdan takip edebilirsiniz.

---

## 🛠️ Teknoloji Yığını

- **Çalışma Zamanı & Diller:** JavaScript (ES2022), Node.js, QuickJS
- **Edge Dağıtım:** Cloudflare Edge Workers (V8 Isolate)
- **Paketleme & Optimizasyon:** ESBuild (Safe Mangling & AST Minification)
- **Protokoller:** HLS (HTTP Live Streaming), Dynamic M3U8 Rewriter

---

## ☕ Geliştiriciye Destek Ol

AethelonTV tamamen açık fikirli, bağımsız ve reklamsız bir araştırma projesidir. Sunucu ve altyapı giderlerine katkıda bulunarak projeyi desteklemek isterseniz:

[![Kreosus Destek](https://img.shields.io/badge/Kreosus-Geli%C5%9Ftiriciye%20Destek%20Ol-ec4899?style=for-the-badge&logo=kofi&logoColor=white)](https://kreosus.com/httpstvaethelondevworkersdev/about)

*Kreosus üzerinden yapılan desteklerde kişisel bilgileriniz ve ödeme detaylarınız tamamen gizli kalır.*

---

## 🔗 Topluluk ve İletişim

- **Telegram Kanalı:** [t.me/AethelonTV](https://t.me/AethelonTV)
- **Twitter / X:** [@AethelonDev](https://x.com/AethelonDev)
- **GitHub:** [github.com/aethelondev-stack](https://github.com/aethelondev-stack)
- **Web Portalı:** [aetheloncore.space](https://www.aetheloncore.space)

---

## ⚖️ Yasal Bilgilendirme ve DMCA Bildirimi

1. **İçerik Barındırılmaz:** AethelonTV sunucularında, depolarında veya dağıtım ağlarında hiçbir video, ses, film, dizi, canlı yayın akışı (MP4, M3U8, MKV vb.) ya da telif hakkına tabi materyal barındırılmaz, depolanmaz ve iletilmez.
2. **Aracı Köprü Konumu:** AethelonTV, tıpkı standart bir internet tarayıcısı (Chrome, Firefox) gibi yalnızca internette kamuya açık kaynaklarda yer alan hipermetin (DOM / HTML / JSON) verilerini kullanıcı istemcisinde ayrıştıran bir yazılım arayüzüdür.
3. **Üçüncü Taraf Sunucular:** Gösterilen akışlar doğrudan bağımsız üçüncü taraf sunuculardan çağrılmaktadır. Geliştiricilerin bu sunucular üzerinde hiçbir idari, mali veya teknik kontrolü bulunmamaktadır.
4. **DMCA ve Yasal Uyumluluk:** AethelonTV, 17 U.S.C. § 512 (DMCA Safe Harbor) ve Avrupa Birliği 2000/31/EC sayılı direktifleri uyarınca tarafsız bir teknik servis sağlayıcıdır. Telif hakkı sahipleri taleplerini ilgili içeriği barındıran asıl sunucu sağlayıcılarına iletmelidir.

---

## 📜 Lisans

Bu proje **Aethelon Research and Interoperability License (ARIL v1.0)** altında yayımlanmıştır. Ayrıntılar için [LICENSE](LICENSE) belgesini inceleyebilirsiniz.
