# Playwright Proje Sunum Rehberi

Bu dosya, Playwright ile hazırladığınız test otomasyon projesini sunarken izleyebileceğiniz adımları içerir.

## 1. Giriş (Introduction)
- **Konu:** Playwright nedir? Modern web uygulamaları için güvenilir uçtan uca (E2E) test aracıdır.
- **Neden Playwright?**
    - Hızlı ve güvenilirdir.
    - Tüm modern tarayıcıları destekler (Chromium, Firefox, WebKit).
    - Otomatik bekleme (Auto-wait) özelliği ile "flaky" (kararsız) testleri azaltır.

## 2. Proje Yapısının Tanıtımı
Sunumda proje dosyalarınızı gösterin:

- **src klasörü:** Test edilen gerçek web uygulaması.
    - `index.html`: Giriş sayfası. (Kullanıcı adı: demo, Şifre: 1234)
    - `dashboard.html`: Giriş başarılı olduğunda yönlendirilen sayfa.
- **tests klasörü:**
    - `login.spec.ts`: Yazdığımız test senaryoları burada.
- **playwright.config.ts:** Playwright ayar dosyası (hangi tarayıcıda çalışacağı, ekran görüntüsü alma ayarları vb.).

## 3. Test Senaryolarının Açıklanması
`tests/login.spec.ts` dosyasını açıp testleri açıklayın:

1.  **"should login successfully"**:
    - Doğru kullanıcı adı ve şifre girilir.
    - Giriş butonuna tıklanır.
    - URL'in `dashboard.html` olduğu ve "Welcome" mesajının göründüğü doğrulanır.

2.  **"should show error message"**:
    - Yanlış bilgiler girilir.
    - Giriş butonuna tıklanır.
    - Hata mesajının ("Invalid credentials") göründüğü doğrulanır.

3.  **"should logout successfully"**:
    - Önce giriş yapılır.
    - Sonra çıkış (Logout) butonuna basılır.
    - Tekrar giriş sayfasına dönüldüğü doğrulanır.

## 4. Testlerin Çalıştırılması (Demo)
Terminali açın ve şu komutu çalıştırarak testleri canlı olarak gösterin:

```powershell
npx playwright test
```

*İpucu: Testlerin tarayıcıda açıldığını görmek için `--headed` modunda çalıştırabilirsiniz:*
```powershell
npx playwright test --headed
```

## 5. Raporlama (Reporting)
Testler bittikten sonra raporu açarak sonuçları gösterin:

```powershell
npx playwright show-report
```
- Açılan sayfada her bir test adımını, ne kadar sürdüğünü ve varsa alınan ekran görüntülerini/videoları gösterin.

## 6. Soru & Cevap
- Playwright'ın diğer araçlardan farkı nedir? (Daha hızlı, "Auto-wait" özelliği, Trace Viewer vb.)
