import { useEffect, useState } from "react";
import { getExampleCategories } from "../../connection/requests";
import { toast } from "react-hot-toast";

export default function Showcase() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getStartupData();
  }, []);

  const getStartupData = () => {
    getExampleCategories()
      .then((response) => setCategories(response.data.data))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="home__body__showcase-section__categories">
      <div className="home__body__showcase-section__categories__info">
        These are some of our categories :
      </div>
      <div className="home__body__showcase-section__categories__buttons">
        {categories.length === 0 ? (
          <p></p>
        ) : (
          categories.map((category) => {
            return (
              <button className="home__body__showcase-section__categories__buttons__category-button">
                {category.category_name}
              </button>
            );
          })
        )}
      </div>
      <div className="home__body__showcase-section__categories__showcase"></div>
    </div>
  );
}
