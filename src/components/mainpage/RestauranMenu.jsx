const RestauranMenu = () => {
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

  return (
    <div className="flex justify-between mx-[400px] my-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center rounded-full p-2 w-[180px] cursor-pointer hover:bg-[#ce2829] hover:text-white"
        >
          <img src={item.img} alt={item.text} className="pr-4" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default RestauranMenu;
