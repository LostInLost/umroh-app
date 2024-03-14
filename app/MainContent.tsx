'use client';
import { Button, Card, CardBody, CardHeader, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Input, Progress } from '@nextui-org/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faLocation, faPlaneDeparture, faSearch } from '@fortawesome/free-solid-svg-icons';
import image from '@/public/LandingPage/6e5baa5c68429e08b0efeecd28253b9d.jpeg';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
export default function MainContent() {
  const [locationKeys, setlocationKeys]: any = useState([]);
  const [timeKeys, setTimeKeys]: any = useState([]);
  const [feeKeys, setFeeKeys]: any = useState([]);
  const packets = [1, 2, 3, 4, 5];
  return (
    <section className="flex justify-center">
      <div className="container mx-auto my-3">
        <Card fullWidth>
          <CardBody>
            <div className="flex justify-between items-center gap-3">
              <div className="flex gap-3">
                <Dropdown>
                  <DropdownTrigger>
                    <Button>{locationKeys.length !== 0 ? locationKeys : 'Lokasi Keberangkatan'}</Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="flat" selectionMode="single" selectedKeys={locationKeys} onSelectionChange={setlocationKeys}>
                    <DropdownItem key={'jakarta'}>Jakarta</DropdownItem>
                    <DropdownItem key={'lamongan'}>Lamongan</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger>
                    <Button>{timeKeys.length !== 0 ? timeKeys : 'Waktu Keberangkatan'}</Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="flat" selectionMode="single" selectedKeys={timeKeys} onSelectionChange={setTimeKeys}>
                    <DropdownItem key={'Semua Waktu'}>Semua Waktu</DropdownItem>
                    <DropdownItem key={'Maret-2024'}>Maret-2024</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger>
                    <Button>{feeKeys.length !== 0 ? feeKeys : 'Biaya Umroh'}</Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={feeKeys} onSelectionChange={setFeeKeys}>
                    <DropdownItem key={'Semua Biaya'}>Semua Biaya</DropdownItem>
                    <DropdownItem key={'< 30 jt'}>{'< 30 jt'}</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <Input type={'search'} placeholder="Cari Paket..." className="w-[50rem]" />
              <Button color="primary" startContent={<FontAwesomeIcon icon={faSearch} />}>
                Cari Paket Umroh
              </Button>
            </div>
          </CardBody>
        </Card>

        <div className="packets my-3">
          <span>Paket dengan Keberangkatan Paling Awal</span>

          <div className="grid grid-cols-4 my-3 gap-5">
            {packets.map((i) => (
              <Card className="hover:cursor-pointer" isPressable shadow="md">
                <CardBody>
                  <div className="flex gap-3">
                    <Image src={`https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/${i}.jpg`} alt="tes image" className=" object-cover w-[150px] h-[100px]" />
                    <div className="flex flex-col w-full">
                      <span>TITLE PACKET Lorem ipsum dolor sit amet.....</span>
                      <Progress value={10 * i} maxValue={100} size="sm" label="Sisa Seat" showValueLabel valueLabel={10 * i + ' Seat'} />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/60">
                      <b className="text-black">Quad</b>, Sekamar ber-4
                    </span>
                    <span className="font-bold">Rp. 58.9jt</span>
                  </div>
                  <Divider className="my-1" />
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendar} /> 27 Mar 2024
                    </span>
                    <span className="flex items-center gap-2">
                      4 Star
                      <FontAwesomeIcon icon={faHotel} />
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faPlaneDeparture} />
                      Saudia
                    </span>
                    <span className="flex items-center gap-2">
                      12 Hari
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faLocation} />
                      Medan, 5+
                    </span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
