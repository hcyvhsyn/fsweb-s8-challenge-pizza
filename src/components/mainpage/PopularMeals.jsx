const PopularMeals = () => {
  return (
    <div className="flex justify-center pt-5 gap-3 ">
      <div className="bg-pizza-image bg-cover h-[29rem] w-[35rem] rounded-xl">
        <h3 className="text-white text-6xl pl-9 pt-5 w-5 font-sans">
          Özel Lezzetus
        </h3>
        <p className="text-white pl-10 pt-4">Position: Abolute Acı Pizza</p>
        <button className=" bg-white text-[#CE2829] m-8 p-3 rounded-full text-xs font-bold ">
          SİPARİŞ VER
        </button>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <div className="bg-burger-image bg-cover h-[14rem] w-[35rem] rounded-xl">
          <h3 className="text-white mt-8 ml-8 font-sans text-3xl w-[210px]">
            Hackathlon Burger Menü
          </h3>
          <button className="bg-white text-[#CE2829] m-7 p-3 rounded-full text-xs font-bold">
            SİPARİŞ VER
          </button>
        </div>
        <div className="bg-delivery-image bg-cover h-[14rem] w-[35rem] rounded-xl">
          <h3 className="text-black ml-8 mt-8 w-[220px] text-3xl font-sans">
            <span className="text-[#CE2829]">Çoooook</span> hızlı npm gibi kurye
          </h3>
          <button className="bg-white text-[#CE2829] m-7 p-3 rounded-full text-xs font-bold">
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularMeals;
