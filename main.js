$(function(){
  var quotes, quote1, quote2, quote3;

  quotes = {
    main: [
      "'People have a hard time letting go of their suffering. For fear of the unknown, they prefer suffering that is familiar.' - Thich Nhat Hanh",
      "'Associate with people who are likely to improve you. Welcome those whom you are capable of improving... Men learn as they teach' - Seneca",
      "'Why be concerned about [outdoing] others, come to that, when you've outdone your own self?' - Seneca",
      "'It’s not because they’re hard that we lose confidence; they’re hard because we lack the confidence.' - Seneca",
      "'A man who suffers before it is necessary, suffers more than is necessary.' - Seneca",
      "'...how one lives is so far distant from how one ought to live...' - Machiavelli",
      "'Those who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents' -Andrew Carnegie",
      "'I pay less attention to what men say. I just watch what they do.' -Andrew Carnegie",
      "'How much time do you spend consuming things others made vs. making your own? Only one of those adds to your value as a human.' -David Wong",
      "'It is the mark of an educated mind to be able to entertain a thought without accepting it' - Aristotle",
      "'We are what we repeatedly do. Excellence, then, is not an act, but a habit.' - Aristotle",
      "'If you want to know what someone values, look at their leisure time, that's who you are, that's your conception of a good life' - Aristotle",
      "'I count him braver who overcomes his desires than him who conquers his enemies; for the hardest victory is over self' - Aristotle",
      "'Ideas are the greatest and most crucially practical power on earth' - Ayn Rand",
      "'All that we are is the result of what we have thought. The mind is everything. What we think we become.' - Buddha",
      "'All moral and natural evils of man arrive by idleness' - David Hume",
      "'Great minds discuss ideas, average minds discuss events, small minds discuss people.' - Eleanor Roosevelt",
      "'All things are possible.. Who you are is limited only by who you think you are.' - Egyptian Book of the Dead",
      "'There is nothing noble in being superior to your fellow man. True nobility is in being superior to your formal self' -Hemingway",
      "'Wisdom is what you can't Google' -Charles Conlin",
      "'You can accomplish anything in life, provided that you do not mind who gets the credit.' -Harry Truman",
      "'Prudence equally bestows on all men, in those things they apply themselves equally to' -Thomas Hobbes",
      "'Life is a sentence of failures, punctuated only by the briefest of successes' -James Altucher",
      "'No belief which is contrary to the truth can be useful' -John Stuart Mill",
      "'The greatest sign of a false life is fear in the face of death' -Ludwig Wittgenstein",
      "'Only put off until tomorrow what you are willing to die having left undone' - Pablo Picasso",
      "'The first and best victory is to conquer self' -Plato",
      "'You have enemies? Good. That means you've stood up for something at some point in your life.' -Winston Churchill",
      "'I knew that if I failed I wouldn't regret that, but I knew the one thing I would regret is not trying' -Jeff Bezos",
      "'It's very easy to be different, but very difficult to be better' -Jonathan Ive",
      "'As a startup CEO I slept like a baby. I woke up every 2 hours crying.' -Ben Horowitz",
      "'Don't worry about failure, you only have to be right once' -Drew Houston",
      "'Markets come and go. Good businesses don't.' -Fred Wilson",
      "You don't need a 100 person company to develop that idea' -Larry Page",
      "'It's better to make a few people really happy than a lot of people semi-happy' -Paul Graham",
      "'I will master something, then the creativity will come.'' -Japanese Proverb",
      "'Be kind, for everyone you meet is fighting a hard battle.'' -Plato",
      "'A person who won’t read has no advantage over one who can’t read.'' -Mark Twain",
      "'Everyone thinks of changing the world, but no one thinks of changing himself.' -Tolstoy",
      "'Life is an exciting business, and most exciting when it is lived for others.' -Helen Keller",
      "'By failing to prepare, you are preparing to fail.' -Benjamin Franklin",
      "'Its not about the goal. It’s about growing to become the person that can accomplish that goal.' -Tony Robbins",
      "'A business that makes nothing but money is a poor business.'  -Henry Ford",
      "'Happiness is the meaning and the purpose of life, the whole aim and end of human existence.' -Aristotle",
      "'Most people fail in life because they major in minor things.' -Tony Robbins",
      "'The twin killers of success are impatience and greed.' -Jim Rohn",
      "'Sweat equity is the best startup capital' -Mark Cuban",
      "'If you have a strong loyal community, you can do anything' -Jacob Dehart",
      "'You have to be ready for hard work and frugal spending to get your idea off the ground' -Garrett Camp",
      "'Global vision, local win.' -Jack Ma",
      "'The way to get started is to quit talking and begin doing' -Walt Disney",
      "'A person who is quietly confident makes the best leader' -Fred Wilson",
      "'It's hard to do a really good job on anything you don't think about in the shower' -Paul Graham",
      "'Waiting for perfect is never as smart as making progress' -Seth Godin",
      "'Timing, perseverance, and ten years will eventually make you look like an overnight success' -Biz Stone",
      "'The essence of profound insight is simplicity' -Jim Collins",
      "'The lean startup method is not about cost, it's about speed' -Eric Reiss",
      "'It takes time, it's a grind. There are no shortcuts. You've got to grind and grind.' -Mark Cuban",
      "'Whatever the mind of man can conceive and believe, it can achieve.' –Napoleon Hill",
      "'Strive not to be a success, but rather to be of value.' –Albert Einstein",
      "'You miss 100% of the shots you don’t take.' –Wayne Gretzky",
      "'The most difficult thing is the decision to act, the rest is merely tenacity.' –Emelia Earhart",
      "'We become what we think about.' –Earl Nightingale",
      "'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do' -Mark Twain",
      "'The best time to plant a tree was 20 years ago. The second best time is now.' –Chinese Proverb",
      "'An unexamined life is not worth living.' –Socrates",
      "'Eighty percent of success is showing up.' –Woody Allen",
      "'Your time is limited, so don’t waste it living someone else’s life.' –Steve Jobs",
      "'Winning isn’t everything, but wanting to win is.' –Vince Lombardi",
      "'I am not a product of my circumstances. I am a product of my decisions.' –Stephen Covey",
      "'You can never cross the ocean until you have the courage to lose sight of the shore.' –Christopher Columbus",
      "'Either you run the day, or the day runs you.' –Jim Rohn",
      "'Whether you think you can or you think you can’t, you’re right.' –Henry Ford",
      "'The two most important days in your life are the day you are born and the day you find out why.' –Mark Twain",
      "'The best revenge is massive success.' –Frank Sinatra",
      "'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.' –Aristotle",
      "'Go confidently in the direction of your dreams.  Live the life you have imagined.' –Henry David Thoreau",
      "'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.' –Plato",
      "'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.' –Sheryl Sandberg",
      "'If the wind will not serve, take to the oars.' –Latin Proverb",
      "'A person who never made a mistake never tried anything new.' –Albert Einstein",
      "'I would rather die of passion than of boredom.' –Vincent van Gogh",
      "'Build your own dreams, or someone else will hire you to build theirs. –Farrah Gray",
      "'It does not matter how slowly you go as long as you do not stop.' –Confucius",
      "'If you do what you’ve always done, you’ll get what you’ve always gotten.' –Tony Robbins",
      "'The question isn’t who is going to let me; it’s who is going to stop me.' –Ayn Rand",
      "'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.' –Henry Ford"
    ],
    fail: [
      "epic fail"
    ]
  }

  switch (window.location.pathname) {
    case '/':
    case '/index.html':
      quote1 = quotes.main[Math.floor(Math.random() * quotes.main.length)];
      quote2 = quotes.main[Math.floor(Math.random() * quotes.main.length)];
      quote3 = quotes.main[Math.floor(Math.random() * quotes.main.length)];
      break;
    default:
      console.log(window.location.pathname)
      quote1 = quotes.fail[Math.floor(Math.random() * quotes.fail.length)];
      quote2 = quotes.fail[Math.floor(Math.random() * quotes.fail.length)];
      quote3 = quotes.fail[Math.floor(Math.random() * quotes.fail.length)];
      break;
  }

  $('#quote1').html('<p><a href="http://twitter.com/share?url=http://bit.ly/ttquotes&text=' + quote1 + '&related=nateliason" target="_blank">' + quote1 + '</a><br><br></p>');
  $('#quote2').html('<p><a href="http://twitter.com/share?url=http://bit.ly/ttquotes&text=' + quote2 + '&related=nateliason" target="_blank">' + quote2 + '</a><br><br></p>');
  $('#quote3').html('<p><a href="http://twitter.com/share?url=http://bit.ly/ttquotes&text=' + quote3 + '&related=nateliason" target="_blank">' + quote3 + '</a><br><br></p>');
})