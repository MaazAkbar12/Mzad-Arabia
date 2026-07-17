import "./Register.css";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";


export default function Register(){


const {t}=useTranslation();



return(


<section className="register-section">


<div className="register-card">



<h2>

{t("register.title")}

</h2>



<p>

{t("register.description")}

</p>




<form>



<div className="register-input-group">


<label>

{t("register.nameLabel")}

</label>


<input

type="text"

placeholder={t("register.namePlaceholder")}

/>


</div>





<div className="register-input-group">


<label>

{t("register.emailLabel")}

</label>


<input

type="email"

placeholder={t("register.emailPlaceholder")}

/>


</div>






<div className="register-input-group">


<label>

{t("register.passwordLabel")}

</label>


<input

type="password"

placeholder={t("register.passwordPlaceholder")}

/>


</div>






<button type="submit">

{t("register.button")}

</button>



</form>





<div className="login-link">


<span>

{t("register.haveAccount")}

</span>


<Link to="/login">

{t("register.login")}

</Link>


</div>




</div>


</section>


)

}