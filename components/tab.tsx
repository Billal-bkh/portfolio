import { Dispatch, SetStateAction } from 'react';

const Tab = ({
  tab,
  setTab,
}: {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="w-full h-12 flex justify-center items-center gap-5">
      <p
        className={`lg:text-xl text-sm font-bold px-2 cursor-pointer h-8 lg:h-10 ${
          tab === 'lifestyle' ? 'border-b-4 border-[#FF3F3F]' : ''
        } `}
        onClick={() => setTab('lifestyle')}
      >
        LifeStyle
      </p>
      <p
        className={`lg:text-xl text-sm font-bold px-2 cursor-pointer h-8 lg:h-10 ${
          tab === 'products' ? 'border-b-4 border-[#FF3F3F]' : ''
        }`}
        onClick={() => setTab('products')}
      >
        Products
      </p>
      {/* <p
        className={`text-xl font-bold px-2 cursor-pointer h-10 ${
          tab === 'food' ? 'border-b-4 border-[#FF3F3F]' : ''
        } `}
        onClick={() => setTab('food')}
      >
        Food
      </p> */}
    </div>
  );
};

export default Tab;
