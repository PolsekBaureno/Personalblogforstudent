import React from 'react';
import { Book, Heart, MapPin, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-4">About Me</h2>
        <p className="text-gray-600">Kenalan lebih dekat yuk! 🌟</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2">Pelajar & Dreamer</h3>
                <p className="text-gray-600">
                  Aku siswa kelas 11 yang suka belajar hal-hal baru. Nilai favoritku adalah seni dan bahasa, 
                  tapi aku juga tertarik sama sains!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2">Passion Project</h3>
                <p className="text-gray-600">
                  Blog ini adalah tempat aku berbagi cerita tentang petualangan kuliner, 
                  perjalanan seru, dan foto-foto yang aku ambil sendiri!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <h3>Kenapa Aku Suka Ketiga Hobi Ini?</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-600 mb-2">🍳 Memasak</h4>
              <p className="text-gray-700">
                Memasak itu kayak eksperimen sains yang bisa dimakan! Aku suka banget coba-coba resep baru, 
                terutama dessert dan makanan Korea. Setiap akhir pekan, dapur rumah jadi lab eksperimenku!
              </p>
            </div>
            
            <div>
              <h4 className="text-blue-600 mb-2">✈️ Traveling</h4>
              <p className="text-gray-700">
                Menjelajahi tempat baru itu selalu bikin excited! Dari pantai sampai gunung, dari kota besar 
                sampai desa kecil - setiap tempat punya cerita uniknya sendiri. Aku suka banget dokumentasiin 
                perjalanan lewat foto dan video!
              </p>
            </div>
            
            <div>
              <h4 className="text-pink-600 mb-2">📷 Photography</h4>
              <p className="text-gray-700">
                Kamera adalah cara aku melihat dunia dengan perspektif berbeda. Dari street photography 
                sampai food photography, aku suka menangkap momen-momen spesial. Gear favorit: HP aku dan 
                kamera mirrorless yang nabung setahun buat beli!
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-orange-200">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Jakarta, Indonesia 🇮🇩</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
