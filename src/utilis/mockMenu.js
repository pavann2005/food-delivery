const mockMenu = {
  cards: [
    {},
    {},
    {
      card: {
        card: {
          info: {
            name: "Pizza Hut",
            cuisines: ["Pizza", "Fast Food"],
            costForTwoMessage: "₹300 FOR TWO",
            totalRatingsString: "10K+ ratings",
            avgRatingString: "4.2",
            areaName: "Nellore",
            sla: {
              slaString: "30-40 mins",
            },
            feeDetails: {
              message: "Free Delivery",
            },
          },
        },
      },
    },

    {},

    {
      groupedCard: {
        cardGroupMap: {
          REGULAR: {
            cards: [
              {},

              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Pizza Hut Specials",

                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "1",
                            name: "Margherita Pizza",
                            price: 19900,
                            description: "Classic cheese pizza",
                          },
                        },
                      },

                      {
                        card: {
                          info: {
                            id: "2",
                            name: "Farmhouse Pizza",
                            price: 29900,
                            description: "Loaded veggie pizza",
                          },
                        },
                      },

                      {
                        card: {
                          info: {
                            id: "3",
                            name: "Chicken Pizza",
                            price: 34900,
                            description: "Chicken delight pizza",
                          },
                        },
                      },
                    ],
                  },
                },
              },

              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Burgers",

                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "4",
                            name: "Veg Burger",
                            price: 14900,
                            description: "Crispy veg burger",
                          },
                        },
                      },

                      {
                        card: {
                          info: {
                            id: "5",
                            name: "Chicken Burger",
                            price: 19900,
                            description: "Spicy chicken burger",
                          },
                        },
                      },
                    ],
                  },
                },
              },

              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Chinese",

                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "6",
                            name: "Veg Noodles",
                            price: 18000,
                            description: "Hakka noodles",
                          },
                        },
                      },

                      {
                        card: {
                          info: {
                            id: "7",
                            name: "Fried Rice",
                            price: 22000,
                            description: "Veg fried rice",
                          },
                        },
                      },
                    ],
                  },
                },
              },

              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Desserts",

                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "8",
                            name: "Chocolate Waffle",
                            price: 17000,
                            description: "Belgian chocolate waffle",
                          },
                        },
                      },

                      {
                        card: {
                          info: {
                            id: "9",
                            name: "Ice Cream",
                            price: 12000,
                            description: "Vanilla ice cream",
                          },
                        },
                      },
                    ],
                  },
                },
              },

              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Drinks",

                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "10",
                            name: "Coke",
                            price: 5000,
                            description: "Chilled coke",
                          },
                        },
                      },

                      {
                        card: {
                          info: {
                            id: "11",
                            name: "Pepsi",
                            price: 5000,
                            description: "Cold pepsi",
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  ],
};

export default mockMenu;