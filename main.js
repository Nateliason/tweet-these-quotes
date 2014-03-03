$(function getquotes(){
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
      "'If you want to know what one values, look at their leisure time. That's your conception of a good life' - Aristotle",
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
      "'We can easily forgive a child who is afraid of the dark; the tragedy of life is when men fear the light.' –Plato",
      "'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.' –Sheryl Sandberg",
      "'If the wind will not serve, take to the oars.' –Latin Proverb",
      "'A person who never made a mistake never tried anything new.' –Albert Einstein",
      "'I would rather die of passion than of boredom.' –Vincent van Gogh",
      "'Build your own dreams, or someone else will hire you to build theirs. –Farrah Gray",
      "'It does not matter how slowly you go as long as you do not stop.' –Confucius",
      "'If you do what you’ve always done, you’ll get what you’ve always gotten.' –Tony Robbins",
      "'The question isn’t who is going to let me; it’s who is going to stop me.' –Ayn Rand",
      "'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.' –Henry Ford",
      "'A creative man is motivated by the desire to achieve, not by the desire to beat others.' -Ayn Rand",
      "'If you want to achieve greatness stop asking for permission.' -Anonymous",
      "'Things work out best for those who make the best of how things work out.' -John Wooden",
      "' To live a creative life, we must lose our fear of being wrong.' -Anonymous",
      "'If you are not willing to risk the usual you will have to settle for the ordinary.' -Jim Rohn",
      "'All our dreams can come true if we have the courage to pursue them.' -Walt Disney",
      "'Success is walking from failure to failure with no loss of enthusiasm.' -Winston Churchill",
      "'Opportunities don't happen, you create them.' -Chris Grosser",
      "'I have not failed. I've just found 10,000 ways that won't work.' -Thomas A. Edison",
      "'If you don't value your time, neither will others. Stop giving away your time and talents- start charging for it.' -Kim Garst",
      "'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.' -David Brinkley",
      "'No one can make you feel inferior without your consent.' -Eleanor Roosevelt",
      "'The whole secret of a successful life is to find out what is one's destiny to do, and then do it.' -Henry Ford",
      "'What seems to us as bitter trials are often blessings in disguise.' -Oscar Wilde",
      "'The distance between insanity and genius is measured only by success.' -Bruce Feirstein",
      "'When you stop chasing the wrong things you give the right things a chance to catch you.' -Lolly Daskal",
      "'Don't be afraid to give up the good to go for the great.' -John D. Rockefeller",
      "'Innovation distinguishes between a leader and a follower.' -Steve Jobs",
      "'Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.' -Dr. APJ Kalam",
      "'I find that the harder I work, the more luck I seem to have.' -Thomas Jefferson",
      "'The starting point of all achievement is desire.' -Napolean Hill",
      "'Success is the sum of small efforts, repeated day-in and day-out.' -Robert Collier",
      "'If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.' -Thomas J. Watson",
      "'All progress takes place outside the comfort zone.' -Michael John Bobak",
      "'You may only succeed if you desire succeeding; you may only fail if you do not mind failing.' -Philippos",
      "'Courage is resistance to fear, mastery of fear - not absense of fear.' -Mark Twain",
      "'People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily.' -Zig Ziglar",
      "'We become what we think about most of the time, and that's the strangest secret.' -Earl Nightingale",
      "'The best reason to start an organization is to make meaning; to create a product or service to make the world a better place.' -Guy Kawasaki",
      "'I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.' -Martha Stewart",
      "'The function of leadership is to produce more leaders, not more followers.' -Ralph Nader",
      "'Success is liking yourself, liking what you do, and liking how you do it.' -Maya Angelou",
      "'As we look ahead into the next century, leaders will be those who empower others.' -Bill Gates",
      "'A real entrepreneur is somebody who has no safety net underneath them.' -Henry Kravis",
      "'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.' -Mark Caine",
      "'Whenever you find yourself on the side of the majority, it is time to pause and reflect.' -Mark Twain",
      "'The successful warrior is the average man, with laser-like focus.' -Bruce Lee",
      "'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.' -Dale Carnegie",
      "'If you genuinely want something, don't wait for it -- teach yourself to be impatient.' -Gurbaksh Chahal",
      "'Don't let the fear of losing be greater than the excitement of winning.' -Robert Kiyosaki",
      "'Successful people do what unsuccessful people are not willing to do. Don't wish it were easier, wish you were better.' -Jim Rohn",
      "'The number one reason people fail in life is because they listen to their friends, family, and neighbors.' -Napoleon Hill",
      "'In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.' -Jane Smiley",
      "'Success does not consist in never making mistakes but in never making the same one a second time.' -George Bernard Shaw",
      "'You must expect great things of yourself before you can do them.' -Michael Jordan",
      "'Motivation is what gets you started. Habit is what keeps you going.' -Jim Ryun",
      "'People rarely succeed unless they have fun in what they are doing.' -Dale Carnegie",
      "'There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.' -Ella Wheeler Wilcox",
      "'Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.' -Francis Chan",
      "'You've got to get up every morning with determination if you're to go to bed with satisfaction.' -George Lorimer",
      "'To be successful you must accept all challenges that come your way. You can't just accept the ones you like.' -Mike Gafka",
      "'Success is...knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.' -John C. Maxwell",
      "'Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.' -Wayne Dyer",
      "'To accomplish great things, we must not only act, but also dream, not only plan, but also believe.' -Anatole France",
      "'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no help at all.' -Dale Carnegie",
      "'You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.' -Booker T. Washington",
      "'Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.' -Theodore N. Vail",
      "'It is better to fail in originality than to succeed in imitation.' -Herman Melville",
      "'Little minds are tamed and subdued by misfortune; but great minds rise above it.' -Washington Irving",
      "'Failure is the condiment that gives success its flavor.' -Truman Capote",
      "'Don't let what you cannot do interfere with what you can do.' -John R. Wooden",
      "'A real decision is measured by the fact that you've taken new action' -Tony Robbins",
      "'One day you will wake up and there won't be any more time to do the things you've always wanted. Do it now.' -Paulo Coelho",
      "'A year from now you will wish you had started today.' - Karen Lamb",
      "'Be the change you wish to see in the world. -Gandhi",
      "'When you're going through hell, keep going. -Winston Churchill",
      "'Stay hungry; stay foolish.' -Steve Jobs",
      "'No one saves us but ourselves. No one can and no one may. We ourselves must walk the path. -Buddha",
      "'Care about what other people think and you will always be their prisoner. -Lao Tzu",
      "'The world is moving so fast that the man who says it can't be done is generally interrupted by someone doing it. -Elbert Hubbard",
      "'Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind. -Elbert Hubbard",
      "'One day you will wake up and there won't be any more time to do the things you've always wanted. Do it now. -Paulo Coelho",
      "'Never waste a minute thinking about people you don't like. -Dwight Eisenhower",
      "'First they ignore you, then they laugh at you, then they fight you, then you win. -Gandhi",
      "'A man is but the product of his thoughts. What he thinks, he becomes. -Gandhi",
      "'Live as if you were to die tomorrow. Learn as if you were to live forever. -Gandhi",
      "'The future depends on what we do in the present. -Gandhi",
      "'Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy. -Robert Tew",
      "'Most of us are ashamed of shabby clothes and furniture, let us be more ashamed of shabby ideas and philosophies. -Einstein",
      "'It is no measure of health to be well adjusted to a profoundly sick society. -Krishnamurti",
      "'Think lightly of yourself and deeply of the world. -Miyamoto Musashi",
      "'Do not wish for an easy life. Wish for the strength to endure a difficult one. -Bruce Lee",
      "'Showing off is the fool's idea of glory. -Bruce Lee",
      "'Use only that which works, and take it from any place you can find it. -Bruce Lee",
      "'I'm not in this world to live up to your expectations and you're not in this world to live up to mine. -Bruce Lee",
      "'If you spend too much time thinking about a thing, you'll never get it done. -Bruce Lee",
      "'Knowing is not enough, we must apply. Willing is not enough, we must do. -Bruce Lee",
      "'Empty your cup so that it may be filled; become devoid to gain totality. -Bruce Lee",
      "'It's not the daily increase but daily decrease. Hack away at the unessential. -Bruce Lee",
      "'Be yourself. Everyone else is already taken. -Oscar Wilde",
      "'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. -MLK Jr.",
      "'Yesterday is history; tomorrow is a mystery. Today is a gift, which is why we call it the present. -Bil Keane",
      "'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. -Einstein",
      "'I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",
      "'It is never too late to be what you might have been. -George Eliot",
      "'Always be yourself, have faith in yourself. Do not go out and look for a successful personality and duplicate it. -Bruce Lee",
      "'When you are content to be simply yourself and don't compare or compete, everyone will respect you. -Lao Tzu",
      "'If you want to awaken all of humanity, awaken all of yourself. -Lao Tzu",
      "'Unless you try to do something beyond what you have already mastered you will never grow. -Ralph Waldo Emerson",
      "'What the caterpillar calls the end, the rest of the world calls a butterfly. -Lao Tzu",
      "'To be beautiful means to be yourself. You don't need to be accepted by others. You need to be yourself. -Thich Nhat Hanh",
      "'If you don't like something, change it. If you can't change it, change your attitude. Don't complain. -Mary Angelou",
      "'You can't climb the ladder of success with your hands in your pockets. -Arnold Schwarzenegger",
      "'It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement. -Isocrates",
      "'Start where you are. Use what you can. Do what you can. -Arthur Ashe",
      "'Anyone who stops learning is old. -Henry Ford",
      "'Do one thing every day that scares you. -Eleanor Roosevelt",
      "'Failure is simply the opportunity to begin again, this time more intelligently. -Henry Ford",
      "'When you judge others, you do not define them; you define yourself. -Wayne Dyer",
      "'Your big opportunity may be right where you are now. -Napoleon Hill",
      "'Success is the ability to go from failure to failure without losing your enthusiasm. -Winston Churchill",
      "'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. -Winston Churchill",
      "'Failure is simply the opportunity to begin again. This time more intelligently. -Henry Ford",
      "'While we are postponing, life speeds by. -Seneca",
      "'It always seems impossible until it's done. -Nelson Mandela",
      "'Don't let the mistakes and disappointments of the past control and direct your future. -Zig Ziglar",
      "'Waste no more time arguing about what a good person should be. Be one. -Marcus Aurelius",
      "'Life shrinks of expands in proportion to one's courage. -Anais Nin",
      "'Absorb what is useful. Discard what is not. Add what is uniquely your own. -Bruce Lee",
      "'Don't find fault. Find a remedy. -Henry Ford"
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