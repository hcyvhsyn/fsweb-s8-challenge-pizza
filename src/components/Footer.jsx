import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="flex bg-[#292929] justify-around px-40 h-[500px] items-center">
          <div className="flex flex-col text-white  justify-center items-start gap-10">
            <img
              height={100}
              width={160}
              src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/footer/logo-footer.svg"
              alt=""
            />

            <address className="w-[400px] flex flex-col gap-7">
              <div className="flex gap-3">
                <img
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-1.png?raw=true"
                  alt=""
                />
                <p> 341 Londonderry Road, Istanbul Turkiye</p>
              </div>
              <div className="flex gap-3">
                <img
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-2.png?raw=true"
                  alt=""
                />
                <p> aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="flex gap-3">
                <img
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-3.png?raw=true"
                  alt=""
                />
                <p>+90 216 123 45 67</p>
              </div>
            </address>
          </div>
          <div className="text-white w-[200px]">
            <h5 className="font-bold">Sıcacık Menüler</h5>
            <p className="font-thin mt-7">Terminal Pizza</p>
            <p className="font-thin">5 Kişilik Hackathlon Pizza</p>
            <p className="font-thin">useEffect Tavuklu Pizza</p>
            <p className="font-thin">Beyaz Console Frosty</p>
            <p className="font-thin">Testler Geçtı Mutlu Burger</p>
            <p className="font-thin">Position Absolute Acı Pizza</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white">INSTAGRAM</h1>
            <div className="flex gap-2 rounded-3xl">
              <img
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-0.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-1.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-2.png?raw=true"
                alt=""
              />
            </div>
            <div className="flex gap-2 rounded-3xl">
              <img
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-3.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-4.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-5.png?raw=true"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-slate-800">
          <hr className="bg-white" />
          <p className="text-white ">2023 Teknolojik Yemekler</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
