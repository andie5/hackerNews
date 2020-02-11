import React from "react";

const Container = () => {
  return (
    <div>
      <div>Hacker News | past | comments | ask | show | jobs | submit</div>
      <div>
        {hackerNewsData.map(item => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const NewsItem = ({
  item: { title, domainName, points, date, numberOfComments, username }
}) => {
  return (
    <div>
      <div>
        {title} ({domainName})
      </div>
      <div>
        {points} points by {username} {date} | {numberOfComments} comments
      </div>
    </div>
  );
};

const hackerNewsData = [
  {
    id: 1,
    username: "Fred",
    title: "ABC",
    domainName: "ABC",
    points: 6,
    date: "11/02/2020",
    numberOfComments: 4
  },
  {
    id: 2,
    username: "Chris",
    title: "BCD",
    domainName: "BCD",
    points: 4,
    date: "13/02/2020",
    numberOfComments: 65
  },
  {
    id: 3,
    username: "Rock",
    title: "ABCDEF",
    domainName: "ABCDEF",
    points: 56,
    date: "20/02/2020",
    numberOfComments: 90
  }
];

export default Container;
