import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact Me</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        If you&#39;re interested, feel free to reach out!
      </h2>
      <div className="grid max-md:grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <ContactCard
          image="/img/pfp1rognéemaismieux.JPG"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png"
          name="My Email"
          description="Email me if you're interested."
          url="https://mail.google.com/mail/?view=cm&fs=1&to=dorian.peltier777@gmail.com"
        />
        <ContactCard
          image="/img/pfp1rognéemaismieux.JPG"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?20140125013055"
          name="My LinkedIn"
          description="DM my LinkedIn account."
          url="https://www.linkedin.com/in/dorian-peltier-47684624b/"
        />
        <ContactCard
          image="/img/pfp1rognéemaismieux.JPG"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s"
          name="My Facebook"
          description="DM my Facebook account."
          url="https://www.facebook.com/dorian.peltier.5/?locale=fr_FR"
        />
      </div>
    </Section>
  );
};
