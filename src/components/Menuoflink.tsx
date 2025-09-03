

function Menuoflink({ list, links }: { list: string[], links?: string[] }) {
  console.log(links)
  return (
    <div
      className="   mt-2 w-60 rounded-xl overflow-hidden shadow-xl backdrop-blur-lg
       bg-white border border-gray-100  "
    >
      <div className="py-2">
        <div>
                  {list.map((ele,i) => {
                    return (<a
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#869006]/10 hover:text-[#869006] transition-colors duration-200 "
                      role="menuitem"
                      target=""
                      rel=""
                      href={links&&links[i]}
              >
            {ele}
              </a>)
    })}
        </div>
      </div>
    </div>
  );
}

export default Menuoflink