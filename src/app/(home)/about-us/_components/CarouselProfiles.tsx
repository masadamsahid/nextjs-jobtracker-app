import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image'; 

type Props = {}
const profiles = [
  { id: 1, name: 'Profile 1', image: '/gallery-3.png' },
  { id: 2, name: 'Profile 2', image: '/gallery.png' },
  { id: 3, name: 'Profile 3', image: '/gallery-2.png' },
  // Tambahkan lebih banyak profil sesuai kebutuhan
];
const CarouselProfils = (props: Props) => {
    
  return (
 <Carousel className="w-full block md:hidden max-w-xs">
      <CarouselContent>
        {profiles.map((profile) => (
          <CarouselItem key={profile.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* Menggunakan komponen Next.js Image untuk optimasi */}
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={200} // Tentukan lebar asli gambar
                    height={200} // Tentukan tinggi asli gambar
                    className="w-full h-full object-cover rounded-md" // Sesuaikan styling gambar
                  />
                  {/* Jika Anda ingin menampilkan nama atau info lainnya di bawah gambar */}
                  {/* <p className="text-center mt-2">{profile.name}</p> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselProfils