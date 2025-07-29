import React, { useEffect, useState } from 'react';
import SpinnerLoad from '../../components/SpinnerLoad';
import { getOrdersStatisticsService } from '../../services/orders';
import Card from './Card';

const initialCardObjects = [
    {
        id: 1,
        name: "carts",
        currentValue: "",
        title: "سبد خرید امروز",
        desc: "سبد های خرید مانده امروز",
        icon: "fas fa-shopping-basket",
        lastWeekValue: "",
        lastMonthValue: "",
    },
    {
        id: 2,
        name: "pendingOrders",
        currentValue: "",
        title: "سفارشات مانده امروز",
        desc: " سفارشات معلق و فاقد پرداختی",
        icon: "fas fa-dolly",
        lastWeekValue: "",
        lastMonthValue: "",
    },
    {
        id: 3,
        name: "successOrders",
        currentValue: "",
        title: "سفارشات امروز",
        desc: "سفارشات کامل و دارای پرداختی",
        icon: "fas fa-luggage-cart",
        lastWeekValue: "",
        lastMonthValue: "",
    },
    {
        id: 4,
        name: "successOrdersAmount",
        currentValue: "",
        title: "درآمد امروز",
        desc: "جمع مبالغ پرداختی (تومان)",
        icon: "fas fa-money-check-alt",
        lastWeekValue: "",
        lastMonthValue: "",
    },
];

const Cards = () => {
    const [cardInfos, setCardInfos] = useState(initialCardObjects);
    const [loading, setLoading] = useState(false);

    const handleGetCardInfos = async () => {
        setLoading(true);
        const res = await getOrdersStatisticsService();
        setLoading(false);
        if (res.status === 200) {
            const data = res.data.data;
            const updatedCards = initialCardObjects.map((card) => {
                const stats = data[card.name];
                return {
                    ...card,
                    currentValue: stats?.today ?? "",
                    lastWeekValue: stats?.thisWeek ?? "",
                    lastMonthValue: stats?.thisMonth ?? "",
                };
            });
            setCardInfos(updatedCards);
        }
    };

    useEffect(() => {
        handleGetCardInfos();
    }, []);

    return (
        <div className="row">
            {loading ? (
                <SpinnerLoad colorClass={"text-primary"} />
            ) : (
                cardInfos.map((cardInfo) => (
                    <Card key={cardInfo.id} {...cardInfo} />
                ))
            )}
        </div>
    );
};

export default Cards;
