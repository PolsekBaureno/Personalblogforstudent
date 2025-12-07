import React from 'react';
import { Book, Heart, MapPin, Sparkles, Award, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <h2 className="m-0">About Me</h2>
          </div>
        </div>
        <p className="text-gray-600">Kenalan lebih dekat yuk! 🌟</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="border-2 border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
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

        <Card className="border-2 border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-pink-50/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
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

        <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2">Achievements</h3>
                <p className="text-gray-600">
                  Pernah juara lomba fotografi tingkat sekolah dan best recipe di cooking competition! 🏆
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2">Future Goals</h3>
                <p className="text-gray-600">
                  Pengen kuliah di bidang kreatif dan punya food photography studio sendiri suatu hari nanti!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 border-2 border-orange-300 shadow-xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <h3>Kenapa Aku Suka Ketiga Hobi Ini?</h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-orange-200 hover:shadow-md transition-shadow">
              <h4 className="text-orange-600 mb-2 flex items-center gap-2">
                <span>🍳</span> Memasak
              </h4>
              <p className="text-gray-700">
                Memasak itu kayak eksperimen sains yang bisa dimakan! Aku suka banget coba-coba resep baru, 
                terutama dessert dan makanan Korea. Setiap akhir pekan, dapur rumah jadi lab eksperimenku!
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-blue-200 hover:shadow-md transition-shadow">
              <h4 className="text-blue-600 mb-2 flex items-center gap-2">
                <span>✈️</span> Traveling
              </h4>
              <p className="text-gray-700">
                Menjelajahi tempat baru itu selalu bikin excited! Dari pantai sampai gunung, dari kota besar 
                sampai desa kecil - setiap tempat punya cerita uniknya sendiri. Aku suka banget dokumentasiin 
                perjalanan lewat foto dan video!
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-pink-200 hover:shadow-md transition-shadow">
              <h4 className="text-pink-600 mb-2 flex items-center gap-2">
                <span>📷</span> Photography
              </h4>
              <p className="text-gray-700">
                Kamera adalah cara aku melihat dunia dengan perspektif berbeda. Dari street photography 
                sampai food photography, aku suka menangkap momen-momen spesial. Gear favorit: HP aku dan 
                kamera mirrorless yang nabung setahun buat beli!
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-orange-300">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Jakarta, Indonesia 🇮🇩</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}