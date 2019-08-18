// Development Project Thumbs
import mobileMerchant from "./images/mobile-merchant.jpg";
import idyllBay from './images/idyll-bay.jpg';
import blog from './images/blog.jpg';

// Design Project Thumbs



export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "mobile merchant",
      slug: "mobile-merchant",
      type: "development",
      tags: ["react"],
      excerpt: "Ecommerce website built to quickly and easily sell niche projects",
      description:
        "A compact Ecommerce site built to sell niche items and quickly get the customer checked out. This project utilizes react dom routing, shopping cart capbility, and a checkout system tied to PayPal.",
      involvement: 100,
      challenges: [
        {
          challenge1: {
            title: "challenge title",
            text: "challenge text"
          }
        },
        {
          challenge2: {
            title: "challenge title",
            text: "challenge text"
          }
        }
      ],
      images: [
        {
          fields: {
            file: {
              url: mobileMerchant
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "idyll bay",
      slug: "idyll-bay",
      type: "development",
      tags: ["react"],
      excerpt: "Elegant beach resort complete with room-search & booking",
      description:
        "An elegant beach resort website with booking capability",
      involvement: 100,
      challenges: [
        {
          challenge1: {
            title: "challenge title",
            text: "challenge text"
          }
        },
        {
          challenge2: {
            title: "challenge title",
            text: "challenge text"
          }
        }
      ],
      images: [
        {
          fields: {
            file: {
              url: idyllBay
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "blog page",
      slug: "blog-page",
      type: "development",
      tags: ["react", "test"],
      excerpt: "Personal blog page filled built with Gatsby.js",
      description:
        "An elegant beach resort website with booking capability",
      involvement: 100,
      challenges: [
        {
          challenge1: {
            title: "challenge title",
            text: "challenge text"
          }
        },
        {
          challenge2: {
            title: "challenge title",
            text: "challenge text"
          }
        }
      ],
      images: [
        {
          fields: {
            file: {
              url: blog
            }
          }
        }
      ]
    }
  }
];