/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import Image from "next/image";
import Link from "next/link";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-telugu text-5xl text-primary">Dorian Peltier</h2>
        <h3 className="font-telugu text-3xl">
          Software developer and Fullstack web developer
        </h3>
        <p className="text-base">
          In my last stretch of my studies in ENSEIRB-MATMECA, and having
          finished my end of studies internship at{" "}
          <Link href="https://vivadrive.io/">
            <Code>
              <img
                src="/img/vivadrivelogo.ico"
                alt="VIVADRIVE POLSKA"
                style={{ width: "auto", height: 15 }}
                className="mr-1"
              />

              <span className="">VIVADRIVE POLSKA</span>
            </Code>
          </Link>
          , in Warsaw, Poland, as a Frontend developer, I am now looking for new
          opportunities to apply my skills and grow as a developer by getting my
          first position as a <Code>Fullstack developer</Code>. Currently living
          in{" "}
          <Code>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png"
              alt="French flag"
              style={{ width: "auto", height: 15 }}
              className="mr-1"
            />{" "}
            France
          </Code>
          .
        </p>
      </div>
      <div className="flex-[2] relative w-15 h-90 max-md:m-auto ml-auto">
        <img
          src="/img/pfp.JPG"
          alt="Dorian Peltier"
          className="rounded-3xl object-cover"
        />
      </div>
    </Section>
  );
};
