/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export type SideProjectProps = {
  Logo: string;
  title: string;
  description: string;
  date: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center hover:bg-accent/50 transition-colors gap-2 p-2 rounded-md"
    >
      <img
        src={props.Logo}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div>
        <div className="text-lg font-semibold">{props.title}</div>
        <div className="text-muted-foreground">{props.description}</div>
      </div>
      <div className="ml-auto">
        <div className="text-xs text-end text-muted-foreground">
          {props.date}
        </div>
      </div>
    </Link>
  );
};
