import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate, useParams } from "react-router-dom";

import { useAppSelector } from "../../store/store";
import "./index.scss";

export default function CategoryChoose() {
  const [category, setCategory] = useState("0");
  const categories = useAppSelector((state) => state.category.categories);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setCategory(id);
    }
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    const { value } = event.target;
    if (value !== "0") {
      navigate(`/products/${value}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="category-label"
          id="category-choose"
          value={category}
          label="Category"
          onChange={handleChange}
          variant={"filled"}
          className="category-select-box"
          fullWidth
        >
          <MenuItem value={"0"}>All Items</MenuItem>
          {categories && categories.length ? (
            categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))
          ) : (
            <></>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
