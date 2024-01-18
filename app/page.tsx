'use client';

import Image from 'next/image';
import { FiSend } from 'react-icons/fi';
import { CiLinkedin, CiInstagram } from 'react-icons/ci';
import Link from 'next/link';
import socials from '../constants/socials.json';
import products from '../constants/products.json';
import lifestyle from '../constants/lifestyle.json';
import Tab from '@/components/tab';
import { useState } from 'react';

export default function Home() {
  const [tab, setTab] = useState<string>('products');

  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-32 p-2 xl:p-24 font-sans xl:px-20 pb-40">
      <div className="w-full h-full flex flex-col-reverse gap-10 xl:gap-0 mt-10 xl:mt-0 xl:flex-row justify-center items-center">
        <div className="w-full xl:w-1/2 h-full flex flex-col justify-start items-start gap-2 px-12 md:px-32">
          <p className="xl:text-4xl text-xl font-bold">Hi!</p>
          <p className="xl:text-4xl text-xl font-bold">
            {"I'm"}{' '}
            <span className="bg-gradient-to-r from-[#FF3F3F] to-[#EBA352] bg-clip-text text-transparent">
              Billel Bekhouche
            </span>
          </p>
          <div className="w-full h-auto flex justify-center items-center gap-3">
            <div className="w-full h-1 xl:-H2 bg-[#FF3F3F]" />
            <p className="2xl:text-xl lg:text-sm text-xs whitespace-nowrap font-bold">
              Digital Marketing Specialist / Photographer
            </p>
          </div>
          <p className="text-[#B5B5B5] text-xs xl:text-sm">
            Expert Digital Marketing, excited to help companies expand their
            social media engagement responsible for developing, implementing,
            and managing digital marketing strategies to promote services and
            drive customer engagement, work closely or with marketing team to
            identify key target audiences, develop compelling online content,
            and optimize digital presence across various platforms.
          </p>
          <div className="w-full xl:h-28 h-auto p-2 mt-6 xl:mt-0 flex flex-col sm:flex-row justify-start items-center gap-3 xl:gap-10">
            <Link
              href="/about#contact"
              className="w-auto h-12 flex justify-center items-center gap-2 rounded-lg
            font-bold xl:text-xl text-lg bg-gradient-to-r from-[#FF3F3F] to-[#EBA352] px-5 whitespace-nowrap"
            >
              Hire Me
              <FiSend className="xl:w-6 w-5 xl:h-6 h-5" />
            </Link>
            <div className=" h-12 bg-gradient-to-r from-[#FF3F3F] to-[#EBA352] p-[2px] rounded-lg">
              <Link
                href="/#work"
                className="w-full h-full flex justify-center items-center  rounded-lg
            font-bold xl:text-xl text-lg bg-black px-5 whitespace-nowrap"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="w-auto h-auto flex flex-col justify-start items-start mt-10 xl:mt-0">
            <p className="xl:text-xl text-lg font-bold">Follow Me:</p>
            <div className="w-auto h-16 flex justify-start items-center gap-3">
              <Link
                href={
                  'https://www.instagram.com/billal.bkh.off?igsh=ZjBmZWFibDRuaXl1&utm_source=qr'
                }
                target="_blank"
              >
                <CiLinkedin className="w-10 h-10 cursor-pointer" />
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/in/billel-bekhouche?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                }
                target="_blank"
              >
                <CiInstagram className="w-10 h-10 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <div className="2xl:w-[600px] w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] 2xl:h-[600px] p-2 rounded-full border-4 border-[#FF3F3F]">
            <Image
              src={'/Profil.png'}
              alt="profile"
              width={100}
              height={100}
              unoptimized
              quality={100}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-start items-center gap-36 mt-10 xl:mt-72">
        <div className="w-full h-auto flex flex-col justify-start items-center gap-3">
          <p
            id="work"
            className="xl:text-4xl text-2xl font-bold border-b-4 border-[#FF3F3F]"
          >
            My Work
          </p>
          <p className="xl:text-2xl text-xl text-[#B5B5B5] ">
            Explore my Gallery
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center gap-20">
          <p className="font-bold xl:text-3xl text-xl">Social Media</p>
          <div className="w-full h-full flex flex-wrap justify-center items-start gap-5">
            {socials.map((pic) => {
              return (
                <div
                  key={pic.id}
                  className="w-40 h-40 xl:w-60 xl:h-60 overflow-hidden"
                >
                  <Image
                    key={pic.id}
                    src={pic.url}
                    alt={pic.url.replace('/social/', '')}
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                    className="w-full h-full rounded-lg object-cover cursor-pointer  hover:scale-110  duration-500 "
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center gap-20">
          <p className="font-bold xl:text-3xl text-xl">Photography</p>
          <div className="w-full h-16 flex flex-col justify-center items-center  gap-20">
            <Tab tab={tab} setTab={setTab} />
          </div>
          <div className="w-full h-full flex flex-wrap justify-center items-start gap-5">
            {tab === 'products' &&
              products.map((pic) => {
                return (
                  <div
                    key={pic.id}
                    className="w-40 h-40 xl:w-60 xl:h-60 overflow-hidden"
                  >
                    <Image
                      key={pic.id}
                      src={pic.url}
                      alt={pic.url.replace('/products/', '')}
                      width={100}
                      height={100}
                      quality={100}
                      unoptimized
                      className="w-full h-full rounded-lg object-cover cursor-pointer  hover:scale-110  duration-500 "
                    />
                  </div>
                );
              })}{' '}
            {tab === 'lifestyle' &&
              lifestyle.map((pic) => {
                return (
                  <div
                    key={pic.id}
                    className="w-40 h-40 xl:w-60 xl:h-60 overflow-hidden"
                  >
                    <Image
                      src={pic.url}
                      alt={pic.url.replace('/lifestyle/', '')}
                      width={100}
                      height={100}
                      quality={100}
                      unoptimized
                      className="w-full h-full rounded-lg object-cover cursor-pointer  hover:scale-110  duration-500 "
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
