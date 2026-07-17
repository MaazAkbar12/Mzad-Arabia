import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "./AdsCategories.css";

export default function AdsCategories({
  showAll,
  setShowAll,
}) {

 
 
 const { t } = useTranslation();
 
  return (

   

 
     
    
    <div className="category-dropdown-container">
  {/* Left Side Menu */}
  <div className="dropdown-left">
    <span className="left-panel-title">{t("header.categoriesOverview")}</span>
  </div>

  {/* Right Side Area - Scroll active automatically after clicking See All */}
  <div className={`dropdown-right ${showAll ? "is-scrollable" : ""}`}>
    
    {/* ================= CATEGORY 1: Commercial Properties for Rent (Hamesha dikhegi) ================= */}
    <div className="category-block">
      <div className="dropdown-right-header">
        <img 
      src="https://content.mzadqatar.com/cdn/cat/v4/menu/X6p3VY34OD.png" 
      className="category-icon desktoplogo" 
      alt="Category Icon"
      width="24"
      height="24"
    />
      
        <h3>{t("adsCategories.commercialRent")}</h3>
      </div>

      <div className="subcategories-grid">
        <div className="category-column">
          <a href="#admin-villas">{t("subcategories.adminVillas")}</a>
          <a href="#workers-house">{t("subcategories.workersHouse")}</a>
         
        </div>
        <div className="category-column">
           <a href="#building-towers">{t("subcategories.buildingTowers")}</a>
          <a href="#shops">{t("subcategories.commercialShops")}</a>
           
          </div>
           <div className="category-column">
        <a href="#office">{t("subcategories.workOffice")}</a>
          <a href="#stores">{t("subcategories.stores")}</a>
          
          {/* See All Button */}
          {!showAll && (
            <span className="see-all" onClick={() => setShowAll(true)} style={{ cursor: 'pointer' }}>
             {t("header.seeAll")}&gt;
            </span>
          )}
        </div>
      </div>
    </div>

    {/* ================= EXTRA CATEGORIES (Sirf Click ke baad dikhengi) ================= */}
    {showAll && (
      <>
        {/* ================= CATEGORY 2: Commercial Properties for Sale ================= */}
        <div className="category-block animation-fade-in">

          <div className="dropdown-right-header">

 <img
src="https://content.mzadqatar.com/cdn/cat/v4/menu/Uj8w4RbyCq.png"
className="category-icon desktoplogo"
alt="Category Icon"
width="24"
height="24"
/>

<h3>{t("adsCategories.commercialSale")}</h3>

</div>


<div className="subcategories-grid">

<div className="category-column">

<a href="#sale-admin-villas">
{t("subcategories.adminVillas")}
</a>

<a href="#sale-workers-house">
{t("subcategories.workersHouse")}
</a>

</div>


<div className="category-column">

<a href="#sale-building-towers">
{t("subcategories.buildingTowers")}
</a>

<a href="#sale-shops">
{t("subcategories.commercialShops")}
</a>

</div>


<div className="category-column">

<a href="#sale-office">
{t("subcategories.workOffice")}
</a>

<a href="#sale-stores">
{t("subcategories.stores")}
</a>

</div>


</div>

</div>
        {/* ================= CATEGORY 3: Residential Properties for Sale ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/propertyforrent.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
           <h3>
         {t("adsCategories.residentialSale")}
           </h3>
          </div>
          <div className="subcategories-grid">
            <div className="category-column">
              <a href="#res-apartments">{t("subcategories.buildingTowers")}</a>
              <a href="#res-villas">{t("subcategories.villas")}</a>
              
            </div>
            <div className="category-column">
              <a href="#res-studios"> {t("subcategories.appartments")}</a>
              <a href="#res-compound"> {t("subcategories.otherProperty")}</a>
            </div>
             <div className="category-column">
                 <a href="#res-compound"> {t("subcategories.traditionalHouses")}</a>
            </div>
          </div>
        </div>

        {/* ================= CATEGORY 4: Residential Properties for Rent ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/e6YCt2scXv.png" 
           className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.residentialRent")}</h3>
          </div>
          <div className="subcategories-grid">
            <div className="category-column">
              <a>{t("subcategories.buildingTowers")}</a>
              <a >{t("subcategories.villas")}</a>
               
            </div>
            <div className="category-column">
            <a>{t("subcategories.appartments")}</a>
              <a >{t("subcategories.otherProperty")}</a>
               
            </div>
             <div className="category-column">
            <a >{t("subcategories.traditionalHouses")}</a>
               
            </div>
          </div>
        </div>

        {/* ================= CATEGORY 5: Lands ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/land.png" 
           className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.lands")}</h3>
          </div>
          <div className="subcategories-grid">
            <div className="category-column">
           <a>
              {t("subcategories.residentialLand")}
             </a>

            <a>
            {t("subcategories.commercialLand")}
             </a>
                
            </div>
            <div className="category-column">
              <a>
              {t("subcategories.industrialLand")}
              </a>

             <a>
               {t("subcategories.otherLand")}
             </a>
            </div>
             <div className="category-column">
               <a>{t("subcategories.agriculturalLand")}</a>
            </div>
          </div>
        </div>

        {/* ================= CATEGORY 6: Furnitures ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/funiture.png" 
           className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.furniture")}</h3>
          </div>
          <div className="subcategories-grid">
            <div className="category-column">
              <a>
           {t("subcategories.sofasChairs")}
              </a>

<a>
{t("subcategories.bathroomEssentials")}
</a>

<a>
{t("subcategories.kitchenTableware")}
</a>

<a>
{t("subcategories.officeFurniture")}
</a>

<a>
{t("subcategories.outdoorFurniture")}
</a>
              
              
            </div>
            <div className="category-column">
                
              <a>
{t("subcategories.tvGamingFurniture")}
</a>

<a>
{t("subcategories.craftsDecor")}
</a>

<a>
{t("subcategories.rugsFlooring")}
</a>

<a>
{t("subcategories.cabinetsWardrobe")}
</a>
               
            </div>
             <div className="category-column">
                <a>
{t("subcategories.tables")}
</a>

<a>
{t("subcategories.lighting")}
</a>

<a>
{t("subcategories.textiles")}
</a>

<a>
{t("subcategories.rooms")}
</a>

<a>
{t("subcategories.bedsMattresses")}
</a>

<a>
{t("subcategories.otherFurniture")}
</a>
                    
            </div>
          </div>
        </div>

        {/* ================= CATEGORY 7: Cars Sell ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/newcars.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.carsell")}</h3>
          </div>
         <div className="subcategories-grid">
  {/* Column 1 */}
  <div className="category-column">
    <a href="#"> {t("subcategories.kia")}</a>
    <a href="#"> {t("subcategories.landRover")}</a>
    <a href="#"> {t("subcategories.honda")}</a>
    <a href="#"> {t("subcategories.jetour")}</a>
    <a href="#">{t("subcategories.hyundai")} </a>
    <a href="#"> {t("subcategories.jeep")}</a>
    <a href="#"> {t("subcategories.suzuki")}</a>
    <a href="#"> {t("subcategories.volkswagen")} </a>
   <a href="#"> {t("subcategories.dodge")}</a>
<a href="#"> {t("subcategories.porsche")}</a>
<a href="#"> {t("subcategories.xiaomi")}</a>
<a href="#"> {t("subcategories.mg")}</a>
<a href="#"> {t("subcategories.cadillac")}</a>
<a href="#"> {t("subcategories.audi")}</a>
<a href="#"> {t("subcategories.byd")}</a>
<a href="#"> {t("subcategories.infiniti")}</a>
<a href="#"> {t("subcategories.alpine")}</a>
<a href="#"> {t("subcategories.renault")}</a>
<a href="#"> {t("subcategories.mini")}</a>
<a href="#"> {t("subcategories.chery")}</a>
<a href="#"> {t("subcategories.lucid")}</a>
<a href="#"> {t("subcategories.mazda")}</a>
<a href="#"> {t("subcategories.geely")}</a>
<a href="#"> {t("subcategories.isuzu")}</a>
<a href="#"> {t("subcategories.gac")}</a>
<a href="#"> {t("subcategories.acura")}</a>
<a href="#"> {t("subcategories.changan")}</a>
<a href="#"> {t("subcategories.lynkCo")}</a>
<a href="#"> {t("subcategories.afeela")}</a>
<a href="#"> {t("subcategories.maxus")}</a>
<a href="#"> {t("subcategories.hummer")}</a>
<a href="#"> {t("subcategories.subaru")}</a>
<a href="#"> {t("subcategories.peugeot")}</a>
<a href="#"> {t("subcategories.jaguar")}</a>
<a href="#"> {t("subcategories.volvo")}</a>
<a href="#"> {t("subcategories.ktm")}</a>
<a href="#"> {t("subcategories.mclaren")}</a>
<a href="#"> {t("subcategories.lada")}</a>
<a href="#"> {t("subcategories.lancia")}</a>
<a href="#"> {t("subcategories.leapmotor")}</a>
<a href="#"> {t("subcategories.lykan")}</a>
<a href="#"> {t("subcategories.morgan")}</a>
<a href="#"> {t("subcategories.zeekr")}</a>
  </div>

  {/* Column 2 */}
  <div className="category-column">
   <a href="#">{t("subcategories.bentley")}</a>
<a href="#">{t("subcategories.fiat")}</a>
<a href="#">{t("subcategories.classicCars")}</a>
<a href="#">{t("subcategories.lotus")}</a>
<a href="#">{t("subcategories.greatWall")}</a>
<a href="#">{t("subcategories.foton")}</a>
<a href="#">{t("subcategories.datsun")}</a>
<a href="#">{t("subcategories.ashok")}</a>
<a href="#">{t("subcategories.borgward")}</a>
<a href="#">{t("subcategories.vanderhall")}</a>
<a href="#">{t("subcategories.baic")}</a>
<a href="#">{t("subcategories.genesis")}</a>
<a href="#">{t("subcategories.maybach")}</a>
<a href="#">{t("subcategories.tesla")}</a>
<a href="#">{t("subcategories.changanAuto")}</a>
<a href="#">{t("subcategories.cmc")}</a>
<a href="#">{t("subcategories.aero")}</a>
<a href="#">{t("subcategories.bestune")}</a>
<a href="#">{t("subcategories.dongfeng")}</a>
<a href="#">{t("subcategories.exeed")}</a>
<a href="#">{t("subcategories.factoryFive")}</a>
<a href="#">{t("subcategories.fisker")}</a>
<a href="#">{t("subcategories.force")}</a>
<a href="#">{t("subcategories.forthing")}</a>
<a href="#">{t("subcategories.dfsk")}</a>
<a href="#">{t("subcategories.haval")}</a>
<a href="#">{t("subcategories.hino")}</a>
<a href="#">{t("subcategories.hongqi")}</a>
<a href="#">{t("subcategories.international")}</a>
<a href="#">{t("subcategories.jinbei")}</a>
<a href="#">{t("subcategories.jmc")}</a>
<a href="#">{t("subcategories.ligier")}</a>
<a href="#">{t("subcategories.mahindra")}</a>
<a href="#">{t("subcategories.mercury")}</a>
<a href="#">{t("subcategories.omoda")}</a>
<a href="#">{t("subcategories.saab")}</a>
<a href="#">{t("subcategories.saicMaxus")}</a>
<a href="#">{t("subcategories.triumph")}</a>
<a href="#">{t("subcategories.panoz")}</a>
<a href="#">{t("subcategories.plymouth")}</a>
<a href="#">{t("subcategories.polaris")}</a>
<a href="#">{t("subcategories.polestar")}</a>
<a href="#">{t("subcategories.radical")}</a>
<a href="#">{t("subcategories.rariro")}</a>
<a href="#">{t("subcategories.rivian")}</a>
<a href="#">{t("subcategories.scania")}</a>
<a href="#">{t("subcategories.saturn")}</a>
<a href="#">{t("subcategories.studebaker")}</a>
<a href="#">{t("subcategories.nio")}</a>
  </div>

  {/* Column 3 */}
  <div className="category-column">
     <a href="#">{t("subcategories.wuling")}</a>
  <a href="#">{t("subcategories.yoyo")}</a>
  <a href="#">{t("subcategories.abarth")}</a>
  <a href="#">{t("subcategories.skoda")}</a>
  <a href="#">{t("subcategories.daihatsu")}</a>
  <a href="#">{t("subcategories.seat")}</a>
  <a href="#">{t("subcategories.citroen")}</a>
  <a href="#">{t("subcategories.tata")}</a>
  <a href="#">{t("subcategories.ssangYong")}</a>
  <a href="#">{t("subcategories.ferrari")}</a>
  <a href="#">{t("subcategories.rollsRoyce")}</a>
  <a href="#">{t("subcategories.astonMartin")}</a>
  <a href="#">{t("subcategories.bugatti")}</a>
  <a href="#">{t("subcategories.alfaRomeo")}</a>
  <a href="#">{t("subcategories.pontiac")}</a>
  <a href="#">{t("subcategories.buick")}</a>
  <a href="#">{t("subcategories.jac")}</a>
  <a href="#">{t("subcategories.kingLong")}</a>
  <a href="#">{t("subcategories.lamborghini")}</a>
  <a href="#">{t("subcategories.lincoln")}</a>
  <a href="#">{t("subcategories.maserati")}</a>
  <a href="#">{t("subcategories.smart")}</a>
  <a href="#">{t("subcategories.proton")}</a>
  <a href="#">{t("subcategories.ak")}</a>
  <a href="#">{t("subcategories.ariel")}</a>
  <a href="#">{t("subcategories.opel")}</a>
  <a href="#">{t("subcategories.austinHealey")}</a>
  <a href="#">{t("subcategories.dallara")}</a>
  <a href="#">{t("subcategories.domy")}</a>
  <a href="#">{t("subcategories.fuso")}</a>
  <a href="#">{t("subcategories.haima")}</a>
  <a href="#">{t("subcategories.higer")}</a>
  <a href="#">{t("subcategories.imperial")}</a>
  <a href="#">{t("subcategories.ineos")}</a>
  <a href="#">{t("subcategories.iveco")}</a>
  <a href="#">{t("subcategories.zxauto")}</a>
  <a href="#">{t("subcategories.jensen")}</a>
  <a href="#">{t("subcategories.koenigsegg")}</a>

  <a href="#">{t("subcategories.tvr")}</a>
  <a href="#">{t("subcategories.daewoo")}</a>
  <a href="#">{t("subcategories.wiesmann")}</a>
  <a href="#">{t("subcategories.yamaha")}</a>
  <a href="#">{t("subcategories.zimmer")}</a>
  <a href="#">{t("subcategories.zotye")}</a>
  <a href="#">{t("subcategories.avatr")}</a>
  <a href="#">{t("subcategories.kaiyi")}</a>
  <a href="#">{t("subcategories.cupra")}</a>
  <a href="#">{t("subcategories.tank")}</a>

  <a href="#">{t("subcategories.vinFast")}</a>
  <a href="#">{t("subcategories.pagani")}</a>
  <a href="#">{t("subcategories.otherCars")}</a>
  </div>
</div>
        </div>

        {/* ================= CATEGORY 8: Motorcycles ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/Motorcycle1.png" 
          className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.Motercycle")}</h3>
          </div>
         <div className="subcategories-grid">
  {/* Column 1 */}
  <div className="category-column">
     <a href="#">{t("subcategories.buggy")}</a>
  <a href="#">{t("subcategories.polaris")}</a>
  <a href="#">{t("subcategories.bmw")}</a>
  <a href="#">{t("subcategories.tgb")}</a>
  <a href="#">{t("subcategories.suzuki")}</a>
  <a href="#">{t("subcategories.kawasaki")}</a>
  <a href="#">{t("subcategories.harleyDavidson")}</a>
  <a href="#">{t("subcategories.honda")}</a>
  <a href="#">{t("subcategories.yamaha")}</a>
  <a href="#">{t("subcategories.ktm")}</a>
  <a href="#">{t("subcategories.ducati")}</a>
  <a href="#">{t("subcategories.canAm")}</a>
  </div>

  {/* Column 2 */}
  <div className="category-column">
     <a href="#">{t("subcategories.arcticCat")}</a>
  <a href="#">{t("subcategories.bigBearChoppers")}</a>
  <a href="#">{t("subcategories.mvAgusta")}</a>
  <a href="#">{t("subcategories.aprilia")}</a>
  <a href="#">{t("subcategories.bajaj")}</a>
  <a href="#">{t("subcategories.beta")}</a>
  <a href="#">{t("subcategories.gilera")}</a>
  <a href="#">{t("subcategories.hisun")}</a>
  <a href="#">{t("subcategories.piaggio")}</a>
  <a href="#">{t("subcategories.pitsterPro")}</a>
  <a href="#">{t("subcategories.royalEnfield")}</a>
  <a href="#">{t("subcategories.triumph")}</a>
  </div>

  {/* Column 3 */}
  <div className="category-column">
     <a href="#">{t("subcategories.tvs")}</a>
  <a href="#">{t("subcategories.vespa")}</a>
  <a href="#">{t("subcategories.cfmoto")}</a>
  <a href="#">{t("subcategories.indianMotorcycle")}</a>
  <a href="#">{t("subcategories.husqvarna")}</a>
  <a href="#">{t("subcategories.benelli")}</a>
  <a href="#">{t("subcategories.sym")}</a>
  <a href="#">{t("subcategories.zontes")}</a>
  <a href="#">{t("subcategories.voge")}</a>
  <a href="#">{t("subcategories.others")}</a>
  </div>
</div>
        </div>

        {/* ================= CATEGORY 9: Car Rental ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/EZXeDAlhJ5.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3> {t("adsCategories.carRental")}</h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
     <a href="#">{t("subcategories.toyota")}</a>
  <a href="#">{t("subcategories.nissan")}</a>
  <a href="#">{t("subcategories.chevrolet")}</a>
  <a href="#">{t("subcategories.mitsubishi")}</a>
  <a href="#">{t("subcategories.gmc")}</a>
  <a href="#">{t("subcategories.lexus")}</a>
  <a href="#">{t("subcategories.mercedes")}</a>
  <a href="#">{t("subcategories.bmw")}</a>
  <a href="#">{t("subcategories.ford")}</a>
  <a href="#">{t("subcategories.kia")}</a>
  <a href="#">{t("subcategories.landRover")}</a>
  <a href="#">{t("subcategories.honda")}</a>
  <a href="#">{t("subcategories.jetour")}</a>
  <a href="#">{t("subcategories.hyundai")}</a>
  <a href="#">{t("subcategories.jeep")}</a>
  <a href="#">{t("subcategories.suzuki")}</a>
  <a href="#">{t("subcategories.volkswagen")}</a>
  <a href="#">{t("subcategories.dodge")}</a>
  <a href="#">{t("subcategories.porsche")}</a>
  <a href="#">{t("subcategories.xiaomi")}</a>
  <a href="#">{t("subcategories.mg")}</a>
  <a href="#">{t("subcategories.cadillac")}</a>
  <a href="#">{t("subcategories.audi")}</a>
  <a href="#">{t("subcategories.byd")}</a>
  <a href="#">{t("subcategories.infiniti")}</a>
  <a href="#">{t("subcategories.alpine")}</a>
  <a href="#">{t("subcategories.renault")}</a>
  <a href="#">{t("subcategories.mini")}</a>
  <a href="#">{t("subcategories.chery")}</a>
  <a href="#">{t("subcategories.lucid")}</a>
  <a href="#">{t("subcategories.mazda")}</a>
  <a href="#">{t("subcategories.geely")}</a>
  <a href="#">{t("subcategories.isuzu")}</a>
  <a href="#">{t("subcategories.gac")}</a>
  <a href="#">{t("subcategories.acura")}</a>
  <a href="#">{t("subcategories.changan")}</a>
  <a href="#">{t("subcategories.lynkCo")}</a>
  <a href="#">{t("subcategories.afeela")}</a>
  <a href="#">{t("subcategories.maxus")}</a>
  <a href="#">{t("subcategories.hummer")}</a>
  <a href="#">{t("subcategories.faradayFuture")}</a>
  <a href="#">{t("subcategories.subaru")}</a>
  <a href="#">{t("subcategories.peugeot")}</a>
  <a href="#">{t("subcategories.roxMotor")}</a>
  <a href="#">{t("subcategories.jaguar")}</a>
  <a href="#">{t("subcategories.chrysler")}</a>
  <a href="#">{t("subcategories.volvo")}</a>
  <a href="#">{t("subcategories.bentley")}</a>
  <a href="#">{t("subcategories.fiat")}</a>
  <a href="#">{t("subcategories.classicCars")}</a>
  <a href="#">{t("subcategories.lotus")}</a>
  </div>

  {/* Column 2 */}
  <div className="category-column">
     <a href="#">{t("subcategories.greatWall")}</a>
  <a href="#">{t("subcategories.foton")}</a>
  <a href="#">{t("subcategories.datsun")}</a>
  <a href="#">{t("subcategories.ashok")}</a>
  <a href="#">{t("subcategories.borgward")}</a>
  <a href="#">{t("subcategories.vanderhall")}</a>
  <a href="#">{t("subcategories.baic")}</a>
  <a href="#">{t("subcategories.genesis")}</a>
  <a href="#">{t("subcategories.maybach")}</a>
  <a href="#">{t("subcategories.tesla")}</a>
  <a href="#">{t("subcategories.changanAuto")}</a>
  <a href="#">{t("subcategories.cmc")}</a>
  <a href="#">{t("subcategories.aero")}</a>
  <a href="#">{t("subcategories.bestune")}</a>
  <a href="#">{t("subcategories.dongfeng")}</a>
  <a href="#">{t("subcategories.exeed")}</a>
  <a href="#">{t("subcategories.factoryFive")}</a>
  <a href="#">{t("subcategories.fisker")}</a>
  <a href="#">{t("subcategories.force")}</a>
  <a href="#">{t("subcategories.forthing")}</a>
  <a href="#">{t("subcategories.dfsk")}</a>
  <a href="#">{t("subcategories.haval")}</a>
  <a href="#">{t("subcategories.hino")}</a>
  <a href="#">{t("subcategories.hongqi")}</a>
  <a href="#">{t("subcategories.international")}</a>
  <a href="#">{t("subcategories.jinbei")}</a>
  <a href="#">{t("subcategories.jmc")}</a>
  <a href="#">{t("subcategories.ligier")}</a>
  <a href="#">{t("subcategories.mahindra")}</a>
  <a href="#">{t("subcategories.mercury")}</a>
  <a href="#">{t("subcategories.omoda")}</a>
  <a href="#">{t("subcategories.saab")}</a>
  <a href="#">{t("subcategories.saicMaxus")}</a>
  <a href="#">{t("subcategories.triumph")}</a>
  <a href="#">{t("subcategories.wuling")}</a>
  <a href="#">{t("subcategories.yoyo")}</a>
  <a href="#">{t("subcategories.abarth")}</a>
  <a href="#">{t("subcategories.skoda")}</a>
  <a href="#">{t("subcategories.daihatsu")}</a>
  <a href="#">{t("subcategories.seat")}</a>
  <a href="#">{t("subcategories.citroen")}</a>
  <a href="#">{t("subcategories.tata")}</a>
  <a href="#">{t("subcategories.ssangYong")}</a>
  <a href="#">{t("subcategories.ferrari")}</a>
  <a href="#">{t("subcategories.rollsRoyce")}</a>
  <a href="#">{t("subcategories.astonMartin")}</a>
  <a href="#">{t("subcategories.bugatti")}</a>
  <a href="#">{t("subcategories.alfaRomeo")}</a>
  <a href="#">{t("subcategories.pontiac")}</a>
  <a href="#">{t("subcategories.buick")}</a>
  <a href="#">{t("subcategories.jac")}</a>
  </div>

  {/* Column 3 */}
  <div className="category-column">
     <a href="#">{t("subcategories.kingLong")}</a>
  <a href="#">{t("subcategories.lamborghini")}</a>
  <a href="#">{t("subcategories.lincoln")}</a>
  <a href="#">{t("subcategories.maserati")}</a>
  <a href="#">{t("subcategories.smart")}</a>
  <a href="#">{t("subcategories.proton")}</a>
  <a href="#">{t("subcategories.ak")}</a>
  <a href="#">{t("subcategories.ariel")}</a>
  <a href="#">{t("subcategories.opel")}</a>
  <a href="#">{t("subcategories.austinHealey")}</a>
  <a href="#">{t("subcategories.dallara")}</a>
  <a href="#">{t("subcategories.domy")}</a>
  <a href="#">{t("subcategories.fuso")}</a>
  <a href="#">{t("subcategories.haima")}</a>
  <a href="#">{t("subcategories.higer")}</a>
  <a href="#">{t("subcategories.imperial")}</a>
  <a href="#">{t("subcategories.ineos")}</a>
  <a href="#">{t("subcategories.iveco")}</a>
  <a href="#">{t("subcategories.zxauto")}</a>
  <a href="#">{t("subcategories.jensen")}</a>
  <a href="#">{t("subcategories.koenigsegg")}</a>
  <a href="#">{t("subcategories.ktm")}</a>
  <a href="#">{t("subcategories.mclaren")}</a>
  <a href="#">{t("subcategories.lada")}</a>
  <a href="#">{t("subcategories.lancia")}</a>
  <a href="#">{t("subcategories.leapmotor")}</a>
  <a href="#">{t("subcategories.lykan")}</a>
  <a href="#">{t("subcategories.mack")}</a>
  <a href="#">{t("subcategories.mitsuoka")}</a>
  <a href="#">{t("subcategories.morgan")}</a>
  <a href="#">{t("subcategories.nobleAutomotive")}</a>
  <a href="#">{t("subcategories.panoz")}</a>
  <a href="#">{t("subcategories.plymouth")}</a>
  <a href="#">{t("subcategories.polaris")}</a>
  <a href="#">{t("subcategories.polestar")}</a>
  <a href="#">{t("subcategories.radical")}</a>
  <a href="#">{t("subcategories.rariro")}</a>
  <a href="#">{t("subcategories.rivian")}</a>
  <a href="#">{t("subcategories.scania")}</a>
  <a href="#">{t("subcategories.saturn")}</a>
  <a href="#">{t("subcategories.studebaker")}</a>
  <a href="#">{t("subcategories.tvr")}</a>
  <a href="#">{t("subcategories.daewoo")}</a>
  <a href="#">{t("subcategories.wiesmann")}</a>
  <a href="#">{t("subcategories.yamaha")}</a>
  <a href="#">{t("subcategories.zimmer")}</a>
  <a href="#">{t("subcategories.zotye")}</a>
  <a href="#">{t("subcategories.avatr")}</a>
  <a href="#">{t("subcategories.kaiyi")}</a>
  <a href="#">{t("subcategories.cupra")}</a>
  <a href="#">{t("subcategories.tank")}</a>
  <a href="#">{t("subcategories.zeekr")}</a>
  <a href="#">{t("subcategories.nio")}</a>
  <a href="#">{t("subcategories.vinFast")}</a>
  <a href="#">{t("subcategories.pagani")}</a>
  <a href="#">{t("subcategories.otherCars")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 10: Car Services ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/nEukiuZBq9.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.carservices")}</h3>
          </div>
       <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
     <a href="#">{t("subcategories.towing")}</a>
  <a href="#">{t("subcategories.mechanicalService")}</a>
  <a href="#">{t("subcategories.electricalService")}</a>
  <a href="#">{t("subcategories.inspectionFahs")}</a>
  <a href="#">{t("subcategories.acCarService")}</a>
  <a href="#">{t("subcategories.batteryService")}</a>
  </div>

  {/* Column 2 */}
  <div className="category-column">
     <a href="#">{t("subcategories.tyresService")}</a>
  <a href="#">{t("subcategories.upholsteryAndTrim")}</a>
  <a href="#">{t("subcategories.paintingAndBodywork")}</a>
  <a href="#">{t("subcategories.tinting")}</a>
  <a href="#">{t("subcategories.carWashAndDetailing")}</a>
  </div>

  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.motorcycleService")}</a>
  <a href="#">{t("subcategories.evChargerService")}</a>
  <a href="#">{t("subcategories.clearance")}</a>
  <a href="#">{t("subcategories.vehicleTransportAndExport")}</a>
  <a href="#">{t("subcategories.otherVehicleServices")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 11: Air Conditioner ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
          <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/air_conditioner.png" 
          className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>  {t("adsCategories.Airconditioner")}</h3>
          </div>
          <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
  <a href="#">{t("subcategories.oryx")}</a>
  <a href="#">{t("subcategories.sharp")}</a>
  <a href="#">{t("subcategories.panasonic")}</a>
  <a href="#">{t("subcategories.carrier")}</a>
  <a href="#">{t("subcategories.midea")}</a>
  </div>

  {/* Column 2 */}
  <div className="category-column">
     <a href="#">{t("subcategories.hitachi")}</a>
  <a href="#">{t("subcategories.mitsubishiElectric")}</a>
  <a href="#">{t("subcategories.iqAir")}</a>
  <a href="#">{t("subcategories.daewoo")}</a>
  <a href="#">{t("subcategories.samsung")}</a>
  </div>

  {/* Column 3 */}
  <div className="category-column">
      <a href="#">{t("subcategories.gree")}</a>
  <a href="#">{t("subcategories.lg")}</a>
  <a href="#">{t("subcategories.general")}</a>
  <a href="#">{t("subcategories.other")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 12: Clean Services ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
          <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/uO9CutEKJS.webp" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.cleanServices")}</h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
<div className="category-column">
  <a href="#">{t("subcategories.housesCleaning")}</a>
  <a href="#">{t("subcategories.carpetsAndFurnishingsCleaning")}</a>
</div>

{/* Column 2 */}
<div className="category-column">
  <a href="#">{t("subcategories.waterTanksCleaning")}</a>
  <a href="#">{t("subcategories.swimmingPoolsCleaning")}</a>
</div>

{/* Column 3 */}
<div className="category-column">
  <a href="#">{t("subcategories.interfacesCleaning")}</a>
  <a href="#">{t("subcategories.finishingWasteCleaning")}</a>
</div>

</div>
        </div>

        {/* ================= CATEGORY 13: Occasions ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/occasions.png" 
           className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.occasions")}</h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
 <div className="category-column">
  <a href="#">{t("subcategories.sofasAndChairs")}</a>
  <a href="#">{t("subcategories.photographyAndDisplay")}</a>
  <a href="#">{t("subcategories.lightingAndLaser")}</a>
</div>

{/* Column 2 */}
<div className="category-column">
  <a href="#">{t("subcategories.decorations")}</a>
  <a href="#">{t("subcategories.hospitalitySrv")}</a>
</div>

{/* Column 3 */}
<div className="category-column">
  <a href="#">{t("subcategories.hallsAndTents")}</a>
  <a href="#">{t("subcategories.others")}</a>
</div>

</div>
        </div>

        {/* ================= CATEGORY 14: Construction ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/construction.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3> {t("adsCategories.constructions")}</h3>
          </div>
         <div className="subcategories-grid">

 <div className="category-column">
  <a href="#">{t("subcategories.buildingTools")}</a>
  <a href="#">{t("subcategories.marbleAndStone")}</a>
</div>

{/* Column 2 */}
<div className="category-column">
  <a href="#">{t("subcategories.engineeringAndDesign")}</a>
  <a href="#">{t("subcategories.buildingMaterials")}</a>
</div>

{/* Column 3 */}
<div className="category-column">
  <a href="#">{t("subcategories.buildingAndConstruction")}</a>
</div>
</div>
        </div>

        {/* ================= CATEGORY 15: Furniture Moving ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/move_furniture.png" 
           className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.Furnituremoving")} </h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
 <div className="category-column">
  <a href="#">{t("subcategories.moveOutsideArabia")}</a>
</div>

<div className="category-column">
  <a href="#">{t("subcategories.moveInsideArabia")}</a>
</div>

<div className="category-column">
  <a href="#">{t("subcategories.other")}</a>
</div>

</div>
        </div>

        {/* ================= CATEGORY 16: Transport Services ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
          <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/transportation_services.png" 
          className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3> {t("adsCategories.Transportservices")} </h3>
          </div>
          <div className="subcategories-grid">

 {/* Column 1 */}
    <div className="category-column">
      <a href="#">{t("subcategories.companiesTransport")}</a>
      <a href="#">{t("subcategories.womenTaxi")}</a>
    </div>


    {/* Column 2 */}
    <div className="category-column">
      <a href="#">{t("subcategories.studentsTransport")}</a>
    </div>


    {/* Column 3 */}
    <div className="category-column">
      <a href="#">{t("subcategories.individualTransport")}</a>
    </div>

</div>
        </div>

        {/* ================= CATEGORY 17: Spare Parts ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
         <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/wheel.png"
         className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("categories.sparpart")}</h3>
          </div>
          <div className="subcategories-grid">

  {/* Column 1 */}
<div className="category-column">
  <a href="#">{t("subcategories.brakes")}</a>
  <a href="#">{t("subcategories.coolingSystem")}</a>
  <a href="#">{t("subcategories.batteriesAccessories")}</a>
  <a href="#">{t("subcategories.transmissionGearing")}</a>
  <a href="#">{t("subcategories.oilsFluids")}</a>
  <a href="#">{t("subcategories.cables")}</a>
</div>


{/* Column 2 */}
<div className="category-column">
  <a href="#">{t("subcategories.glassesMirrors")}</a>
  <a href="#">{t("subcategories.interiorAccessories")}</a>
  <a href="#">{t("subcategories.filters")}</a>
  <a href="#">{t("subcategories.tyres")}</a>
  <a href="#">{t("subcategories.electricVehicleParts")}</a>
  <a href="#">{t("subcategories.exteriorSpares")}</a>
</div>


{/* Column 3 */}
<div className="category-column">
  <a href="#">{t("subcategories.lighting")}</a>
  <a href="#">{t("subcategories.rims")}</a>
  <a href="#">{t("subcategories.engines")}</a>
  <a href="#">{t("subcategories.workshops")}</a>
  <a href="#">{t("subcategories.otherParts")}</a>
</div>
</div>
        </div>

        {/* ================= CATEGORY 18: Decor and Interior Design ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/uAnAQFMHFb.png" 
           className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.DecorandInteriorDesign")}</h3>
          </div>
         <div className="subcategories-grid">

   {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.homeDecor")}</a>
    <a href="#">{t("subcategories.entranceDecor")}</a>
    <a href="#">{t("subcategories.outdoorDecor")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.wallpapers")}</a>
    <a href="#">{t("subcategories.gypsum")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.curtains")}</a>
    <a href="#">{t("subcategories.others")}</a>
  </div>
</div>
        </div>

        {/* ================= CATEGORY 19: Education ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
          <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/education.png" 
             className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.Education")}</h3>
          </div>
        <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.physics")}</a>
    <a href="#">{t("subcategories.computer")}</a>
    <a href="#">{t("subcategories.science")}</a>
    <a href="#">{t("subcategories.chemistry")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.islamicStudies")}</a>
    <a href="#">{t("subcategories.universityStudy")}</a>
    <a href="#">{t("subcategories.mathematics")}</a>
    <a href="#">{t("subcategories.englishLanguage")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.arabicLanguage")}</a>
    <a href="#">{t("subcategories.otherLanguages")}</a>
    <a href="#">{t("subcategories.otherEducation")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 20: Selling Project ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/MTiMCufBo5.png"
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.SellingProject")}</h3>
          </div>
         <div className="subcategories-grid">

   {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.agriculture")}</a>
    <a href="#">{t("subcategories.restaurantsCafes")}</a>
    <a href="#">{t("subcategories.industry")}</a>
    <a href="#">{t("subcategories.services")}</a>
    <a href="#">{t("subcategories.animalHusbandry")}</a>
    <a href="#">{t("subcategories.laundryShops")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.gyms")}</a>
    <a href="#">{t("subcategories.websitesMobileApps")}</a>
    <a href="#">{t("subcategories.jewelryShops")}</a>
    <a href="#">{t("subcategories.studios")}</a>
    <a href="#">{t("subcategories.salonSpa")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.bakeryKitchens")}</a>
    <a href="#">{t("subcategories.retailStores")}</a>
    <a href="#">{t("subcategories.tailor")}</a>
    <a href="#">{t("subcategories.hospitality")}</a>
    <a href="#">{t("subcategories.otherProjects")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 21: Business Services ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/Commercial_services2.png"
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.BusinessServices")}</h3>
          </div>
          <div className="subcategories-grid">

   {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.translationServices")}</a>
    <a href="#">{t("subcategories.clearingServices")}</a>
    <a href="#">{t("subcategories.companiesServices")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.proServices")}</a>
    <a href="#">{t("subcategories.accounting")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.companyFormation")}</a>
    <a href="#">{t("subcategories.otherServices")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 22: Maintenance Services ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/wV9sRMcdtq.webp" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.MaintenanceServices")}</h3>
          </div>
         <div className="subcategories-grid">
 {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.applianceRepairs")}</a>
    <a href="#">{t("subcategories.doorWindowMaintenance")}</a>
    <a href="#">{t("subcategories.handymanServices")}</a>
    <a href="#">{t("subcategories.sanitation")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.aluminumWorks")}</a>
    <a href="#">{t("subcategories.blacksmithWorks")}</a>
    <a href="#">{t("subcategories.plumbingServices")}</a>
    <a href="#">{t("subcategories.electricalServices")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.carpentry")}</a>
    <a href="#">{t("subcategories.paintingWorks")}</a>
    <a href="#">{t("subcategories.others")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 23: Electronics ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/el-fin.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.Electronics")}</h3>
          </div>
        <div className="subcategories-grid">

{/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.computers")}</a>
    <a href="#">{t("subcategories.laptops")}</a>
    <a href="#">{t("subcategories.printersInk")}</a>
    <a href="#">{t("subcategories.computerAccessories")}</a>
    <a href="#">{t("subcategories.laser")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.gpsDevices")}</a>
    <a href="#">{t("subcategories.drones")}</a>
    <a href="#">{t("subcategories.otherElectronics")}</a>
    <a href="#">{t("subcategories.smartHomeDevices")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.powerBanks")}</a>
    <a href="#">{t("subcategories.networking")}</a>
    <a href="#">{t("subcategories.externalStorage")}</a>
    <a href="#">{t("subcategories.projectors")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 24: Mobile ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/electronicsandmobiles.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.Mobile")}</h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.iphone")}</a>
    <a href="#">{t("subcategories.samsung")}</a>
    <a href="#">{t("subcategories.realme")}</a>
    <a href="#">{t("subcategories.xiaomi")}</a>
    <a href="#">{t("subcategories.huawei")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.ipad")}</a>
    <a href="#">{t("subcategories.androidTablets")}</a>
    <a href="#">{t("subcategories.otherAndroidMobiles")}</a>
    <a href="#">{t("subcategories.headphones")}</a>
    <a href="#">{t("subcategories.smartWatchesBands")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.googlePixel")}</a>
    <a href="#">{t("subcategories.nothingPhone")}</a>
    <a href="#">{t("subcategories.onePlus")}</a>
    <a href="#">{t("subcategories.others")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 25: Home Appliances ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/tnwVs1mnRu.png"
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.HomeAppliance")}</h3>
          </div>
         <div className="subcategories-grid">

    {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.dishwashersDryers")}</a>
    <a href="#">{t("subcategories.rangesOvensMicrowaves")}</a>
    <a href="#">{t("subcategories.refrigeratorsFreezers")}</a>
    <a href="#">{t("subcategories.kitchenAppliances")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.waterDispensersCoolers")}</a>
    <a href="#">{t("subcategories.vacuumCleaners")}</a>
    <a href="#">{t("subcategories.waterHeaters")}</a>
    <a href="#">{t("subcategories.washingMachinesDryers")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.partsAccessories")}</a>
    <a href="#">{t("subcategories.televisionsSatelliteAccessories")}</a>
    <a href="#">{t("subcategories.airFryers")}</a>
    <a href="#">{t("subcategories.otherAppliances")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 26: Job Vacancies ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
          <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/Jobs1.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.JobVacancies")}</h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.spaSaloon")}</a>
    <a href="#">{t("subcategories.salesRetail")}</a>
    <a href="#">{t("subcategories.mediaJournalism")}</a>
    <a href="#">{t("subcategories.customerService")}</a>
    <a href="#">{t("subcategories.hospitality")}</a>
    <a href="#">{t("subcategories.logistics")}</a>
    <a href="#">{t("subcategories.guardsSecurity")}</a>
    <a href="#">{t("subcategories.educationTraining")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.humanResources")}</a>
    <a href="#">{t("subcategories.industrialManufacturing")}</a>
    <a href="#">{t("subcategories.techniciansWorkers")}</a>
    <a href="#">{t("subcategories.nanny")}</a>
    <a href="#">{t("subcategories.legal")}</a>
    <a href="#">{t("subcategories.driversDelivery")}</a>
    <a href="#">{t("subcategories.healthcareNursing")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.designArt")}</a>
    <a href="#">{t("subcategories.administration")}</a>
    <a href="#">{t("subcategories.itTechnology")}</a>
    <a href="#">{t("subcategories.marketingPR")}</a>
    <a href="#">{t("subcategories.engineering")}</a>
    <a href="#">{t("subcategories.accountingFinance")}</a>
    <a href="#">{t("subcategories.otherBusinessJobs")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 27: Camera ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
          <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/camera_and_videos.png" 
           className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.cameras")}</h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.leica")}</a>
    <a href="#">{t("subcategories.fujiFilm")}</a>
    <a href="#">{t("subcategories.goPro")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.sony")}</a>
    <a href="#">{t("subcategories.nikon")}</a>
    <a href="#">{t("subcategories.canon")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.securityCameras")}</a>
    <a href="#">{t("subcategories.otherCameras")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 28: Electronic Games ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/games.png" 
                className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.ElectronicGame")}</h3>
          </div>
         <div className="subcategories-grid">
 {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.wiiDevices")}</a>
    <a href="#">{t("subcategories.wiiGames")}</a>
    <a href="#">{t("subcategories.xboxDevices")}</a>
    <a href="#">{t("subcategories.xboxGames")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.playstationDevices")}</a>
    <a href="#">{t("subcategories.playstationGames")}</a>
    <a href="#">{t("subcategories.nintendoSwitchDevices")}</a>
    <a href="#">{t("subcategories.nintendoSwitchGames")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.pcGaming")}</a>
    <a href="#">{t("subcategories.vrGaming")}</a>
    <a href="#">{t("subcategories.otherElectronicGames")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 29: Job Seeker ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
           <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/Y9026AoJ8z.png" 
            className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.JobSeekers")}</h3>
          </div>
         <div className="subcategories-grid">

  {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.spaSaloon")}</a>
    <a href="#">{t("subcategories.industrialManufacturing")}</a>
    <a href="#">{t("subcategories.humanResources")}</a>
    <a href="#">{t("subcategories.educationTraining")}</a>
    <a href="#">{t("subcategories.guardsSecurity")}</a>
    <a href="#">{t("subcategories.legal")}</a>
    <a href="#">{t("subcategories.nanny")}</a>
    <a href="#">{t("subcategories.logistics")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.itTechnology")}</a>
    <a href="#">{t("subcategories.healthcareNursing")}</a>
    <a href="#">{t("subcategories.designArt")}</a>
    <a href="#">{t("subcategories.driversDelivery")}</a>
    <a href="#">{t("subcategories.engineering")}</a>
    <a href="#">{t("subcategories.techniciansWorkers")}</a>
    <a href="#">{t("subcategories.hospitality")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.accountingFinance")}</a>
    <a href="#">{t("subcategories.administration")}</a>
    <a href="#">{t("subcategories.customerService")}</a>
    <a href="#">{t("subcategories.mediaJournalism")}</a>
    <a href="#">{t("subcategories.marketingPR")}</a>
    <a href="#">{t("subcategories.salesRetail")}</a>
    <a href="#">{t("subcategories.otherBusinessJobs")}</a>
  </div>

</div>
        </div>

        {/* ================= CATEGORY 30: Freelancers ================= */}
        <div className="category-block animation-fade-in">
          <div className="dropdown-right-header">
         <img data-v-129479ce="" src="https://content.mzadqatar.com/cdn/cat/v4/menu/VHWaqkSXnx.png" 
         className="category-icon desktoplogo" 
             alt="Category Icon"
              width="24"
              height="24"/>
            <h3>{t("adsCategories.Freelancer")}</h3>
          </div>
          <div className="subcategories-grid">

 {/* Column 1 */}
  <div className="category-column">
    <a href="#">{t("subcategories.onSite")}</a>
    <a href="#">{t("subcategories.graphicsDesign")}</a>
    <a href="#">{t("subcategories.digitalMarketing")}</a>
    <a href="#">{t("subcategories.writingTranslation")}</a>
  </div>


  {/* Column 2 */}
  <div className="category-column">
    <a href="#">{t("subcategories.videoAnimation")}</a>
    <a href="#">{t("subcategories.musicAudio")}</a>
    <a href="#">{t("subcategories.programmingTech")}</a>
    <a href="#">{t("subcategories.business")}</a>
  </div>


  {/* Column 3 */}
  <div className="category-column">
    <a href="#">{t("subcategories.lifestyle")}</a>
    <a href="#">{t("subcategories.photography")}</a>
    <a href="#">{t("subcategories.dataAnalytics")}</a>
  </div>

</div>
        </div>



        {/* ================= CATEGORY 32: Car Showrooms ================= */}
<div className="category-block animation-fade-in">
  <div className="dropdown-right-header">
    <img 
      data-v-129479ce="" 
      src="https://content.mzadqatar.com/cdn/cat/v4/menu/VHWaqkSXnx.png" /* Aap is URL ko apne icon URL se replace kar sakte hain */
      className="category-icon desktoplogo" 
      alt="Car Showrooms Icon"
      width="24"
      height="24"
    />
    <h3>{t("adsCategories.carShowrooms")}</h3>
  </div>
  <div className="subcategories-grid">

    {/* Column 1 */}
    <div className="category-column">
      <a href="#">{t("subcategories.newCars")}</a>
      <a href="#">{t("subcategories.usedCars")}</a>
      <a href="#">{t("subcategories.luxuryShowrooms")}</a>
      <a href="#">{t("subcategories.certifiedPreOwned")}</a>
    </div>

    {/* Column 2 */}
    <div className="category-column">
      <a href="#">{t("subcategories.vipShowrooms")}</a>
      <a href="#">{t("subcategories.premiumShowrooms")}</a>
      <a href="#">{t("subcategories.budgetShowrooms")}</a>
      <a href="#">{t("subcategories.commercialShowrooms")}</a>
    </div>

    {/* Column 3 */}
    <div className="category-column">
      <a href="#">{t("subcategories.importedCars")}</a>
      <a href="#">{t("subcategories.electricShowrooms")}</a>
      <a href="#">{t("subcategories.agencyShowrooms")}</a>
    </div>

  </div>
</div>
      </>
    )}

  </div>
</div>

  );

}