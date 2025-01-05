import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import OrderTabPanel from "../OrderTabPanel/OrderTabPanel";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = [
    "offered",
    "salads",
    "pizzas",
    "soups",
    "desserts",
    "drinks",
  ];
  const { category } = useParams();
  const initialIndex = category ? categories.indexOf(category) : 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>takeEat - Order</title>
      </Helmet>
      <Cover
        img={orderCoverImg}
        title={"order now"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"text-center mb-10"}>
          <Tab>OFFERS</Tab>
          <Tab>SALADS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <OrderTabPanel items={offered} />
        </TabPanel>
        <TabPanel>
          <OrderTabPanel items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTabPanel items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTabPanel items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTabPanel items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTabPanel items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
