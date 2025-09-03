import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from "react-router";

type accordiontype = {
    title: string;
  list: string[];
  links?: string[], onLinkClick?: () => void;
};

export function AccordionDemo({ title, list ,links}: accordiontype) {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="group text-base sm:text-xl font-bold no-underline hover:no-underline relative after:content-[''] 
        after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-x-9  after:border-b-0
         after:border-solid after:border-black after:rotate-0 group-data-[state=open]:after:rotate-180 transition-transform 
         hover:text-greentxt hover:after:border-greentxt cursor-pointer
         "
          >
            {title}
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4 text-balance px-2 ">
            <ul className="px-4 py-2 border-r-greentxt  rtl:border-r-1 ltr:border-l-1">
              {list?.map((ele,i) => {
                return (
                  <li
                    key={ele}
                    className="flex items-center relative mb-5 last:mb-0"
                  >
                    <div className="w-[6px] h-[6px] rounded-xl bg-greentxt absolute rtl:right-[-19px] ltr:left-[-19px] z-3 top-3"></div>
                    <NavLink

                  
                      to={links?.[i] ?? "#"} 
                    
                      className="flex gap-1 items-center hover:text-greentxt cursor-pointer text-base no-underline text-gray-600"
                    >
                      {ele}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
}
