import { Fragment, useEffect } from "react";
import Carousel from "../../components/Carousel";
import { useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/store";
import { fetchBanners } from "../../store/features/bannerSlice";
import { fetchCategories } from "../../store/features/categorySlice";
import Category from "../../components/Categories";
import "./index.scss";
import { Box } from "@mui/material";

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
      {banners && banners.length > 0 ? (
        <Carousel banners={banners} />
      ) : (
        <Box className="no-items-found">No Banners found</Box>
      )}

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
        <Box className="no-items-found">No Categories found</Box>
      )}
    </div>
  );
}

export default Home;
