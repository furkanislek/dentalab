const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// SVG optimizasyonunu çalıştırmak için SVGO kurulumunu kontrol et
console.log('SVG optimizasyon scripti başlatılıyor...');

const publicSvgDir = path.join(__dirname, '../public/svg');

// SVG dizini kontrolü
if (!fs.existsSync(publicSvgDir)) {
  console.log('SVG dizini bulunamadı. Dizin oluşturuluyor...');
  fs.mkdirSync(publicSvgDir, { recursive: true });
}

// SVGO kurulumunu kontrol et
exec('npm list -g svgo', (error, stdout, stderr) => {
  if (error) {
    console.log('SVGO global olarak kurulu değil. Kurulum yapılması önerilir:');
    console.log('npm install -g svgo');
    console.log('Kurulumdan sonra şu komutu çalıştırın:');
    console.log('svgo -f public/svg --multipass --quiet');
    return;
  }
  
  // SVGO kuruluysa SVG dosyalarını optimize et
  console.log('SVGO bulundu. SVG dosyaları optimize ediliyor...');
  
  // public/svg dizinindeki tüm SVG dosyalarını optimize et
  exec('svgo -f public/svg --multipass --quiet', (error, stdout, stderr) => {
    if (error) {
      console.error('SVG optimizasyonu sırasında hata oluştu:', error);
      return;
    }
    console.log('SVG dosyaları başarıyla optimize edildi!');
  });
});
