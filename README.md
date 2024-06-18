This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Server

#### Öncelikle backend sunucumuzu çalıştırmamız gerekiyor. Bunun için

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

#### komutu ile sunucumuzu başlatıyoruz. Ayrıca bu sunucu AWS üzerinde http://3.126.91.57:5000 adresinde de çalışıyor. Ve client içinde default olarak bu url ile gelmektedir.

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

#### komutu ile client'ı çalıştırıyoruz. Web tarayıcısında http://localhost:3000 adresinde açabiliriz. Ayrıca bu uygulama Vercel üzerinde xxxx adresinde de bulunmaktadır.