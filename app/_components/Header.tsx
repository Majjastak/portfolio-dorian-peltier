import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/Githubicon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">peltierdorian.com</h1>
        <div className="flex-1"></div>
        <ul>
          <Link
            href={"https://github.com/Majjastak"}
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground"></GithubIcon>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/dorian-peltier-47684624b/"}
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={16} className="text-foreground"></LinkedInIcon>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
