import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          {" "}
          <p className="text-muted-foreground text-lg">Work Experience</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project) => (
              <SideProject
                key={project.title}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                date={project.date}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] gap-4 flex flex-col w-full">
        <Card className="p-4 flex-1">
          <p className="text-muted-foreground text-lg">Education</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-muted-foreground text-lg">Contact me</p>
          <ContactCard
            image="/img/pfp.JPG"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png"
            name="Gmail address"
            description="dorian.peltier777@gmail.com"
            url="https://mail.google.com/mail/?view=cm&fs=1&to=dorian.peltier777@gmail.com"
          />
          <ContactCard
            image="/img/pfp.JPG"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?20140125013055"
            name="Dorian Peltier"
            description="Newly graduated engineer open for work !"
            url="https://www.linkedin.com/in/dorian-peltier-47684624b/"
          />
        </Card>{" "}
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-640x400.png",
    title: "Projet personnel en JAVA",
    description:
      "Client account management app with JAVA, Swing for the interface, and SQL/phpMyAdmin for the database.",
    date: "October 2025",
    url: "#",
  },
  {
    Logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/m53aanqua9iz1q3pngsr",
    title: "Frontend developer",
    description:
      "Missions regarding frontend development for the company's apps (HTML/CSS/React/TailwindCSS/Cypress/Vite)",
    date: "February - July 2025",
    url: "https://vivadrive.io/",
  },
  {
    Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcvw89abCcFF1TOK6NelS-8w2LZ44Bo_W_A&s",
    title: "Fullstack developer",
    description: "Fullstack dev for Dashboard app for Fluid Topics",
    date: "June - October 2024",
    url: "https://www.fluidtopics.com/",
  },
  {
    Logo: "https://artifex-expert.fr/wp-content/uploads/2021/07/LOGONOM-investigations.jpg",
    title: "Python GUI developer",
    description: "Forensic analysis technician work and GUI in python.",
    date: "July - August 2023",
    url: "https://artifex-expert.fr/",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQGyt7eIk6rGbg/company-logo_200_200/company-logo_200_200/0/1639669532278/ecole_nationale_suprieure_delectronique_informatique_et_de_radiocommunications_de_bordeaux_logo?e=2147483647&v=beta&t=wpuZeWyl8okp2J4fGR3YMZ5PiRO-zvxdcfi7gxEzfxQ",
    title: "Enseirb-matmeca - Bordeaux INP - Bordeaux, France",
    role: "Engineering degree in Telecommunications specialized in software engineering/Diplôme d'ingénierie des Télécommunications spécialisées en génie logiciel.",
    date: "2025 - Present",
    url: "https://enseirb-matmeca.bordeaux-inp.fr/fr",
    freelance: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQStJMKMLtiDVfaWVk3lIGQpyL-Z1_3Oezha5pbK1Zw8Ot38CWnUOCqxaBRGh8QiG7Wfc&usqp=CAU",
    title:
      "Lycée Paul Cézanne - Aix-Marseille Université - Aix-en-Provence, France",
    role: "Prépa PCSI => PSI",
    date: "2022 - 2023",
    url: "http://univ-amu.fr/",
    freelance: false,
  },
]; //aller chercher les images sur linkedin par example les images sont là
