// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { Menu } from "lucide-react";
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { Card, CardDescription } from "./ui/card";

const testimonials = [
{
    name: 'Sofia Davis',
    time: '2 months ago',
    rating: 5.0,
    position: 'Software Engineer at ABC Company',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus cursus convallis. Proin eget nisl metus. Vivamus ac pharetra nibh, sed feugiat neque. Vivamus arcu dolor, ultrices commodo placerat at, vehicula eget ex. Ut et mollis urna. Aliquam vitae mattis purus, quis consectetur metus. Vivamus sed elit diam. Ut iaculis ex non odio ullamcorper, eu scelerisque sem tempus. Cras fermentum neque a mauris tempus elementum.',
},
{
    name: 'Budi Berbudi',
    time: '2 months ago',
    rating: 5.0,
    position: 'UI Designer at XYZ Inc.',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus cursus convallis. Proin eget nisl metus. Vivamus ac pharetra nibh, sed feugiat neque. Vivamus arcu dolor, ultrices commodo placerat at, vehicula eget ex. Ut et mollis urna. Aliquam vitae mattis purus, quis consectetur metus. Vivamus sed elit diam. Ut iaculis ex non odio ullamcorper, eu scelerisque sem tempus. Cras fermentum neque a mauris tempus elementum.',
},
{
    name: 'Budi Berbudi',
    time: '2 months ago',
    rating: 5.0,
    position: 'Software Engineer at ABC Company',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus cursus convallis. Proin eget nisl metus. Vivamus ac pharetra nibh, sed feugiat neque. Vivamus arcu dolor, ultrices commodo placerat at, vehicula eget ex. Ut et mollis urna. Aliquam vitae mattis purus, quis consectetur metus. Vivamus sed elit diam. Ut iaculis ex non odio ullamcorper, eu scelerisque sem tempus. Cras fermentum neque a mauris tempus elementum.',
},
  // tambahkan data testimonial lainnya di sini
];

const Testimonial = () => {
    return (
            <section id="testimonials" className="container mx-auto p-6">
                <div className="testimonial-header flex justify-center items-center mb-[53px] mt-[91px]">
                    <h1 className="font-semibold text-[48px]">What they say <span className="text-[#16A249]">about us?</span></h1>
                </div>
                <div className="overflow-auto mx-auto no-scrollbar">
                    <div className="w-fit flex gap-10">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="card p-6">
                                <div className="flex items-center gap-4 m-[24px]">
                                    <Image className="size-10" src="/Avatar.png" alt="avatar picture" width={40} height={40}/>
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-zinc-950">{testimonial.name}</p>
                                    <p className="text-sm text-zinc-500">{testimonial.time}</p>
                                </div>
                                    <p className="ml-auto text-xl font-medium size-fit">{testimonial.rating} ⭐</p>
                                </div>
                                    <p className="text-primary text-base font-semibold mb-[16px] ml-[24px] mr-[24px]">{testimonial.position}</p>
                                    <p className="text-zinc-500 text-sm ml-[24px] mr-[24px] mb-[24px]">
                                    {testimonial.testimonial}
                                    </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
    );
}

export default Testimonial;