import { Card } from "./ui/card";
import Image from "next/image";


const achievemnts = [
  {
    title: "Jobs",
    logo: "/users.png",
    total: "10.7K+",
    subtitle: "have been tracked"
  },
  {
    title: "AI-Interviews",
    logo: "/users.png",
    total: "500+",
    subtitle: "have been done"
  },
  {
    title: "People",
    logo: "/users.png",
    total: "500+",
    subtitle: "land their dream jobs"
  },
];

const Achievement = () => {
  return (
    <section className="container mx-auto p-6">
      <div className="overflow-auto mx-auto no-scrollbar flex justify-center">
        <div className="w-fit flex gap-6 flex-col md:flex-row">
          {achievemnts.map((achievement, index) => (
            <Card key={index} className="card p-6 flex flex-col">
              <div className="flex justify-between gap-[206.5px] mt-[8px] text-[#16A249]">
                <p className="items-start text-sm font-medium">{achievement.title}</p>
                <Image className="items-center w-[16px] h-[16px]" src={achievement.logo} alt="Logo" width={16} height={16} style={{ objectFit: "contain" }} />
              </div>
              <div className="items-start">
                <p className="font-bold text-2xl">{achievement.total}</p>
              </div>
              <div className="items-start text-[#71717A]">
                <p className="text-xs">{achievement.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <hr className="mt-[41px]" />
    </section>
  )
}

export default Achievement;