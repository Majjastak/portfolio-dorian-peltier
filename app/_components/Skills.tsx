import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { OpenAILogo } from "./icons/OpenAILogo";
import { CypressLogo } from "./icons/CypressLogo";
import { Code } from "./Code";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working with...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-muted-foreground text-sm">
            I have the most experience with <Code>React</Code>, due to my last
            internship in Vivadrive for the end of my studies.
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <TailwindLogo size={42} className="" />
          <h3 className="text-2xl font-semibold tracking-tight">TailwindCSS</h3>
          <p className="text-muted-foreground text-sm">
            For styling, I can create <u>responsive</u> and <u>modern</u> user
            interfaces very quickly with <Code>TailwindCSS</Code>. I have most
            experience with it also due to my last internship in Vivadrive.
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <CypressLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            Cypress testing
          </h3>
          <p className="text-muted-foreground text-sm">
            I tested apps and wrote a documentation for Cypress for end-to-end
            testing of Vivadrive&#39;s web applications.
          </p>
        </div>
        <div className="flex flex-col gap-4  flex-1">
          <OpenAILogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            AI integration
          </h3>
          <p className="text-muted-foreground text-sm">
            I am familiar working with AI and AI integration for web apps.
          </p>
        </div>
      </div>
    </Section>
  );
};
