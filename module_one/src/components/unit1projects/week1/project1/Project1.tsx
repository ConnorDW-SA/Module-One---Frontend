import React from "react";
import logo from "./assets/logo.png";
import focacca from "./assets/focacca.png";
import "./assets/Project1.css";
//
const Project1: React.FC = () => {
  return (
    <div className="project-one">
      <img className="img logo-img" src={logo} alt="logo" />
      <div className="header">Part of A SIMPLY FABULOUS THANKSGIVING</div>
      <h2 className="header-two">
        Focaccia with Caramelized Onions, <br />
        Cranberries, and Brie
      </h2>

      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="content-center text-left">
        <p>
          Wow your taste buds with this festive focaccia appetizer topped with
          sweet caramelized onions, tart <br />
          cranberries, and creamy brie. It will become your new favorite holiday
          starter!
        </p>
        <img className="focacca" src={focacca} alt="focacca" />
        <p className="span-grey">Image: Sally Vegas</p>

        <div className="featured">
          <span>FEATURED IN:</span>
          <br />
          <span>
            <a href="https://www.simplyrecipes.com/10-cranberry-recipes-that-go-beyond-sauce-5206174">
              Fresh Cranberry Recipes That Go Beyond Sauce
            </a>
          </span>
        </div>
        <h3 className="ingredients">Ingredients</h3>
        {/* ---------------------------------------------------------------------------------------------------- */}
        <h4>For the focaccia:</h4>
        <ul>
          <li>4 cups (500g) all-purpse flour</li>
          <li>1 1/2 teaspoons instant yeast</li>
          <li>1 1/2 teaspoons salt</li>
          <li>1 3/4 cups (350g) lukewarm water</li>
          <li>1/4 cup extra virgin olive oil, plus more for the pan</li>
        </ul>
        <h4>For the toppings:</h4>
        <ul>
          <li>3 medium yellow onions, thinly sliced</li>
          <li>1 tablespoon balsamic vinegar</li>
          <li>1-2 tablespoons olive oil, for brushing on top</li>
          <li>
            10 ounces brie, cut into cubes (scrape rind off with a paring knife
            if desired, though it's not <br />
            necessary)
          </li>
          <li>1 1/2 cups fresh or frozen cranberries</li>
        </ul>

        <h3 className="method-header">Method</h3>
        <div>
          <h4>1. Make the focaccia dough</h4>
          <p>
            In a medium-sized mixing bowl, or in a stand mixer with a paddle
            attachment, mix together all
            <br /> the dough ingredients until the flour is fully absorbed. You
            don't need to actually knead the <br />
            dough, though I sometimes knead it a few times in the bowl when
            mixing by hand to incorporate <br />
            the last of the flour...
          </p>
        </div>
        <p>
          Read more on{" "}
          <a
            className="last-link"
            href="https://www.simplyrecipes.com/10-cranberry-recipes-that-go-beyond-sauce-5206174"
          >
            Simply recipes
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project1;
