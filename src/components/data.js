import arrowUp from "../assets/ArrowRise.svg";
import arrowDown from "../assets/ArrowFall.svg"

export const commerceRevenueDetails = [
    {
        title: "Customers",
        count: 3781,
        percent: "+11.01%",
        image: 11.01 > 0 ? arrowUp : arrowDown,
        backgroundColor: "rgba(227, 245, 255, 1)"
    },
    {
        title: "Orders",
        count: 1219,
        percent: "-0.03%",
        image: -0.03 > 0 ? arrowUp : arrowDown,
        backgroundColor: "rgba(247, 249, 251, 1)"
    },
    {
        title: "Revenue",
        count: "$695",
        percent: "+15.03",
        image: 15.03 > 0 ? arrowUp : arrowDown,
        backgroundColor: "rgba(247, 249, 251, 1)"
    },
    {
        title: "Growth",
        count: "30.1%",
        percent: "+6.08",
        image: 6.08 > 0 ? arrowUp : arrowDown,
        backgroundColor: "rgba(229, 236, 246, 1)"
    }
]