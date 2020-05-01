import React from "react";
const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">O mnie</h2>
      <p className="about__text">
        Jestem absolwentem historii i edytorstwa na Uniwersytecie Jagiellońskim.
        Od kilku lat pracuję w branży wydawniczej. Projektuję okładki i layouty
        książek oraz czasopism, zajmuję się składem i przygotowaniem publikacji
        do druku. Specjalizuję się również w konwersji publikacji do formatów
        elektronicznych. Prowadzę ćwiczenia na UJ związane z tą tematyką.
      </p>
      <p className="about__text">
        Zajmuję się także projektowaniem grafiki reklamowej (druk i digital) dla
        różnorodnych branż. Potrafię przygotować banery do social mediów,
        koszulki, torby reklamowe, billboardy, reklamy prasowe, wizytówki oraz
        ulotki.
      </p>

      <p className="about__text">
        Ukończyłem studia podyplomowe z programowania aplikacji webowych na AGH.
        Zajmuję się projektowaniem, wdrażaniem oraz administrowaniem stron i
        sklepów internetowych. Pewniej czuję się we frontendzie, ale kwestie
        backendowe nie są mi obce.
      </p>
      <h2 className="about__title about__title--separate">Umiejętności</h2>
      <p className="about__text">
        <strong>Programy graficzne:</strong> InDesign, QuarkXPress, Photoshop,
        Illustrator, CorelDRAW, Premiere Pro.
      </p>
      <p className="about__text">
        <strong>Programowanie:</strong> HTML, CSS, Sass, BEM, JS, React, Npm,
        Webpack, Wordpress, Open Journal System.
      </p>
      <p className="about__text">
        <strong>Języki:</strong> angielski B2.
      </p>
    </div>
  );
};

export default About;
