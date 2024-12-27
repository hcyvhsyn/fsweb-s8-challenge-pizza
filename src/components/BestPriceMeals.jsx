const BestPriceMeals = () => {
  const menuItems = [
    {
      id: 1,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/1.svg",
      text: "YENİ! Kore",
    },
    {
      id: 2,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/2.svg",
      text: "Pizza",
    },
    {
      id: 3,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/3.svg",
      text: "Burger",
    },
    {
      id: 4,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/4.svg",
      text: "Kızartmalar",
    },
    {
      id: 5,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/5.svg",
      text: "Fast Food",
    },
    {
      id: 6,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/6.svg",
      text: "Gazlı İçecekler",
    },
  ];

  const foodData = [
    {
      image:
        "https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-1.png?raw=true",
      title: "Terminal Pizza",
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
    {
      image:
        "https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-2.png?raw=true",
      title: "Position Absolute Acı Pizza",
      rating: 4.9,
      reviews: 928,
      price: 85,
    },
    {
      image:
        "https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-3.png?raw=true",
      title: "Useeffect Tavuklu Burger",
      rating: 4.9,
      reviews: 462,
      price: 75,
    },
  ];

  
  return (
    <div className=" flex flex-col items-center text-center">
      <div className="mt-[9rem]">
        <p className="page-slogane font-[Satisfy] text-[#ce2829]">
          en çok paketlenen menüler
        </p>
        <p className="text-4xl font-bold mt-6">
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
      </div>
      <div className="flex justify-between mx-[390px] my-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center rounded-full ml-9 p-2 w-[190px] bg-white cursor-pointer "
          >
            <img src={item.img} alt={item.text} className="pr-2 " />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-[50px] mt-10">
        <div className="flex flex-col p-4 bg-white h-[480px] w-[400px]  rounded-3xl">
          <img
            className=""
            src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-1.png?raw=true"
            alt=""
          />
          <p className="flex text-start mt-4 font-bold text-xl">
            Terminal Pizza
          </p>
          <div className="flex justify-between mt-3">
            <p className="font-bold">4.9 </p>
            <p>(200)</p>
            <p className="font-bold">60TL</p>
          </div>
        </div>

        <div className="flex flex-col p-4 bg-white h-[480px] w-[400px]  rounded-3xl">
          <img
            className=""
            src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-2.png?raw=true"
            alt=""
          />
          <p className="flex text-start mt-4 font-bold text-xl">
            Position Absolute Acı Pizza
          </p>
          <div className="flex justify-between mt-3">
            <p className="font-bold">4.9 </p>
            <p>(928)</p>
            <p className="font-bold">85TL</p>
          </div>
        </div>

        <div className="flex flex-col p-4 bg-white h-[480px] w-[400px]  rounded-3xl">
          <img
            className=""
            src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-3.png?raw=true"
            alt=""
          />
          <p className="flex text-start mt-4 font-bold text-xl">
            Useeffect Tavuklu Burger
          </p>
          <div className="flex justify-between mt-3">
            <p className="font-bold">4.9 </p>
            <p>(462)</p>
            <p className="font-bold">75TL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPriceMeals;
