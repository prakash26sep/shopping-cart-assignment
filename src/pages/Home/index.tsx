import { Fragment, useEffect } from "react";
import Carousel from "../../components/Carousel";
import { useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/store";
import { fetchBanners } from "../../store/features/bannerSlice";
import { fetchCategories } from "../../store/features/categorySlice";
import Category from "../../components/Categories";
import "./index.scss";

function Home() {
  const dispatch = useAppDispatch();
  const banners = useAppSelector((state) => state.banner.banners);
  const categories = useAppSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="container">
      <Carousel banners={banners} />

      {categories && categories.length ? (
        categories.map((category) => {
          if (category.enabled) {
            return (
              <Fragment key={category.key}>
                <Category
                  id={category.id}
                  imgURL={category.imageUrl}
                  title={category.name}
                  description={category.description}
                  buttonText={`Explore ${category.key}`}
                />
              </Fragment>
            );
          } else {
            return "";
          }
        })
      ) : (
        <div>No Categories found!</div>
      )}
    </div>
  );
}

export default Home;
