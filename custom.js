

  const timeAndDayGrammarQuestions = [
    {
      question: "A: _____did Amy go to bed last night? She looks so tired.<br>B: _____about 1:30 a.m. She stays up(熬夜) every day for a big test.",
      correct_answer: "(A) What time；At",
      incorrect_answers: ["(B) What day；On", "(C) What time; For", "(D) What day; ╳"]
    },
    {
      question: "Rick: What _______ is your test today?<br>Shiny: It’s ___ two o’clock.",
      correct_answer: "(B) time ; at",
      incorrect_answers: ["(A) time ; x", "(C) day ; on", "(D) day ; x"]
    },
    {
      question: "Anna: Isn’t it Tuesday?<br>Candice: No, it’s not.<br>Anna: _______________<br>Candice: It’s Monday.",
      correct_answer: "(C) What day is it today?",
      incorrect_answers: [
        "(A) What day is your family day?",
        "(B) What day is the sports day?",
        "(D) What day is your birthday?"
      ]
    },
    {
      question: "A: What time is the ball game?<br>B: It is _______________ .",
      correct_answer: "(D) at six twenty",
      incorrect_answers: ["(A) six o’clock", "(B) six twenty", "(C) at twenty o’clock"]
    },
    {
      question: "A: What day is the meeting?<br>B:_______________",
      correct_answer: "(A) It’s next Monday.",
      incorrect_answers: [
        "(B) It’s in the morning.",
        "(C) It’s in a big city.",
        "(D) It’s a meeting with Mr. Wang"
      ]
    },
    {
      question: "Teresa’s favorite TV show is _____ 4 p.m. _____ Monday.",
      correct_answer: "(D) at; on",
      incorrect_answers: ["(A) at; ╳", "(B) this; ╳", "(C) on; at"]
    },
    {
      question: "Helen: What day is New Year’s Day this year?<br>Brett: _____",
      correct_answer: "(C) Isn’t it on Wednesday?",
      incorrect_answers: [
        "(A) Is it at one one?",
        "(B) New Year’s Day is coming.",
        "(D) We can go out together that day"
      ]
    }
  ];

  const HanLinB2L3L4 = [
    {
      question: "A: _____did Amy go to bed last night? She looks so tired.<br>B: _____about 1:30 a.m. She stays up(熬夜) every day for a big test.",
      correct_answer: "(A) What time；At",
      incorrect_answers: ["(B) What day；On", "(C) What time; For", "(D) What day; ╳"]
    },
    {
      question: "Rick: What _______ is your test today?<br>Shiny: It’s ___ two o’clock.",
      correct_answer: "(B) time ; at",
      incorrect_answers: ["(A) time ; x", "(C) day ; on", "(D) day ; x"]
    },
    {
      question: "Anna: Isn’t it Tuesday?<br>Candice: No, it’s not.<br>Anna: _______________<br>Candice: It’s Monday.",
      correct_answer: "(C) What day is it today?",
      incorrect_answers: [
        "(A) What day is your family day?",
        "(B) What day is the sports day?",
        "(D) What day is your birthday?"
      ]
    },
    {
      question: "A: What time is the ball game?<br>B: It is _______________ .",
      correct_answer: "(D) at six twenty",
      incorrect_answers: ["(A) six o’clock", "(B) six twenty", "(C) at twenty o’clock"]
    },
    {
      question: "A: What day is the meeting?<br>B:_______________",
      correct_answer: "(A) It’s next Monday.",
      incorrect_answers: [
        "(B) It’s in the morning.",
        "(C) It’s in a big city.",
        "(D) It’s a meeting with Mr. Wang"
      ]
    },
    {
      question: "Teresa’s favorite TV show is _____ 4 p.m. _____ Monday.",
      correct_answer: "(D) at; on",
      incorrect_answers: ["(A) at; ╳", "(B) this; ╳", "(C) on; at"]
    },
    {
      question: "Helen: What day is New Year’s Day this year?<br>Brett: _____",
      correct_answer: "(C) Isn’t it on Wednesday?",
      incorrect_answers: [
        "(A) Is it at one one?",
        "(B) New Year’s Day is coming.",
        "(D) We can go out together that day"
      ]
    }
    ,{
      question: "A: What ______ is it?<br>B: It’s five seventeen.",
      correct_answer: "(B) What time",
      incorrect_answers: ["(A) How", "(C) How old", "(D) What day"]
    },
    {
      question: "That singer’s meet-and-greet is ______ ten ______ Saturday morning.",
      correct_answer: "(C) on; at",
      incorrect_answers: ["(A) on; on", "(B) at; at", "(D) at; on"]
    },
    {
      question: "A: What day is the basketball game?<br>B: It’s ______ this Tuesday.",
      correct_answer: "(A) on",
      incorrect_answers: ["(B) at", "(C) X", "(D) in"]
    },
    {
      question: "A: What are you doing?<br>B: ______.",
      correct_answer: "(D) We are writing a report.",
      incorrect_answers: ["(A) We are free.", "(B) You can sing here.", "(C) The report is ready."]
    },
    {
      question: "A: What day is it today?<br>B: ______.",
      correct_answer: "(B) Isn’t it Monday?",
      incorrect_answers: ["(A) It’s on Sunday.", "(C) It’s six o’clock.", "(D) It’s a good day."]
    },
    {
      question: "Look! Ellen’s sister ______ now. She is a good singer.",
      correct_answer: "(C) is singing",
      incorrect_answers: ["(A) singing", "(B) are singing", "(D) sing"]
    },
    {
      question: "My two-year-old daughter can draw ______ a marker.",
      correct_answer: "(C) with",
      incorrect_answers: ["(A) to", "(B) for", "(D) at"]
    },
    {
      question: "The show is at six p.m. Let’s ______ late.",
      correct_answer: "(A) not",
      incorrect_answers: ["(B) don’t", "(C) no", "(D) not be"]
    },
    {
      question: "A: ______<br>B: He can sing.",
      correct_answer: "(A) What can he do?",
      incorrect_answers: ["(B) Who can do this?", "(C) Where can he go?", "(D) What can he sing?"]
    },
    {
      question: "A: Is Jenny at home?<br>B: Maybe she is. Her bag is on the sofa.",
      correct_answer: "(A) I’m not sure.",
      incorrect_answers: ["(B) Look at the sign.", "(C) Where is she now?", "(D) Please write down her name."]
    },
    {
      question: "A: ______<br>B: Sorry, I can’t. It’s your turn.",
      correct_answer: "(D) Can you wash the dog for me?",
      incorrect_answers: ["(A) Can you see me?", "(B) Can you wait for me here?", "(C) Can you wait for your turn?"]
    },
    {
      question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
      correct_answer: "(B) goods",
      incorrect_answers: ["(A) channels", "(C) soldiers", "(D) success"]
    },
    {
      question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
      correct_answer: "(D) is waiting",
      incorrect_answers: ["(A) was waiting", "(B) waits", "(C) waited"]
    },
    {
      question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
      correct_answer: "(C) was taking",
      incorrect_answers: ["(A) took", "(B) is taking", "(D) takes"]
    },
    {
      question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
      correct_answer: "(B) died",
      incorrect_answers: ["(A) was dying", "(C) dies", "(D) die"]
    },
    {
      question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
      correct_answer: "(C) studying",
      incorrect_answers: ["(A) to study", "(B) studied", "(D) study"]
    },
    {
      question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
      correct_answer: "(A) keeps",
      incorrect_answers: ["(B) keep", "(C) keeping", "(D) to keep"]
    },
    {
      question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
      correct_answer: "(D) It is",
      incorrect_answers: ["(A) That is", "(B) There is", "(C) I am"]
    },
    {
      question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
      correct_answer: "(B) watching",
      incorrect_answers: ["(A) watch", "(C) watched", "(D) watches"]
    },
    {
      question: "The English singing contest is coming next week. We need ________ after school.",
      correct_answer: "(D) to practice",
      incorrect_answers: ["(A) practicing", "(B) to be practiced", "(C) practiced"]
    },
    {
      question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
      correct_answer: "(C) five to ten",
      incorrect_answers: ["(A) five to twelve", "(B) half past nine", "(D) half past five"]
    },{
      question: "Peter’s eyesight isn’t very good. He ________ see the words on the blackboard in the back of the classroom.",
      correct_answer: "(D) can’t",
      incorrect_answers: ["(A) can", "(B) isn’t", "(C) not"]
    },
    {
      question: "My dear friend, _________ a good time at today’s Halloween party.",
      correct_answer: "(B) have",
      incorrect_answers: ["(A) is having", "(C) having", "(D) is playing"]
    },
    {
      question: "Everyone at the concert ______ so happy. They are waving their cellphones and singing with the band.",
      correct_answer: "(A) is",
      incorrect_answers: ["(B) are", "(C) isn’t", "(D) aren’t"]
    },
    {
      question: "Miss Yu: Wake Kevin up. He is sleeping in class again.<br>Jason: OK. Let me wake________up.",
      correct_answer: "(D) him",
      incorrect_answers: ["(A) it", "(B) her", "(C) he"]
    },
    {
      question: "_______, look at your teacher and listen to her. Time for class.",
      correct_answer: "(A) Please",
      incorrect_answers: ["(B) Don’t", "(C) Let’s", "(D) Boys and girls"]
    },
    {
      question: "The cartoon “SLAM DUNK” is on TV ______ Monday______ Friday. I watch it every evening.<br> cartoon 卡通",
      correct_answer: "(B) from; to",
      incorrect_answers: ["(A) at; in", "(C) on; on", "(D) on; from"]
    },
    {
      question: "Look! The famous singer, Avril, ______ hands with her fans on the stage.  famous 有名的",
      correct_answer: "(C) is shaking",
      incorrect_answers: ["(A) shaking", "(B) are shaking", "(D) shake"]
    },
    {
      question: "Tina: Jenny and I are going to see a movie twenty minutes later. Are you coming together?<br>Tom: OK, I am free now. _______ meet her at the park. It’s near her house. She can get there very soon.",
      correct_answer: "(D) Let’s",
      incorrect_answers: ["(A) Please don’t", "(B) Let’s not", "(C) Don’t"]
    },
    {
      question: "Alice: Are you free ________?<br>Milly: Yes, I am. Do you have any good ideas?",
      correct_answer: "(A) today",
      incorrect_answers: ["(B) your birthday", "(C) eight p.m.", "(D) ten o’clock"]
    },
    {
      question: "Benson: What are you ______________?<br>Willy: My favorite song “Beautiful Sunday.”",
      correct_answer: "(D) listening to",
      incorrect_answers: ["(A) drawing", "(B) using", "(C) looking at"]
    },
    {
      question: "A: What ______ is it?<br>B: It’s five seventeen.",
      correct_answer: "(B) What time",
      incorrect_answers: ["(A) How", "(C) How old", "(D) What day"]
    },
    {
      question: "That singer’s meet-and-greet is ______ ten ______ Saturday morning.",
      correct_answer: "(C) on; at",
      incorrect_answers: ["(A) on; on", "(B) at; at", "(D) at; on"]
    },
    {
      question: "A: What day is the basketball game?<br>B: It’s ______ this Tuesday.",
      correct_answer: "(A) on",
      incorrect_answers: ["(B) at", "(C) X", "(D) in"]
    },
    {
      question: "A: What are you doing?<br>B: ______.",
      correct_answer: "(D) We are writing a report.",
      incorrect_answers: ["(A) We are free.", "(B) You can sing here.", "(C) The report is ready."]
    },
    {
      question: "A: What day is it today?<br>B: ______.",
      correct_answer: "(B) Isn’t it Monday?",
      incorrect_answers: ["(A) It’s on Sunday.", "(C) It’s six o’clock.", "(D) It’s a good day."]
    },
    {
      question: "Look! Ellen’s sister ______ now. She is a good singer.",
      correct_answer: "(C) is singing",
      incorrect_answers: ["(A) singing", "(B) are singing", "(D) sing"]
    },
    {
      question: "My two-year-old daughter can draw ______ a marker.",
      correct_answer: "(C) with",
      incorrect_answers: ["(A) to", "(B) for", "(D) at"]
    },
    {
      question: "The show is at six p.m. Let’s ______ late.",
      correct_answer: "(A) not",
      incorrect_answers: ["(B) don’t", "(C) no", "(D) not be"]
    },
    {
      question: "A: ______<br>B: He can sing.",
      correct_answer: "(A) What can he do?",
      incorrect_answers: ["(B) Who can do this?", "(C) Where can he go?", "(D) What can he sing?"]
    },
    {
      question: "A: Is Jenny at home?<br>B: Maybe she is. Her bag is on the sofa.",
      correct_answer: "(A) I’m not sure.",
      incorrect_answers: ["(B) Look at the sign.", "(C) Where is she now?", "(D) Please write down her name."]
    },
    {
      question: "A: ______<br>B: Sorry, I can’t. It’s your turn.",
      correct_answer: "(D) Can you wash the dog for me?",
      incorrect_answers: ["(A) Can you see me?", "(B) Can you wait for me here?", "(C) Can you wait for your turn?"]
    },
    {
      question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
      correct_answer: "(B) goods",
      incorrect_answers: ["(A) channels", "(C) soldiers", "(D) success"]
    }, {
      question: "The Browns _____ in the living room when(當…) the mailman rang the doorbell yesterday.",
      correct_answer: "(D) were watching TV",
      incorrect_answers: ["(A) watch TV", "(B) watching TV", "(C) are watching TV"]
    },
    {
      question: "Stop _____ here, boys. You are giving me a headache. Now, go back to your room and read some books.",
      correct_answer: "(C) shouting",
      incorrect_answers: ["(A) to shout", "(B) shout", "(D) shouted"]
    },
    {
      question: "Everyone _____ for the relay race (大隊接力) because we all want to win.",
      correct_answer: "(D) keeps practicing",
      incorrect_answers: ["(A) need to practice", "(B) keep to practice", "(C) needs practicing"]
    },
    {
      question: "_____ up now. It’s seven thirty, and you are late for school again.",
      correct_answer: "(B) Get",
      incorrect_answers: ["(A) Getting", "(C) To get", "(D) Gets"]
    },
    {
      question: "_____ up early tomorrow morning, you need to go to bed now.",
      correct_answer: "(C) To get",
      incorrect_answers: ["(A) Getting", "(B) Get", "(D) Gets"]
    },
    {
      question: "_____ up early on cold days is not easy for my little brother.",
      correct_answer: "(A) Getting",
      incorrect_answers: ["(B) Get", "(C) To getting", "(D) Gets"]
    },
    {
      question: "Mom: It’s time for bed, Dan. Go brush your teeth and _____.<br>Dan: OK, Mom.",
      correct_answer: "(A) hit the sack",
      incorrect_answers: ["(B) hit the books", "(C) hit the road", "(D) hit the bottle"]
    },
    {
      question: "Choose the CORRECT sentence. (選出正確的句子).",
      correct_answer: "(D) J.K. Rowling’s books are popular all over the world.",
      incorrect_answers: [
        "(A) John hurted his right hand yesterday.",
        "(B) He needs to eat the medicine three times a day.",
        "(C) The water isn’t enough clean. Don’t drink it."
      ]
    },
    {
      question: "A: ______ is it?<br>B: It’s five seventeen.",
      correct_answer: "(B) What time",
      incorrect_answers: ["(A) How", "(C) How old", "(D) What day"]
    },
    {
      question: "That singer’s meet-and-greet is ______ ten ______ Saturday morning.",
      correct_answer: "(D) at; on",
      incorrect_answers: ["(A) on; on", "(B) at; at", "(C) on; at"]
    },
    {
      question: "A: What day is the basketball game?<br>B: It’s ______ this Tuesday.",
      correct_answer: "(C) X",
      incorrect_answers: ["(A) on", "(B) at", "(D) in"]
    },
    {
      question: "A: What are you doing?<br>B: ______.",
      correct_answer: "(D) We are writing a report.",
      incorrect_answers: [
        "(A) We are free.",
        "(B) You can sing here.",
        "(C) The report is ready."
      ]
    },
    {
      question: "A: What day is it today?<br>B: ______.",
      correct_answer: "(B) Isn’t it Monday?",
      incorrect_answers: [
        "(A) It’s on Sunday.",
        "(C) It’s six o’clock.",
        "(D) It’s a good day."
      ]
    },
    {
      question: "Look! Ellen’s sister ______ now. She is a good singer.",
      correct_answer: "(C) is singing",
      incorrect_answers: ["(A) singing", "(B) are singing", "(D) sing"]
    },
    {
      question: "My two-year-old daughter can draw ______ a marker.",
      correct_answer: "(C) with",
      incorrect_answers: ["(A) to", "(B) for", "(D) at"]
    },
    {
      question: "The show is at six p.m. Let’s ______ late.",
      correct_answer: "(D) not be",
      incorrect_answers: ["(A) not", "(B) don’t", "(C) no"]
    },
    {
      question: "A: ______<br>B: He can sing.",
      correct_answer: "(A) What can he do?",
      incorrect_answers: [
        "(B) Who can do this?",
        "(C) Where can he go?",
        "(D) What can he sing?"
      ]
    },
    {
      question: "A: Is Jenny at home?<br>B: ______ Her bag is on the sofa.",
      correct_answer: "(A) I’m not sure.",
      incorrect_answers: [
        "(B) Look at the sign.",
        "(C) Where is she now?",
        "(D) Please write down her name."
      ]
    },
    {
      question: "A: ______<br>B: Sorry, I can’t. It’s your turn.",
      correct_answer: "(D) Can you wash the dog for me?",
      incorrect_answers: [
        "(A) Can you see me?",
        "(B) Can you wait for me here?",
        "(C) Can you wait for your turn?"
      ]
    }
  ];

  const HanLinB4L3L4 = [
    {
      question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
      correct_answer: "(B) goods",
      incorrect_answers: ["(A) channels", "(C) soldiers", "(D) success"]
    },
    {
      question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
      correct_answer: "(D) is waiting",
      incorrect_answers: ["(A) was waiting", "(B) waits", "(C) waited"]
    },
    {
      question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
      correct_answer: "(C) was taking",
      incorrect_answers: ["(A) took", "(B) is taking", "(D) takes"]
    },
    {
      question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
      correct_answer: "(B) died",
      incorrect_answers: ["(A) was dying", "(C) dies", "(D) die"]
    },
    {
      question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
      correct_answer: "(C) studying",
      incorrect_answers: ["(A) to study", "(B) studied", "(D) study"]
    },
    {
      question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
      correct_answer: "(A) keeps",
      incorrect_answers: ["(B) keep", "(C) keeping", "(D) to keep"]
    },
    {
      question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
      correct_answer: "(D) It is",
      incorrect_answers: ["(A) That is", "(B) There is", "(C) I am"]
    },
    {
      question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
      correct_answer: "(B) watching",
      incorrect_answers: ["(A) watch", "(C) watched", "(D) watches"]
    },
    {
      question: "The English singing contest is coming next week. We need ________ after school.",
      correct_answer: "(D) to practice",
      incorrect_answers: ["(A) practicing", "(B) to be practiced", "(C) practiced"]
    },
    {
      question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No, I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
      correct_answer: "(C) five to ten",
      incorrect_answers: ["(A) five to twelve", "(B) half past nine", "(D) half past five"]
    },
    {
      question: "Alice: Noah, thank you for _____ a true friend when I have a very hard time.<br>Noah: You’re welcome. That’s what friends are for!",
      correct_answer: "(C) being",
      incorrect_answers: ["(A) be", "(B) to be", "(D) been"]
    },
    {
      question: "Daniel: Who left the trash here?<br>Mike: A few students _______ here at this time yesterday. I think it was them.",
      correct_answer: "(D) were eating",
      incorrect_answers: ["(A) eat", "(B) was eating", "(C) eats"]
    },
    {
      question: "Karen: My mom always tells me, “It’s not good ________ yourself for someone else.”<br>Ms. Lin: I agree. Sometimes, we should follow our own way.",
      correct_answer: "(A) to change",
      incorrect_answers: ["(B) to be changed", "(C) changing", "(D) change"]
    },
    {
      question: "Lily: What was Jessie doing during cleaning time yesterday?<br>Anita: She ______ the window.",
      correct_answer: "(D) was wiping",
      incorrect_answers: ["(A) is wiping", "(B) wipes", "(C) wipe"]
    },
    {
      question: "After Emily watched a video about Kinmen, she was surprised by the beautiful view and _______ there in winter vacation.",
      correct_answer: "(A) hoped to visit",
      incorrect_answers: ["(B) learned to visit", "(C) hated to visit", "(D) stopped to visit"]
    },
    {
    question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
    correct_answer: "(B) goods",
    incorrect_answers: ["(A) channels", "(C) soldiers", "(D) success"]
  },
  {
    question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
    correct_answer: "(D) is waiting",
    incorrect_answers: ["(A) was waiting", "(B) waits", "(C) waited"]
  },
  {
    question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
    correct_answer: "(C) was taking",
    incorrect_answers: ["(A) took", "(B) is taking", "(D) takes"]
  },
  {
    question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
    correct_answer: "(B) died",
    incorrect_answers: ["(A) was dying", "(C) dies", "(D) die"]
  },
  {
    question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
    correct_answer: "(C) studying",
    incorrect_answers: ["(A) to study", "(B) studied", "(D) study"]
  },
  {
    question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
    correct_answer: "(A) keeps",
    incorrect_answers: ["(B) keep", "(C) keeping", "(D) to keep"]
  },
  {
    question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
    correct_answer: "(D) It is",
    incorrect_answers: ["(A) That is", "(B) There is", "(C) I am"]
  },
  {
    question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
    correct_answer: "(B) watching",
    incorrect_answers: ["(A) watch", "(C) watched", "(D) watches"]
  },
  {
    question: "The English singing contest is coming next week. We need ________ after school.",
    correct_answer: "(D) to practice",
    incorrect_answers: ["(A) practicing", "(B) to be practiced", "(C) practiced"]
  },
  {
    question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No, I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
    correct_answer: "(C) five to ten",
    incorrect_answers: ["(A) five to twelve", "(B) half past nine", "(D) half past five"]
  },
  {
    question: "Alice: Noah, thank you for _____ a true friend when I have a very hard time.<br>Noah: You’re welcome. That’s what friends are for!",
    correct_answer: "(C) being",
    incorrect_answers: ["(A) be", "(B) to be", "(D) been"]
  },
  {
    question: "Daniel: Who left the trash here?<br>Mike: A few students _______ here at this time yesterday. I think it was them.",
    correct_answer: "(D) were eating",
    incorrect_answers: ["(A) eat", "(B) was eating", "(C) eats"]
  },
  {
    question: "Karen: My mom always tells me, “It’s not good ________ yourself for someone else.”<br>Ms. Lin: I agree. Sometimes, we should follow our own way.",
    correct_answer: "(A) to change",
    incorrect_answers: ["(B) to be changed", "(C) changing", "(D) change"]
  },
  {
    question: "Lily: What was Jessie doing during cleaning time yesterday?<br>Anita: She ______ the window.",
    correct_answer: "(D) was wiping",
    incorrect_answers: ["(A) is wiping", "(B) wipes", "(C) wipe"]
  },
  {
    question: "After Emily watched a video about Kinmen, she was surprised by the beautiful view and _______ there in winter vacation.",
    correct_answer: "(A) hoped to visit",
    incorrect_answers: ["(B) learned to visit", "(C) hated to visit", "(D) stopped to visit"]
  },
  {
    question: "Miss Lin: _____ you cleaning the classroom at seven twenty this morning?<br>Ben: Yes, I was.",
    correct_answer: "(B) Were",
    incorrect_answers: ["(A) Was", "(C) Did", "(D) Are"]
  },
  {
    question: "_____ English songs is one of the good ways to learn English.",
    correct_answer: "(A) Listening to",
    incorrect_answers: ["(B) Listen", "(C) To listen", "(D) Listening"]
  },
  {
    question: "Gina enjoys _____ Chinese, and she wants ______ a great teacher like Confucius.",
    correct_answer: "(A) teaching; to be",
    incorrect_answers: ["(B) teaching; being", "(C) to teach; to be", "(D) to teach; being"]
  },
  {
    question: "Do you have any plan ______ the weekend? I am thinking about ______ a movie on Sunday.",
    correct_answer: "(C) for; to see",
    incorrect_answers: ["(A) on; to see", "(B) on; go to", "(D) for; seeing"]
  },
  {
    question: "Thank you for _____ so many clothes to us. That’s very kind _____ you.",
    correct_answer: "(B) donating; of",
    incorrect_answers: ["(A) send; for", "(C) buying; of", "(D) to give; for"]
  },
  {
    question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
    correct_answer: "(B) goods",
    incorrect_answers: ["(A) channels", "(C) soldiers", "(D) success"]
  },
  {
    question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
    correct_answer: "(D) is waiting",
    incorrect_answers: ["(A) was waiting", "(B) waits", "(C) waited"]
  },
  {
    question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
    correct_answer: "(C) was taking",
    incorrect_answers: ["(A) took", "(B) is taking", "(D) takes"]
  },
  {
    question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
    correct_answer: "(B) died",
    incorrect_answers: ["(A) was dying", "(C) dies", "(D) die"]
  },
  {
    question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
    correct_answer: "(C) studying",
    incorrect_answers: ["(A) to study", "(B) studied", "(D) study"]
  },
  {
    question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
    correct_answer: "(A) keeps",
    incorrect_answers: ["(B) keep", "(C) keeping", "(D) to keep"]
  },
  {
    question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
    correct_answer: "(D) It is",
    incorrect_answers: ["(A) That is", "(B) There is", "(C) I am"]
  },
  {
    question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
    correct_answer: "(B) watching",
    incorrect_answers: ["(A) watch", "(C) watched", "(D) watches"]
  },
  {
    question: "The English singing contest is coming next week. We need ________ after school.",
    correct_answer: "(D) to practice",
    incorrect_answers: ["(A) practicing", "(B) to be practiced", "(C) practiced"]
  },
  {
    question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No, I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
    correct_answer: "(C) five to ten",
    incorrect_answers: ["(A) five to twelve", "(B) half past nine", "(D) half past five"]
  },
  {
    question: "Alice: Noah, thank you for _____ a true friend when I have a very hard time.<br>Noah: You’re welcome. That’s what friends are for!",
    correct_answer: "(C) being",
    incorrect_answers: ["(A) be", "(B) to be", "(D) been"]
  },
  {
    question: "Daniel: Who left the trash here?<br>Mike: A few students _______ here at this time yesterday. I think it was them.",
    correct_answer: "(D) were eating",
    incorrect_answers: ["(A) eat", "(B) was eating", "(C) eats"]
  },
  {
    question: "Karen: My mom always tells me, “It’s not good ________ yourself for someone else.”<br>Ms. Lin: I agree. Sometimes, we should follow our own way.",
    correct_answer: "(A) to change",
    incorrect_answers: ["(B) to be changed", "(C) changing", "(D) change"]
  },
  {
    question: "Lily: What was Jessie doing during cleaning time yesterday?<br>Anita: She ______ the window.",
    correct_answer: "(D) was wiping",
    incorrect_answers: ["(A) is wiping", "(B) wipes", "(C) wipe"]
  },
  {
    question: "After Emily watched a video about Kinmen, she was surprised by the beautiful view and _______ there in winter vacation.",
    correct_answer: "(A) hoped to visit",
    incorrect_answers: ["(B) learned to visit", "(C) hated to visit", "(D) stopped to visit"]
  },
  {
    question: "Miss Lin: _____ you cleaning the classroom at seven twenty this morning?<br>Ben: Yes, I was.",
    correct_answer: "(B) Were",
    incorrect_answers: ["(A) Was", "(C) Did", "(D) Are"]
  },
  {
    question: "_____ English songs is one of the good ways to learn English.",
    correct_answer: "(A) Listening to",
    incorrect_answers: ["(B) Listen", "(C) To listen", "(D) Listening"]
  },
  {
    question: "Gina enjoys _____ Chinese, and she wants ______ a great teacher like Confucius.",
    correct_answer: "(A) teaching; to be",
    incorrect_answers: ["(B) teaching; being", "(C) to teach; to be", "(D) to teach; being"]
  },
  {
    question: "Do you have any plan ______ the weekend? I am thinking about ______ a movie on Sunday.",
    correct_answer: "(C) for; to see",
    incorrect_answers: ["(A) on; to see", "(B) on; go to", "(D) for; seeing"]
  },
  {
    question: "Thank you for _____ so many clothes to us. That’s very kind _____ you.",
    correct_answer: "(B) donating; of",
    incorrect_answers: ["(A) send; for", "(C) buying; of", "(D) to give; for"]
  },{
    question: "Eating vegetables and getting enough sleep _____ good _____ your health.",
    correct_answer: "(A) is; for",
    incorrect_answers: ["(B) is; at", "(C) are; for", "(D) are; at"]
  },
  {
    question: "The teacher told his students _____ the art works(藝術品) in the museum.",
    correct_answer: "(A) not to touch",
    incorrect_answers: ["(B) don’t touch", "(C) not touching", "(D) no touch"]
  },
  {
    question: "The Browns _____ in the living room when the mailman rang the doorbell yesterday.",
    correct_answer: "(D) were watching TV",
    incorrect_answers: ["(A) watch TV", "(B) watching TV", "(C) are watching TV"]
  },
  {
    question: "Stop _____ here, boys. You are giving me a headache. Now, go back to your room and read some books.",
    correct_answer: "(C) shouting",
    incorrect_answers: ["(A) to shout", "(B) shout", "(D) shouted"]
  },
  {
    question: "Everyone _____ for the relay race (大隊接力) because we all want to win.",
    correct_answer: "(D) keeps practicing",
    incorrect_answers: ["(A) need to practice", "(B) keep to practice", "(C) needs practicing"]
  },
  {
    question: "_____ up now. It’s seven thirty, and you are late for school again.",
    correct_answer: "(B) Get",
    incorrect_answers: ["(A) Getting", "(C) To get", "(D) Gets"]
  },
  {
    question: "_____ up early tomorrow morning, you need to go to bed now.",
    correct_answer: "(C) To get",
    incorrect_answers: ["(A) Getting", "(B) Get", "(D) Gets"]
  },
  {
    question: "_____ up early on cold days is not easy for my little brother.",
    correct_answer: "(A) Getting",
    incorrect_answers: ["(B) Get", "(C) To getting", "(D) Gets"]
  },
  {
    question: "Mom: It’s time for bed, Dan. Go brush your teeth and _____.<br>Dan: OK, Mom.",
    correct_answer: "(A) hit the sack",
    incorrect_answers: ["(B) hit the books", "(C) hit the road", "(D) hit the bottle"]
  },
  {
    question: "Choose the CORRECT sentence. (選出正確的句子)",
    correct_answer: "(D) J.K. Rowling’s books are popular all over the world.",
    incorrect_answers: [
      "(A) John hurted his right hand yesterday.",
      "(B) He needs to eat the medicine three times a day.",
      "(C) The water isn’t enough clean. Don’t drink it."
    ]
  },
  {
    question: "My family were having dinner when the bad guy __________ in the restaurant. I often think of that scary moment now.",
    correct_answer: "(D) was going",
    incorrect_answers: ["(A) went", "(B) goes", "(C) is going"]
  },
  {
    question: "Samuel: Start your car now. The show is at 7:20. We’re late.<br>Roger: Be cool! It’s __________. We have thirty minutes before it starts.",
    correct_answer: "(A) twenty after six",
    incorrect_answers: ["(B) a quarter to eight", "(C) ten to seven", "(D) seven o’clock"]
  },
  {
    question: "__________ a lot of fun for students to camp in the mountains with classmates or friends.",
    correct_answer: "(B) It is",
    incorrect_answers: ["(A) They are", "(C) This is", "(D) We have"]
  },
  {
    question: "Sandy: When the earthquake happened, Dad and I were at home. Where were you?<br>Tim: On the street. I __________ home then and saw the shaking buildings and trees around me. That was terrible.",
    correct_answer: "(D) was going",
    incorrect_answers: ["(A) went", "(B) go", "(C) am going"]
  },
  {
    question: "__________ a successful singer was always Stefani’s dream, and she worked so hard for it.",
    correct_answer: "(A) Being",
    incorrect_answers: ["(B) Doing", "(C) Became", "(D) To make"]
  },
  {
    question: "Scott: Do you need some water? You have a __________ in your throat.<br>Julian: Yes. Thanks. I sang with my friends all night long and lost my voice.",
    correct_answer: "(B) frog",
    incorrect_answers: ["(A) sheep", "(C) pumpkin", "(D) boss"]
  },
  {
    question: "__________ lending your hand to others, and __________ friends may not be that hard for you.",
    correct_answer: "(A) Try; making",
    incorrect_answers: ["(B) Enjoy; make", "(C) Trying; making", "(D) To enjoy; to make"]
  },
  {
    question: "A windy October is a great time for ___________ kites with the kids in your family.",
    correct_answer: "(C) to fly",
    incorrect_answers: ["(A) fly", "(B) flying", "(D) flies"]
  }

  ];
  