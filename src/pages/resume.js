import Image from "next/image";
import resim from "/Users/yakupakyniyazov/Desktop/MyApps/pr6/public/resim.png";
import {
  BsTelephoneFill,
  BsTelephone,
  BsFlag,
  BsFlagFill,
  BsCalendar3WeekFill,
  BsCalendar3Week,
} from "react-icons/bs";
import {
  MdMail,
  MdOutlineEmail,
  MdSchool,
  MdOutlineSchool,
} from "react-icons/md";
import {
  HiMapPin,
  HiOutlineMapPin,
  HiOutlineGlobeEuropeAfrica,
  HiGlobeEuropeAfrica,
} from "react-icons/hi2";
import {
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { GiNinjaHead, GiGuitar } from "react-icons/gi";
import { BiBookReader } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { FaHackerrank } from "react-icons/fa";
import { TbDna } from "react-icons/tb";

const Resume = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <main>
        <section className="">
          <div className="flex justify-between">
            <div>
              <div className="flex justify">
                <h2 className="font-anton selection text-xl py-2 pr-10 text-cyan-500 md:text-2xl lg:text-4xl dark:text-cyan-300">
                  Yakup Akyniyazov
                </h2>
                <h3 className="text-l py-2 font-medium md:text-xl pt-3 lg:text-2xl dark:text-white">
                  WEB3 Full Stack Developer
                </h3>
              </div>
              <div>
                <ul>
                  <li className="flex py-2 ">
                    {darkMode ? (
                      <MdOutlineEmail className="pt-1 text-2xl text-white" />
                    ) : (
                      <MdMail className="pt-1 text-2xl" />
                    )}

                    <p className="pl-2 font-fira dark:text-white">
                      yakup.akinyaz@gmail.com
                    </p>
                  </li>
                  <li className="flex py-2">
                    {darkMode ? (
                      <BsTelephone className="pt-1 text-2xl text-white" />
                    ) : (
                      <BsTelephoneFill className="pt-1 text-2xl" />
                    )}

                    <p className="pl-2 font-fira dark:text-white">
                      +(90)5319440399
                    </p>
                  </li>
                  <li className="flex py-2">
                    {darkMode ? (
                      <BsFlag className="pt-1 text-2xl text-white" />
                    ) : (
                      <BsFlagFill className="pt-1 text-2xl" />
                    )}

                    <p className="pl-2 font-fira dark:text-white">
                      Turkmenistan
                    </p>
                  </li>
                  <li className="flex py-2">
                    {darkMode ? (
                      <BsCalendar3Week className="pt-1 text-2xl text-white" />
                    ) : (
                      <BsCalendar3WeekFill className="pt-1 text-2xl" />
                    )}

                    <p className="pl-2 font-fira dark:text-white">28/03/1999</p>
                  </li>
                  <li className="flex py-2">
                    {darkMode ? (
                      <HiOutlineMapPin className="pt-1 text-2xl text-white" />
                    ) : (
                      <HiMapPin className="pt-1 text-2xl" />
                    )}

                    <p className="pl-2 font-fira dark:text-white">
                      Hurriyet Dist Sedef str apt 27 no 6 Bahcelievler,
                      Istanbul, Turkey
                    </p>
                  </li>
                  <li className="text-3xl flex pt-3">
                    <a
                      href="https://www.linkedin.com/in/yakup-akiniyazov-5443b5210/"
                      className=""
                    >
                      <AiFillLinkedin />
                    </a>
                    <a a href="https://github.com/Karakter99" className="px-2">
                      <AiFillGithub />
                    </a>
                    <a a href="https://github.com/Karakter99" className="px-2">
                      <FaHackerrank />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src={resim}
                width={200}
                height={200}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="py-5">
            <div className="flex">
              <MdSchool className="text-5xl" />
              <h2 className="text-4xl px-5 font-anton text-teal-400">
                Education
              </h2>
            </div>
            <div>
              <ul>
                <li className="flex justify-between py-3">
                  <div>
                    <p className="font-bold dark:text-white">
                      Associate Degree{" "}
                    </p>
                    <p className="italic dark:text-white">
                      Istanbul University
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white">
                      09/2022 – 05/2024
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Istanbul, Turkey
                    </p>
                  </div>
                </li>
                <li className="flex justify-between py-3">
                  <div>
                    <p className="font-bold dark:text-white">
                      Bachelor degree -Computer education and Instructional
                      Technology (CEIT)
                    </p>
                    <p className="italic dark:text-white">
                      Istanbul University - Cerrahpasa
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Hasan Ali Yucel Faculty Of Education.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-800 dark:text-white">
                      09/2018 – 07/2022
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Istanbul, Turkey
                    </p>
                  </div>
                </li>

                <li className="flex justify-between py-3">
                  <div>
                    <p className="font-bold dark:text-white">High School</p>
                    <p className="italic dark:text-white">
                      Specialized Provincial Secondary Scholl Of The Town Mary
                      in Studying English and Humanities
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white">
                      09/2012 – 05/2017
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Mary, Turkmenistan
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-5">
            <div className="flex">
              <HiGlobeEuropeAfrica className="text-5xl" />
              <h2 className="text-4xl px-5 font-anton text-teal-400">
                Language
              </h2>
            </div>
            <div className="py-5">
              <div>
                <ul>
                  <li className="flex py-3">
                    <div className="w-1/2">
                      <p className="font-bold dark:text-white">English</p>
                      <p className="italic dark:text-white">IELTS</p>
                    </div>

                    <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1">
                      <div className=" h-1 bg-black dark:bg-white w-2/3 "></div>
                    </div>
                  </li>
                  <li className="flex py-3">
                    <div className="w-1/2">
                      <p className="font-bold dark:text-white">Turkish</p>
                      <p className="italic dark:text-white">
                        Kirklareli University
                      </p>
                    </div>

                    <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                      <div className=" h-1 bg-black dark:bg-white w-full "></div>
                    </div>
                  </li>
                  <li className="flex py-3">
                    <div className="w-1/2">
                      <p className="font-bold dark:text-white">Turkmen</p>
                      <p className="italic dark:text-white">Mother tongue</p>
                    </div>

                    <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1">
                      <div className=" h-1 bg-black dark:bg-white w-full "></div>
                    </div>
                  </li>
                  <li className="flex py-3">
                    <div className="w-1/2">
                      <p className="font-bold dark:text-white">Russian</p>
                    </div>

                    <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                      <div className=" h-1 bg-black dark:bg-white w-2/5 "></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="flex">
              <BiBookReader className="text-5xl" />
              <h2 className="text-4xl px-5 font-anton text-teal-400">
                Professional Experience
              </h2>
            </div>
            <div>
              <ul>
                <li className="flex justify-between py-3">
                  <div>
                    <p className="font-bold dark:text-white">Internship</p>
                    <p className="italic dark:text-white">
                      Aksaray Mahmudiye Middle Scholl
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Worked as a Teacher
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white">
                      02/2022 – 05/2022
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Istanbul, Turkey
                    </p>
                  </div>
                </li>
                <li className="flex justify-between py-3">
                  <div>
                    <p className="font-bold dark:text-white">Internship</p>
                    <p className="italic  dark:text-white">
                      Gazi Imam Hatip Middle Scholl
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Worked as a Teacher
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-800 dark:text-white">
                      09/2021 – 01/2022
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      Istanbul, Turkey
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-5">
            <div className="flex">
              <GrCertificate className="text-5xl" />
              <h3 className="text-4xl px-5 font-anton text-teal-400">
                Certificates
              </h3>
            </div>
            <div className="grid gap-x-72 grid-cols-2 py-5">
              <div className="">
                <p className="font-bold dark:text-white">
                  University of Michigan
                </p>
                <p className="italic dark:text-white">
                  Programming for Everybody(Getting started Python)
                </p>
              </div>
              <div className="">
                <p className="font-bold dark:text-white">Machine Learning</p>
                <p className="italic dark:text-white">Online Egitim Devi</p>
              </div>
              <div className="">
                <p className="font-bold dark:text-white">2.Bilisim Zirvesi</p>
                <p className="italic dark:text-white">Beykent University</p>
              </div>
              <div className="">
                <p className="font-bold dark:text-white">Back To Future</p>
                <p className="italic dark:text-white">
                  Istanbul University- Cerrahpasa
                </p>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="flex">
              <GiNinjaHead className="text-5xl" />
              <h2 className="text-4xl px-5 font-anton text-teal-400">Skills</h2>
            </div>
            <div>
              <ul className="grid gap-x-72 grid-cols-2 py-5">
                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">
                      NextJs(Javascript)
                    </p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1">
                    <div className=" h-1 bg-black   dark:bg-white w-1/2 "></div>
                  </div>
                </li>
                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">Tailwindcss</p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                    <div className=" h-1 bg-black dark:bg-white w-2/3 "></div>
                  </div>
                </li>
                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">Solidity</p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1">
                    <div className=" h-1 bg-black dark:bg-white w-1/2 "></div>
                  </div>
                </li>
                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">
                      AdobePremier Pro
                    </p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                    <div className=" h-1 bg-black dark:bg-white w-2/3 "></div>
                  </div>
                </li>

                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">
                      Adobe Illustrator
                    </p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                    <div className=" h-1 bg-black dark:bg-white w-3/5 "></div>
                  </div>
                </li>
                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">
                      Adobe After Effect
                    </p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                    <div className=" h-1 bg-black dark:bg-white w-1/2 "></div>
                  </div>
                </li>

                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">
                      Microsoft Office
                    </p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                    <div className=" h-1 bg-black dark:bg-white w-4/5 "></div>
                  </div>
                </li>

                <li className="flex py-3">
                  <div className="w-1/2">
                    <p className="font-bold dark:text-white">HTML / CSS</p>
                  </div>

                  <div className=" h-1 w-1/2 bg-neutral-200 dark:bg-neutral-600 mt-1 ">
                    <div className=" h-1 bg-black dark:bg-white  w-4/5 "></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-5">
            <div className="flex">
              <TbDna className="text-5xl" />
              <h2 className="text-4xl px-5 font-anton  text-teal-400">
                References{" "}
              </h2>
            </div>

            <div className="grid gap-x-72 grid-cols-2 ">
              <div>
                <p className="font-bold text-xl dark:text-white">
                  Assoc. Prof. Zerrin Ayvaz Reis{" "}
                </p>
                <p>
                  <span className="italic text-lg dark:text-white">
                    Istanbul University - Cerrahpasa
                  </span>
                </p>
                <div className="flex pr-5">
                  <MdMail className="text-2xl pt-1" />
                  <p className="dark:text-white"> ayvazzer@iuc.edu.tr</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-xl dark:text-white">
                  {" "}
                  Prof. Dr. Hulya Caliskan{" "}
                </p>

                <p>
                  <span className="italic text-lg dark:text-white">
                    Istanbul University - Cerrahpasa
                  </span>
                </p>
                <div className="flex pr-5 ">
                  <MdMail className="text-2xl pt-1" />
                  <p className="dark:text-white"> caliskan@iuc.edu.tr</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="flex">
              <GiGuitar className="text-5xl" />
              <h2 className="text-4xl px-5 font-anton text-teal-400">
                Interests{" "}
              </h2>
            </div>
            <div>
              <ul className="grid gap-x-72 grid-cols-3 py-5">
                <li className="border-solid border-2 border-black  m-4 text-center font-bold rounded-lg dark:text-white dark:border-white">
                  Coding
                </li>
                <li className="border-solid border-2 border-black  m-4 text-center font-bold rounded-lg dark:text-white dark:border-white">
                  Swimming
                </li>
                <li className="border-solid border-2 border-black  m-4 text-center font-bold rounded-lg dark:text-white dark:border-white">
                  Listening Music
                </li>
                <li className="border-solid border-2 border-black  m-4 text-center font-bold rounded-lg dark:text-white dark:border-white">
                  Table Tennis
                </li>
                <li className="border-solid border-2 border-black  m-4 text-center font-bold rounded-lg dark:text-white dark:border-white">
                  ManCity fan
                </li>
                <li className="border-solid border-2 border-black  m-4 text-center font-bold rounded-lg dark:text-white  dark:border-white">
                  Travelling
                </li>
                <li className="border-solid border-2 border-black  m-4 text-center font-bold rounded-lg dark:text-white dark:border-white">
                  Reading books
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Resume;
