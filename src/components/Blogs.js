// pages/blogs.js or pages/index.js
import BlogList from '../components/BlogList';

const posts = [
  {
    id: 1,
    title: "Understanding Mortgages: A Beginner's Guide",
    excerpt: "Dive into the basics of mortgages, how they work, and what you need to know before applying for one.",
    date: "2023-04-05",
  },
  {
    id: 2,
    title: "Refinancing Your Home: When Is the Right Time?",
    excerpt: "Learn about the signs that indicate it's a good time to refinance your mortgage and how it can benefit your financial situation.",
    date: "2023-03-22",
  },
  {
    id: 3,
    title: "The Pros and Cons of Fixed vs. Variable Rates",
    excerpt: "Choosing between a fixed and variable rate mortgage is a crucial decision. Here's what you need to consider.",
    date: "2023-03-10",
  },
  {
    id: 4,
    title: "First-Time Homebuyer? Top Tips to Secure Your Mortgage",
    excerpt: "Buying your first home is exciting but can also be daunting. Here are top tips to help you secure your mortgage successfully.",
    date: "2023-02-25",
  },
  {
    id: 5,
    title: "Understanding Credit Scores and Your Mortgage Application",
    excerpt: "Your credit score plays a significant role in your mortgage application. Learn how it affects your chances and interest rates.",
    date: "2023-02-11",
  },
  {
    id: 6,
    title: "Investment Properties: What You Need to Know Before Diving In",
    excerpt: "Investing in property can be lucrative, but it's not without its risks. Here's what you should consider before making an investment.",
    date: "2023-01-28",
  },
  {
    id: 7,
    title: "Mortgage Renewals: Strategies for Negotiating Better Rates",
    excerpt: "Mortgage coming up for renewal? Don't settle for the first offer. Use these strategies to negotiate better rates.",
    date: "2023-01-14",
  },
  {
    id: 8,
    title: "The Impact of Government Policies on Mortgage Rates",
    excerpt: "Government policies can significantly impact mortgage rates. Here's what you need to know to stay ahead.",
    date: "2022-12-30",
  },
  {
    id: 9,
    title: "Building Your Dream Home: Financing Construction",
    excerpt: "Financing the construction of a new home is different from buying an existing one. Explore your options and what to expect.",
    date: "2022-12-16",
  },
  {
    id: 10,
    title: "Down Payment Strategies for Your First Home",
    excerpt: "Saving for a down payment is a major step towards buying your first home. Discover strategies to help you save faster and smarter.",
    date: "2022-12-02",
  }
];


export default function Blogs() {
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
