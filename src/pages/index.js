import Head from "next/head";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
//
import deved from "/public/dev-ed-wave.png";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";
import { useState } from "react";

import desing from "/public/design.png";
import code from "/public/code.png";
import consulting from "/public/consulting.png";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <>
      <div>
        <Head>
          <title>Yakup Akyniyazov Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section className="min-h-screen ">
            <div className="text-center py-10 px-20">
              <h2 className="font-anton selection text-5xl py-2 text-cyan-500 md:text-5xl lg:text-7xl dark:text-cyan-300">
                Yakup Akyniyazov
              </h2>
              <h3 className="text-xl py-2 font-medium md:text-2xl lg:text-4xl dark:text-white">
                Junior Data Analyst
              </h3>
              <p className="text-center px-10 text-gray-700 max-w-xl mx-auto  dark:text-white">
              I am a self-taught data analyst with a passion for continuous learning and growth. 
              Through dedication and self-motivation, I have honed my skills in data analysis and progressed to become a proficient machine learning engineer.
              I am committed to ongoing improvement and staying updated with the latest advancements in the field.
              </p>
            </div>
            <div className="flex text-5xl justify-center gap-12 text-gray-600 py-3  dark:text-white">
              <Link href="#" className="cursor-pointer">
                <AiFillTwitterCircle />
              </Link>
              <Link href="https://www.linkedin.com/in/yakup-akiniyazov-5443b5210/" className="cursor-pointer">
                <AiFillLinkedin />
              </Link>
              <Link href="https://www.youtube.com/@analist7608" className="cursor-pointer">
                <AiFillYoutube />
              </Link>
            </div>
            <div
              id="Image"
              className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:w-96 md:h-96"
            >
              <Image src={deved} fill className="object-cover" />
            </div>
          </section>
          <section>
            <div className="max-w-xl mx-auto text-center  dark:text-white">
              <h1 className="text-3xl py-5">Services that I offer</h1>
              <p className="text-md py-2  text-gray-800  dark:text-white">
                I offer from a wide range of services, data Analyzing,
                cleaning, visualizing and teaching.
              </p>
            </div>
            <div className="lg:flex lg:gap-10 md:flex md:gap-6  dark:text-white">
              <div className="text-center shadow-xl p-10 rounded-xl my-0">
                <Image
                  className="mx-auto"
                  src={desing}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Data Visualization{" "}
                </h3>
                <p className="py-2">
                  Creating elegant visualizations suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Coding languages: </h4>
                <p className="text-gray-800 py-1 dark:text-white">
                  Seaborn
                </p>
                <p className="text-gray-800 py-1 dark:text-white">PowerBI</p>
                <p className="text-gray-800 py-1 dark:text-white">
                  Matplotlib
                </p>
              </div>

              <div className="text-center shadow-xl p-10 rounded-xl my-0">
                <Image
                  className="mx-auto"
                  src={code}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Cleaning Data{" "}
                </h3>
                <p className="py-2">
                  Cleaning the messy data with magic
                </p>
                <h4 className="py-4 text-teal-600">Coding languages: </h4>
                <p className="text-gray-800 py-1 dark:text-white">
                  Pandas
                </p>
                <p className="text-gray-800 py-1 dark:text-white">
                  Numpy
                  </p>
                <p className="text-gray-800 py-1 dark:text-white">
                  PowerBI
                </p>
              </div>

              <div className="text-center shadow-xl p-10 rounded-xl my-0">
                <Image
                  className="mx-auto"
                  src={consulting}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Teaching{" "}
                </h3>
                <p className="py-2">
                  Teaching important informations about data analyst.
                </p>
                <h4 className="py-4 text-teal-600">Equipments I use: </h4>
                <p className="text-gray-800 py-1 dark:text-white">
                  Online Classes
                </p>
                <p className="text-gray-800 py-1 dark:text-white">Real Life Projects</p>
                <p className="text-gray-800 py-1 dark:text-white">
                  Helping with CV
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="dark:text-white text-center max-w-xl mx-auto">
              <h1 className="text-3xl py-5 ">Portofolio</h1>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  responsive
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  responsive
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  responsive
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  responsive
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  responsive
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  responsive
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
