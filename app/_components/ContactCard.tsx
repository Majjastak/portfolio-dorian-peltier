/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  return (
    <Link
      href={props.url || "#"}
      target="_blank"
      className={cn("w-full", props.className)}
    >
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex flex-row items-center gap-4">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="max-w-15 max-h-15 w-auto h-15 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="absolute  w-6 h-6 -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-md font-semibold">{props.name}</p>
          </div>

          <p className="text-xs text-muted-foreground break-words">
            {props.description}
          </p>
        </div>

        <SquareArrowOutUpRight
          size={16}
          className="group-hover:h-5 group-hover:w-5 transition-all mr-4"
        />
      </Card>
    </Link>
  );
};
