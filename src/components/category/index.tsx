import React, { useEffect, useState } from 'react';
import { getCategoryList, Category } from '../../api/index';

const CategoryListComponent: React.FC = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  // console.log(categoryList);
  
  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const categoryListData = await getCategoryList();
        setCategoryList(categoryListData);
      } catch (error) {
        console.error('Error fetching category list:', error);
      }
    };

    fetchCategoryList();
  }, []);

  const categoryItems = categoryList.map((category) => (
    <li key={category.id}>
      {category.name}
    </li>
  ));

  return (
    <div className="container">
      <ul>
        {categoryItems}
      </ul>
    </div>
  );
};

export default CategoryListComponent;
