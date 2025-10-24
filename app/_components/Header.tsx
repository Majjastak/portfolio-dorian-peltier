/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { GithubIcon } from "./icons/Githubicon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 z-10 bg-secondary/90">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">dorian-peltier.com</h1>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <Link
            href={"https://github.com/Majjastak"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-11 p-0"
            )}
          >
            <GithubIcon size={16} className="text-foreground"></GithubIcon>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/dorian-peltier-47684624b/"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-11 p-0"
            )}
          >
            <LinkedInIcon size={16} className="text-foreground"></LinkedInIcon>
          </Link>
          <Link
            href={
              "https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage"
            }
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-11 p-3"
            )}
          >
            <div className="outline rounded-md ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgTK3GdbveFAt_Cf-y3nNTAMgvydyG_65nKdZr38Ie9BzaiGn_e-OepG7tSdMgzgP_r0&usqp=CAU"
                alt=""
              />
            </div>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
