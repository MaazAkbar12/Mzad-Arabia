import "./Login.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Login() {

  const { t } = useTranslation();


  return (

    <section className="login-section">


      <div className="login-card">


        <h2>
          {t("login.title")}
        </h2>


        <p>
          {t("login.description")}
        </p>



        <form>


          <div className="input-group">


            <label>
              {t("login.emailLabel")}
            </label>


            <input

              type="email"

              placeholder={t("login.emailPlaceholder")}

            />


          </div>



          <button type="submit">

            {t("login.continue")}

          </button>



        </form>



        <div className="create-account">


          <span>
            {t("login.noAccount")}
          </span>


          <Link to="/register">

            {t("login.createAccount")}

          </Link>


        </div>



      </div>


    </section>

  );

}