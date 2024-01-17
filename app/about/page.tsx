import { MdEmail, MdLocalPhone } from 'react-icons/md';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start gap-32 p-8 xl:p-24 font-sans lg:px-40 xl:px-72 pb-40">
      <div className="w-full h-auto flex flex-col justify-start items-start gap-10">
        <p className="xl:text-5xl text-xl font-bold border-b-4 border-[#FF3F3F]">
          About Me
        </p>
        <p className="xl:text-xl text-sm ">
          Expert Digital Marketing, excited to help companies expand their
          social media engagement responsible for developing, implementing, and
          managing digital marketing strategies to promote services and drive
          customer engagement, work closely or with marketing team to identify
          key target audiences, develop compelling online content, and optimize
          digital presence across various platforms.
        </p>
      </div>

      <div className="w-full h-auto flex flex-col justify-start items-start gap-10">
        <p className="xl:text-5xl text-xl font-bold border-b-4 border-[#FF3F3F]">
          Skills
        </p>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="xl:text-lg text-sm font-semibold">- Graphic design</p>
          <p className="xl:text-lg text-sm font-semibold">- Computer Skills</p>
          <p className="xl:text-lg text-sm font-semibold">
            - Microsoft Offices
          </p>
          <p className="xl:text-lg text-sm font-semibold">
            - Content Marketing
          </p>
          <p className="xl:text-lg text-sm font-semibold">
            - Digital Marketing
          </p>
          <p className="xl:text-lg text-sm font-semibold">
            - Social media Platforms
          </p>
          <p className="xl:text-lg text-sm font-semibold">- Photography</p>
          <p className="xl:text-lg text-sm font-semibold">
            - WordPress & Boggin
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col justify-start items-start gap-10">
        <p className="xl:text-5xl text-xl font-bold border-b-4 border-[#FF3F3F]">
          Work Experience
        </p>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
          <p className="xl:text-xl font-semibold">
            Digital Marketing & SMM 2023 - PRESENT: Freelancer
          </p>
          <div>
            <p className="xl:text-lg text-sm">
              - Managing social media accounts for clients .
            </p>
            <p className="xl:text-lg text-sm">
              - Increase traffic to website and Instagram.
            </p>
            <p className="xl:text-lg text-sm">
              - Making advertising campaigns for clients with Google Ads and
              Facebook Ads.
            </p>
            <p className="xl:text-lg text-sm">
              - Online Sales as Drop shipping & COD using Shopify and market.
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
          <p className="xl:text-xl   font-semibold">
            Digital Marketing Specialist 2023 - 2023: QQQ Media - Qatar
          </p>
          <div>
            <p className="xl:text-lg text-sm">
              - Planning, executing, and optimizing paid advertising campaigns
              on platforms like Facebook, Instagram etc and managing google SEM
              and SEO.
            </p>
            <p className="xl:text-lg text-sm">
              - Ensure integration of digital efforts into marketing campaigns.
            </p>
            <p className="xl:text-lg text-sm">
              - Managing a budget to be spent on promoting social media posts
              and PPC.
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
          <p className="xl:text-xl  font-semibold">
            Social Media Manager 2020 - 2022: Mobilis - Algeria
          </p>
          <div>
            <p className="xl:text-lg text-sm">
              - Creating content, including text posts, video and images for use
              on social media.
            </p>
            <p className="xl:text-lg text-sm">
              - Manage and oversee social media content.
            </p>
            <p className="xl:text-lg text-sm">
              - Building and fostering relationships with the audience,
              responding to comments/messages, and managing online communities.
            </p>
            <p className="xl:text-lg text-sm">
              - Working on managing subscriber accounts on the platform.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col justify-start items-start gap-10">
        <p className="xl:text-5xl text-xl font-bold border-b-4 border-[#FF3F3F]">
          Education
        </p>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
          <p className="xl:text-xl  font-semibold">
            High school of Business 2016 - 2021: Algeria
          </p>
          <p className="xl:text-lg text-sm">
            - Master in business administration
          </p>
        </div>
      </div>
      <div
        id="contact"
        className="w-full h-auto flex flex-col justify-start items-start gap-10"
      >
        <p className="xl:text-5xl text-xl font-bold border-b-4 border-[#FF3F3F]">
          Contact Me
        </p>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
          <div className="w-auto h-auto flex justify-start items-center gap-3">
            <MdLocalPhone className="w-6 h-6" />
            <p className="xl:text-lg text-sm">+974 5068 7136</p>
          </div>
          <div className="w-auto h-auto flex justify-start items-center gap-3">
            <MdEmail className="w-6 h-6" />
            <p className="xl:text-lg text-sm">billelbekhouche@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
