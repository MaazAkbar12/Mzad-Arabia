import React, { useState } from 'react';
import './categories.css';
import { useTranslation } from "react-i18next";



const Categories = () => {
   const { t } = useTranslation();

  const data = [

    {
      title: t("categories.vehicles"),
      ads: "47400 ads",
      items: [
        {
          name: t("categoriesItems.cars"),
          img: "https://content.mzadqatar.com/cdn/cat/newDesign/fbpOkH7v0fCars.png"
        },
        {

                  

          name: t("categoriesItems.carShowrooms"),
          img: "https://content.mzadqatar.com/cdn/cat/newDesign/zSncmEeF4pCar showrooms.png"
        },
        {
          name: t("categoriesItems.carServices"),
          img: "https://content.mzadqatar.com/cdn/cat/newDesign/48u3Va3JQbCar%20Services.png"
        },
        {
          name: t("categoriesItems.spareParts"),
          img: "https://content.mzadqatar.com/cdn/cat/newDesign/U4QzJ5xGDNRent%20cars.png"
        },
        {
          name: t("categoriesItems.carRentals"),
          img: "https://content.mzadqatar.com/cdn/cat/newDesign/U4QzJ5xGDNRent%20cars.png"
        },
        {
          name: t("categoriesItems.motorcycles"),
          img: "https://content.mzadqatar.com/cdn/cat/newDesign/npnf6BmSexMotorcycles.png"
        }
      ]
    },


   {
  title: t("categories.jobs"),
  ads: "9635 ads",
  items: [
    {
      name: t("categoriesItems.jobVacancies"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/HCL9jSPlADJob%20Vacancies.png"
    },
    {
      name: t("categoriesItems.jobSeekers"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/trjjsJlDlLJob%20Seekers.png"
    },
    {
      name: t("categoriesItems.freelancers"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/GUtRjdiU5kFreelance.png"
    }
  ]
},

   {
  title: t("categories.realEstate"),
  ads: "32367 ads",
  items: [
    {
      name: t("categoriesItems.residentialSale"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/zhNSEIcN0tProperty.png"
    },
    {
      name: t("categoriesItems.lands"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/wvkBjKMTfeLands.png"
    },
    {
      name: t("categoriesItems.furniture"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/20wSB2w3nKFurniture.png"
    },
    {
      name: t("categoriesItems.residentialRent"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/4imer0Bgr3Properties%20for%20rent.png"
    },
    {
      name: t("categoriesItems.commercialSale"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/j4qpImEd2RCommercial%20properties%20for%20sale.png"
    },
    {
      name: t("categoriesItems.commercialRent"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/VLOdhg4iV6Commercial%20properties%20for%20rent.png"
    }
  ]
},


    {
  title: t("categories.electronics"),
  ads: "26497 ads",
  items: [
    {
      name: t("categoriesItems.mobiles"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/NyOAqze96IMobiles.png"
    },
    {
      name: t("categoriesItems.electronics"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/CpWgJlkaYZElectronics.png"
    },
    {
      name: t("categoriesItems.homeAppliances"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/6rKfMs2titHome%20Appliances.png"
    },
    {
      name: t("categoriesItems.cameraVideos"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/zdR5E8H0M9Camera%20&%20Videos.png"
    },
    {
      name: t("categoriesItems.electronicGames"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/VfLi0IwNdEElectronic%20games.png"
    }
  ]
},


    {
  title: t("categories.services"),
  ads: "200 ads",
  items: [
    {
      name: t("categoriesItems.airConditioners"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/pjFlqzy3rxAir%20Conditioner.png"
    },
    {
      name: t("categoriesItems.cleanServices"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/gHKaJofP47Cleaning%20services.png"
    },
    {
      name: t("categoriesItems.occasions"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/npFAnPRrBzOccasions.png"
    },
    {
      name: t("categoriesItems.construction"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/kF6vK2JO1uConstruction.png"
    },
    {
      name: t("categoriesItems.furnitureMoving"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/kfuCcsE154Move%20Furniture.png"
    },
    {
      name: t("categoriesItems.transportServices"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/2fDW8eUIQ2Transport%20SRV.png"
    },
    {
      name: t("categoriesItems.education"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/TdKeD2ZxyKEducation.png"
    },
    {
      name: t("categoriesItems.sellingProjects"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/K339gWIjgOSelling%20Projects.png"
    },
    {
      name: t("categoriesItems.maintenanceServices"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/cmLcLywwRuMaintenance%20services.png"
    },
    {
      name: t("categoriesItems.businessServices"),
      img: "https://content.mzadqatar.com/cdn/cat/newDesign/38Vobkcc9DCommercial%20Services.png"
    }
  ]
}

  ];

 
  const [rotateX,setRotateX]=useState(0);
  const [rotateY,setRotateY]=useState(0);
  const [activeCard,setActiveCard]=useState(null);


  const handleMouseMove=(e,index)=>{

    const box=e.currentTarget.getBoundingClientRect();

    const x=e.clientX-box.left-box.width/2;
    const y=e.clientY-box.top-box.height/2;


    setRotateX(-y/12);
    setRotateY(x/12);
    setActiveCard(index);

  };


  const handleMouseLeave=()=>{

    setRotateX(0);
    setRotateY(0);
    setActiveCard(null);

  };

  

return (

<div className="categories-container">

{
data.map((category,catIndex)=>(

<div className="category-section" key={catIndex}>


<div className="category-header">

<h2>{category.title}</h2>

<span className="ads-count">
{category.ads}
</span>

</div>



<div className="subcategory-grid">


{
category.items.map((item,index)=>{


const unique=`${catIndex}-${index}`;

const active=activeCard===unique;


return (

<div

key={index}

className={`
subcategory-card
${index%2===0 ? "large-card":"small-card"}
card-theme-${index%5}
`}


onMouseMove={(e)=>handleMouseMove(e,unique)}

onMouseLeave={handleMouseLeave}


style={{

transform:active

?

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`

:

"perspective(900px) rotateX(0) rotateY(0) scale(1)"

}}


>


<div className="card-content">

<span className="card-title">
{item.name}
</span>

</div>



<div className="card-image-wrapper">

<img

src={item.img}

alt={item.name}

className="card-image"

/>

</div>



</div>


)


})

}


</div>


</div>


))

}


</div>

)


}


export default Categories;