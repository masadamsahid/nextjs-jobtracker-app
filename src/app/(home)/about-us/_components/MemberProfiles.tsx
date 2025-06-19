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
    <div className="profile-container flex flex-row justify-center items-center gap-[183px] mt-[38px]">
      {profile.map((profile) => (
        <div
          className="teams-profile flex flex-col text-center"
          key={profile.name}
        >
          <img
            src={profile.image}
            alt="Profile Image"
            className="w-[140px] h-[147px] rounded-full"
          />
          <p className="font-bold text-sm mt-[26px]">{profile.name}</p>
          <p className="text-sm font-regular mt-[9px]">{profile.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberProfiles;
