// Import all member images
import President from "../assets/members/Diba Barua  (President).jpg";
import GeneralSecretary from "../assets/members/Bijoy Barua  (General Secretary).jpg";
import FinanceSecretary from "../assets/members/Ajoy Barua  (Finance Secretary).jpg";
import CulturalSecretary from "../assets/members/Anirudra dibbo  (Cultural Secretary).jpg";
import OfficeSecretary from "../assets/members/Dipu Barua Dip  (Office Secretary).jpg";
import PublicitySecretary from "../assets/members/Himel Chowdhury  (Publicity Secretary).jpg";
import VicePresident from "../assets/members/Joy Barua Lablu  (Vice President).jpg";
import AssociateOrganizingSecretary from "../assets/members/Javain Barua  (Associate Organizing Secretary).jpg";
import JointGeneralSecretary from "../assets/members/Nibir Mutsuddy  (Joint General Secretary).jpg";
import ReligiousSecretary from "../assets/members/Nishat Barua  (Religious and Literary Secretary).jpg";
import OrganizingSecretary from "../assets/members/Upama Barua  (Organizing Secretary).jpg";
import MemberSecretary from "../assets/members/Aditta Barua  (Member Secretary).jpg";
import Executive1 from "../assets/members/Abonti Barua  (Executive Member).jpg";
import Executive2 from "../assets/members/Aditya 2  (Executive Member).jpg";
import Executive3 from "../assets/members/Aditya 3  (Executive Member).jpg";
import Executive4 from "../assets/members/Anurudho Barua  (Executive Member).jpg";
import Executive5 from "../assets/members/Aniruddha Barua Dip  (Executive Member).jpg";
import Executive6 from "../assets/members/Dibya Barua  (Executive Member).jpg";
import Executive7 from "../assets/members/Joy  (Executive Member).jpg";
import Executive8 from "../assets/members/Justin Barua Shuvo  (Executive Member).jpg";

// Default avatar
import DefaultPic from "../assets/members/default.png";

const leader = [
  { name: "Diba Barua", position: "President", img: President },
  { name: "Joy Barua Lablu", position: "Vice President", img: VicePresident },
];

const secretarytop = [
  { name: "Bijoy Barua", position: "General Secretary", img: GeneralSecretary },
  {
    name: "Nibir Mutsuddy",
    position: "Joint General Secretary",
    img: JointGeneralSecretary,
  },
  {
    name: "Upama Barua",
    position: "Organizing Secretary",
    img: OrganizingSecretary,
  },
  {
    name: "Javain Barua",
    position: "Associate Organizing Secretary",
    img: AssociateOrganizingSecretary,
  },
  { name: "Ajoy Barua", position: "Finance Secretary", img: FinanceSecretary },
  {
    name: "Himel Chowdhury",
    position: "Publicity Secretary",
    img: PublicitySecretary,
  },
];
const secretary = [
  {
    name: "Nishat Barua",
    position: "Religious and Literary Secretary",
    img: ReligiousSecretary,
  },
  {
    name: "Dipu Barua Dip",
    position: "Office Secretary",
    img: OfficeSecretary,
  },
  {
    name: "Anirudra Dibbo",
    position: "Cultural Secretary",
    img: CulturalSecretary,
  },
  {
    name: "Aditta Barua",
    position: "Member Secretary",
    img: MemberSecretary,
  },
];
const teamdeveloper = [
  { name: "Aditya ", position: "Executive Member", img: Executive3 },
];
const team = [
  { name: "Aditya ", position: "Executive Member", img: Executive3 },
  { name: "Abonti Barua", position: "Executive Member", img: Executive1 },
  { name: "Aditya ", position: "Executive Member", img: Executive2 },
  { name: "Anurudho Barua", position: "Executive Member", img: Executive4 },
  {
    name: "Aniruddha Barua Dip",
    position: "Executive Member",
    img: Executive5,
  },
  { name: "Dibya Barua", position: "Executive Member", img: Executive6 },
  { name: "Joy", position: "Executive Member", img: Executive7 },
  { name: "Justin Barua Shuvo", position: "Executive Member", img: Executive8 },

  // Members without pics
  { name: "Sudipta Barua", position: "Executive Member", img: DefaultPic },
  { name: "Anurag", position: "Executive Member", img: DefaultPic },
  { name: "Tonmoy", position: "Executive Member", img: DefaultPic },
  { name: "Angsu", position: "Executive Member", img: DefaultPic },
  { name: "Ajhora Barua", position: "Executive Member", img: DefaultPic },
  { name: "Antor Barua", position: "Executive Member", img: DefaultPic },
  { name: "Paromita Barua", position: "Executive Member", img: DefaultPic },
];

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-24 px-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 mb-6 tracking-wide">
        Meet Our Team
      </h1>
      <div className="w-[80%] h-1 bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 mx-auto mb-16 rounded-full"></div>

      {/* Leaders Section */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-10 tracking-wide">
        President and Vice-President
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {leader.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-100"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {member.position}
            </p>
          </div>
        ))}
      </div>

      {/* Secretaries Section */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-10 tracking-wide">
        Secretaries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        {secretarytop.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4  border-blue-100"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {member.position}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {secretary.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-blue-100"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {member.position}
            </p>
          </div>
        ))}
      </div>

      {/* Members Section */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 mb-10 tracking-wide">
        Executive Members
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-yellow-100"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {member.position}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400  to-pink-500 mb-10 tracking-wide">
        Developer and Designer
      </h2>
      <div className="max-w-md mx-auto ">
        {teamdeveloper.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-pink-200"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{member.position}</p>
            <p className="text-center text-gray-600 text-sm mb-4">
              Hi 👋 I’m the developer and designer of this website. If you’re
              interested in building a modern, fast, and responsive website for
              your business or project, feel free to reach out!
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=adityakroy100@gmail.com"
              className="px-5 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-medium rounded-full shadow hover:opacity-90 transition"
            >
              Contact Me
            </a>

            <div className="flex space-x-6 mt-2">
              <a
                href="https://www.facebook.com/aditya.roy.678885"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition text-2xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/aditya_k__roy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
