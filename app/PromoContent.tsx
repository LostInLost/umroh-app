import { Card, CardBody, Image } from '@nextui-org/react';
import React from 'react';

export default function PromoContent() {
  return (
    <section className="my-10 container mx-auto">
      <h1 className="text-center text-xl font-bold">Mengapa Pesan Paket Umroh di Umroh.ai</h1>
      <div className="flex justify-center w-1/2 mx-auto my-3">
        <Card className="">
          <CardBody>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col items-center">
                <Image src="https://www.umroh.com/jaminan.png" width={200} height={300} alt="Promo 1" />
                <span className="text-xl text-umroh-green font-bold text-center">Jaminan Berangkat dan Pembayaran Aman</span>
                <p className="text-center text-sm text-black/60">Dana aman 100% dan hanya kami bayarkan kepada biro umroh setelah anda mendapatkan Kode PNR Penerbangan.</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="https://www.umroh.com/fasilitas.png" width={200} height={300} alt="Promo 1" />
                <span className="text-xl text-umroh-green font-bold text-center">Fasilitas saat Ibadah Umroh</span>
                <p className="text-center text-sm text-black/60">Nikmati fasilitas seperti gratis biaya pembuatan atau perpanjangan Paspor, Internet Provider selama ibadah umroh.</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="https://www.umroh.com/promo.png" width={200} height={300} alt="Promo 1" />
                <span className="text-xl text-umroh-green font-bold text-center">Fitur Down Payment dan Cicilan Tanpa Bunga</span>
                <p className="text-center text-sm text-black/60">Anda dapat memesan paket umroh yang Anda inginkan dengan DP Rp.5.000.000, dilanjutkan dengan pelunasan pembayaran yang harus diselesaikan Sebulan sebelum keberangkatan</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="https://www.umroh.com/cicilan.png" width={200} height={300} alt="Promo 1" />
                <span className="text-xl text-umroh-green font-bold text-center">Jaminan Berangkat dan Pembayaran Aman</span>
                <p className="text-center text-sm text-black/60">Dana aman 100% dan hanya kami bayarkan kepada biro umroh setelah anda mendapatkan Kode PNR Penerbangan.</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
