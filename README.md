## Server

#### Sunucu Heroku üzerinde https://rastcase-704ea582f42b.herokuapp.com/ adresinde de çalışıyor. Ve client içinde default olarak bu url ile gelmektedir. Ekstra olarak backend'i çalıştırmak isterseniz; Bunun için

```bash
cd server/

npm install
# or
yarn
```

#### komutu ile gerekli paketleri yüklüyoruz. Sonrasında

```
npm run dev
# or
yarn dev
```

#### komutu ile sunucumuzu başlatıyoruz.

## Client

#### Backend sunucumuzu çalıştırdıktan sonra client'ı çalıştırabiliriz. Bunun için

```bash
cd ..
```

#### bir üst dizine gidiyoruz ve sonrasında

```bash
cd server/

npm install
# or
yarn
```

#### komutu ile gerekli paketleri yüklüyoruz. Sonrasında

```
npm run dev
# or
yarn dev
```

#### komutu ile client'ı çalıştırıyoruz. Web tarayıcısında http://localhost:3000 adresinde açabiliriz. Ayrıca bu uygulama Vercel üzerinde https://rast-mobile-kanban-case.vercel.app/ adresinde de bulunmaktadır.
