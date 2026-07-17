import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import "./contact.css";
import { useTranslation } from "react-i18next";


export default function Contact(){

const {t} = useTranslation();

const [formData,setFormData] = useState({

    name:"",
    email:"",
    message:""

});


const handleChange=(e)=>{

    setFormData({

        ...formData,

        [e.target.name]:e.target.value

    });

};


const handleSubmit=(e)=>{

    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

};



return(

<section className="contact-section">


<div className="contact-container">



<div className="contact-content">


<span className="contact-tag">

{t("contact.tag")}

</span>


<h2>

{t("contact.title")}

</h2>


<p>

{t("contact.description")}

</p>



<div className="contact-info">


<div className="info-box">

<FaEnvelope/>

<span>
{t("contact.emailInfo")}
</span>

</div>



<div className="info-box">

<FaCommentDots/>

<span>
{t("contact.replyInfo")}
</span>

</div>


</div>


</div>






<div className="contact-form-card">


<form onSubmit={handleSubmit}>


{/* Name */}

<div className="contact-input-group">


<FaUser/>


<input

type="text"

name="name"

placeholder={t("contact.fullName")}

value={formData.name}

onChange={handleChange}

required

/>


</div>





{/* Email */}

<div className="contact-input-group">


<FaEnvelope/>


<input

type="email"

name="email"

placeholder={t("contact.email")}

value={formData.email}

onChange={handleChange}

required

/>


</div>





{/* Message */}

<div className="contact-input-group textarea-box">


<FaCommentDots/>


<textarea

name="message"

placeholder={t("contact.message")}

value={formData.message}

onChange={handleChange}

required

/>


</div>





<button 
className="contact-btn"
type="submit"
>

{t("contact.button")}

<FaPaperPlane/>

</button>


</form>


</div>



</div>


</section>


);

}