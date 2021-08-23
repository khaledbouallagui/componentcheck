import React from 'react';
export const Suggestion = () => {
    const suggest =[
{
src: https://www.youtube.com/watch?v=gnkrDse9QKc&ab_channel=BenAwad,
title: Beginner React.js Coding Interview (ft. Clément Mihailescu),}

{src:https://www.youtube.com/watch?v=8bhp89AIsnc&ab_channel=PeterElbaum,
title: REAL React Interview Questions,}

{src:https://www.youtube.com/watch?v=JOa41r3Fr4s&ab_channel=CodingWithChaim,
title:React Interview Questions 2020 (7 Questions),
}
    ];
  return (
    <div>
{suggest.map((el)=>
    </div>
    <iframe
    width="100%"
    height="500"
    src={el.src}
    title="Youtube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    ></iframe>
    <P>{el.title}</P>
  );
}


