import { useMemo } from "react";

import Gift from "images/icons/gift.svg";
import Agreement from "images/icons/agreement.svg";
import Alarm from "images/icons/alarm.svg";
import Badge from "images/icons/badge.svg";
import Basket from "images/icons/basket.svg";
import Basket2 from "images/icons/basket-2.svg";
import Bell from "images/icons/bell.svg";
import Briefcase from "images/icons/briefcase.svg";
import Building from "images/icons/building.svg";
import CallEnd from "images/icons/call-end.svg";
import Car from "images/icons/car.svg";
import Cup from "images/icons/cup.svg";
import Earphones from "images/icons/earphones.svg";
import Graduation from "images/icons/graduation.svg";
import Money from "images/icons/money.svg";
import Pets from "images/icons/pets.svg";
import Pig from "images/icons/pig.svg";
import Plane from "images/icons/plane.svg";
import Shirt from "images/icons/shirt.svg";
import Wallet from "images/icons/wallet.svg";
import Card from "images/icons/credit-card.svg";
import Card2 from "images/icons/credit-card2.svg";

export const IncomeList = [
  {
    id: 0,
    title: "Зарплата",
    icon: <Wallet />,
    budget: 100000,
    currency: "₴",
  },
  {
    id: 1,
    title: "Подарунки",
    icon: <Gift />,
    budget: 0,
    currency: "₴",
  },
  {
    id: 2,
    title: "Інше",
    icon: <Basket />,
    budget: 309.54,
    currency: "₴",
  },
  {
    id: 3,
    title: "Кешбек",
    icon: <Pig />,
    budget: 309.54,
    currency: "₴",
  },
];

export const BalanceList = [
  {
    id: 0,
    title: "Картка",
    icon: <Card />,
    budget: 10000,
    currency: "₴",
  },
  {
    id: 1,
    title: "Готівка",
    icon: <Wallet />,
    budget: 0,
    currency: "₴",
  },
];

export const ExpensesList = [
  {
    id: 0,
    title: "Продукти",
    icon: <Basket2 />,
    budget: 2000,
    currency: "₴",
  },
  {
    id: 1,
    title: "Подарунки",
    icon: <Basket2 />,
    budget: 0,
    currency: "₴",
  },
  {
    id: 2,
    title: "Машина",
    icon: <Car />,
    budget: 309.54,
    currency: "₴",
  },
  {
    id: 3,
    title: "Подорожи",
    icon: <Plane />,
    budget: 309.54,
    currency: "₴",
  },
];
