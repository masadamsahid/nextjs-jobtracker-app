import React from "react";


type Props = {};

const MemberProfiles = (props: Props) => {
  const profile = [
    {
      image: "/profile-adam.webp",
      name: "Maulana Adam Sahid",
      title: "Lead Frontend Developer",
    },
    {
      image: "/profile-noora.jpg",
      name: "Noora Aulia Hidayat",
      title: "Frontend Developer",
    },
    {
      image: "/profile-ariq.png",
      name: "Ariq Fikri Tamamy",
      title: "Frontend Developer",
    },
  ];
  return (
<div className="profile-container flex flex-wrap justify-center mt-[38px] gap-6 md:gap-12 lg:gap-24">
  {profile.map((profile) => (
    <div
      className="teams-profile flex flex-col items-center text-center w-[140px]"
      key={profile.name}
    >
      <img
        src={profile.image}
        alt="Profile Image"
        className="w-[140px] h-[140px] rounded-full object-cover"
      />
      <p className="font-bold text-sm mt-[26px]">{profile.name}</p>
      <p className="text-sm font-regular mt-[9px]">{profile.title}</p>
    </div>
  ))}
</div>
  );
};

export default MemberProfiles;
