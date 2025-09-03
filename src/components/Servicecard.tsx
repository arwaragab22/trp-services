type servicecard = {
  title: string;
  desc: string;
  img: string;
  details: string
};
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useTranslation } from "react-i18next";

export default function Servicecard({
  title,
  desc,
  img,
  details,
}: servicecard) {
  console.log(title, desc, img);
  const {  i18n } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')
  return (
    <div className="p-6 flex flex-col items-center text-center h-full shadow-2xl cursor-pointer md:hover:scale-105 duration-100 border-1
     border-gray-300 border-solid">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <img alt="خدمات الاستضافة والسيرفرات" className="w-10 h-10" src={img} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{desc}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-[#869006] hover:text-[#a3ad07]  cursor-pointer font-bold capitalize border-2 border-solid border-gray-300 ">
            {i18n.language == "ar" ? " اكتشف المزيد" : "discover more"}
          </Button>
        </DialogTrigger>

        <DialogContent
          className="bg-white z-50 p-4 rounded-lg fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
         [&>button>svg]:w-6 [&>button>svg]:h-6 text-center    [&>button]:absolute [&>button]:top-3 [&>button]:rtl:right-[95%] 
         [&>button]:ltr:left-[90%]
         [&>svg]:m-auto 
"
        >
          <DialogHeader className="">
            {" "}
            <img
              alt="خدمات الاستضافة والسيرفرات"
              className="w-20 h-20 m-auto bg-gray-100  rounded-[50%] p-4"
              src={img}
            ></img>
            <DialogTitle className="p-3 flex flex-col items-center text-center h-full font-bold">
              {title}
            </DialogTitle>
            <DialogDescription className="text-base mb-3 text-center text-gray-600 ">
              {details}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

