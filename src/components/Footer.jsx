import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
        <div className="footer-main-part">
          <div className="addres-main">
            <img
              src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/footer/logo-footer.svg"
              alt=""
            />

            <address>
              <div className="address-part">
                <img
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-1.png?raw=true"
                  alt=""
                />
                <p> 341 Londonderry Road, Istanbul Turkiye</p>
              </div>
              <div className="address-part">
                <img
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-2.png?raw=true"
                  alt=""
                />
                <p> aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="address-part">
                <img
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-3.png?raw=true"
                  alt=""
                />
                <p>+90 216 123 45 67</p>
              </div>
            </address>
          </div>
          <div className="menuler">
            <h5>Sıcacık Menüler</h5>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçtı Mutlu Burger</p>
            <p>Position Absolute Acı Pizza</p>
          </div>
          <div>
            <img
              className="instagram"
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
              alt=""
            />
            <div className="instagram-photos">
              <div className="instagram-mini-photos-1"></div>
              <div className="instagram-mini-photos-2"></div>
              <div className="instagram-mini-photos-3"></div>
            </div>
            <div className="instagram-photos">
              <div className="instagram-mini-photos-4"></div>
              <div className="instagram-mini-photos-5"></div>
              <div className="instagram-mini-photos-6"></div>
            </div>
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <hr style={{ color: "#5F5F5F" }}/>
          <p style={{ color: "#5F5F5F" }}>2023 Teknolojik Yemekler</p>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer
