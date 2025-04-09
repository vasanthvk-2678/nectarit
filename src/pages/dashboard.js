"use client"
import React, { useState, useEffect } from "react";
import { Card } from "../components/card";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';

import { FaBars, FaUserCircle, FaMoon } from 'react-icons/fa';

const OrderedSet = [
    {
        "Order_ID": 1001,
        "Customer_Name": "John Smith",
        "Customer_Phone": "555-1234",
        "Customer_Address": "123 Main St",
        "Items": [
            {
                "Item_Name": "Pepperoni Pizza",
                "Item_Price": 10.99,
                "Item_Type": "Food",
                "Quantity": 3,
                "Rating": "4",
                "Total_Price": 10.99
            },
            {
                "Item_Name": "Garlic Bread",
                "Item_Price": 5.99,
                "Quantity": 2,
                "Total_Price": 11.98
            },
            {
                "Item_Name": "Soft Drink",
                "Item_Price": 2.49,
                "Item_Type": "Beverage",
                "Quantity": 1,
                "Total_Price": 2.49
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Delivered",
        "Delivery_Person": "Sarah Johnson",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1002,
        "Customer_Name": "Alice Johnson",
        "Customer_Phone": "555-5678",
        "Customer_Address": "456 Elm St",
        "Items": [
            {
                "Item_Name": "Cheeseburger",
                "Item_Price": 8.99,
                "Quantity": 2,
                "Total_Price": 17.98
            },
            {
                "Item_Name": "French Fries",
                "Item_Price": 3.99,
                "Quantity": 1,
                "Total_Price": 3.99
            },
            {
                "Item_Name": "Milkshake",
                "Item_Price": 4.99,
                "Quantity": 1,
                "Total_Price": 4.99
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "In Transit",
        "Delivery_Person": "David Lee",
        "Delivery_Status": "In Transit"
    },
    {
        "Order_ID": 1003,
        "Customer_Name": "Emily Brown",
        "Customer_Phone": "555-9101",
        "Customer_Address": "789 Pine St",
        "Items": [
            {
                "Item_Name": "California Roll",
                "Item_Price": 12.99,
                "Quantity": 3,
                "Total_Price": 38.97
            },
            {
                "Item_Name": "Edamame",
                "Item_Price": 4.99,
                "Quantity": 1,
                "Total_Price": 4.99
            },
            {
                "Item_Name": "Green Tea",
                "Item_Price": 1.99,
                "Quantity": 2,
                "Total_Price": 3.98
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Pending",
        "Delivery_Person": "",
        "Delivery_Status": ""
    },
    {
        "Order_ID": 1004,
        "Customer_Name": "Michael Davis",
        "Customer_Phone": "555-2468",
        "Customer_Address": "246 Oak St",
        "Items": [
            {
                "Item_Name": "Margherita Pizza",
                "Item_Price": 11.99,
                "Quantity": 1,
                "Total_Price": 11.99
            },
            {
                "Item_Name": "Caesar Salad",
                "Item_Price": 7.99,
                "Quantity": 1,
                "Total_Price": 7.99
            },
            {
                "Item_Name": "Iced Tea",
                "Item_Price": 2.49,
                "Quantity": 2,
                "Total_Price": 4.98
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "Delivered",
        "Delivery_Person": "Emily Parker",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1005,
        "Customer_Name": "Sophia Wilson",
        "Customer_Phone": "555-1357",
        "Customer_Address": "357 Maple St",
        "Items": [
            {
                "Item_Name": "Chicken Tikka Masala",
                "Item_Price": 13.99,
                "Quantity": 2,
                "Total_Price": 27.98
            },
            {
                "Item_Name": "Naan Bread",
                "Item_Price": 3.49,
                "Quantity": 3,
                "Total_Price": 10.47
            },
            {
                "Item_Name": "Rice Pilaf",
                "Item_Price": 4.99,
                "Quantity": 2,
                "Total_Price": 9.98
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "In Transit",
        "Delivery_Person": "James Smith",
        "Delivery_Status": "In Transit"
    },
    {
        "Order_ID": 1006,
        "Customer_Name": "Emma Thompson",
        "Customer_Phone": "555-3698",
        "Customer_Address": "369 Pine St",
        "Items": [
            {
                "Item_Name": "Spaghetti Carbonara",
                "Item_Price": 12.99,
                "Quantity": 1,
                "Total_Price": 12.99
            },
            {
                "Item_Name": "Garlic Bread",
                "Item_Price": 5.99,
                "Quantity": 2,
                "Total_Price": 11.98
            },
            {
                "Item_Name": "Tiramisu",
                "Item_Price": 6.99,
                "Quantity": 1,
                "Total_Price": 6.99
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "Delivered",
        "Delivery_Person": "Sarah Johnson",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1007,
        "Customer_Name": "Oliver Brown",
        "Customer_Phone": "555-2468",
        "Customer_Address": "468 Oak St",
        "Items": [
            {
                "Item_Name": "Double Cheeseburger",
                "Item_Price": 9.99,
                "Quantity": 2,
                "Total_Price": 19.98
            },
            {
                "Item_Name": "Onion Rings",
                "Item_Price": 4.49,
                "Quantity": 1,
                "Total_Price": 4.49
            },
            {
                "Item_Name": "Soda",
                "Item_Price": 1.99,
                "Quantity": 3,
                "Total_Price": 5.97
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Delivered",
        "Delivery_Person": "David Lee",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1008,
        "Customer_Name": "Isabella Garcia",
        "Customer_Phone": "555-7890",
        "Customer_Address": "789 Elm St",
        "Items": [
            {
                "Item_Name": "Fish and Chips",
                "Item_Price": 14.99,
                "Quantity": 1,
                "Total_Price": 14.99
            },
            {
                "Item_Name": "Cole Slaw",
                "Item_Price": 2.99,
                "Quantity": 1,
                "Total_Price": 2.99
            },
            {
                "Item_Name": "Lemonade",
                "Item_Price": 2.49,
                "Quantity": 2,
                "Total_Price": 4.98
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "In Transit",
        "Delivery_Person": "Emily Parker",
        "Delivery_Status": "In Transit"
    },
    {
        "Order_ID": 1009,
        "Customer_Name": "Liam Wilson",
        "Customer_Phone": "555-3698",
        "Customer_Address": "698 Pine St",
        "Items": [
            {
                "Item_Name": "Pad Thai Noodles",
                "Item_Price": 11.99,
                "Quantity": 2,
                "Total_Price": 23.98
            },
            {
                "Item_Name": "Spring Rolls",
                "Item_Price": 5.49,
                "Quantity": 3,
                "Total_Price": 16.47
            },
            {
                "Item_Name": "Thai Iced Tea",
                "Item_Price": 3.99,
                "Quantity": 2,
                "Total_Price": 7.98
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Pending",
        "Delivery_Person": "",
        "Delivery_Status": ""
    },
    {
        "Order_ID": 1010,
        "Customer_Name": "Charlotte Lee",
        "Customer_Phone": "555-1357",
        "Customer_Address": "357 Cedar St",
        "Items": [
            {
                "Item_Name": "Margherita Pizza",
                "Item_Price": 11.99,
                "Quantity": 1,
                "Total_Price": 11.99
            },
            {
                "Item_Name": "Caprese Salad",
                "Item_Price": 6.99,
                "Quantity": 1,
                "Total_Price": 6.99
            },
            {
                "Item_Name": "Italian Soda",
                "Item_Price": 3.49,
                "Quantity": 2,
                "Total_Price": 6.98
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "Delivered",
        "Delivery_Person": "James Smith",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1011,
        "Customer_Name": "Daniel Miller",
        "Customer_Phone": "555-2468",
        "Customer_Address": "468 Maple St",
        "Items": [
            {
                "Item_Name": "Sushi Combo",
                "Item_Price": 18.99,
                "Quantity": 1,
                "Total_Price": 18.99
            },
            {
                "Item_Name": "Miso Soup",
                "Item_Price": 3.49,
                "Quantity": 2,
                "Total_Price": 6.98
            },
            {
                "Item_Name": "Green Tea Ice Cream",
                "Item_Price": 4.99,
                "Quantity": 1,
                "Total_Price": 4.99
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Delivered",
        "Delivery_Person": "Sarah Johnson",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1012,
        "Customer_Name": "Mia Rodriguez",
        "Customer_Phone": "555-7890",
        "Customer_Address": "890 Oak St",
        "Items": [
            {
                "Item_Name": "BBQ Chicken Wings",
                "Item_Price": 9.99,
                "Quantity": 3,
                "Total_Price": 29.97
            },
            {
                "Item_Name": "Loaded Nachos",
                "Item_Price": 8.49,
                "Quantity": 1,
                "Total_Price": 8.49
            },
            {
                "Item_Name": "Beer",
                "Item_Price": 5.99,
                "Quantity": 2,
                "Total_Price": 11.98
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "In Transit",
        "Delivery_Person": "David Lee",
        "Delivery_Status": "In Transit"
    },
    {
        "Order_ID": 1013,
        "Customer_Name": "Alexander Brown",
        "Customer_Phone": "555-2468",
        "Customer_Address": "468 Elm St",
        "Items": [
            {
                "Item_Name": "Philly Cheesesteak",
                "Item_Price": 10.99,
                "Quantity": 2,
                "Total_Price": 21.98
            },
            {
                "Item_Name": "Fries",
                "Item_Price": 3.49,
                "Quantity": 1,
                "Total_Price": 3.49
            },
            {
                "Item_Name": "Iced Coffee",
                "Item_Price": 2.99,
                "Quantity": 3,
                "Total_Price": 8.97
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Delivered",
        "Delivery_Person": "Emily Parker",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1014,
        "Customer_Name": "Amelia Wilson",
        "Customer_Phone": "555-1357",
        "Customer_Address": "357 Pine St",
        "Items": [
            {
                "Item_Name": "Pad Krapow Moo",
                "Item_Price": 12.99,
                "Quantity": 2,
                "Total_Price": 25.98
            },
            {
                "Item_Name": "Tom Yum Soup",
                "Item_Price": 4.49,
                "Quantity": 1,
                "Total_Price": 4.49
            },
            {
                "Item_Name": "Thai Iced Coffee",
                "Item_Price": 3.99,
                "Quantity": 2,
                "Total_Price": 7.98
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "Delivered",
        "Delivery_Person": "James Smith",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1015,
        "Customer_Name": "Benjamin Garcia",
        "Customer_Phone": "555-7890",
        "Customer_Address": "890 Cedar St",
        "Items": [
            {
                "Item_Name": "Steak",
                "Item_Price": 19.99,
                "Quantity": 1,
                "Total_Price": 19.99
            },
            {
                "Item_Name": "Baked Potato",
                "Item_Price": 4.99,
                "Quantity": 1,
                "Total_Price": 4.99
            },
            {
                "Item_Name": "Red Wine",
                "Item_Price": 12.99,
                "Quantity": 1,
                "Total_Price": 12.99
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "In Transit",
        "Delivery_Person": "David Lee",
        "Delivery_Status": "In Transit"
    },
    {
        "Order_ID": 1016,
        "Customer_Name": "Ethan Smith",
        "Customer_Phone": "555-3698",
        "Customer_Address": "698 Oak St",
        "Items": [
            {
                "Item_Name": "Beef Burrito",
                "Item_Price": 8.99,
                "Quantity": 2,
                "Total_Price": 17.98
            },
            {
                "Item_Name": "Guacamole",
                "Item_Price": 3.49,
                "Quantity": 1,
                "Total_Price": 3.49
            },
            {
                "Item_Name": "Soda",
                "Item_Price": 1.99,
                "Quantity": 3,
                "Total_Price": 5.97
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "Pending",
        "Delivery_Person": "",
        "Delivery_Status": ""
    },
    {
        "Order_ID": 1017,
        "Customer_Name": "Evelyn Taylor",
        "Customer_Phone": "555-1357",
        "Customer_Address": "357 Oak St",
        "Items": [
            {
                "Item_Name": "Chicken Alfredo",
                "Item_Price": 14.99,
                "Quantity": 1,
                "Total_Price": 14.99
            },
            {
                "Item_Name": "Caesar Salad",
                "Item_Price": 7.99,
                "Quantity": 1,
                "Total_Price": 7.99
            },
            {
                "Item_Name": "Breadsticks",
                "Item_Price": 3.49,
                "Quantity": 2,
                "Total_Price": 6.98
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Delivered",
        "Delivery_Person": "Sarah Johnson",
        "Delivery_Status": "Delivered"
    },
    {
        "Order_ID": 1018,
        "Customer_Name": "Mason Martinez",
        "Customer_Phone": "555-7890",
        "Customer_Address": "890 Pine St",
        "Items": [
            {
                "Item_Name": "Hamburger",
                "Item_Price": 7.99,
                "Quantity": 2,
                "Total_Price": 15.98
            },
            {
                "Item_Name": "French Fries",
                "Item_Price": 3.99,
                "Quantity": 1,
                "Total_Price": 3.99
            },
            {
                "Item_Name": "Milkshake",
                "Item_Price": 4.99,
                "Quantity": 1,
                "Total_Price": 4.99
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "In Transit",
        "Delivery_Person": "Emily Parker",
        "Delivery_Status": "In Transit"
    },
    {
        "Order_ID": 1019,
        "Customer_Name": "Avery Brown",
        "Customer_Phone": "555-3698",
        "Customer_Address": "698 Cedar St",
        "Items": [
            {
                "Item_Name": "Taco Salad",
                "Item_Price": 10.99,
                "Quantity": 1,
                "Total_Price": 10.99
            },
            {
                "Item_Name": "Quesadilla",
                "Item_Price": 6.99,
                "Quantity": 1,
                "Total_Price": 6.99
            },
            {
                "Item_Name": "Churros",
                "Item_Price": 3.49,
                "Quantity": 2,
                "Total_Price": 6.98
            }
        ],
        "Order_Type": "Online",
        "Order_Status": "Pending",
        "Delivery_Person": "",
        "Delivery_Status": ""
    },
    {
        "Order_ID": 1020,
        "Customer_Name": "Scarlett White",
        "Customer_Phone": "555-1357",
        "Customer_Address": "357 Elm St",
        "Items": [
            {
                "Item_Name": "Chicken Teriyaki",
                "Item_Price": 13.99,
                "Quantity": 2,
                "Total_Price": 27.98
            },
            {
                "Item_Name": "Vegetable Tempura",
                "Item_Price": 8.49,
                "Quantity": 1,
                "Total_Price": 8.49
            },
            {
                "Item_Name": "Miso Soup",
                "Item_Price": 3.49,
                "Quantity": 3,
                "Total_Price": 10.47
            }
        ],
        "Order_Type": "Dine In",
        "Order_Status": "Delivered",
        "Delivery_Person": "James Smith",
        "Delivery_Status": "Delivered"
    }
]

const colors = [
    "#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#d62728", "#9467bd"
];

const Dashboard = () => {
    const [itemCounts, setItemCounts] = useState({});
    const [orderStats, setOrderedStats] = useState([])
    const [total_income, setTotalIncome] = useState(0);
    const [order, setOrder] = useState({})

    const stats = [
        { label: "Total Orders", value: OrderedSet.length },
        { label: "Total prize", value: Math.floor(total_income) },
        { label: "Orders Pending", value: OrderedSet.filter((item) => item.Order_Status === "Pending").length },
        { label: "In Transit", value: OrderedSet.filter((item) => item.Order_Status === "In Transit").length },
    ];

    const additionalStats = [
        { label: "Online", value: OrderedSet.filter((item) => item.Order_Type === "Online").length },
        { label: "Dine-in", value: OrderedSet.filter((item) => item.Order_Type === "Dine In").length },
        { label: "Online Percentage", value: (OrderedSet.filter((item) => item.Order_Type === "Online").length/OrderedSet.length)*100 },
    ];

    const pieData = Object.entries(itemCounts).map(([name, value]) => ({ name, value }));
    
    const maxItems = 5;

    const sortedPieData = [...pieData].sort((a, b) => b.value - a.value);
    const topData = sortedPieData.slice(0, maxItems - 1);
    const otherTotal = sortedPieData.slice(maxItems - 1).reduce((sum, item) => sum + item.value, 0);

    const finalPieData = otherTotal > 0
        ? [...topData, { name: "Other", value: otherTotal }]
        : topData;


    useEffect(() => {
        const counts = {};
        OrderedSet.forEach((order) => {
            order.Items.forEach((item) => {
                counts[item.Item_Name] = (counts[item.Item_Name] || 0) + item.Quantity;
            });
        });
        const orderStats = [
            { name: "Orders", total: OrderedSet.length, delivered: OrderedSet.filter((item) => item.Order_Status === "Delivered").length },
        ];
    
        console.log(counts);

        setItemCounts(counts);
        setOrderedStats(orderStats)
    }, []);

    useEffect(()=>{
        let total_prize = []
        OrderedSet.map((item, index)=>{
            item.Items.map((item1)=>{
                total_prize.push(item1.Total_Price)
            })
        })
        let toal_income = total_prize.reduce((cur, val) => cur+val, 0)
        setTotalIncome(toal_income)        
    }, [])

    useEffect(()=>{
        let orderStatsDelivery = {}
        let orderDeliveryData = []
        OrderedSet.map((item,index)=>{
            orderStatsDelivery[item.Delivery_Person ? item.Delivery_Person : "Dev" ] = (orderStatsDelivery[item.Delivery_Person ? item.Delivery_Person : "Dev" ] || 0 ) + 1
        })
        
        for ( let key in orderStatsDelivery) {
            orderDeliveryData.push({
                Name: key,
                Count: orderStatsDelivery[key]
            })         
        }
        
        setOrder(orderDeliveryData)
    },[])

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <nav className="fixed top-0 left-0 w-full bg-gray-700 p-4 flex justify-between items-center z-50">
                <div className="flex items-center space-x-2">
                    <button className="text-md text-white">
                        <FaBars />
                    </button>
                    <div className="text-2xl text-white font-bold text-center p-1">
                        <span>NECTRAIT</span>
                    </div>
                </div>

                <div className="flex items-center space-x-10">
                    <button className="text-xl text-white">
                        <FaMoon />
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-4 rounded-lg shadow-md">
                        New Order
                    </button>
                    <FaUserCircle className="text-2xl text-white" />
                </div>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-20">
                <Card className="p-6 shadow-lg bg-gradient-to-br text-white rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Key Statistics</h2>
                    <div className="flex flex-wrap justify-around gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-40 h-20 flex items-center justify-center bg-white shadow-lg rounded-xl text-gray-900 font-extrabold text-xl transition-transform transform hover:scale-105">
                                    {stat.value}
                                </div>
                                <p className="mt-3 font-medium text-lg text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6 shadow-lg bg-gradient-to-r text-white rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">Additional Insights</h2>
                    <div className="flex flex-wrap justify-around gap-6">
                        {additionalStats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-40 h-20 flex items-center justify-center bg-white shadow-lg rounded-xl text-gray-900 font-bold text-xl transition-transform transform hover:scale-105">
                                    {stat.value}
                                </div>
                                <p className="mt-3 font-medium text-lg text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 mt-10 p-4">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 w-full">
                    <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2 flex flex-col items-center">
                        <h2 className="text-xl font-bold text-center mb-4 text-gray-700">Top Ordered Items</h2>
                        <PieChart width={300} height={300}>
                            <Pie data={finalPieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                                {finalPieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2 flex flex-col items-center">
                        <h2 className="text-xl font-bold text-center mb-4 text-gray-700">Orders vs Delivered</h2>
                        <BarChart width={350} height={300} data={orderStats}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#8884d8" name="Total Orders" />
                            <Bar dataKey="delivered" fill="#82ca9d" name="Delivered Orders" />
                        </BarChart>
                    </div>
                </div>

                <Card className="p-4 shadow-md bg-yellow-100 rounded-lg w-1/2">
                    <h3 className="font-semibold mb-2 text-gray-700">Pending Orders</h3>
                    {OrderedSet.filter((item) => item.Order_Status === "Pending").map((item, index) => {
                        return (
                            <div key={index} className="flex justify-between items-center bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                                <div>
                                    <p className="text-blue-800">Order ID: {item.Order_ID}</p>
                                    <p>Order Name: {item.Customer_Name}</p>
                                    <p>Address: {item.Customer_Address}</p>
                                </div>
                                <div className="flex items-center space-x-4 p-4">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                                        ✓ Accept
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                                        x Reject
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </Card>
            </div>
            <div>
            <Card className="p-4 shadow-md bg-yellow-100 rounded-lg w-1/2">
                    <h3 className="font-semibold mb-2 text-gray-700">Deliver Agents Stats</h3>
                    {order.map((item, index) => {                        
                        return (
                            <div key={index} className="flex justify-between items-center bg-gray-200 p-2 rounded-lg shadow-sm mb-6">
                                <div>
                                    <p>{item.Name} : <span className="text-blue-800">{item.Count}</span></p>
                                </div>
                            </div>
                        )
                    })}
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;