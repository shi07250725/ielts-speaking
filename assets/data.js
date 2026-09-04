/* ============================================================
   雅思口语题库 · 数据文件（你只需要改这个文件）
   ------------------------------------------------------------
   填写规则：
   1. 每个 { } 是一个话题，用英文逗号分隔，最后一个不要加逗号。
   2. fields 说明：
      id       唯一标识，用英文短横线，不要重复（用于网址）
      part     1 或 2：日常问答写 1，话题卡写 2
      category 类别标签：Part1 统一「日常生活」；Part2 为 人物 / 物品 / 地点 / 事件
      status   题目身份：必备题 / 新题 / 改编题 / 保留题
      month    所属月份（5~12），5-8 归「5-8月」，9-12 归「9-12月」
      title    英文题目
      titleCn  中文题目（可不写）
      card     Part 2：题卡整段提示（You should say: ...）
      sampleAnswer  Part 2：一整段范文（2 分钟演讲全文）
      questions Part 1：问题数组 [{ q, qCn?, a }]
      part3     Part 2 附带的深入讨论 [{ q, a }]
      date     录入日期 "2026-09-01"（可不写）
      note     备注（可不写）
      media    录音/视频（可选，见文件末尾示例）
   3. 高分表达：在 a / sampleAnswer 文本里用 [[英文|中文释义]] 包起来即可自动高亮。
   4. 录音/视频：文件放 media/ 文件夹，media 字段写法：
        media: "media/xxx.mp3"
        media: { file: "media/xxx.mp3", label: "示范朗读" }
        media: [ { file, label }, ... ]
   ============================================================ */

window.QUESTION_BANK = {
  "year": 2026,
  "updated": "2026-09-01",
  "periods": [
    {
      "label": "9-12月",
      "months": [
        9,
        10,
        11,
        12
      ]
    },
    {
      "label": "5-8月",
      "months": [
        5,
        6,
        7,
        8
      ]
    }
  ],
  "updates": [
    {
      "date": "2026-09-04",
      "text": "新增 52 个保留题（沿用 5-8 月新题及范例答案）"
    },
    {
      "date": "2026-09-04",
      "text": "新增 3 个话题（Part 2&3 3 个）"
    },
    {
      "date": "2026-09-03",
      "text": "为 6 个话题补充了范例答案"
    },
    {
      "date": "2026-09-03",
      "text": "新增 7 个话题（Part 1 1 个 · Part 2&3 6 个）"
    },
    {
      "date": "2026-09-02",
      "text": "新增 15 个话题（Part 1 5 个 · Part 2&3 10 个）"
    },
    {
      "date": "2026-09-01",
      "text": "上线 9-12 月题库，新增 22 个话题（含 5 个必备题）"
    }
  ],
  "topics": [
    {
      "id": "p1-study",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 5,
      "title": "Study",
      "titleCn": "学习",
      "questions": [
        {
          "q": "Do you work or are you a student?",
          "a": "I'm a student at Tsinghua University in Beijing. I'm a student, and I'm a freshman in Tsinghua University. I'm a student, a high school student."
        },
        {
          "q": "What subject are you studying?",
          "a": "I'm studying for a Master's degree in Tsinghua University, specializing in the field of Math Studies."
        },
        {
          "q": "Why did you choose that subject?",
          "a": "I chose math because I liked it in high school. I was always strong in math and science, so it seemed like a natural progression. Also, I did some research on career opportunities, and it seemed to be a subject with a promising future."
        },
        {
          "q": "What would you like to do in the future?",
          "a": "I would love to be a teacher. Most of the women in my family are teachers, they have a huge impact on my life. I think it is wonderful to get to change people's lives by what I say or do on the stage. It requires a person to be responsible and caring, and I want to be such a person."
        },
        {
          "q": "What are the most popular subjects in China?",
          "a": "It's hard to say nowadays. You know, due to the globalization, our country is much more developed than ever. Every subject has something to offer to the society. Students just choose their subjects based on what they are interested in, which then, in turn, can become a trend."
        },
        {
          "q": "Do you think it's important to choose a subject you like?",
          "a": "Definitely! I think interest is the best motivator, if I choose something I'm keen on, I will be willing to sacrifice my leisure time because it is a worthwhile sacrifice to me. In addition, when I face some difficulties, I will do my best to overcome the problems. Quitting in the middle will never be an option. We should consider carefully our choice from the start, rather than carelessly choosing the wrong path, then regretting it."
        },
        {
          "q": "Are you looking forward to working?",
          "a": "I have been wanting to work full time, that's for sure. I can now imagine myself waking up early in the morning, getting my business attire on and sitting behind my office desk. I wonder how it feels to work with other professionals and with the boss always around… It could be stressful but interesting, I guess. The best part I would say would be to finally receive a salary and spend my own money. I would not have to bother my parents then. But, like most things in life, it really depends on what the job is and whether the environment is positive or not."
        },
        {
          "q": "Do you like your subject? (Why? / Why not?)",
          "a": "Honestly, I don't. I am halfway through my college career. But reality struck me when the material we learned in class was much more difficult and the assignments weren't fun. I'm thinking about changing my own major now."
        },
        {
          "q": "Do you prefer to study in the mornings or in the afternoons?",
          "a": "I am not a morning person, I'm afraid. But to be honest, studying in the afternoon is even worse. I get really sleepy from one to four in the afternoon. So, actually, my brain is at its best in the evening. It works better then. I can stay sharp even until very late at night."
        },
        {
          "q": "Is your subject interesting to you?",
          "a": "Absolutely. I find computer science really stimulating. Imagine creating something useful just using codes and numbers. It requires a good level of imagination and quite a good level of number skills, critical thinking and logic skills as well as a keen ability to solve problems."
        },
        {
          "q": "Is there any kind of technology you can use in study?",
          "a": "For studying I use a computer and my phone. I often download research papers and read them on my phone and make notes onto the notes section of my phone too. I use my computer to actually write essays and do other homework tasks."
        },
        {
          "q": "What kind of learning method helps you?",
          "a": "Well, I am not so familiar with different learning methods, but off the top of my head, I'd say that collaborative project work in groups with classmates is something that I really benefit from – more so than sitting at individual desks reciting stuff, anyway."
        },
        {
          "q": "How many hours a week do you study for?",
          "a": "I probably study alone, after university, for maybe around 15 hours a week, but it depends on the time of year. Closer to exams, I study more, during the summer, I study a lot less!"
        },
        {
          "q": "Is there any difference between the study life of you and your parents?",
          "a": "Well, I'm not entirely sure about what my parents' study life was like when they were in school, but I think it was a lot more traditional – they didn't have multimedia (like computers, or videos) in the classrooms, and they certainly had a stricter learning environment."
        },
        {
          "q": "Where is your school?",
          "a": "My school is located in the heart of Beijing, the capital of China. It's situated in a bustling area with convenient transportation, surrounded by many shops, restaurants and recreational facilities. The location is ideal for students as it provides easy access to various resources and opportunities in the city."
        },
        {
          "q": "Do you like your school?",
          "a": "Absolutely! I'm really fond of my school. It has top-notch facilities, a beautiful campus environment, and most importantly, a strong academic atmosphere. The faculty members are highly knowledgeable and supportive, always encouraging us to pursue our interests. Moreover, the school offers a wide range of extracurricular activities, allowing me to develop my skills and make life-long friends."
        },
        {
          "q": "Is there anything you want to change about your school?",
          "a": "While I'm quite satisfied with my school overall, there is one aspect I would like to see improved, which is the limited space in some classrooms. During peak hours, it can get a bit crowded and stuffy. If the school could expand some of the classrooms or better utilize the existing space, it would create a more comfortable learning environment for students."
        },
        {
          "q": "Do you think your school is a good place to study?",
          "a": "Yes, I believe my school is an excellent place to study. It offers a supportive learning environment, well-qualified teachers, and a wide range of resources that cater to diverse learning styles. Additionally, the emphasis on both academic and personal development prepares students effectively for future challenges."
        },
        {
          "q": "What is the environment like at your school?",
          "a": "The environment at my school is very supportive and encouraging. Students are motivated by both peers and teachers to strive for excellence while being provided with the guidance needed to reach their potential."
        },
        {
          "q": "How important is interest in study?",
          "a": "Interest in study is essential as it directly influences motivation and engagement. A genuine interest in what one is studying can lead to deeper understanding, increased productivity, and overall better academic results."
        },
        {
          "q": "Which subject do you find challenging?",
          "a": "I find Physics quite challenging, primarily due to its complex concepts and theories that require a strong grasp of both mathematics and abstract reasoning. However, overcoming these challenges is incredibly rewarding."
        }
      ]
    },
    {
      "id": "p1-work",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 5,
      "title": "Work",
      "titleCn": "工作",
      "questions": [
        {
          "q": "What work do you do?",
          "a": "I am a teacher at a high school. I started working there in Jan 2015 after graduating from college. I would say it is a pretty challenging job."
        },
        {
          "q": "Why did you choose to do that type of job?",
          "a": "Teaching is my passion. I don't view my career as a \"job\" per say. I see it more as my calling in life. It is my life's purpose."
        },
        {
          "q": "Do you like your job?",
          "a": "Definitely! I enjoy the variety and special projects where I can take ownership of the final product. My job provides me with both, so yes, it is a good job and I find it very rewarding. I'm not interested in my job… because it is so mundane and repetitive, two traits I despise and try to stay away from. I hope to find a better job that challenges me to aspire to new heights."
        },
        {
          "q": "Do you miss being a student?",
          "a": "I definitely do! Sometimes I just wonder what would have happened if I had studied harder when I was in university. I just miss the days when I had nothing to worry about but the exams. Now, all the pressure from work and family is difficult to deal with."
        },
        {
          "q": "Is it very interesting?",
          "a": "Most of the time, yes! The daily challenges from new projects provide constant opportunities to learn new things and to some extent re-invent myself. Every day is unique. My colleagues provide me with support but also healthy competition. I find my job most interesting when I am challenged to reach outside of my comfort zone."
        },
        {
          "q": "Is there any kind of technology you use at work?",
          "a": "I use mainly a laptop computer and my phone at work. Sometimes I also use a photocopier scanner, and a video camera if I'm making short promotional videos with my company. But mainly, I just use a computer."
        },
        {
          "q": "Can you manage your time well when you work?",
          "a": "Yes, I am a project manager in my office, so I am quite good at managing my time and the other people's time on the team. I've worked as an IT manager for several years now."
        },
        {
          "q": "Who helps you most at work?",
          "a": "My team members – I have a great team and they are all hardworking, supportive, smart and attentive to the needs of others and the project goals."
        },
        {
          "q": "How many hours a week do you work for?",
          "a": "I work for about 40 hours a week – at least that is what my contract stipulates, but in reality I would say that I work almost 60 hours a week because I do a lot of extra stuff for my team, and end up taking on more projects outside of my normal scope of work – pretty often, actually."
        },
        {
          "q": "Do you currently have a good work environment?",
          "a": "Yes, I'm fortunate to have a very supportive work environment. It is collaborative and encourages open communication, which I find essential for personal and professional growth. The management also prioritizes employee well-being, which enhances productivity and overall job satisfaction."
        },
        {
          "q": "What do you think could be improved at your workplace?",
          "a": "One area for improvement could be enhancing the flexibility of work hours and remote work options. Increasing flexibility could help accommodate the diverse needs of all employees, leading to improved work-life balance."
        },
        {
          "q": "Have you ever thought about changing jobs?",
          "a": "While I am generally satisfied with my current position, I have considered changing jobs to seek new challenges and opportunities for professional growth. Exploring different roles and industries can provide valuable experiences and broaden my skill set."
        },
        {
          "q": "What do you think would be challenging when you start working in the future?",
          "a": "Adapting to the rapid pace of technological change in the workplace will likely be a challenge. Keeping up with new tools, systems, and industry standards will require continuous learning and adaptability."
        },
        {
          "q": "Is there a place in your company that makes you feel relaxed?",
          "a": "Yes, we have a quiet lounge area that is filled with plants and comfortable seating. It's a great spot to take a break and recharge, away from the usual hustle and bustle of the office environment."
        },
        {
          "q": "What are the advantages of a company having a relaxation room?",
          "a": "A relaxation room in a company can significantly boost employee morale and productivity. It provides a space for employees to unwind and destress, which is crucial for maintaining mental health. Additionally, such spaces can enhance creativity, as taking breaks in a relaxed setting allows employees to return to their tasks with a fresh perspective and renewed energy."
        }
      ]
    },
    {
      "id": "p1-hometown",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 5,
      "title": "Hometown",
      "titleCn": "家乡",
      "questions": [
        {
          "q": "Has your hometown changed much these years?",
          "a": "Absolutely! Take traffic as an example, the most common transport facility used to be buses, it could be really crowded sometimes since people didn't have any other options. However, today, BRT and subway systems have made people's lives easier than ever."
        },
        {
          "q": "Is that a big city or a small place?",
          "a": "This city is so huge. I often get lost here. Like the other day, I travelled to a new neighborhood that had this restaurant people were raving about. I made a wrong turn and it took me 20 minutes to figure out where I was."
        },
        {
          "q": "How long have you been living here?",
          "a": "For about half my life, so that is about 10 years. I went to school here, and now I'm working in the same city. In fact, time has gone by really quickly because so there's so much to do here and I've been so active."
        },
        {
          "q": "For you, what benefits are there living in a big city?",
          "a": "Well, first of all, there are a great number of opportunities for both education and job-hunting in big cities, which explains why people from small cities, towns and villages are flooding to big cities nowadays. Plus, the fact that cities offer more modern facilities and conveniences makes them even more attractive to people."
        },
        {
          "q": "Is there anything you dislike about it?",
          "a": "Unfortunately, this city has a huge problem with pollution, especially air pollution. The air is so contaminated that we all have to wear masks every time we go out of the house. This problem has escalated to a serious level that it's been catching the attention of the international community. I hope that the government will be able to save this city before the problem gets worse."
        },
        {
          "q": "What do you like most about your hometown?",
          "a": "What I love the most about it is the mystery. I mean there are so many places inside this city that I have yet to explore. I could spend years checking out every restaurant and attraction Beijing has to offer."
        },
        {
          "q": "Where in your country do you live?",
          "a": "I live in Beijing. However, since the city is so big, it would take hours to even scratch the surface, but to sum it up, Beijing is the political and cultural heart, and one of the major economic centers of the world today."
        }
      ]
    },
    {
      "id": "p1-accommodation",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 5,
      "title": "Accommodation",
      "titleCn": "住所",
      "questions": [
        {
          "q": "Are the transport facilities in your city very good?",
          "a": "Honestly, I wish they were better. I have to walk 20 minutes to the bus stop, and the subway takes another 30 minutes when I get to work. My dream home is a house located right next to a bus stop or subway terminal."
        },
        {
          "q": "Which room does your family spend most of the time in?",
          "a": "My family loves to stay in the living room as this is the only place in the flat where we can do a lot of things together. We play board games, watch films and TV programs. We play cards sometimes and we spend time working on huge puzzles together."
        },
        {
          "q": "Do you live in a house or a flat?",
          "a": "I live in a flat, and my flat is situated in a quiet little neighborhood on the north side of city. My parents first moved there in 2000 when they wanted to start a new life and raise a family."
        },
        {
          "q": "Do you plan to live here for a long time?",
          "a": "Not really! I want to blaze my own trail and live in a place that forces me to reach out and meet new people. I was thinking about moving to Shanghai for a few days to gain a bit more cultural experience of the world."
        },
        {
          "q": "Do you live alone or with your family?",
          "a": "I'm a student at the moment, and I live with my parents. Actually I quite like it, because my mother is the best cook that I know - it's always wonderful to have a tasty meal after a day of school work. We also talk about our days with each other while we're enjoying dinner, it just feels good."
        },
        {
          "q": "How long have you lived there?",
          "a": "I've lived there for three years and I really love my place. Since it's on the 11th floor, it's well ventilated and there is plenty of sunshine. I love to sink into the soft sofa to watch TV and eat snacks. There's a large shopping centre within 5 minutes' walk so it's very convenient for me to go shopping, watch movies and eat out. I wish it was my apartment."
        },
        {
          "q": "What do you usually do in your house/flat/room?",
          "a": "At weekends, I spend most of my time studying and sleeping in my room. On weekdays, I spend time in the kitchen, baking some cakes or sweet stuff for my mother. Sometimes, we watch films in the living room. On Sundays, we usually clean the house and do some laundry."
        },
        {
          "q": "Which is your favourite room in your home?",
          "a": "I think it must be my bedroom. My bedroom is not that big but quite neat. There are some posters of Kobe Bryant on the wall because he is my favorite basketball player. My room is kind of a private space for me - I usually play some video games, do my homework and play the guitar in it."
        },
        {
          "q": "What's the difference between where you are living now and where you lived in the past? (If you",
          "a": "I have not moved home at all. I have lived in the same flat since I was born. I love our small place. I have a lot of good memories here, and I treasure them. I'd happily stay here for many more years."
        },
        {
          "q": "What can you see when you look out the window of your room?",
          "a": "I can see the whole community from my window. In the morning, people are going to school or work, everyone is in a hurry. However, in the evening, it is not that fast-paced anymore. I can see parents taking a walk after dinner and children playing games in the neighborhood."
        },
        {
          "q": "Would you be willing to live in the countryside in the future?",
          "a": "In the future, probably. There is a peacefulness I enjoy when visiting the countryside. People there are friendly and always willing to start a conversation. I think when I retire, living in the countryside is a nice option to me."
        }
      ]
    },
    {
      "id": "p1-the-area-you-live-in",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 5,
      "title": "The area you live in",
      "titleCn": "你居住的区域",
      "questions": [
        {
          "q": "Do you like the area that you live in now?",
          "a": "Yes, I like the area where I live. Since I have lived there for a long time it makes me feel comfortable. There is a saying: \"Home is where the heart is\". My family lives there and we enjoy each other's company so my heart is there. I like the phrase from one old movie: \"There's no place like home.\""
        },
        {
          "q": "Do you think the area you live in now is suitable for people of all ages?",
          "a": "Yes, most certainly. I think that I am very lucky to be living in a very central area of my city, close to great public transport facilities, and quite a few entertainment and leisure options too. There are a few malls nearby, with fantastic restaurants in, lots of shops, a gym, which I go to every day almost, a swimming centre which I attend with my family on weekends, and there's quite a few nice parks within a short walking distance too. So, yeah, it's a great area. In addition, the community I live in has a nice garden too."
        },
        {
          "q": "Are people in your area friendly?",
          "a": "I wouldn't say people in my area are especially friendly, or unfriendly, really. They are alright, I suppose. I thought they were relatively friendly, before I went to Spain on holiday and found how friendly and happy people seemed to be in service interactions, in the streets, on public transport, and so on, there in Spain. When I came back to my city and my area, I started to think that people were a bit rude, grumpy and not so helpful when you need them to be. So, I have a sort of neutral stance on this – I guess it depends on what you compare my area, my city or my culture with, as to whether you assess that the people are friendly or not."
        },
        {
          "q": "How has your area changed in recent years?",
          "a": "Some positive changes are that the pollution is getting better. It was a lot worse a few years ago. Recently, the government has made some changes to the factories nearby you see. This has had a positive effect on the air quality. Some negative changes are: first, there are too many public bikes such as OFO and Mobike. They clog the sidewalks and there isn't enough room for pedestrians to walk sometimes. Secondly, there are not enough taxis. It is very difficult to get a taxi if you are in a hurry or it is raining."
        },
        {
          "q": "Do you know any famous people in your area?",
          "a": "In my district of my city, I don't know any famous people. I think famous people tend to live away from the crowds in China, in places where they will be left alone and not bothered by people or the press."
        },
        {
          "q": "Where do you like to go in your area?",
          "a": "I like to go shopping and hang out with my friends. When the weather is nice, I like to go to the park and enjoy the nature. It makes me feel refreshed. When my friends go with me it is even better."
        }
      ]
    },
    {
      "id": "p1-public-gardens-and-parks",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Public gardens and parks",
      "titleCn": "公园",
      "questions": [
        {
          "q": "Did you like going to parks as a child?",
          "a": "Yeah, definitely! I used to go to the park near my home almost every weekend with my parents. We'd fly kites, have picnics, that kind of thing. It was really the highlight of my week back then — just running around outside with no worries at all."
        },
        {
          "q": "Do you still like going to parks now?",
          "a": "Yeah, I still do, though not as often. You know, life gets busy. But whenever I get the chance, I love just sitting on a bench, listening to the birds, maybe reading a book. It's a really good way to unwind, especially after a stressful week."
        },
        {
          "q": "Would you like to see more parks in your city?",
          "a": "Oh, absolutely. I think cities can feel really overwhelming sometimes, so having more green spaces would make a huge difference. It gives people a place to relax, exercise, or just breathe some fresh air. I feel like more parks would genuinely make the city a happier place to live."
        },
        {
          "q": "Are there any parks you want to go to in the future?",
          "a": "Well, I've actually heard a lot about Central Park in New York — it just looks incredible in photos and movies. I'd love to go for a walk there someday and see it for myself. There's also a bamboo forest park in Japan I came across online that looks really peaceful and beautiful."
        },
        {
          "q": "Would you prefer to play in a personal garden or public garden?",
          "a": "I'd probably go for a personal garden, honestly. It's just more peaceful — no crowds, no noise. You can do whatever you want without worrying about other people. But I get that not everyone has that luxury, so public parks are a great alternative too."
        },
        {
          "q": "How are the parks today different from those you visited as a kid?",
          "a": "I think they're much better now. There are more facilities — like outdoor gyms, better playgrounds, cleaner paths. When I was little, parks were pretty basic. Now they feel a lot more well-maintained and designed for all ages, not just kids."
        },
        {
          "q": "What do you like to do when visiting a park?",
          "a": "I usually just take a slow walk and enjoy the fresh air. Sometimes I'll bring a book and sit somewhere quiet. If I'm with friends, we might throw a frisbee or just sit on the grass and chat. It's my go-to way to unwind."
        }
      ]
    },
    {
      "id": "p1-cars",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Cars",
      "titleCn": "汽车",
      "questions": [
        {
          "q": "Did you enjoy traveling by car when you were a kid?",
          "a": "Yeah, I loved it! I'd sit by the window and watch everything go by. My parents would play music and we'd chat the whole way. It always felt like a little adventure, even for short trips."
        },
        {
          "q": "What types of cars do you like?",
          "a": "I'm not really a car person, but I do love SUVs — they're spacious and comfortable. I'm also into electric cars lately because of all the cool tech features. I guess I care more about comfort than looks, honestly."
        },
        {
          "q": "Do you prefer to be a driver or a passenger?",
          "a": "Definitely a passenger. I can just sit back, listen to music, or take a nap. Driving requires full concentration the whole time, which is pretty tiring. So yeah, being a passenger is just way more relaxing for me."
        },
        {
          "q": "What do you usually do when there is a traffic jam?",
          "a": "I usually put on some music or a podcast. Sometimes I'll just scroll through my phone or daydream a bit. It's annoying, but I've kind of learned to just accept it and make the most of the time."
        },
        {
          "q": "Do you think car colours are important?",
          "a": "Not hugely, but I think colour does reflect personality a bit. Like, a red car gives off a very different vibe from a white one. Personally, I'd go for dark blue or grey — it just looks clean and timeless."
        },
        {
          "q": "Will you buy an expensive car in the future?",
          "a": "Maybe, if I can afford it! I wouldn't make it a top priority though. I'd rather spend money on travel or experiences. But if I ever do buy one, I'd want something comfortable and reliable rather than just flashy. Practicality matters more to me than showing off, honestly."
        }
      ]
    },
    {
      "id": "p1-shopping",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Shopping",
      "titleCn": "购物",
      "questions": [
        {
          "q": "Do you like shopping?",
          "a": "Not really. I find shopping a bit of a drag to be honest. I don't like going around stores and shops looking at clothes and things. I much prefer to look at things casually on my phone and order things online, but even then I don't really enjoy it much. I'm not someone who gets much pleasure from shopping really."
        },
        {
          "q": "How often do you go shopping?",
          "a": "About once every couple of weeks, I think. Of course, to buy food, I will go to the supermarket or a market about once a week, but that's just to buy some essentials – but clothes shopping or shopping for pleasure, I don't do that often. Yes, about once a fortnight I'd say, on average."
        },
        {
          "q": "Do you prefer online shopping or in-store shopping?",
          "a": "Honestly, I prefer online shopping most of the time. It's just so convenient — you can browse and compare prices without leaving home. But for things like clothes or shoes, I'd rather try them on in store first. So I guess it really depends on what I'm buying."
        },
        {
          "q": "Have you ever returned anything you bought online?",
          "a": "Yeah, actually. I once ordered a jacket and it looked completely different from the photos — the colour was way off. So I had to send it back, which was kind of a hassle. Since then I've been a lot more careful about reading reviews before buying anything online."
        }
      ]
    },
    {
      "id": "p1-watches",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Watches",
      "titleCn": "手表",
      "questions": [
        {
          "q": "Do you wear a watch?",
          "a": "Yes, I wear a watch – I have a smart watch which I wear all the time. I use the watch to set calendar reminders, send short messages, make quick calls and make notes, as well as monitor my health stats and daily steps."
        },
        {
          "q": "Have you ever got a watch as a gift?",
          "a": "Yes, the smart watch that I wear almost all the time – this was a gift from my uncle a few years ago."
        },
        {
          "q": "Why do some people wear expensive watches?",
          "a": "Some people genuinely appreciate a fine, precision-made watch, and others enjoy the status symbol of having an expensive watch. Some people care about both!"
        },
        {
          "q": "Do you think it is important to wear a watch? Why?",
          "a": "Well, not really essential these days since everyone has a phone. But I do think watches are still nice to have — they look stylish and save you from constantly pulling out your phone. Some people also wear them as a fashion statement. So it depends on the person, I guess."
        }
      ]
    },
    {
      "id": "p1-websites",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Websites",
      "titleCn": "网站",
      "questions": [
        {
          "q": "What kinds of websites do you usually use?",
          "a": "I use a number of websites very regularly. These are usually online shopping websites - two in particular. I buy a lot of things online - from clothes and shoes, to kitchen accessories and food and snacks."
        },
        {
          "q": "What is your favorite website?",
          "a": "My favourite website is one I do not use that often. It's a website dedicated to trainers... to sneakers... you know, sporty shoes. I love trainers. So, when I need a new pair I always go to this particular website which has more unique styles and combinations of colours and designs."
        },
        {
          "q": "Are there any changes about the websites you usually use?",
          "a": "Websites have recently become a lot more user-friendly, slicker, smoother, easier to use and more secure in terms of how they protect your personal data."
        },
        {
          "q": "What kinds of websites are popular in your country?",
          "a": "Just like I mentioned, shopping websites. These are most certainly the most popular websites in my country. Everyone buys things online - it's convenient, reliable and you can buy pretty much anything you need from several online companies."
        }
      ]
    },
    {
      "id": "p1-tidiness",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Tidiness",
      "titleCn": "整洁",
      "questions": [
        {
          "q": "Do you like to keep things tidy?",
          "a": "Yeah, I'd say I'm a fairly tidy person. I feel kind of uncomfortable when my space is messy — it actually makes it hard to focus. So I try to clean up regularly, especially my desk. It just makes me feel a lot more relaxed and in control."
        },
        {
          "q": "Did you use to keep your room tidy as a child?",
          "a": "Honestly, not really! My room was a total mess most of the time. Clothes everywhere, toys on the floor — my mum would constantly tell me to clean up. I think I only started caring about tidiness when I got older and lived on my own."
        },
        {
          "q": "How do you keep your work or study space tidy?",
          "a": "I try to do a quick tidy-up at the end of each day — just putting things back where they belong and clearing my desk. I also have a rule: if I'm not using it, it goes away. It sounds simple but it really helps keep things from piling up."
        },
        {
          "q": "Do you think that it is necessary to be tidy?",
          "a": "I'd say yes, to a reasonable degree. A tidy space just helps you think more clearly and saves time looking for things. But I don't think you need to be obsessive about it either. As long as you know where everything is, that's good enough, I think."
        }
      ]
    },
    {
      "id": "p1-mirrors",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Mirrors",
      "titleCn": "镜子",
      "questions": [
        {
          "q": "Do you like looking at yourself in the mirror?",
          "a": "I am not sure whether I like it or not, but I do it every day before I go out of the house. I need to check my face, my hair and make sure I am looking as presentable as possible before I head out to the office."
        },
        {
          "q": "Have you ever bought mirrors?",
          "a": "Yes, I have often bought little mirrors to take in my handbag, so I can check myself sporadically during the day. Perhaps before a meeting or after lunch, or if I am going from work to a dinner or something like that."
        },
        {
          "q": "Do you usually take a mirror with you?",
          "a": "Yes, I usually take a small mirror with me. However, in more recent years, I don't use it. I tend to use my mobile phone - many people do these days - you know, you put the camera on selfie mode, and then you can look at yourself just as if you are looking in a mirror."
        },
        {
          "q": "Would you use mirrors to decorate your room?",
          "a": "I have never used mirrors to decorate my living space, but I think it's a good idea. If you put mirrors in certain places in your house they can make it look bigger, or lighter or change the space in a positive way. So, yes, I would use mirrors to decorate my room, certainly."
        }
      ]
    },
    {
      "id": "p1-teachers",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Teachers",
      "titleCn": "老师",
      "questions": [
        {
          "q": "Do you remember your teachers from primary school?",
          "a": "Yes, I remember most of them quite well. I remember the ones I really liked, and I also remember the ones I really disliked! The motivating, humorous and inspiring teachers, as well as the strict, serious and critical teachers!"
        },
        {
          "q": "Do you have a favorite teacher?",
          "a": "Yes, it was my mathematics teacher. She was really good at making the subject interesting and she always gave real-life examples, and not just boring repetition drills, so I found I remembered what we learned in class much easier."
        },
        {
          "q": "Did you want to be a teacher when you were young?",
          "a": "I didn't really, no. I didn't really think about it, actually. I always had aspirations to go into business or the medical field. I was not really interested in teaching, and neither did I like the idea of dealing with classrooms full of children."
        },
        {
          "q": "What kinds of teacher do you prefer?",
          "a": "I prefer teachers that seem to be very sincere and 'human' – you know, the kinds of teachers that make a subject really seem inspiring and worth learning about. A good teacher, who has a sense of humour and the ability to inspire interest, can change your whole attitude to school!"
        },
        {
          "q": "Are you still in touch with your primary school teachers?",
          "a": "Not really, to be honest. I've lost touch with most of them over the years. I do follow one or two on social media, but we don't really chat. I think it's just natural to drift apart after you move on to a new school."
        },
        {
          "q": "In what way has your favourite teacher helped you?",
          "a": "Well, my favourite teacher was really encouraging. Whenever I felt like giving up, she'd remind me that making mistakes is part of learning. That really stuck with me. I think she gave me a lot more confidence, both in her subject and just in general."
        }
      ]
    },
    {
      "id": "p1-social-media",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Social media",
      "titleCn": "社交媒体",
      "questions": [
        {
          "q": "Have you ever posted anything on social media?",
          "a": "Yeah, all the time! I mostly post photos from trips or just random things I find funny. I use Instagram the most — it's a great way to share moments with friends. I don't really care about getting loads of likes though, I just post things I genuinely want to remember."
        },
        {
          "q": "When did you start to use social media?",
          "a": "I began using social media during my teenage years, around the age of 14."
        },
        {
          "q": "Do you think you spend too much time on social media?",
          "a": "I strive to maintain a healthy balance, ensuring I don't spend excessive time on social media, and I prioritize other activities in my daily routine."
        },
        {
          "q": "Do your friends use social media?",
          "a": "Yes, most of my friends are active on social media, and it serves as a primary means of staying connected and sharing updates."
        },
        {
          "q": "What do people do on social media?",
          "a": "People engage in various activities on social media, including sharing personal updates, connecting with friends, consuming content, and participating in discussions or online communities."
        }
      ]
    },
    {
      "id": "p1-ambition-and-dreams",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Ambition and dreams",
      "titleCn": "志向与梦想",
      "questions": [
        {
          "q": "What was your dream when you were a child?",
          "a": "When I was a child I had simple and accessible dreams I'd say - I wanted to be a teacher. I loved the idea of teaching children and sharing my thoughts and experiences in life with them. I always had this dream as a youngster."
        },
        {
          "q": "Are you the kind of person who never gives up on dreams?",
          "a": "I am the kind of person who persists, yes, at least with certain things. Because I have realistic dreams I always feel they are obtainable, so I make sure I put the necessary effort into making them come true. I rarely aim for things that I know I'm unable to attain."
        },
        {
          "q": "What is your main ambition in life now?",
          "a": "My main ambition in life, to be honest, is to maintain a stable, secure and simple happy life. I don't want to do anything especially fancy or amazing really. I enjoy the simple things in life, I'd say. Nice food, family and good friends and company on the weekends."
        },
        {
          "q": "Do you think you are an ambitious person?",
          "a": "That's a good question....Actually, I don't think I am that ambitious really. Usually in life I choose to do things which I find to be predominantly stable and secure, rather than especially ambitious or adventurous things - you know, when it comes to career and work choices as well."
        }
      ]
    },
    {
      "id": "p1-music",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Music",
      "titleCn": "音乐",
      "questions": [
        {
          "q": "Do you prefer sad or happy music?",
          "a": "Honestly, it depends on my mood. When I'm relaxing or feeling a bit down, I actually enjoy sad, slow songs — they're somehow comforting. But when I'm working out or need some energy, I'll go for upbeat stuff. So I don't really have a strong preference either way."
        },
        {
          "q": "Does happy music make you feel more excited?",
          "a": "Yeah, definitely! You know, when an upbeat song comes on, I just naturally want to move. It's like the energy of the music gets into you without even trying. I sometimes put on happy music while getting ready in the morning — it really helps me start the day on a good note."
        }
      ]
    },
    {
      "id": "p1-science",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Science",
      "titleCn": "科学",
      "questions": [
        {
          "q": "Do you like science?",
          "a": "Yes, I really enjoy science because it helps us understand the world around us. Science has the ability to explain natural phenomena, drive technological advancements, and improve our quality of life. It's fascinating to see how scientific discoveries shape our understanding and future."
        },
        {
          "q": "When did you start to learn about science?",
          "a": "I started learning about science in school in my first year. We had basic science lessons, in which we learned a bit about biology mainly, and some physics."
        },
        {
          "q": "Which science subject is interesting to you?",
          "a": "My favourite subject is physics now. That's because I'm really interested in space and the universe and I'm particularly good at mathematics. There's a lot of complex math in astrophysics and I find it really exciting."
        },
        {
          "q": "What kinds of interesting things have you done with science?",
          "a": "I've participated in several interesting science-related activities, including conducting experiments in school labs and participating in science fairs. One memorable project involved building a simple electric circuit, which sparked my interest in electronics and how devices work."
        },
        {
          "q": "Do you like watching science TV programs?",
          "a": "Absolutely, I find science TV programs very engaging and informative. Shows like \"Cosmos\" and \"Planet Earth\" not only provide deep insights into scientific topics but are also visually stunning and well-produced, making learning both fun and interesting."
        },
        {
          "q": "Do Chinese people often visit science museums?",
          "a": "Yes, visiting science museums is quite popular among Chinese people, especially families with children and school groups. These museums are designed to be interactive and educational, making science accessible and interesting for everyone. Large cities in China, such as Beijing and Shanghai, have well-known science museums that are frequently visited by both locals and tourists."
        }
      ]
    },
    {
      "id": "p1-singing",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Singing",
      "titleCn": "唱歌",
      "questions": [
        {
          "q": "Do you like singing?",
          "a": "I love singing. I thoroughly enjoy going to KTVs and singing on my own at home to music, too."
        },
        {
          "q": "Have you ever learnt how to sing?",
          "a": "No, not really. To be honest, I'm not very good at singing – I think I might be tone deaf, even. In school plays and performances I was never chosen to be one of the leading singers, and in KTV with friends, I usually try to keep a low profile and mouth the words – I really can't sing well."
        },
        {
          "q": "If you sing, who would you sing in front of?",
          "a": "I wouldn't want to sing for anyone – I'd be way too embarrassed and self-conscious. As I said, I'm a terrible singer! I would find it uncomfortable, so no, I would not sing for, or in front of anyone, if I could avoid it."
        },
        {
          "q": "Do you think singing can bring happiness to people?",
          "a": "I understand that singing, if you're good enough at it, can make people feel very happy. The person singing as well as those listening. Singing is a great form of musical expression, and there's nothing more lovely than the human voice. So, yes, it can bring happiness for sure."
        }
      ]
    },
    {
      "id": "p1-outer-space-and-stars",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Outer space and stars",
      "titleCn": "外太空与星星",
      "questions": [
        {
          "q": "Have you ever learnt about outer space and stars?",
          "a": "Yes, in school we learnt the basic things about space and the solar system. Also, I've seen a number of documentaries about the universe on television. I find the topic quite inspiring."
        },
        {
          "q": "Do you like science fiction movies? Why?",
          "a": "Yes, I'd say so, yes. I enjoy sci-fi films, although I don't think there are many really good ones. I also have seen a few TV series set in space which I've enjoyed."
        },
        {
          "q": "Do you want to know more about outer space?",
          "a": "Absolutely, I'm fascinated by outer space! The vastness, the mysteries it holds, and the potential for undiscovered planets and life forms spark my curiosity. Each new discovery about outer space feels like a piece of a cosmic puzzle being placed, and I'm eager to see the picture it will eventually reveal. It's like a never-ending story with the universe itself as the narrator."
        },
        {
          "q": "Do you want to go into outer space in the future?",
          "a": "Haha, no I don't think so. I've heard that some millionaires have actually signed up to go into the lower regions of space in space crafts, or orbit the earth, but I don't really have much of a fascination with this. To be honest, I think I'd be scared! I don't like heights!"
        }
      ]
    },
    {
      "id": "p1-clothes",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Clothes",
      "titleCn": "衣服",
      "questions": [
        {
          "q": "What kind of clothes do you often wear in daily life?",
          "a": "In my normal, everyday life, I usually wear jeans and a T-shirt, perhaps a skirt or a dress in summer. It really depends. But usually quite casual clothes – clean and presentable, but casual attire, normally."
        },
        {
          "q": "Is there any difference between the clothes you wear on weekends and weekdays?",
          "a": "Perhaps there's a bit of a difference, yes. During the week I tend to focus more on wearing conventional styles, because I have to go to work and must look a bit smarter. On weekends I tend to be more laid back and wear more casual clothes, perhaps even slightly more informal clothes. For example if I go to a party or something I might dress up in heels and sort of more striking-looking dresses, which I don't tend to wear in the office."
        },
        {
          "q": "Is there any color you dislike when buying clothes?",
          "a": "I don't really like yellow. I don't think this colour suits me. Also pastel shades don't really suit me, either. I prefer plain colours, subdued colours for work, and perhaps more bold colours if I go out on the weekend with friends."
        },
        {
          "q": "Do you like wearing T-shirts?",
          "a": "I wear T-shirts very often, in fact. Especially in summer when the weather is warm. I enjoy the freedom of wearing a T-shirt and I have quite a few different ones with all sorts of designs on them in fact – from sporty-style T-shirts with the classic sports logos, to more amusing T-shirts with funky designs and patterns on them."
        },
        {
          "q": "Do you spend a lot of time choosing clothes?",
          "a": "I usually spend about 10 to 15 minutes in the morning choosing my outfit for the day. I like to pick something comfortable and suitable for the weather, ensuring that it also matches the day's activities."
        }
      ]
    },
    {
      "id": "p1-headphones",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Headphones",
      "titleCn": "耳机",
      "questions": [
        {
          "q": "Do you use headphones?",
          "a": "I use headphones a lot. In fact, I really enjoy the sound of music on headphones. Today the quality is really good, and headphones have improved a lot in recent years and are more comfortable too."
        },
        {
          "q": "When do you use headphones?",
          "a": "I usually wear headphones when I am commuting to work, when I am in bed at night and want to listen to a podcast or some of my favourite music before sleep. I also use headphones when I am chatting on the phone sometimes."
        },
        {
          "q": "What type of headphones do you use?",
          "a": "I use the standard headphones that came with my mobile phone. They're pretty good quality. I know some people buy really special expensive headphones, but mine are a normal brand and I think they're really good."
        },
        {
          "q": "In what occasions will you not use headphones?",
          "a": "I don't use headphones when I'm hanging out with friends, or when I'm at work. I think that's a bit rude. Usually I only use headphones when I'm alone really. Yeah, I tend not to use headphones when I'm in the company of other people I have to, or want to, interact with."
        }
      ]
    },
    {
      "id": "p1-jokes",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Jokes",
      "titleCn": "笑话",
      "questions": [
        {
          "q": "Are you good at telling jokes?",
          "a": "Honestly, not really! I always mess up the timing or forget the punchline halfway through. My friends usually end up laughing at me rather than the joke itself. So I've kind of accepted that joke-telling is just not my thing."
        },
        {
          "q": "Do your friends like to tell jokes?",
          "a": "Yeah, I have one friend who's hilarious — he can make anyone laugh without even trying. The rest of us are pretty average though. We joke around a lot, but it's more just silly banter than actual proper jokes, you know."
        },
        {
          "q": "Do you like to watch comedies?",
          "a": "Yeah, I love them! After a long day, there's nothing better than putting on a funny show and just switching off. I don't have to think too hard and it always cheers me up. I think laughter is genuinely one of the best ways to de-stress."
        },
        {
          "q": "Have you ever watched a live show?",
          "a": "Yeah, once! A friend dragged me to a stand-up comedy show and I wasn't expecting much, but it was so funny. Laughing along with a whole crowd feels completely different from watching at home. I'd definitely go again if I got the chance."
        }
      ]
    },
    {
      "id": "p1-old-buildings",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Old buildings",
      "titleCn": "老建筑",
      "questions": [
        {
          "q": "Have you ever seen some old buildings in your city?",
          "a": "Yes, I've visited quite a few old buildings. I'm a big fan of history and so I enjoy going to the famous sights, but also when my family visit Chengdu to see us, I enjoy taking them to the most famous old examples of architecture and culture."
        },
        {
          "q": "Do you think we should keep old buildings in cities?",
          "a": "We should always strive to preserve our history. History is an important and meaningful part of a country's culture and heritage and it's important to renovate and preserve old buildings."
        },
        {
          "q": "Would you prefer living in an old building or a modern house?",
          "a": "I'd prefer to live in an old building, which has been modernized inside! So, I would like a bit of both! I like the charm of old buildings, but the functionality of modern living!"
        }
      ]
    },
    {
      "id": "p1-history",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "History",
      "titleCn": "历史",
      "questions": [
        {
          "q": "Have you ever been to historical museums?",
          "a": "Yes, I've been to several history museums. Some of them I've found really boring, and some I've found really interesting – it depends how the artefacts are exhibited. I tend to prefer natural history museums that house dinosaur skeletons and interactive experiences. Museums that just have lots relics, like ancient vases or jade stones in glass cabinets with lots of text to read, well… I find pretty boring to be honest. I like museums that have interesting displays that engage visitors and inspire us to take an interest in history."
        },
        {
          "q": "Do you like history?",
          "a": "I enjoy learning about aspects of history yes. I don't really like studying history in school – it's usually boring and full of dates and events that I don't find very interesting. But I do enjoy learning about certain aspects of history – like how different inventions came about, or how we evolved from apes and came to live in caves, or how the pyramids might have been built and why. These types of things are inspiring and interesting to me."
        },
        {
          "q": "When was the last time you read about history?",
          "a": "The last time I read about something in history was a book I had about tribes in Africa. It is fairly interesting actually. I quite like reading about how they hunted animals hundreds of years ago, and how certain tribes got along well, and got along badly with others, and things like this. I was very attracted to the colourful imagery in the book I was reading – the natural scenery in Africa as well as the way people lived there."
        },
        {
          "q": "Did you like history when you were young?",
          "a": "I didn't really. I liked certain fun facts, like I said earlier, like how the pyramids were built or about how dinosaurs lived and how they became extinct. But history lessons in school and the usual sort of national and political history I find uninteresting and uninspiring."
        }
      ]
    },
    {
      "id": "p1-cinema",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Cinema",
      "titleCn": "电影院",
      "questions": [
        {
          "q": "Did you often go to the cinema when you were a child?",
          "a": "I didn't really no. I went occasionally with my sister, but not very often to be honest."
        },
        {
          "q": "Do you often go to the cinema with your friends?",
          "a": "Nowadays I go to the cinema about once a month – there's a new cinema complex right near my home in a mall. It's a fantastic cinema and they have all the latest movies."
        },
        {
          "q": "Do you still like the same kind of movie which you liked when you were a child?",
          "a": "Pretty much. I've always liked fun, romantic and lighthearted films. I still enjoy a lot of animations and cartoons too."
        },
        {
          "q": "What genres of films do you like?",
          "a": "I have a diverse taste in films; I enjoy genres like action, drama, and science fiction. If I was to say which I really preferred, though, I would probably say action movies that are based around spy stories, secret agent thrillers and things like this – I prefer this genre to the superhero genre, most of the time. I find these films truly gripping."
        },
        {
          "q": "Do you think going to the cinema is a good way to spend time with friends?",
          "a": "Going to the cinema is an excellent way to spend quality time with friends, discussing the movie afterward enhances the experience, especially if you go for a meal and a few drinks and have time and the mood to chat about it. But this is only really fun if it's a good film that you all enjoy."
        }
      ]
    },
    {
      "id": "p1-evening-time",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 5,
      "title": "Evening time",
      "titleCn": "晚间时光",
      "questions": [
        {
          "q": "Do you like morning or evening?",
          "a": "Personally, I prefer mornings to evenings.. The mornings are the times when I really can focus on my studies the best and my concentration is at its peak. That's mainly because I am someone who sleeps early and wakes up early feeling very refreshed."
        },
        {
          "q": "What do you usually do in the evening?",
          "a": "In the evenings I like to relax, basically. Just rest and listen to music on headphones, or watch a TV show or something like that. I have friends who always study in the evenings. Not me. I like to rest in the evenings. I don't even go out much."
        },
        {
          "q": "Are there any differences between what you do in the evening now and what you did in the",
          "a": "Yes, most certainly. When I was a bit younger I would have a much more active social life in the evenings, and I also used to try to study in bed at night too. Now, I have a much more organized life. I always get up early, get things done in the morning and in the day, and rest at night."
        }
      ]
    },
    {
      "id": "p1-pets-and-animals",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Pets and Animals",
      "titleCn": "宠物与动物",
      "questions": [
        {
          "q": "Did you have any pets when you were a child?",
          "a": "Yes, my family had a dog and a cat. These are fairly normal domestic animals to keep, really. I do remember once having a small snake in a plastic box that I bought at a street market, but it died within a few weeks."
        },
        {
          "q": "Do you like to see animals in the zoo?",
          "a": "Yes, I've always liked it. When I was a little girl, this was my favourite family activity on the weekends, because you know it greatly satisfied my curiosity about wild animals, like peacocks, tigers, monkeys etc. but now, since I am pretty bogged down with studies and work I don't get much chance to go to the zoo."
        },
        {
          "q": "What's your favorite animal?",
          "a": "I'd probably have to say dogs, it's hard to explain why though. I guess it's because they are really loyal and quite affectionate and playful, much more so than cats who I think tend to be a bit more indifferent and aloof. So yeah I'd say I'm much more of a dog person than a cat person."
        },
        {
          "q": "What is the most popular animal in China?",
          "a": "I'd say a cat or maybe a dog is the most common animal. Today, slightly more obscure animals are gaining in popularity though – for example, my friend has a chinchilla, a very cute animal!"
        },
        {
          "q": "Where do you prefer to keep your pet, indoors or outdoors?",
          "a": "To be honest, I strictly prefer keeping my pet indoors. The main reason is safety; I'd be constantly worried about traffic, bad weather, or parasites if I let them roam freely outside. Plus, having my pet inside—I actually have a cat— means she's always around for a cuddle, which really helps strengthen our bond. It just feels much safer and cleaner for everyone involved."
        }
      ]
    },
    {
      "id": "p1-days-off",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Days off",
      "titleCn": "休息日",
      "questions": [
        {
          "q": "Do you usually spend your day off with parents or friends?",
          "a": "I usually spend my days off on my own a lot of the time. Maybe that sounds anti-social, but I live alone in a flat in Beijing, and one of my favourite things is to spend a weekend on my own watching TV series, reading and perhaps doing a bit of shopping. So, generally I don't really spend time with family or friends."
        },
        {
          "q": "What do you often do on your days off?",
          "a": "On my days off I usually do things at a fairly relaxing pace, unless I have any important things to do. I shop, I read, I watch TV , I take a coffee in a local mall. Stuff like this."
        },
        {
          "q": "When was the last time you had a few days off?",
          "a": "Last month I had some days off. I learned to bake cakes, I watched an entire TV series (I'm a huge fan of detective TV series and crime thrillers), and I did some yoga."
        },
        {
          "q": "What would you like to do if you had a day off tomorrow?",
          "a": "Tomorrow… I would stay at home, clean my house – it's a real mess at the moment – and sit on the sofa and watch a film and eat snacks. That's exactly what I feel like doing right now."
        }
      ]
    },
    {
      "id": "p1-dreams",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Dreams",
      "titleCn": "梦",
      "questions": [
        {
          "q": "Do you often remember your dreams?",
          "a": "I sometimes remember my dreams, but not that often. I usually remember my dreams when I'm on holiday and have time to lounge in bed and slowly wake up, rather than on work days when I wake up and have to rush to get ready."
        },
        {
          "q": "Are you interested in others' dreams?",
          "a": "I think dreams are interesting and can be very revealing, so yes, I am always interested to hear about other people's dreams. I think they can tell us things about the unconscious worries or aspirations people have."
        },
        {
          "q": "Do you want to make your dreams come true?",
          "a": "Well… the good ones, yes! I would like the good dreams to come true of course, but not the nightmares or scary dreams. I think everyone would like their best dreams to come true."
        }
      ]
    },
    {
      "id": "p1-keys",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Keys",
      "titleCn": "钥匙",
      "questions": [
        {
          "q": "Do you always bring a lot of keys with you?",
          "a": "Not these days, no. Today so much is electronic, whether it's the office door or the door of my home – codes and finger prints and stuff like that. We hardly use physical metal keys for anything these days."
        },
        {
          "q": "Have you ever lost your keys?",
          "a": "Yes, I once lost the keys for a locker at work, and it had a laptop in it. It was a real pain getting a new set from the building management office. I had to fill in lots of forms and complete all sorts of ID procedures and get signatures from my line manager. It was a pain."
        },
        {
          "q": "How can we avoid losing keys?",
          "a": "Many people avoid losing keys by keeping them on a key ring on their belt. However, that's not so easy for girls or people who don't wear traditional trousers with belt loops. So, I guess it's a case of keeping your keys in a safe place or a pocket or purse you can zip up."
        }
      ]
    },
    {
      "id": "p1-walking",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Walking",
      "titleCn": "步行",
      "questions": [
        {
          "q": "Do you walk a lot?",
          "a": "Actually, yes. Living in a modern city, walking is a huge part of my daily commute. I usually have to walk about 15 minutes to get to the nearest subway station. Besides that, I'm quite conscious of my health, so I track my steps on WeChat WeRun. I try to hit at least 10,000 steps a day to keep up with my friends on the leaderboard. It's a fun way to stay active."
        },
        {
          "q": "Did you often go outside to have a walk when you were a child?",
          "a": "Definitely. In Chinese culture, we have an old saying: 'Walk a hundred steps after a meal, and you'll live to ninety-nine.' So, it was a family ritual. After dinner, my parents would take me for a leisurely stroll around our residential community or the local public square. It wasn't really for exercise, but more for digestion and chatting with neighbors."
        },
        {
          "q": "Why do people like to walk in parks?",
          "a": "I think it's mainly for escapism. Most Chinese cities are concrete jungles with skyscrapers everywhere, so parks offer a rare patch of greenery and fresh air. People go there to escape the hustle and bustle of city life. You'll often see elderly people doing Tai Chi or parents taking their kids out just to be closer to nature. It's a mental break as much as a physical one."
        },
        {
          "q": "Where would you like to take a long walk if you had the chance?",
          "a": "If I had the time, I'd love to take a long walk along the West Lake in Hangzhou. I've heard the scenery there is breathtaking, especially the Su Causeway. Walking along the lake with the willow trees swaying and the water rippling seems incredibly therapeutic. It would be the perfect place to clear my head and disconnect from the pressure of my studies."
        },
        {
          "q": "Where did you go for a walk lately?",
          "a": "Just last weekend, I went for a walk along the newly built greenway near my home. The city government has been investing a lot in urban planning recently, creating these dedicated paths for pedestrians and cyclists along the river. It was really relaxing to walk there at night, feeling the breeze and seeing the city skyline lit up. It was a nice change of pace from sitting at my desk all week."
        }
      ]
    },
    {
      "id": "p1-gifts",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Gifts",
      "titleCn": "礼物",
      "questions": [
        {
          "q": "What kinds of gifts do you usually like receiving?",
          "a": "I appreciate a wide range of gifts, but I particularly enjoy receiving books, as I'm an avid reader. Also, thoughtful, handmade gifts hold a special place in my heart."
        },
        {
          "q": "Are you good at choosing gifts?",
          "a": "I'd like to think I'm pretty good at choosing gifts for others. I always try to consider the person's interests, hobbies, and preferences to find something really meaningful."
        },
        {
          "q": "Have you ever given a person a gift you made yourself?",
          "a": "Yes, I have. I find that homemade gifts often have a unique personal touch and can convey deeper emotions. I once gave my grandmother a card, which I made myself, with a watercolour painting on it, which I painted myself. She cherished it for years."
        },
        {
          "q": "What do you consider when choosing a gift?",
          "a": "When choosing a gift, I consider the recipient's tastes, interests, and my relationship to them and the message I want to send in giving the gift. I believe a good gift is one that shows you've put thought into it."
        }
      ]
    },
    {
      "id": "p1-morning-routines",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Morning Routines",
      "titleCn": "晨间习惯",
      "questions": [
        {
          "q": "What is your morning routine?",
          "a": "I wake up around 6:00am when my alarm goes off, and snooze for a few minutes. When I finally roll out of bed, I take a shower, quickly put on my makeup, blend my daily smoothies, then I am out of the door. If it's a non-working day, I'll hit the gym, or I'll just chat with my boyfriend for a bit, before taking a shower."
        },
        {
          "q": "Do you like to get up early in the mornings?",
          "a": "Yes, I prefer to get up early in the mornings. It gives me a head start on the day, allows me to enjoy some quiet time, and boosts my productivity, especially when I can begin my tasks with a fresh mind."
        },
        {
          "q": "What do you usually eat for breakfast?",
          "a": "For breakfast, I usually eat a balanced meal that includes a serving of fruits, some protein like eggs or yogurt, and whole grains, such as oatmeal or whole-wheat toast. This combination helps sustain my energy levels throughout the morning."
        },
        {
          "q": "Do you think breakfast is important?",
          "a": "Absolutely, I believe breakfast is crucial. It provides the necessary fuel to start the day and has a significant impact on my mental and physical performance. Skipping breakfast often leads to lower energy levels and decreased concentration."
        },
        {
          "q": "Are there any differences between the mornings of your childhood and now?",
          "a": "Yes, there are notable differences. As a child, my mornings were less structured and mainly focused on getting ready for school. Now, my mornings involve a more complex routine that includes exercise, planning my day, and sometimes starting work early."
        },
        {
          "q": "Would you like to change your morning routine?",
          "a": "While I am generally satisfied with my morning routine, I would like to incorporate more time for reading and perhaps a bit of meditation to enhance my overall well-being and mental clarity before starting the day."
        }
      ]
    },
    {
      "id": "p1-reading",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Reading",
      "titleCn": "阅读",
      "questions": [
        {
          "q": "Do you like reading?",
          "a": "Yes, definitely. I'm actually a bit of a bookworm. I think reading is the best way to unwind after a long day. I read all kinds of things, but I'm particularly into detective novels. It's just so satisfying to get lost in a good story and forget about my own stress for a while."
        },
        {
          "q": "Do you prefer to read on paper or on a screen?",
          "a": "To be honest, nowadays I lean towards reading on a screen. I use an app called WeChat Reading on my phone all the time. It's just so convenient because I can carry thousands of books in my pocket. Paper books have a nice texture and smell, but they are just too heavy and bulky to carry around, especially when I'm squeezing onto the subway during rush hour."
        },
        {
          "q": "When do you need to read carefully, and when not?",
          "a": "Well, it depends on the purpose. If I'm studying for an exam or signing a contract, I definitely need to read every single word to avoid making mistakes. But if I'm just reading a magazine or scrolling through news on my phone, I usually just skim through it. In those cases, I only need to get the gist, so there's no need to focus on the details."
        }
      ]
    },
    {
      "id": "p1-hobbies",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Hobbies",
      "titleCn": "爱好",
      "questions": [
        {
          "q": "Do you have any hobbies?",
          "a": "Absolutely. I'm a big fan of playing badminton. It's practically a national sport here in China! I try to play with my friends at a local court every weekend to work up a sweat. Besides that, I also love editing videos and posting them on Bilibili to share my life with others. It's a great way to be creative."
        },
        {
          "q": "Did you have any hobbies when you were a child?",
          "a": "Yes, I was really into reading comic books, especially Japanese manga. I remember I was crazy about Detective Conan and Doraemon. I used to save up my pocket money to buy the latest volume from the bookstore near my school. I could sit there and read for hours; I was totally hooked on the stories."
        },
        {
          "q": "Do you have the same hobbies as your family members?",
          "a": "Not really. There's definitely a generation gap. My parents prefer more traditional activities. For example, my mom goes to the public square to do Square Dancing every evening with her friends. But I prefer staying at home, playing mobile games like Honor of Kings or watching movies. So, our interests are worlds apart."
        }
      ]
    },
    {
      "id": "p1-typing",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Typing",
      "titleCn": "打字",
      "questions": [
        {
          "q": "Do you type on a desktop or laptop keyboard every day?",
          "a": "Yes, absolutely. I use my laptop every single day. Since I have a lot of assignments to write, I'm constantly typing on it. I prefer the laptop because it's portable—I can easily take it to the library or a café to work, whereas a desktop is stuck in one place."
        },
        {
          "q": "When did you learn how to type on a keyboard?",
          "a": "I think it was back in primary school, maybe when I was around 9 or 10. We had these weekly IT classes where the teacher taught us the correct finger positions. Also, since we type Chinese using Pinyin, I had to learn the keyboard layout pretty early on to search for things online."
        },
        {
          "q": "How do you improve your typing?",
          "a": "To be honest, I don't really do formal practice anymore. It's mostly just learning by doing. Chatting with friends on the PC version of WeChat actually helps a lot. You have to type fast to keep up with the conversation, so over time, my muscle memory has just improved naturally."
        }
      ]
    },
    {
      "id": "p1-food",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Food",
      "titleCn": "食物",
      "questions": [
        {
          "q": "What is your favourite food?",
          "a": "Without a doubt, it has to be Hotpot, especially the spicy Sichuan style. It's not just about the taste; it's about the atmosphere. I love sitting around a boiling pot with friends, dipping slices of beef and veggies into the spicy broth. It's the perfect way to socialize and relax."
        },
        {
          "q": "What kind of food did you like when you were young?",
          "a": "When I was a kid, I had a huge sweet tooth. I was crazy about Tanghulu, you know, those sugar-coated haws on a stick. I used to beg my parents to buy me one every time we went to the street market. I loved that crunchy, sweet texture."
        },
        {
          "q": "Do you eat different foods at different times of the year?",
          "a": "Yes, certainly. In China, specific foods are linked to traditional festivals. For instance, during the Spring Festival, it's a tradition to make and eat dumplings with the whole family; it represents wealth and reunion. But in autumn, specifically for the Mid-Autumn Festival, we always eat Mooncakes. So, our diet changes according to the lunar calendar."
        }
      ]
    },
    {
      "id": "p1-scenery",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Scenery",
      "titleCn": "风景",
      "questions": [
        {
          "q": "Do you look out the window at the scenery when travelling by bus or car?",
          "a": "Yes, definitely. I love watching the world go by. Also, looking out the window helps me avoid motion sickness. If I look at my phone or read a book in a moving car, I usually feel dizzy."
        },
        {
          "q": "Do you take photos of the scenery outside the car window?",
          "a": "Not really. Since the car is moving fast, the photos usually turn out blurry. I prefer to just enjoy the view with my eyes rather than looking through a camera lens."
        },
        {
          "q": "Do you prefer the mountains or the sea?",
          "a": "I prefer the sea, hands down. There's nothing more relaxing than walking on the beach in a place like Sanya and listening to the sound of the waves. It really calms my nerves."
        },
        {
          "q": "What are the most beautiful sights you have seen while travelling?",
          "a": "The most beautiful sight has to be the sunset by the sea. I once traveled to Sanya, and watching the sun go down over the endless ocean, turning the water golden, was just incredibly peaceful and stunning."
        },
        {
          "q": "Do you prefer views in urban areas or rural areas?",
          "a": "I definitely prefer rural areas. Cities are often just concrete jungles full of traffic and noise. But the countryside, with its green mountains and fresh air, really helps me unwind and escape the pressure."
        },
        {
          "q": "Do you prefer views in your own country or in other countries?",
          "a": "To be honest, I prefer the views in my own country. China is so huge and diverse. We have everything from the snowy mountains in Tibet to the tropical beaches in Sanya. You can spend a lifetime exploring it and still not see everything."
        }
      ]
    },
    {
      "id": "p1-buildings",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Buildings",
      "titleCn": "建筑",
      "questions": [
        {
          "q": "Do you take photos of buildings?",
          "a": "Yes, quite often. I'm really into architecture. Whenever I travel to a new city, I love snapping photos of unique landmarks, like the ancient temples in Beijing or the skyscrapers in Shanghai. I usually post them on my social media to keep them as memories."
        },
        {
          "q": "Is there a building that you would like to visit?",
          "a": "Definitely. I've always wanted to go up the Shanghai Tower. It's the tallest building in China. I've heard the view from the observation deck is absolutely breathtaking, especially at night when the whole city is lit up. It would be amazing to see the city from that dizzying height."
        },
        {
          "q": "Are there tall buildings near your home?",
          "a": "Yes, absolutely. I live in a modern residential area, so I'm surrounded by high-rise apartment blocks. Some of them are over 30 stories tall, which is very common in Chinese cities to save space."
        }
      ]
    },
    {
      "id": "p1-childhood-activities",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Childhood activities",
      "titleCn": "童年活动",
      "questions": [
        {
          "q": "What were your favourite activities when you were a child?",
          "a": "I really loved playing Hide and Seek outside with my neighbors. Also, watching cartoons like The Monkey King was a huge part of my daily routine. I could watch it for hours."
        },
        {
          "q": "Did you prefer to do activities alone or with a group of people when you were a child?",
          "a": "I definitely preferred groups. I was quite outgoing. I loved running around with a gang of friends because playing alone just felt too boring and lonely for me."
        },
        {
          "q": "Do you think children today play the same games as you did when you were a child?",
          "a": "Not at all. Times have changed completely. We used to run around outside playing Hide and Seek or skipping rope. But kids today are glued to their screens. They prefer video games on iPads, like Honor of Kings, rather than physical activities."
        }
      ]
    },
    {
      "id": "p1-sports-teams",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 5,
      "title": "Sports teams",
      "titleCn": "运动队",
      "questions": [
        {
          "q": "Have you ever been part of a sports team?",
          "a": "Yes, actually. When I was in high school, I was a member of the school basketball team. We weren't professional, but we practiced every week. It was a lot of fun playing with my classmates and trying to win games together."
        },
        {
          "q": "Are team-sports popular in your culture?",
          "a": "Yes, very popular. In China, sports like basketball and football (soccer) have millions of fans. You can see people playing them in parks or schools everywhere. Also, watching the World Cup or the NBA is a huge social event for many people here."
        },
        {
          "q": "Do you like watching team games? Why?",
          "a": "Yes, I do. I think watching team games is very exciting. The atmosphere is always great, especially when the score is very close. Also, I enjoy seeing how players work together to score a goal. It's much more interesting than watching someone play alone."
        },
        {
          "q": "What are the differences between team sports and individual sports?",
          "a": "The main difference is cooperation. In team sports, you have to rely on your teammates and communicate well to win. But in individual sports, like swimming or tennis, it's all about your own performance and skill. If you make a mistake in an individual sport, there is no one else to help you fix it."
        }
      ]
    },
    {
      "id": "p2-a-person-who-has-chosen-a-career-in-the-medical-field-e-g-a-doct",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 5,
      "title": "Describe a person who has chosen a career in the medical field (e.g. a doctor, a nurse).",
      "titleCn": "描述一个从事医疗行业的人（如医生/护士）",
      "card": "You should say:\n· Who he/she is\n· What he/she does\n· Why he/she chose this career\n· And explain how you feel about him/her",
      "sampleAnswer": "I'd like to talk about my cousin, Mei Ling, who recently became a nurse at a big hospital in Guangzhou. Mei Ling is 26 years old and graduated from nursing school two years ago. As a nurse, she works in the emergency department of the hospital. Her job involves a lot of different tasks. She helps doctors examine patients, gives medicines, changes bandages, and keeps an eye on patients' conditions. She also talks to patients and their families to explain treatments and give them comfort. Mei Ling chose this career for a few reasons. First, she's always been a caring person who likes to help others. When we were kids, she was always the one looking after anyone who got hurt during playtime. Second, her mom (my aunt) is also a nurse, so Mei Ling grew up hearing stories about hospital life and how rewarding it can be to help people get better. Lastly, she knew that nursing is a stable job with good career prospects, which was important to her. I feel really proud of Mei Ling. Being a nurse isn't easy – she often works long hours and has to deal with tough situations. But whenever I talk to her, I can tell she really loves her job. She always has interesting stories to share about the people she's helped. I also admire her dedication and bravery, especially during the COVID-19 pandemic. She worked extra shifts and put herself at risk to help others. It makes me see her as a kind of everyday hero. Mei Ling's choice to become a nurse has made me think more about the importance of healthcare workers. They do such important work, often without much recognition. Seeing how much Mei Ling cares about her patients and how hard she works has given me a new respect for people in the medical field.",
      "part3": [
        {
          "q": "Do you think doctors and nurses are very important?",
          "a": "Absolutely! Doctors and nurses are like the superheroes of our health system. They're the ones who look after us when we're sick or injured. Imagine if we didn't have them – who would we turn to when we're not feeling well? They work long hours, often in stressful situations, to keep us healthy. Nurses are there day and night, caring for patients, while doctors diagnose and treat illnesses. They're not just important; they're essential. During the pandemic, we saw just how crucial they were. They literally save lives every day. So yeah, I'd say they're incredibly important."
        },
        {
          "q": "Who is more important, doctors or nurses?",
          "a": "Oh, that's a tough one! I don't think we can say one is more important than the other. It's like asking whether your left or right hand is more important – you need both! Doctors and nurses work as a team. Doctors might diagnose illnesses and plan treatments, but nurses are the ones who provide constant care and monitor patients closely. Nurses often spend more time with patients, giving emotional support too. Without nurses, doctors couldn't do their job properly, and without doctors, nurses wouldn't know how to treat patients. They're both crucial parts of the healthcare system. It's their teamwork that makes healthcare work."
        },
        {
          "q": "Do you think that doctors and nurses are not paid enough?",
          "a": "That's a tricky question. In many places, I think they could be paid more, considering the vital work they do. They have to study for years and often work long, stressful hours. Nurses, especially, are often underpaid for the amount of care they provide. But it's not just about money – they need better working conditions too. Some countries pay their medical staff well, while others struggle to. It also depends on the specific job and location. Overall, given the importance of their work and the pressure they're under, I feel many doctors and nurses deserve higher pay. It's about valuing the people who keep us healthy."
        },
        {
          "q": "Do you think it is necessary to learn first aid skills?",
          "a": "Absolutely! I think everyone should learn basic first aid. You never know when you might need it – accidents can happen anywhere, anytime. Knowing first aid could mean the difference between life and death in an emergency. It's not just for big emergencies either; even small injuries can be handled better with first aid knowledge. Plus, it gives you confidence to help others. Imagine if someone collapses and you're the only one around – wouldn't you want to know what to do? Schools should teach it, I reckon. It's a life skill, like swimming or cooking. You might not use it often, but when you need it, you'll be glad you learned it."
        }
      ]
    },
    {
      "id": "p2-your-favorite-childhood-friend",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 5,
      "title": "Describe your favorite childhood friend.",
      "titleCn": "描述你最喜欢的童年朋友",
      "card": "You should say:\n· Who he/she is\n· Where you met each other\n· What you often did together\n· And explain what made you like him/her",
      "sampleAnswer": "A childhood friend who I had a lot of fun with was a guy called Matthew. We met in school in the very first year. He lived in the street nearby, and we used to have great times together. You see, we lived in a small town then, by a really nice woodland – we would both go off and play in the woods almost every day, at least in the holidays. We'd make dens, play hide and seek, climb trees, and play imaginary fantasy games. We were the kind of kids who were not so into sports like football and basketball – we were more excited by riding bikes and having adventures in the countryside. Plus, when you grow up in a small town there are less entertainment options than in cities, so you end up using your imagination more, and bonding with your friends a lot more – because there are less distractions, and a lot of nature around. There was also a river, and Matthew had a small wooden boat his uncle had made him, sort of a raft really – and we used to go down the river on that and try to catch fish. Things like that. I enjoyed his company because he was funny, too. He had a very mischievous sense of humour and loved playing practical jokes – we enjoyed playing pranks on our parents. That was quite funny actually. So, yeah, I liked Matthew a lot, and we still keep in touch, from time to time on social media. He is in Shenzhen studying business in university. Occasionally, at Spring Festival we see each other in our home town, if we both are visiting at the same time.",
      "part3": [
        {
          "q": "Why do people lose contact with their friends after graduation?",
          "a": "People lose contact with some friends for a variety of reasons. One reason is that their paths in life diverge and their lives go in different directions. They lose common interests and goals, and life moves on, their ambitions change and their priorities differ. This is not always the case, but sometimes is what happens, often gradually over time. It's a common reason anyway. Another reason might be that you end up losing your friends' contact details, though today this is less common because people are often connected quite extensively with many friends and friends of friends via various online social media accounts."
        },
        {
          "q": "How does modern technology influence friendship?",
          "a": "Modern technology influences friendships by enabling people to keep in touch all the time with friends and families, enabling people to see each other's daily updates on things like WeChat Moments and other social utilities and platforms, and also enabling people to make new friends through online friends and dating sites. Also, there are a lot of online forums where people can post comments, opinions, ideas and share their experiences around specific or general topics and themes – often those that get along or share similar views on these forums, can make friends with each other and then develop those friendships. So, modern technology, mostly internet-based technology and software, has a huge impact on friendships and relationships. From enabling people to nurture existing friendships, to helping people make new friends."
        },
        {
          "q": "Do you think people's relationship with friends will change when they get older?",
          "a": "I think that friendships do evolve and change over time, and as we get older we have slightly different relationships with our friends, yes. It really depends. One example might be that as people get older maybe they have less time to spend with friends, and more responsibilities, so they might stay in touch with less friends, or be more selective about the friends they do spend time with. Children tend to play with a wider variety of friends, also because they are less discerning and have less prejudices. As we get older we take stronger likes and dislikes to people and also have less time for people who we might not immediately get along with or share common ground with. Evolving friendships are different too – adults who really want to maintain friendships will make efforts to develop them and be emotionally supportive of friends, and as the years go by, that can make friendships stronger, and last into old age. These are arguably the most valuable friendships."
        }
      ]
    },
    {
      "id": "p2-a-person-you-know-who-loves-to-grow-plants-e-g-vegetables-fruits",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 5,
      "title": "Describe a person you know who loves to grow plants (e.g. vegetables/fruits/ flowers etc.).",
      "titleCn": "描述一个喜欢种植植物的人",
      "card": "You should say:\n· Who this person is\n· What he/she grows\n· Where he/she grows those vegetable/fruits\n· And explain why he/she enjoys this activity",
      "sampleAnswer": "A person I know who loves to grow plants is a lady I met in Scotland when I was in university. In fact she was my neighbour. I was living in a shared house in Bruford Road in Edinburgh, and next door lived a fairly old, but very energetic lady, called Nan. Nan was always changing her hair style, always wore long flowing dresses, and was quite moody, but a lovely lady, nevertheless. She had a small front garden and a quite long back garden. In the front garden she had wonderful flower beds of brightly coloured flowers, and a small lawn with a stone bird bath on it. And in the back garden she had bushes and a vegetable patch and some more leafy plants. I don't remember the names of all these plants in English, to be honest! Anyway, she spent quite a bit of time in her garden carefully looking after her plants, tilling the soil around the vegetables, watering them during the dry summer months and pruning the rose bushes. Because that summer I stayed there and spent a lot of time reading in the garden I would talk to her over the low fence which divided our gardens and we became quite good friends. She told me a lot about her love for plants and flowers and it seemed like this was a hobby that really kept her positive and happy in life. She wasn't so into people, or doing social things, but she did enjoy her garden. We chatted a lot that summer, and I think a learned a thing or two from her about how to appreciate nature and the simpler things in life. I think tending to her garden was really good for her mental and physical health, actually.",
      "part3": [
        {
          "q": "What are the advantages of growing vegetables or flowers at home?",
          "a": "Well, I think the biggest advantage is that you know exactly what goes into your food — no pesticides or artificial stuff, which is great for your health. And for flowers, having greenery around the house just makes the space feel so much more relaxing. There's also something really satisfying about growing things yourself, you know? It's a good way to de- stress after a long day. Plus, it can actually save you a bit of money on groceries in the long run."
        },
        {
          "q": "Do many people grow vegetables or flowers at home in your country?",
          "a": "Hmm, I'd say it's becoming more popular, especially among older generations. A lot of retired people in China grow vegetables on balconies or in small garden plots — it's kind of a lifestyle thing for them. Younger people are starting to get into it too, mostly for aesthetic reasons, like keeping houseplants or growing herbs in the kitchen. It's not super common yet, but I think the trend is definitely picking up."
        },
        {
          "q": "Is it easy to grow plants at home?",
          "a": "Well, it really depends on what you're trying to grow. Some plants, like herbs or succulents, are pretty low-maintenance and hard to kill, so they're great for beginners. But vegetables can be trickier — you need to think about sunlight, watering schedules, and soil quality. I think a lot of people give up early because they don't see results quickly enough. Starting with something simple is probably the best way to go if you're new to it."
        },
        {
          "q": "Why do some people prefer to grow their own fruits and vegetables instead of buying them from",
          "a": "I think it mainly comes down to trust and quality. A lot of people worry about chemicals or preservatives in supermarket produce, so growing their own feels much safer. There's also the freshness factor — homegrown stuff just tastes better, honestly. And beyond that, I think some people genuinely enjoy the process itself. It gives them a sense of achievement and a way to slow down, which is something a lot of us need these days."
        }
      ]
    },
    {
      "id": "p2-a-successful-business-person-you-admire",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 5,
      "title": "Describe a successful business person you admire.",
      "titleCn": "描述一个你钦佩的成功商人",
      "card": "You should say:\n· Who this person is\n· What kind of business this person does\n· Why this person is successful\n· And explain why you admire this person",
      "sampleAnswer": "A business person I really admire is my auntie, actually. She started a small clothing company in our home city about twenty years ago. She had some connections with designers in France, and imported unique boutique garments and accessories. Initially she sold these items in a very tasteful shop, but as the internet became a popular way of doing business she started an online store. She gradually started to expand the product range that she sold, while maintaining a consistent company image and brand image. She really displayed a great head for business. I think one of the reasons she became quite successful in her small business was her capacity to adapt to the changing times and changing trends, both in the online shopping world, and in terms of the kinds of designs that she chose. She didn't just sell anything she could sell – she chose the items very carefully and established herself as an exclusive boutique outlet. I admire her because I think she combined a good head for business, strategy and management, and a great passion for fashion and design. She wasn't too greedy or attracted to selling anything just to make money. I haven't seen my auntie since I left our home city, and I haven't maintained that much contact with her, so I am not exactly sure what she's doing now, but I guess she's still running the business, both her physical shop in the city and her online store. I should get back in touch with her and see how she's doing, actually!",
      "part3": [
        {
          "q": "What do you think is the retirement age for men and women?",
          "a": "The retirement age for men is currently set at 60 years old and women, I think, at 55 years old. However, I think that this is going to change soon, and they might increase the retirement age by 5 years for men and women. That's because people are generally living longer and the cost of living is increasing, so people need to work longer in order to raise families, pay mortgages and things like this."
        },
        {
          "q": "What kinds of qualities should a successful businessman have?",
          "a": "A successful business person should, to be honest, be quite assertive, quite dominant in some ways, and know how to talk to a variety of people in the right ways. There are moments to be very dogmatic and firm, there are moments to be soft and diplomatic – a good business person should be able to gauge the different situations and adopt the correct attitude to suit what is best for the company. Being decisive is another quality that is important in a business person who wants to succeed and do well. Sometimes you have to make decisions, the best decisions possible, in a very short time – so being able to think fast, evaluate things quickly and be decisive, is very important."
        },
        {
          "q": "What are important factors in making a company successful?",
          "a": "There are a number of key factors that contribute to making a company successful. Firstly I think the owners, the founders or main managers need to have a sense of vision, a strong self-confidence and an ambitious personality. I also think that a company needs the right kind of employees. The managers need to have a good sense of who and who not to recruit. They also need to treat the employees well, give them fair salaries and other benefits and holidays that will ensure they will be loyal to the company and work as hard as possible."
        },
        {
          "q": "If you had the opportunity to run your own business, what business would it be? Why?",
          "a": "I would run a business related to food. I love cooking and I have mastered all sorts of different dishes over the years. Mainly Chinese cuisine from different regions. I'd start a small restaurant. I'd run it as a fairly expensive restaurant and specialize in dishes that are perhaps less common and less mainstream. I like innovative and inventive cuisine, and I would enjoy the experience of designing menus, designing the restaurant itself, and training the staff. I've always liked this idea. I doubt I'll actually do it, but still, it's nice to think about from time to time."
        }
      ]
    },
    {
      "id": "p2-a-person-who-is-good-at-learning-and-speaking-new-languages",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 5,
      "title": "Describe a person who is good at learning and speaking new languages.",
      "titleCn": "描述一个擅长学外语的人",
      "card": "You should say:\n· How you got to know him/her\n· How he/she learns a new language\n· What languages he/she can speak\n· And explain how you feel about him/her",
      "sampleAnswer": "The person I want to talk about is actually one of my closest friends from university — I've known her for about three years now, ever since we ended up in the same class in our first semester. She's honestly one of those people who just has a thing for languages. Right now she speaks Mandarin, English, and Japanese fluently, and she's been picking up some Spanish on the side as well. Which, you know, makes the rest of us feel a little bit inadequate, but in a mostly admirable way. What's interesting is how she actually goes about learning. She doesn't really rely on textbooks that much — she told me once that the way she learns is just by throwing herself into it. Like, when she was learning Japanese, she started watching shows without subtitles way earlier than she probably should have, just to force her brain to adjust. She also makes a point of talking to native speakers whenever she gets the chance, even when she's not confident yet. She said the embarrassment is part of the process, which I thought was a pretty brave way to look at it. Honestly, what I admire most about her isn't just that she's good at it — it's how fearless she is. Most people, including me, are too worried about making mistakes to even try. She just doesn't seem to have that fear. And watching her makes me want to be a bit more like that.",
      "part3": [
        {
          "q": "Are there many people who can speak foreign languages in your country?",
          "a": "Hmm, I'd say English is pretty widely studied since it's part of the school curriculum, but actually speaking it fluently is a different story. Most people have some basic knowledge, but genuine fluency is still relatively rare outside of big cities. You'll find more confident speakers among younger generations and people working in international companies. So yeah, the numbers are growing, but there's still quite a gap between studying a language and actually using it comfortably."
        },
        {
          "q": "Does speaking other languages help at work?",
          "a": "Oh, definitely. In a lot of industries — like business, tourism, or tech — being able to communicate in another language opens up so many more opportunities. It can make you stand out when applying for jobs, and it's just really useful when working with international clients or colleagues. Even knowing a few basics in someone's language shows respect, you know? I think as the world gets more connected, language skills are becoming more and more valuable in almost any field."
        },
        {
          "q": "Do people learn any languages other than English?",
          "a": "Yeah, increasingly so. Japanese and Korean have become really popular, especially among younger people who are into anime or K-pop culture. Spanish is also gaining interest because of how widely it's spoken globally. And in business circles, some people are picking up languages like German or French. I think social media and streaming platforms have made learning these languages feel more fun and accessible, which is probably why more people are giving it a go these days."
        },
        {
          "q": "Why is it easier for children to learn new things than for adults?",
          "a": "Well, I think the biggest reason is that children's brains are just more flexible at that stage, you know? They absorb information naturally without overthinking it. Adults tend to get in their own way — worrying about making mistakes or feeling embarrassed. Kids just dive in without that fear. They also have more time and fewer responsibilities, so they can practice constantly. And honestly, when you're young, everything is new anyway, so picking up new things just feels normal."
        },
        {
          "q": "How do people learn new things?",
          "a": "I think it varies a lot depending on the person. Some people prefer watching videos or taking online courses because it fits around their schedule. Others learn best by actually doing things hands-on and just figuring it out as they go. Having someone experienced to guide you also makes a big difference — like a teacher or mentor. And I think consistency matters more than anything, honestly. Even just spending a little time on something every day adds up way faster than people expect."
        }
      ]
    },
    {
      "id": "p2-a-famous-person-you-would-like-to-meet",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 5,
      "title": "Describe a famous person you would like to meet.",
      "titleCn": "描述一个你想见的名人",
      "card": "You should say:\n· Who he/she is\n· How you knew him/her\n· How/where you would like to meet him/her\n· And explain why you would like to meet him/her",
      "sampleAnswer": "The famous person I would absolutely love to meet is J.K. Rowling, the British author who is, of course, the mastermind behind the Harry Potter series. She is arguably one of the most influential writers of the 21st century. I first came across her work when I was in primary school. I remember my mother bought me the first book, and I was instantly hooked. I spent my entire childhood growing up with her characters, waiting anxiously for the next installment to be released. So, in a way, she feels like a distant mentor who shaped my love for reading and English literature. If I had the chance to meet her, I wouldn't want it to be at a chaotic book signing or a formal press conference. Instead, I would prefer to meet her in a quaint, cozy café in Edinburgh, Scotland. I've read that she wrote the early drafts of her books in cafés there, so meeting her in that setting would feel incredibly fitting and atmospheric. We could just sit down over a cup of tea or coffee, away from the paparazzi. The reason I am so eager to meet her is twofold. Firstly, I want to pick her brains about her creative process. I am fascinated by how she managed to construct such an intricate and immersive world with its own rules, history, and languages. I'd love to know how she kept track of all those plot twists! Secondly, and perhaps more importantly, I admire her resilience. Her story is a classic rags-to-riches tale. She wrote the first book while she was a struggling single mother living on government benefits. Her sheer determination to get published despite facing numerous rejections is incredibly inspiring to me. Meeting her would be a chance to thank her not just for the magic she created on the page, but for the example she set in real life.",
      "part3": [
        {
          "q": "What are the advantages and disadvantages of being a famous child?",
          "a": "Being a child star is definitely a mixed blessing. On the upside, it offers a tremendous head start in life. These children often enjoy financial security and access to top-tier education or career opportunities that most adults can only dream of. However, the price they pay is often their childhood. They are constantly under the scrutiny of the media, which robs them of their privacy. This intense pressure to perform and be perfect can lead to premature maturity or even psychological issues later in life, as we've seen with many former child actors who struggled to adjust to a normal life."
        },
        {
          "q": "What can today's children do to become famous?",
          "a": "The landscape of fame has changed dramatically. In the past, you needed to be a prodigy in acting, singing, or sports to get noticed by an agent. Today, however, the barrier to entry is much lower due to the ubiquity of social media. Children can simply upload videos of themselves—whether it's dancing, reviewing toys, or gaming—and become viral sensations overnight. Platforms like TikTok or YouTube allow them to bypass traditional gatekeepers. So, consistency in content creation and finding a specific niche are now the key strategies for gaining exposure."
        },
        {
          "q": "What can children do with their fame?",
          "a": "I think there are two main avenues they can take. Commercially, they can monetize their influence. Many famous children secure lucrative endorsements or launch their own product lines, turning their name into a brand at a very young age. Alternatively, and perhaps more nobly, they can use their platform to champion causes. Because they have the ear of their generation, they can raise awareness about issues like bullying or environmental protection. For instance, look at how Greta Thunberg mobilized millions of students; that is a prime example of using fame for social advocacy."
        },
        {
          "q": "Do people become famous because of their talent?",
          "a": "Ideally, we would like to believe in a meritocracy where talent rises to the top, but realistically, that's not always the case. While talent is crucial for longevity in an industry, initial fame is often the result of marketing machinery, luck, or even connections—what we often call nepotism. Especially in the internet age, someone can become famous simply for being controversial or attractive, without possessing any discernible skill. So, while talent helps, it is certainly not the sole prerequisite for fame nowadays."
        }
      ]
    },
    {
      "id": "p2-a-child-you-know-who-likes-drawing-very-much",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 5,
      "title": "Describe a child you know who likes drawing very much.",
      "titleCn": "描述一个很喜欢画画的孩子",
      "card": "You should say:\n· How you knew him/her\n· What he/she is like\n· How often he/she draws\n· And explain why you think he/she likes drawing",
      "sampleAnswer": "The child I want to talk about is my little nephew, Lele. He just turned seven years old last month, and he is, without a doubt, the most artistic kid I know. I know him very well because my sister lives just a few blocks away from me, so I often go over to their place for dinner on weekends. In terms of what he's like, Lele is actually quite different from other boys his age. While most of his classmates are running around screaming or glued to their iPads playing games, Lele is incredibly quiet and observant. He can sit in a corner for hours, just lost in his own world. He has this really vivid imagination—he doesn't just draw stick figures; he creates these elaborate stories about aliens and monsters. As for how often he draws, I'd say it's practically 24/7. Honestly, you rarely see him without a marker or a crayon in his hand. My sister actually signed him up for a weekend art class at a local training center—you know, typical Chinese parenting, wanting him to develop a talent early on. But unlike other kids who complain about going to extra classes, Lele absolutely loves it. He treats every blank piece of paper as an opportunity. He even draws on the back of old calendars or delivery boxes if he runs out of sketchbooks. I think the main reason he loves drawing so much is that it's his primary outlet for expression. He's a bit of an introvert and sometimes struggles to express his feelings with words. But through drawing, he can show us exactly what's going on in his head. Plus, he gets a lot of encouragement. My sister is always posting his 'masterpieces' on her WeChat Moments, and seeing all the likes and compliments from relatives really boosts his confidence. So, for him, drawing isn't just a hobby; it's his superpower.",
      "part3": [
        {
          "q": "What is the right age for a child to learn drawing?",
          "a": "To be honest, I don't think there is a fixed 'golden age.' If we're talking about just doodling or playing with colors, they should start as soon as they can hold a crayon, maybe around two or three. It's crucial for their motor skills. However, for formal training—like learning sketch or watercolor techniques—I think it's better to wait until they are a bit older, say six or seven. In China, many parents are quite anxious and send their kids to art classes way too early, which might actually kill their creativity by forcing them to follow strict rules too soon."
        },
        {
          "q": "Why do most children draw more often than adults do?",
          "a": "I think it comes down to a fear of judgment. Children have zero inhibitions. They draw to express themselves and don't care if the sun is green or the dog has five legs. They just enjoy the process. Adults, on the other hand, are often self- conscious. We tend to be perfectionists. If we can't draw something realistically, we feel embarrassed and just give up. Plus, let's be real, most adults are too bogged down by work and life chores to sit down and sketch."
        },
        {
          "q": "Why do some people visit galleries or museums instead of viewing artworks online?",
          "a": "Because a screen simply can't do justice to the real thing. When you see a painting in a gallery, you can see the texture of the brushstrokes, the true colors, and the sheer scale of the work. You can't get that impact from a JPEG on a phone screen. Also, it's about the atmosphere. Walking through a quiet museum creates a sense of awe. It's a dedicated space for appreciation, whereas looking at art online is often full of distractions."
        },
        {
          "q": "Do you think galleries and museums should be free of charge?",
          "a": "Ideally, yes. I believe art and history should be accessible to everyone, regardless of their income. It's a public good. Actually, in China, this is already largely the case. Most public museums, like the National Museum, are free; you just need to book a slot in advance using your ID card on their Mini Program. However, for private galleries or special exhibitions, I think charging an admission fee is fair. They need the revenue for curation, maintenance, and keeping the lights on."
        },
        {
          "q": "How do artworks inspire people?",
          "a": "Art has this unique power to make us think outside the box. It challenges our perspectives. For example, looking at abstract art forces us to interpret things differently, which can spark creativity in other fields like problem-solving or design. Moreover, art resonates with our emotions. A powerful photograph or painting can evoke empathy or sadness, reminding us of our shared humanity. It acts as a mirror to society."
        }
      ]
    },
    {
      "id": "p2-a-person-who-makes-plans-a-lot",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 5,
      "title": "Describe a person who makes plans a lot.",
      "titleCn": "描述一个经常做计划的人",
      "card": "You should say:\n· Who he/she is\n· How you knew him/her\n· What plans he/she makes\n· And explain how you feel about this person",
      "sampleAnswer": "The person who immediately comes to mind is my university roommate, Alice. We lived in the same dorm for four years, and she is, without a doubt, the most organized person I have ever met. Honestly, she plans her life down to the minute. To give you an idea of what she's like, she doesn't just make plans; she engineers them. The most vivid example was when we took a graduation trip to Chengdu last summer. While I was just thinking about eating hotpot and seeing pandas, Alice had already created a comprehensive itinerary in an Excel spreadsheet two weeks in advance. She researched everything on Xiaohongshu to find the most photogenic spots to 'daka'—you know, to check in and take photos. She pre- booked all our museum tickets through various WeChat Mini Programs because she knew they would sell out instantly during the holiday. She even checked Dazhong Dianping to find restaurants with the highest ratings and booked our tables days ahead so we wouldn't have to wait in line. She literally had a 'Plan B' for everything. If it rained, we'd go to the mall; if the subway was crowded, we'd take a Didi. How do I feel about her? Well, it's a bit of a double-edged sword. On one hand, traveling with her is incredibly stress- free. I never have to worry about logistics or getting lost because she has everything under control. She is extremely reliable. But on the other hand, it can sometimes feel a bit rigid. There's very little room for spontaneity. If we spent ten minutes too long at a souvenir shop, she would get a bit anxious about falling behind schedule. But overall, I admire her discipline. In a chaotic world, having a friend who leaves nothing to chance is actually quite a blessing.",
      "part3": [
        {
          "q": "Do you think it's important to plan ahead?",
          "a": "Absolutely. In a fast-paced and competitive society, having a plan is like having a roadmap. It helps you maximize efficiency and mitigate risks. For example, students here spend years planning their study schedules for the college entrance exam because the stakes are so high. Without a plan, it's easy to get overwhelmed. However, I also believe plans shouldn't be set in stone. Life is unpredictable, so you always need a 'Plan B' to adapt to unforeseen circumstances."
        },
        {
          "q": "Do you think children should plan their future careers?",
          "a": "To be honest, I think it's a bit too early. Kids change their minds all the time. One day they want to be an astronaut, and the next day they want to be a gaming streamer on Bilibili. Their interests are not stable yet. Instead of worrying about a specific job, I think they should just focus on exploring different hobbies and studying well at school. If they decide on a career too young, they might limit their possibilities and miss out on finding what they really love."
        },
        {
          "q": "Should children ask their teachers or parents for advice when making plans?",
          "a": "Yes, I think it's helpful, but they shouldn't just blindly listen to everything. Parents and teachers definitely have more life experience. They know the child's strengths and weaknesses better than anyone. But the problem is, their ideas can sometimes be a bit old-fashioned. For example, in China, many parents just want their kids to have a stable job in a bank or government, but they might not understand new jobs like being a social media manager. So, kids should listen to the advice, but make the final decision themselves."
        }
      ]
    },
    {
      "id": "p2-a-person-who-encouraged-you-to-protect-the-nature",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 5,
      "title": "Describe a person who encouraged you to protect the nature.",
      "titleCn": "描述一个鼓励你保护自然的人",
      "card": "You should say:\n· Who he/she is\n· How he/she encouraged you\n· What he/she encouraged you to do\n· And explain how you feel about this person",
      "sampleAnswer": "The person I'd like to talk about is my university friend, Chen. He was the president of the Environmental Club on our campus, and honestly, he is a total eco-warrior. I first met him during my freshman year. At that time, I wasn't really conscious about the environment. I used to order takeout on Meituan or Ele.me almost every day, and I never thought twice about all the plastic boxes and disposable chopsticks I was throwing away. Chen encouraged me to change in a very practical way. He didn't just preach or give boring lectures. Instead, he introduced me to Ant Forest on Alipay. He showed me that by doing small things-like taking the subway instead of a taxi, or choosing the 'no cutlery' option when ordering food-I could collect 'green energy' points on the app. And once you have enough points, Alipay actually plants a real tree in the desert areas of China, like in Gansu province. Motivated by him, I started doing this daily. He also encouraged me to bring my own reusable cup when we went out for bubble tea, instead of using the plastic ones. I truly look up to him. At first, I found his habits a bit troublesome and inconvenient. But seeing his passion really influenced me. Because of him, I've actually 'planted' three trees on my phone! He taught me that protecting nature doesn't mean you have to go live in a forest; it's about making conscious choices in our modern city life. He really opened my eyes to how much impact an individual can have.",
      "part3": [
        {
          "q": "How can parents teach their children to protect nature?",
          "a": "I think the best way is to lead by example. Children tend to copy what their parents do. For instance, if parents strictly follow garbage sorting rules at home—separating wet trash from dry trash—kids will naturally learn that habit. Also, parents should teach them not to waste food. In China, we have the 'Clean Plate Campaign,' and teaching kids to finish their meals is a simple but effective way to respect nature's resources."
        },
        {
          "q": "Should schools teach children to get close to nature?",
          "a": "Yes, absolutely. Nowadays, kids are often glued to screens and stuck in classrooms all day. They are losing touch with the real world. Schools should organize more outdoor activities, like the traditional 'Spring Outing'. Taking students to a botanical garden or a park helps them appreciate plants and animals firsthand. You can't really learn to love nature just by looking at pictures in a textbook."
        },
        {
          "q": "Do you think there should be laws to protect nature?",
          "a": "Yes, definitely. We can't just rely on people's conscience. Some factories or individuals might pollute the environment just to save money. So, we need strict laws and heavy fines to stop them. A good example is the recent ban on plastic straws in China. Because it's a law, all milk tea shops had to switch to paper straws overnight. It shows that laws are much faster and more effective than just asking people nicely."
        }
      ]
    },
    {
      "id": "p2-a-person-who-gave-a-clever-solution-to-a-problem",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 5,
      "title": "Describe a person who gave a clever solution to a problem.",
      "titleCn": "描述一个巧妙解决问题的人",
      "card": "You should say:\n· Who the person is\n· When you met this person\n· What the problem was\n· And explain why you think it was a clever solution",
      "sampleAnswer": "A person I know that gave a really ingenious solution to a problem was my friend, Eric. I remember the occasion well, actually. I had locked my keys in my flat, and couldn't get in through the door. So, the keys were inside, and we were stuck outside. I was in a real panic about it, because I desperately needed to get in, get my stuff and go to work. Plus, I had something really important to do at work that day. Eric, my friend, lived next door. He was an older guy who worked from home, so he was almost always in. I knocked on his door and explained my situation – my keys were locked in the house and I couldn't get in. He had a think about the situation for a short time, then he came up with a possible solution. He first asked me where my keys were. I said that I knew exactly where they were – they were in my trouser pocket of the trousers that I had taken off last night and left on the bed. He asked if my bedroom window was open. I said yes it was a little bit open, but of course there were bars on the window, so there was no way we could climb in through the window anyway. Plus, it was on the third floor, which made it even more difficult. So, climbing in was an impossibility. Eric said that he obviously knew there were bars on the windows, like all apartment windows in the city. But he had an idea… If he climbed out onto the window bars of the apartment below mine, with a long broom handle he could maybe reach the trousers with the broom handle and hook the jeans, and pull them out… rather like fishing! He then got some heavy-duty tape and taped a hook onto the end of the broom handle. Then, he confidently but carefully climbed out onto the bars of the second-floor window, and stretched his arm in through my window, through the bars, with the broom. After some effort, he managed to hook my jeans from the edge of the bed, and pull them out through the window. He then climbed back to safety. I thought this was a great solution to the problem. Eric was always full of good ideas. I'd met him when I first moved in to that apartment block. Which was quite a few years prior to this occasion. We became closer friends after this incident, and we often sit in the community garden and joke about it. I now always leave my bedroom window just a little bit open, just in case the same thing happens again. But I really hope that a burglar doesn't have the same idea as Eric.",
      "part3": [
        {
          "q": "Do you think children are born with a certain degree of cleverness, or can their intelligence be",
          "a": "I think that it's a bit of both. I believe that there is a genetic element to intelligence, and also I believe that intelligence is developed through education and parental influences. I think that having good parents who listen and teach and encourage critical thinking, as well as having teachers that do the same, can significantly help young people to develop a sense of ingenuity and problem-solving skills."
        },
        {
          "q": "What can schools do to promote students' intellectual development?",
          "a": "Schools can do a wide range of things to help children develop great intellectual capacities. Firstly, they should encourage collaborative project work centred around solving problems, or discussing issues that are problematic and coming up with solutions. These kinds of tasks really help young people to develop, as they are working with solving issues at the same time as collaborating with others in order to do so."
        },
        {
          "q": "Why do you think some people are really good at something?",
          "a": "I think that different people are good at different things. That's how life is! People usually are good at things that they learned since childhood, or things that they have a naturally affinity with. What I mean is that if you're exposed to certain influences as a child, you're more likely to be good at them as you grow older, especially if those influences are positive and encouraging. Secondly, I think that people are sometimes good at things for genetic reasons – they inherit the genes from their parents. That explains why some people are just instinctively good at math from a young age, and others simply are not."
        },
        {
          "q": "Why are different kinds of intelligence needed in this modern society?",
          "a": "Any society needs to nurture a range of different skills and abilities. Society needs people who have a wide variety of abilities to contribute to the economy. It needs people to work in engineering, service, creative arts, languages… all sorts. For this reason, education systems need to develop children to advance in the kinds of things they have aptitudes towards."
        }
      ]
    },
    {
      "id": "p2-one-of-your-friends-who-learned-a-skill-from-someone-not-a-teach",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 5,
      "title": "Describe one of your friends who learned a skill from someone (not a teacher).",
      "titleCn": "描述一个从非老师那里学技能的朋友",
      "card": "You should say:\n· Who he/she is\n· What skill he/she learned\n· How he/she learned\n· And explain whether it would be easier to learn from a teacher",
      "sampleAnswer": "The friend I want to describe is my university roommate, Jerry. We lived in the same dorm for four years, and the skill he picked up was playing the acoustic guitar. He learned it from another guy in our dorm, Tom, who was actually the lead singer of a campus band. It all started in our sophomore year. Jerry wanted to learn a specific song—I think it was a classic by Jay Chou—to perform at the school's Talent Show to impress a girl he liked. Instead of signing up for expensive lessons at a music school, he just asked Tom for help. Their 'classes' were very informal. They would just sit on their bunk beds in our cramped dorm room every evening. Tom didn't teach him boring music theory or how to read sheet music. Instead, he just showed Jerry exactly where to put his fingers to play the chords. It was very hands-on. Tom would say, 'Just hold these three strings and strum like this.' They practiced for weeks, often until the dorm lights were turned off at 11 PM. Regarding whether it would be easier to learn from a teacher, I have mixed feelings. A professional teacher would definitely be more systematic. They would ensure you have the right posture and understand the basics so you don't develop bad habits. However, I think for Jerry, learning from a friend was actually more effective. Because they were friends, the atmosphere was super chill and fun. There was no pressure. If he learned from a teacher, he probably would have gotten bored with practicing scales and quit after a week. But with a friend, they were just jamming and having fun, which kept him motivated. In the end, he actually managed to play that song on stage. Although his technique wasn't perfect, he sounded great!",
      "part3": [
        {
          "q": "Is it necessary to keep learning after graduating from school?",
          "a": "Absolutely. I think lifelong learning is essential. The world is changing so fast, especially with the rise of AI and new technologies. What we learned in university might become obsolete in just a few years. If you stop learning, you risk getting left behind in the job market. So, to stay competitive, you have to constantly upgrade your skills, whether it's learning a new software or improving your English."
        },
        {
          "q": "Should teachers make learning in their classes fun?",
          "a": "Yes, I think it's very important, especially for younger students. If a class is dry and boring, students will easily zone out or even fall asleep. Using games, videos, or jokes can really help grab their attention and make the knowledge stick. However, there needs to be a balance. The class shouldn't just be a comedy show; the teacher still needs to deliver solid content. But overall, a fun atmosphere makes learning much more effective."
        },
        {
          "q": "Do you think there are too many subjects for students to learn?",
          "a": "Yes, I think so. Especially in high school, students are often overwhelmed. They have to juggle physics, history, geography, and math all at once. It can lead to a situation where they become a 'Jack of all trades, master of none'— knowing a little bit about everything, but nothing in depth."
        },
        {
          "q": "Is it better to focus on a few subjects or to learn many subjects?",
          "a": "It depends on the stage of education. For young kids, learning many subjects is better because it helps them find their interests. But for university students, it's crucial to specialize in just a few areas to prepare for their future careers."
        },
        {
          "q": "Do you think enterprises should provide training for their employees?",
          "a": "Yes, absolutely. It's a win-win situation. For the company, training improves efficiency and keeps the team up-to-date with new technologies. For the employees, it makes them feel valued, which increases their loyalty to the company."
        },
        {
          "q": "Do you think it is good for older adults to continue learning?",
          "a": "Yes, definitely. Firstly, learning new skills, like playing chess or a language, keeps their brains active and helps prevent diseases like Alzheimer's. Secondly, they need to learn how to use modern technology, like smartphones, so they don't get left behind by society."
        }
      ]
    },
    {
      "id": "p2-someone-living-in-your-area-who-often-helps-others",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 5,
      "title": "Describe someone living in your area who often helps others.",
      "titleCn": "描述一个住附近、常助人的人",
      "card": "You should say:\n· What he/she is like\n· How he/she helps others\n· Why his/her help is beneficial\n· And explain why he/she often helps others",
      "sampleAnswer": "A person that immediately comes to mind who lives in my area who always helps others, is an elderly lady we call Mrs. Liu or Miss Liu. You see, we live in a fairly old community which consists of about 5 apartment blocks, 5 stories high, set around a fairly nice central garden with pathways and car parking spaces. There's also a sort of trellis with plants growing over it, and some stone tables and stools where a lot of older people sit from spring until autumn. Miss Liu is a pensioner who lives on the bottom floor of our building. She's almost always sitting outside the building in the shade of a dragon claw tree (I think that's what the tree might be called). She is the person who knows absolutely everyone in the community and is friendly with everyone. She's not just friendly, but she's massively helpful. She actually enjoys helping people so much that it has basically become her 'unofficial role' – she knows everything about everything – or, at least, it seems so! She helps people by putting them in contact with painters and decorators if they are renovating their apartments, by calling an electrician if someone has an electrical problem, and even talking to people about their emotional problems… She also gives people fruits and vegetables sometimes, if she has any leftover. There is a really old man who is not in good health, living in the building opposite, and Miss Liu will often give him soup in a metal bowl, almost every day actually. So, her help is not just beneficial for everyone in the community, I'd say it was almost essential for some of us! She's so remarkably helpful, and always really bouncy and happy and positive too, in a very sincere and genuine way. I think she is motivated by a love for humanity, really. I don't know exactly why she is like this. I've never really thought about it – it's just her personality, I suppose.",
      "part3": [
        {
          "q": "Should children help their parents with household chores?",
          "a": "Yeah, absolutely. I think it's a great way to teach them responsibility. You know, kids need to learn that cleaning up isn't just mom and dad's job. Plus, it teaches them basic life skills. If they learn how to cook or do laundry now, they'll be much more independent when they move out later."
        },
        {
          "q": "What kind of help do people need when looking for a new job?",
          "a": "Well, mostly two things. First, they need practical help, like someone to fix their resume or give them tips for the interview. That's super important. But also, they need emotional support. Job hunting is really stressful, right? So, having friends or family to encourage them and keep them positive makes a huge difference."
        },
        {
          "q": "Who should people ask for help, colleagues or family members?",
          "a": "It really depends on what the problem is. If it's about work, like a technical issue, definitely ask a colleague. They understand the job better and can give you a quick fix. But if you're feeling stressed or having personal issues, family is better. You can just be yourself with them, and they'll listen without judging you."
        }
      ]
    },
    {
      "id": "p2-a-kind-of-food-people-eat-during-the-special-event",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe a kind of food people eat during the special event.",
      "titleCn": "描述一种节日吃的食物",
      "card": "You should say:\n· What the food is\n· What event people usually eat it\n· How it is cooked\n· And explain why it is for the special event.",
      "sampleAnswer": "I'd like to talk about Chinese dumplings. In Chinese we have lots of different words for the many different varieties of dumplings – so it's not always easy to find an equivalent English word. In Chinese there's one kind of dumpling that we call 'Jiaozi' and these are a very popular dish during the Chinese New Year season. The recipe for these dumplings varies by region but they typically consist of a minced meat and a vegetable filling wrapped into a thinly rolled piece of dough, which is then sealed by pressing the edges together. They are cooked by either boiling, steaming or my favourite by pan-frying. We traditionally serve them with a black vinegar and other sauces. Even though we eat these dumplings throughout the year, at Chinese New Year we make them by hand, at home with our relatives. So for most Chinese people these dumplings are closely linked to the idea of Spring Festival traditions. Personally I'm a huge fan of these dumplings and every Chinese New Year I get really excited about the prospect of sitting down with my relatives to make them. We spend hours making them and we often make jokes about who can make the best ones – the technique is a bit fiddly so sometimes they turn out wrong and this is always quite funny.",
      "part3": [
        {
          "q": "Why do some people grow their own food these days?",
          "a": "Growing your own food has become trendy for several reasons. It ensures fresh, organic produce without chemicals, which is healthier and more environmentally friendly. It's also a great way to save money on groceries. Many find gardening therapeutic and stress-relieving, providing a sense of accomplishment. It's a fun hobby that connects people with nature and the food production process. Some do it to reduce their carbon footprint or to have control over what they eat. Overall, it's a rewarding activity that combines health, environmental, and personal benefits."
        },
        {
          "q": "Is there any traditional food in your country?",
          "a": "Oh, absolutely! China's bursting with traditional foods. We've got dumplings - little pockets of joy that show up at every Spring Festival. Then there's Peking duck - it's like the rock star of Chinese cuisine, crispy and juicy in all the right places. Hot pot's a big deal too - imagine a bubbling pot of soup where you cook your own food. It's like a DIY dinner party! And don't forget regional specialties. Sichuan dishes will make your taste buds do a spicy dance, while Cantonese dim sum is like a parade of bite-sized delights. From mooncakes to hand-pulled noodles, our traditional food's a real flavour adventure!"
        },
        {
          "q": "What can be the reasons that some young people prefer foreign food to traditional food?",
          "a": "Young people might prefer foreign food for several reasons. First, it's exciting to try new flavors and cuisines, offering a sense of adventure. Social media and globalization have exposed the youth to diverse food cultures, making foreign dishes trendy. Some see it as more sophisticated or cosmopolitan. As young people travel more, they develop tastes for international cuisines. Fast-paced lifestyles might also make some foreign fast foods more appealing. However, this doesn't mean they've abandoned traditional food entirely – many still enjoy it, especially during special occasions or family gatherings."
        },
        {
          "q": "Which food is generally popular in your country?",
          "a": "In my country, popular foods include a mix of traditional and modern dishes. Fast food like burgers and pizza are widely enjoyed, especially among younger people. Traditional rice dishes with various meat and vegetable combinations remain staples in many households. Street food is incredibly popular, with vendors selling local snacks and quick meals in urban areas. International cuisines, particularly Italian and Asian, have gained significant popularity in recent years. Seafood dishes are favorites in coastal regions, while hearty meat stews are more common inland."
        },
        {
          "q": "Will there be more and more people planting food in the future?",
          "a": "I believe more people will grow their own food in the future. Rising concerns about food quality, environmental impact, and self-sufficiency are driving this trend. Urban gardening solutions like vertical gardens and community allotments are making it feasible even in cities. Advances in technology, such as smart indoor growing systems, are making it easier for anyone to grow food regardless of space or climate. As people become more health-conscious and environmentally aware, home gardening will likely become more widespread, potentially changing our relationship with food production and consumption."
        },
        {
          "q": "What are the differences between everyday food and festival food?",
          "a": "Well, I think the biggest difference is just how much effort goes into it. On a normal day, most people want something quick and easy, right? But festival food is a whole different thing — families spend hours preparing special dishes, and everything feels more meaningful. There's also the social side of it. Everyday meals are often eaten alone or in a rush, while festival food is almost always about sitting down together and enjoying the moment."
        },
        {
          "q": "Are there any differences between the food people eat today and the food people ate in the past?",
          "a": "Definitely, yeah. In the past, people mostly ate simple, home-cooked meals made from fresh local ingredients. These days, processed food and takeaways are a huge part of people's diets, which is convenient but probably not as healthy. I think variety has increased a lot too — you can eat cuisine from all over the world without leaving your city, which people in the past couldn't even imagine. So it's better in some ways, worse in others."
        }
      ]
    },
    {
      "id": "p2-something-you-cannot-live-without-not-a-computer-phone",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 5,
      "title": "Describe something you cannot live without (not a computer/ phone).",
      "titleCn": "描述一件离不开的东西（非电脑/手机）",
      "card": "You should say:\n· What it is\n· What you do with it\n· How it helps you in your life\n· And explain why you cannot live without it",
      "sampleAnswer": "One thing I cannot live without is my bike. I love cycling, and I am part of a cycling club. Cycling has become a really important part of my life, more than just a hobby or an interest. I took up cycling about five years ago, primarily to keep fit, and then I got quite into it. Then I met some people who became my friends, who were part of a local cycling club. I joined the club, and then my hobby took off! I invested in a couple of really good bikes… one for off-road cycling – a kind of mountain bike – and one for road biking. The road bike I also ride to work, too. So, my little adventure into keeping fit became a serious pastime that is a part of my life. So, I couldn't live without my bike. In my free time I always go cycling, even if it's just a short one-hour ride. And on weekends I often go with the club to the mountains – we follow certain routes, choose different places each time, stay in guest houses and hotels, or mountain villages overnight. It's a fantastic way to spend time, get away from the world of work, get out of the city and enjoy being close to nature, compete with yourself and keep fit and healthy, and enjoy the companionship of fellow cycling enthusiasts all at the same time! So, I would say that this bike does help me with my life – hobbies and interests are important in life, and people who have healthy hobbies and goals tend to be healthier in mind and body, I reckon.",
      "part3": [
        {
          "q": "Why are children attracted to electronic devices?",
          "a": "Children love all sorts of games, and today some of the most exciting games, that are so easy to start playing and set up, are basically on tablets and phones. Children like to play colourful, entertaining games, and electronic devices now have tonnes of apps and games for all different tastes, for all different types of people. Tablets probably have the biggest range of games that we've ever seen in the history of humankind, actually. So, kids and adults love them – and sometimes even get addicted to them."
        },
        {
          "q": "Why do some adults hate to throw away old things, such as clothes?",
          "a": "Some adults are really like this. Especially people from the older generation who lived in times of greater austerity. They think that wasting things is not good, especially if you can repair things yourself or continue to use them. I can see this point of view, because we live in a very wasteful society – with the increase in consumerism and standard of living, some people forget the importance of trying to take care of things, and teach children to respect toys and possessions. So, there are still quite a few adults who believe we should have a greater respect for things we have and not just throw them away frivolously without thinking."
        },
        {
          "q": "What do you think influences people to buy new things?",
          "a": "Adverts and peer pressure. People are highly influenced by what others buy – friends and family – and what adverts tell us to buy. We are surrounded by media today – online media, adverts in elevators, subway stations and on the sides of buses… everywhere. So, they have a strong conscious and unconscious influence on the way we think and the things we want to buy. People where I am from can be said to be 'fashion victims' too, and to save face they must follow the latest trends. Some people."
        }
      ]
    },
    {
      "id": "p2-a-piece-of-technology-not-a-phone-that-you-would-like-to-own",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 5,
      "title": "Describe a piece of technology (not a phone) that you would like to own.",
      "titleCn": "描述一件想拥有的科技产品（非手机）",
      "card": "You should say:\n· What it is\n· How much it costs\n· What you will use it for\n· And explain why you would like to own it",
      "sampleAnswer": "The piece of technology I've been eyeing for a long time is a drone, specifically the latest DJI Mini. It's incredibly light— I think it weighs less than 250 grams—so you don't need a special license to fly it, which is perfect for a beginner like me. In terms of the price, it's not exactly cheap. The full combo with extra batteries costs around 5,000 RMB. That's a bit of an investment for a student, so I'm planning to wait for the Double 11 shopping festival on JD.com or Taobao to see if I can grab a discount or at least get some free accessories. As for what I'd use it for, mainly for travel photography. China has such amazing landscapes, like the mountains in Yunnan or the coastline in Fujian. Whenever I travel there, I feel like my phone camera just can't capture the full scale of the scenery. With a drone, I could take these stunning aerial shots and record 4K videos from a bird's-eye view. I'd probably edit the footage and post it on Bilibili or my WeChat Moments to share with friends. The reason I really want to own one is that it offers a completely new perspective. We are so used to seeing the world from the ground level, but seeing it from the sky makes everything look cinematic and grand. It would definitely take my travel content to the next level.",
      "part3": [
        {
          "q": "What are the differences between the technology of the past and that of today?",
          "a": "The biggest difference is definitely convenience and size. In the past, technology was usually bulky and single-purpose. Like, you had a camera for photos, a Walkman for music, and a TV for shows. But today, everything is integrated into one tiny smartphone. Also, connectivity is a huge change. In the past, we were mostly offline, but now with 5G everywhere in China, we are connected 24/7."
        },
        {
          "q": "What technology do young people like to use?",
          "a": "Well, apart from smartphones, which are a no-brainer, I see two things everywhere. First is noise-canceling earbuds. On the subway or in dorms, almost every young person is wearing them to create their own quiet space. Second is tablets, like iPads. Students use them heavily for taking digital notes in class or drawing cartoons. It's much more eco-friendly than using paper."
        },
        {
          "q": "What are the differences between online and face-to-face communication?",
          "a": "Online communication, like using WeChat, is incredibly efficient. You can reply whenever you want, which saves time. However, it lacks nuance. You can't see the other person's facial expressions or body language, so it's easy to misunderstand the tone. Face-to-face is much 'warmer.' It builds trust. That's why for important things, like a breakup or a business deal, people still prefer to meet in person."
        }
      ]
    },
    {
      "id": "p2-an-item-on-which-you-spent-more-than-expected",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 5,
      "title": "Describe an item on which you spent more than expected.",
      "titleCn": "描述一件超预算买的物品",
      "card": "You should say:\n· What it is\n· How much you spent on it\n· Why you bought it\n· And explain why you think you spent more than expected",
      "sampleAnswer": "Something that I spent a lot more than I expected on was a jumper I bought the other day, actually, from a boutique store in the city centre. I went out looking for a jumper for the late autumn or winter. Something that I could both wear to work and wear casually on weekends. Something that would match a variety of clothes that I have. I looked in a lot of stores, but I kept seeing the same kind of designs and fashions, and I wanted something a little bit different – you know, something that everyone else didn't have. I don't always like to walk around wearing the same clothes as everybody else. People can be real fashion victims in this sense, I find! Anyway, so I came across this smaller store, run by a local designer. The name of the store isn't famous at all, or the brand, but it's really high quality and very unique in terms of designs and patterns and materials. I was instantly attracted to a lot of the garments on sale. I just loved the style – unique and special, but not outrageous or strange or anything like that. And, perfect colours for autumn too. I found this jumper that I really loved. It was amazing, it was striped with flecks of gold sparkles in it – hard to explain. It was made of very soft wool, actually, cashmere I think, and it felt so lovely to the touch. When I tried it on it fit perfectly. So, even though it was 400 yuan, I immediately, without hesitation, bought it. I had only expected to pay one or two hundred for a jumper, but I fell in love with it at first sight, and like I say, I didn't want something that everyone else in the city was wearing. So, yeah, that jumper is what I spent more money on than I expected.",
      "part3": [
        {
          "q": "Do you often pay more than you expected?",
          "a": "No, usually, I am quite conservative and sensible with my spending and I don't spend more than I budget for. I'm one of those people that keep a tight control of my spending and don't like to be too lavish or too extravagant. I'm not into expensive items and fancy clothes brands and stuff like this. Though on the odd occasion I might splash out."
        },
        {
          "q": "What do you think young people spend most of their money on?",
          "a": "Young people today are quite obsessed with fashion, actually. They spend a lot of money on clothes, accessories and trying to stay fashionable and trying to look cool. I think it's partly a social pressure that people feel, especially those who live in big cities. Other popular items are things like smartphones and tablets and electronics and headphones. I see a lot of young people buying fancy brands of electronic goods too."
        },
        {
          "q": "Do you think it is important to save money?",
          "a": "I think it's very important. You never know what is going to happen, especially in China where things change so frequently and new policies and regulations come crashing down in unexpected and completely crazy ways. So, you've got to save money if you're concerned about future stability for yourself and your family."
        }
      ]
    },
    {
      "id": "p2-a-new-law-you-would-like-to-introduce-in-your-country",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe a new law you would like to introduce in your country.",
      "titleCn": "描述一条你想推行的新法律",
      "card": "You should say:\n· What law it is\n· What changes this law brings\n· Whether this new law will be popular\n· And explain how you feel about this",
      "sampleAnswer": "If I had the opportunity to introduce a new law in my country, it would undoubtedly be a comprehensive environmental protection law specifically aimed at drastically reducing single-use plastics. This proposed law would mandate a phased ban on single-use plastics, starting with items like plastic bags, straws, and cutlery, eventually encompassing a wider array of products. Additionally, it would require businesses to transition to sustainable alternatives and provide subsidies and support to local industries developing biodegradable options. The changes brought about by this law would be significant. First, it would greatly decrease the amount of plastic waste that pollutes our oceans, landscapes, and cities, which is crucial for preserving natural ecosystems and biodiversity. Second, by fostering a demand for eco-friendly products, the law would stimulate innovation and growth in the green technology and materials sectors, potentially positioning our country as a leader in environmental sustainability. Although implementing such a law might face initial resistance due to convenience and cost concerns, I believe it would gain popularity over time. Public awareness of environmental issues is rising, and many citizens are already advocating for stronger measures to protect our planet. The shift in consumer preferences towards sustainability supports this trend. The idea for this law came from witnessing the detrimental impact of plastic pollution firsthand during a beach cleanup event. The sight of wildlife entangled in plastic debris was profoundly disturbing and served as a catalyst for my advocacy for change. Personally, I feel deeply passionate about this law. It represents a concrete step towards a sustainable future and aligns with my values of environmental conservation and responsibility. Introducing such a law would not only improve the quality of life in my country but also contribute positively to global environmental efforts, an achievement that would fill me with immense pride and hope.",
      "part3": [
        {
          "q": "What rules should students follow at school?",
          "a": "Children should follow rules at home related to their safety, like not playing with sharp objects or using the stove unsupervised. It's equally important to enforce rules regarding respect, such as using polite language and cleaning up after oneself. These rules create a secure and respectful environment within the household, helping children understand the boundaries of safety and courtesy."
        },
        {
          "q": "Do people often violate rules or laws in China?",
          "a": "I don't know if people in China violate laws more than any other country to be honest. It's hard to say. On the one hand Chinese people can be very obedient, but on the other hand they can also flaunt rules and ignore regulations if they are not imposed strictly, and if they are not penalized by the authorities for breaking them. In this way I'd say the Chinese are quite childish – they will follow rules if the authorities punish them for not following them. But if they are not threatened with punishments or loss of face, they might just totally ignore them and not even think about the consequences of their own actions on society. But, having said this, I think a lot of people in the world are like this. I'm not sure it's right to compare."
        },
        {
          "q": "What kinds of behavior are considered as good behavior?",
          "a": "Good behavior generally includes actions and attitudes that are considerate, respectful, and constructive. This encompasses being honest, responsible, kind, and cooperative. Good behavior in a social context also involves respecting others' rights and privacy, adhering to societal norms, and contributing positively to the community."
        },
        {
          "q": "Do you think children can learn about the law outside of school?",
          "a": "Yes, children can certainly learn about the law outside of school. Parents, guardians, and community leaders can play pivotal roles in teaching children about the law through daily interactions and real-life examples. Media, books, and educational programs also provide opportunities for children to learn about legal principles and the importance of following laws."
        },
        {
          "q": "What are the benefits for people to obey rules?",
          "a": "Obeying rules provides a stable and predictable environment, which is essential for societal function and personal well- being. It helps prevent chaos and conflicts, protects rights and properties, and ensures fairness and justice in society. On a personal level, following rules can lead to a positive reputation, better opportunities, and the ability to live in harmony with others."
        },
        {
          "q": "How can parents teach children to obey rules?",
          "a": "Honestly, I think the most effective way is leading by example. Kids notice everything, so if parents follow rules themselves, children naturally pick that up. Setting clear and consistent boundaries matters too — if rules keep changing, kids just get confused. Explaining the reasoning behind rules also helps a lot, you know? Children are more likely to follow something when they actually understand why it exists. And positive reinforcement works way better than punishment — praising good behavior tends to stick a lot longer."
        }
      ]
    },
    {
      "id": "p2-an-interesting-video",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe an interesting video.",
      "titleCn": "描述一个有趣的视频",
      "card": "You should say:\n· When and where you watched it\n· What it is about\n· Why you watched it\n· And explain how you feel about it",
      "sampleAnswer": "So, the video I want to talk about is one that basically took over my entire social media feed back in April. It's a travel documentary on Bilibili by this incredibly talented photographer called Linksphotograph, and it features the actor Li Xian — and the two of them went all the way to northern Norway, inside the Arctic Circle, to climb a snow mountain called Senja. I watched it the evening it dropped, purely because everyone around me was talking about it and I had serious FOMO. I sat down thinking I'd watch maybe ten minutes — and then suddenly it was midnight and I'd watched the whole fifty-five minutes without moving. What makes it so special is that the whole thing is completely unscripted — no filters, no dramatic reality-show edits, nothing. You just watch two guys genuinely struggling through wind and snow, with their faces going red from the cold, and it feels incredibly real. There's this one moment where Li Xian reaches the summit and says something like, \"Why does everything in life have to have a meaning? Just go and experience it.\" And I don't know why, but that really hit me. I think what I loved most was how honest it felt. In a world where so much online content is polished and performed, watching something this raw and genuine was almost refreshing. It reminded me that the best stories don't need a script — they just need two people brave enough to show up.",
      "part3": [
        {
          "q": "What kind of videos do people in your country like to watch?",
          "a": "Well, I'd say people in my country enjoy a pretty wide range of videos. Short-form content is super popular right now — things like funny clips, food vlogs, and life hacks on platforms like Douyin. Drama series and variety shows are also huge, especially among older audiences. And you know, with so many people working out these days, fitness tutorials have really taken off too. I think entertainment and practical content tend to do the best overall."
        },
        {
          "q": "Which is more helpful, watching videos or reading books?",
          "a": "Hmm, that's a tough one. I think it really depends on what you're trying to learn. For picking up practical skills — like cooking or coding — videos are way more useful because you can actually see how things are done step by step. But for deep understanding or critical thinking, books are probably better since they push you to focus and process information more carefully. Personally, I think combining both is the smartest approach."
        },
        {
          "q": "What skills can people learn from watching videos?",
          "a": "Oh, quite a lot actually. I think the most common ones are cooking and DIY stuff — you know, people just follow along with tutorial videos and pick things up really quickly. Language learning is another big one, especially through shows or YouTube channels. And creative skills like drawing, photography, even music — there's so much free content out there now. Videos make it easy to learn at your own pace, which is a huge advantage."
        },
        {
          "q": "Are there any differences between the videos that young people and old people like to watch?",
          "a": "Definitely, yeah. Young people tend to go for fast-paced content — short videos, gaming streams, influencer stuff — basically anything that's quick and entertaining. Older people, on the other hand, usually prefer longer formats like news programs, historical dramas, or cooking shows. I think it comes down to habits and lifestyle, you know? Younger generations grew up with smartphones, so they're used to consuming content in short bursts, while older folks are more comfortable with traditional TV-style viewing."
        }
      ]
    },
    {
      "id": "p2-an-advertisement-with-a-famous-person-in-it",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe an advertisement with a famous person in it.",
      "titleCn": "描述一则名人代言的广告",
      "card": "You should say:\n· Who the person is\n· Where you can see it\n· What the advertisement is about\n· And explain how you feel about the advertisement",
      "sampleAnswer": "Right, so the advertisement I want to talk about is Adidas's campaign featuring Li Xian, who's a really well-known Chinese actor. I first saw it earlier this year — it kept popping up on my social media feed, and then I started noticing it on big screens outside shopping malls too, so it was kind of hard to miss. The ad is basically built around this idea of just getting out there and moving — running, hiking, being outdoors, that kind of thing. And what makes it work so well is that Li Xian genuinely lives like that in real life. Like, this is a guy who goes on fifteen-hour hikes in Tibet and climbs snow mountains in Norway in his free time — so when he shows up in a sports ad, it doesn't feel like he's just there for the paycheck. It actually feels believable, which, you know, is not something you can say about every celebrity advertisement out there. I think what I like most about it is how unforced it feels. There's no over-the-top slogan, no dramatic slow-motion moment that makes you cringe — it's just him, looking very comfortable doing active stuff, which I suppose is exactly what a sports brand wants. Honestly, it made me want to go buy a pair of trainers and go for a run, which I didn't actually do — but the fact that I thought about it probably means the ad did its job pretty well.",
      "part3": [
        {
          "q": "What are the advantages and disadvantages of advertisements?",
          "a": "Well, on the plus side, advertising helps people discover products they might genuinely need, and it keeps competition healthy between companies. But the downsides are pretty real too. A lot of ads are misleading or just create unnecessary pressure to spend money. And honestly, when you're bombarded with ads everywhere you go, it gets exhausting. I think advertising works well when it's honest and relevant, but a lot of it these days just feels pushy and annoying."
        },
        {
          "q": "Why are many advertisements endorsed by celebrities? How useful are they?",
          "a": "I think it comes down to trust and attention, you know? People already like and follow these celebrities, so seeing them recommend something naturally makes it more appealing. It's a shortcut to grabbing people's attention. As for how useful they are — it depends. Younger audiences tend to respond well, but a lot of people are becoming more skeptical because everyone knows celebrities are just paid to say nice things. So the impact is probably less powerful than it used to be."
        },
        {
          "q": "What is the most important factor in an advertisement?",
          "a": "Hmm, I'd say relatability. If an ad makes you feel like it actually understands your life or your problems, you're way more likely to pay attention. A clever concept helps, and good visuals matter too. But at the end of the day, if the message doesn't connect with people emotionally, none of that really matters. The best ads are the ones you remember not because they were loud or flashy, but because they made you feel something."
        },
        {
          "q": "Why are some advertisements boring?",
          "a": "Honestly, I think it's because a lot of companies play it too safe. They just list product features or repeat the same tired format everyone else uses. There's no personality, no story, nothing that makes you stop scrolling. Sometimes the target audience is also too broad, so the message ends up feeling generic and flat. Good advertising takes creativity and a bit of risk, and not every company is willing to go there. The result is a lot of forgettable content."
        },
        {
          "q": "Is advertising important for a company? Why?",
          "a": "Yeah, absolutely. Even if your product is amazing, people need to know it exists, right? Advertising builds awareness and keeps a brand in people's minds. For new businesses especially, it's almost impossible to grow without some form of promotion. It also helps companies stay competitive — if your rivals are advertising and you're not, you'll just fade into the background. I think the key is spending wisely though, because bad advertising can actually do more harm than good."
        },
        {
          "q": "Which is more effective, online advertising or offline advertising?",
          "a": "For most businesses today, online advertising is probably more effective — you can target specific audiences, track results in real time, and adjust quickly if something isn't working. Offline ads like billboards or TV commercials still have their place though, especially for building brand awareness on a bigger scale. I think the honest answer is it depends on who you're trying to reach. Older audiences might respond better to traditional formats, while younger people are almost entirely online."
        }
      ]
    },
    {
      "id": "p2-a-tv-show-online-program-you-have-watched-recently",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe a TV show/online program you have watched recently.",
      "titleCn": "描述一个最近看的电视/网络节目",
      "card": "You should say:\n· What it is\n· What it is about\n· How often you watch it\n· And explain how you feel about it",
      "sampleAnswer": "So, the show I've been watching recently is called Chengfeng 2026 — it's a music competition reality show on Mango TV, and honestly it's been taking up way more of my evenings than I'd like to admit. The basic idea is that over thirty women — actresses, singers, athletes, all kinds — come together to compete in live performance stages. And what makes this season really different from before is that everything is completely live. No editing, no pitch correction, nothing. What you see is literally what's happening in that moment, which is, um, a bold choice, and one that does not always go smoothly — but that's kind of the point. I've been watching it pretty much every week since it started in April. My friends and I usually watch together and then spend the next hour arguing about who performed best, which I think says a lot about how much we care. There was this one moment where Li Xiaoran performed this really upbeat song called Xinyuan Biantie, and it just completely blew up online overnight. I watched the clip probably four or five times, which is not something I do very often. What I love most about it is how real it feels. You can see the nerves, the mistakes, the genuine excitement — and somehow that makes it so much more watchable than a perfectly polished show. It's messy in the best possible way, and I think that's exactly why people can't stop talking about it.",
      "part3": [
        {
          "q": "What are the differences between the TV programs young people like to watch and those old",
          "a": "Well, the gap is pretty noticeable. Young people tend to go for fast-paced content — reality shows, short dramas, gaming streams, that kind of thing. They're used to consuming content quickly and switching between things. Older people generally prefer slower, more traditional formats like news programs, historical dramas, or cooking shows. I think it comes down to habits more than anything. Older generations grew up with scheduled TV, while younger people just watch whatever they want, whenever they want."
        },
        {
          "q": "What makes a popular TV or online program?",
          "a": "Hmm, I think the biggest factor is whether people can connect with it emotionally — a relatable story, a lovable character, something that makes you feel something. Good pacing matters too, you know? If a show is slow to get going, people just switch off. Word of mouth is huge these days as well — if something is trending on social media, curiosity alone drives millions of views. Ultimately though, it comes down to whether people feel it's worth their time."
        },
        {
          "q": "What kinds of TV or online programs are popular in your country?",
          "a": "Short dramas are absolutely massive right now in China — like bite-sized episodes you can finish in minutes. Romance and historical costume dramas have always had a huge following too. Variety shows with celebrity guests are popular across all age groups. And recently, documentary-style content about food and travel has really taken off. I think people want either pure entertainment to switch off after work, or something visually beautiful they can enjoy without thinking too hard."
        }
      ]
    },
    {
      "id": "p2-a-story-book-with-animals-in-it",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe a story/book with animals in it.",
      "titleCn": "描述一个有关动物的故事/书",
      "card": "You should say:\n· What animals are in it\n· What the story/book is about\n· Why you read the story/book\n· And explain what you think of this story/book",
      "sampleAnswer": "So, the book I want to talk about is The Little Prince, which I first read when I was maybe thirteen or fourteen. My mum actually gave it to me — she said it was one of her favourite books when she was young, and that I'd understand it better as I got older. I didn't really know what she meant at the time, but honestly, she was completely right. The story follows this little boy who lives on a tiny planet all by himself, and he travels across the universe meeting all kinds of strange characters. There are quite a few animals in it, but the one that really stayed with me is the fox. There's this scene where the fox asks the little prince to \"tame\" him — which in the book basically means forming a real connection with someone, making them special to you and you to them. And then the fox says something like, you become responsible for the things you've tamed. Which, um, hit me a lot harder than I expected from a children's book. I think what I love most about it is that it works on completely different levels depending on how old you are. When I was thirteen I thought it was a sweet little story. Reading it again last year, it felt more like something about loneliness, and love, and how easy it is to lose sight of what actually matters. It's one of those books that's very easy to finish in one sitting and then just sit quietly for a while afterwards.",
      "part3": [
        {
          "q": "Should schools teach children about animals?",
          "a": "Definitely, yeah. Learning about animals helps kids develop empathy and a sense of responsibility from a young age. It also connects them to the natural world, which a lot of children growing up in cities don't really get exposed to. Understanding ecosystems and wildlife is also just genuinely useful knowledge. I think when kids care about animals, they naturally grow up caring more about the environment too. So it's really about building a broader awareness, not just memorizing animal facts."
        },
        {
          "q": "Some people think pets should not be kept in cities. What do you think?",
          "a": "I get where that argument comes from — cities are noisy, crowded, and apartments are small. But I don't think it's fair to ban pets altogether. Plenty of city dwellers give their animals a perfectly happy life with enough attention and exercise. The real issue is irresponsible ownership — people who don't clean up after their pets or keep them in unsuitable conditions. I think better regulation makes more sense than an outright ban honestly."
        },
        {
          "q": "Many people regard pets as members of their family. What do you think?",
          "a": "Honestly, I think it makes complete sense. Pets are emotionally present in a way that's hard to explain unless you've had one. They pick up on your moods, they're always happy to see you, and you genuinely grieve when they're gone. That's not so different from how we feel about family, right? Some people might think it's going too far, but I think the bond between a person and their pet is very real and deserves to be taken seriously."
        },
        {
          "q": "Do many people keep pets in your country?",
          "a": "Yeah, pet ownership has grown massively in China over the past decade. Dogs and cats are by far the most popular, and there's a whole industry around pet food, grooming, and healthcare that's boomed alongside it. Younger generations especially treat their pets like family and spend quite a lot on them. I think as more people live alone or delay starting families, pets fill that emotional gap in a really meaningful way. It's become a proper lifestyle choice rather than just a hobby."
        },
        {
          "q": "What are the advantages of keeping a pet?",
          "a": "Well, the companionship is the obvious one — pets are great at reducing loneliness, especially for people living alone. There's also evidence that owning a pet lowers stress levels, which makes sense because they kind of force you to slow down and be present. Dog owners especially tend to be more active since walks are non-negotiable. And for families with kids, having a pet teaches children responsibility and empathy in a very hands-on way. It's genuinely good for your wellbeing overall."
        },
        {
          "q": "Why do people always tell children stories with animals?",
          "a": "I think animals make perfect story characters for kids because they're already familiar and lovable. A talking fox or a brave little mouse is just way more engaging than a human character doing the same thing, you know? Animals also let storytellers tackle big themes — like courage or kindness — in a way that feels safe and relatable for young audiences. And honestly, there's something timeless about it. These kinds of stories have worked for thousands of years across every culture, which says a lot."
        }
      ]
    },
    {
      "id": "p2-something-that-helped-you-learn-a-foreign-language",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe something that helped you learn a foreign language.",
      "titleCn": "描述一个帮你学外语的东西",
      "card": "You should say:\n· What it was\n· What language you learnt\n· Why you chose to learn that language\n· And explain how this thing helped you",
      "sampleAnswer": "The language I learned was English because it was a core subject in school, but the lessons in school were a bit boring. I chose English simply because that was the only option at the time, so I guess you could say I didn't really choose it! Something that really helped me learn that foreign language was a TV series I watched when I was in school. It was a series called Science Adventures, and it was all in English, with subtitles in both English and Chinese. It was hosted by a really entertaining girl who spoke with a slight American accent and was really inspiring. I used to watch every episode of it. In each episode, they did a different science experiment, with a lot of fun stories related to the topic. It wasn't too heavy on scientific language or vocabulary, and everything they talked about was related to our everyday lives and fun and interesting facts about everyday scientific phenomena, like why water swirls in a certain direction when you take the plug out of the bath, or why the sun burns you when it's hot in summer, and stuff like this. So, in fact, it was excellent for picking up everyday English. It was also quite modern, so I learned quite a few new phrases and expressions, which were more useful than the rather dry, old-fashioned, stuffy things we learned in school textbooks. So, all around, this TV series exposed me to a wide range of vocabulary and expressions, helped me polish my grammar, and presented everything in a fun and interesting context.",
      "part3": [
        {
          "q": "What difficulties do people face when learning a language?",
          "a": "There's a number of difficulties people encounter when learning another language. Firstly, it's harder at first, and without the right motivation and learning context. Then having the inspiration to study is quite tough. So, first and foremost it's important to be inspired and interested in learning the language. Secondly, having the discipline to learn the boring parts – the rules, the grammar, the things that are not necessarily so interesting at first. Learning all this requires a sense of discipline and regular study."
        },
        {
          "q": "Do you think language learning is important?",
          "a": "I think it is to some extent, but it largely depends on what field you wish to go into in the future. If you want to work in a local company, in a local capacity, then no, learning another language is not always helpful or useful. If you want to work in a more international context, then learning another language is essential – in business, in education or in international relations. So, it really depends on which direction in life you wish to go in and what you aspire to do in the future."
        },
        {
          "q": "Is studying abroad a good way to learn a foreign language?",
          "a": "Most certainly it is, but it also depends on your attitude when you study and live overseas. If you go overseas and really make an effort to mix with people from that country, spend time with them, develop relationships with them and talk a lot, your confidence and language ability will certainly grow."
        }
      ]
    },
    {
      "id": "p2-a-law-or-regulation-about-environmental-protection",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe a law or regulation about environmental protection.",
      "titleCn": "描述一条环保相关的法规",
      "card": "You should say:\n· What it is\n· How you first learned about it\n· Who benefits from it\n· And explain how you feel about this law or regulation",
      "sampleAnswer": "A law relating to environmental pollution that I think is excellent, but should be made even stricter, is the law to reduce private cars on the roads by restricting the number plates that are allowed on the roads each day. It means that only number plates ending in certain numbers can drive on the roads on certain days. This results in there being much less traffic on the road at any given time, and people have to alternate they days they drive, and the days they take public transport. It's quite a fair law really, and means that everyone, rich or poor, must limit the amount of driving they do in the city, which, in turn, means that the air pollution is kept a little lower than it otherwise would be, and of course, helps to ease some of the traffic congestion too. The problem with this law is that rich people who have two cars, end up just changing the car they use each day, so that they are actually driving every day anyway. This is the problem with a lot of laws in my country, and in most countries, actually, if you're really rich you can always find ways around them! Generally I am very supportive of all types of environmental laws because I think that now is the time when we should all be making a lot of effort to help preserve the natural environment, reduce air pollution and emissions, and save water and resources. The planet needs our help in this regard, and it benefits us in the long-run, to take care of the planet by abiding by environmental laws as well as making our own individual efforts to be responsible – recycle plastic bottles, use less water, try to take public transport more, use less plastic bags if we go to the market – things like this.",
      "part3": [
        {
          "q": "What kind of rules do schools in China have?",
          "a": "Schools in China have all sorts of rules. Pretty much like schools anywhere I guess. Children cannot wear scruffy or outrageous clothes or fashions, or dangling earrings or dyed hair, and things like this. Those are dress-code rules. There are other rules, too, like you aren't allowed to take mobile phones into the classroom, you can't run or shout in the hallways, and you can't be seen kissing or engaging in romantic activities in public places. I can't think of any more off the top of my head, but there are, indeed, lots of little rules to govern how students behave on the school premises."
        },
        {
          "q": "What should teachers do to make students obey rules?",
          "a": "Teachers should set good examples for students, and they should also remind students of the rules, by explaining the context and reasons for them. I think this method works better than simply scolding or bossing students around. So, the personality and way that a teacher disciplines pupils and students is key to getting them to listen, understand and obey rules. If, of course, some especially unruly students persist in breaking the rules, teachers should dish out punishments to deter them from breaking the rules again, and deter other students from doing the same."
        },
        {
          "q": "Are there any laws about education in China?",
          "a": "Yes, in China education is compulsory from age six to around age fifteen – there's nine years in total, I think, of compulsory education. There is also a national curriculum with a number of compulsory subjects that we must study, and a number of elective subjects. We also must do a certain amount of physical education and sports, and also learn about good social behavior in a series of social studies classes. So, yes, there are a number of basic laws which govern the education system and how schools should conform with national standards of both curriculum and disciplinary issues."
        },
        {
          "q": "What are the rules people should obey at work?",
          "a": "Well, the basics are pretty universal — showing up on time, meeting deadlines, and communicating respectfully with colleagues. Beyond that, I think maintaining confidentiality is really important, especially in professional settings where sensitive information is involved. Following safety procedures matters too, depending on the industry. But honestly, the most important unwritten rule is just being reliable and pulling your weight. Nobody wants to work with someone who constantly lets the team down, you know?"
        },
        {
          "q": "What is the purpose of punishment?",
          "a": "Hmm, I think it serves a few different purposes depending on the context. The most obvious one is deterrence — making people think twice before breaking rules again. But I think the more meaningful purpose is actually correction, helping someone understand what they did wrong and how to do better. Pure punishment without any lesson attached doesn't really change behavior long term. Ideally, it should feel fair and proportionate too, otherwise people just feel resentful rather than genuinely reflecting on their actions."
        }
      ]
    },
    {
      "id": "p2-an-ambition-that-you-have-had-for-a-long-time",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 5,
      "title": "Describe an ambition that you have had for a long time.",
      "titleCn": "描述一个长久以来的志向",
      "card": "You should say:\n· What it is\n· What you can do for it\n· When you can achieve it\n· And explain why you have this as an ambition",
      "sampleAnswer": "An ambition I have had for a very long time now is to learn to drive a car and go on a long road trip. As you know, China is a large and diverse country, and there is a lot to see, and a lot of interesting cultures, societies and different landscapes to enjoy. I once saw a documentary of a guy who bought a really cool four-wheel drive vehicle and went on a road trip all around the country. I would love to do the same. I don't think it would actually be that hard, but it would involve a certain amount of investment and planning. I would ideally like to do this after I finish my postgraduate overseas. Before embarking on a proper career, let's say. I'd choose a summer holiday for sure, so that I could go to the colder regions of my country without it being too cold, and travel to the other places too. I'd definitely go south to Yunan, because I love the tropical areas and the food and culture there, but I'd also travel through Xinjiang and western desert regions too, as well as heading way up north to the areas which have some Russian influence and culture. There's a lot of places I'd like to go to, and I'd have to plan the route very carefully, and also get a vehicle which could easily be repaired if it broke down along the way. I think this kind of trip would combine my lust for adventure, with my interest in culture, topography and photography. So, all in all, I'm really hoping I can do this, and that a couple of good friends who share similar interests as me would also be prepared to join me on such a trip.",
      "part3": [
        {
          "q": "What kinds of ambitions do people have?",
          "a": "People have all sorts of ambitions. Most people have ambitions related to earning money, developing their careers, buying a nice house and things like this. Ambitions are often connected to the social pressures we have for our families and children too, this is why often ambitions seem to be related to money and career. Though, those that have already achieved a certain basis in financial security usually entertain ambitions related to travel, culture, hobbies and interests as well. So it depends on how much basic security a person feels they have or can achieve, as to what ambitions they aim for in the future."
        },
        {
          "q": "Why should parents encourage children to have ambitions?",
          "a": "Having ambitions is something that motivates us and it's important that children see that their efforts now (in things like studies and so on) will eventually pay off in the future. Studies and things like this can be quite boring, and children often don't really see why they are important, so lose motivation. If parents encourage children to have ambitions, then they will have end goals to aim for that are appealing and this will help to keep up motivation and interest in the short- term. It's always important that people, not just children, have some kind of goal or ambition for the future."
        },
        {
          "q": "Should parents interfere with their children's ambitions?",
          "a": "Parents should play a role in children's ambitions, most certainly, but only to a certain extent. I mean, parents should certainly act as guides and help children nurture and develop positive and constructive ambitions for the future, and try to steer them away from ambitions which may not be healthy or advisable. Some parents, admittedly, interfere too much with what their children want to do in the future, whilst other parents might be too laid-back about it. Like a lot of things in life there should be a balance between giving children freedom, and controlling them too much. A parent's role should be that of a fairly strict, but understanding 'guide' in life, I believe."
        }
      ]
    },
    {
      "id": "p2-a-perfect-job-you-want-to-do-in-the-future",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 5,
      "title": "Describe a perfect job you want to do in the future.",
      "titleCn": "描述一份未来想做的理想工作",
      "card": "You should say:\n· What it is\n· How you can find this job\n· What you need to prepare for this job\n· And explain why you want to do this job",
      "sampleAnswer": "I think a perfect job, at least for me, would be a TV presenter for travel shows. I'd love this. I love watching travel shows, you know, where a charismatic presenter travels to different countries in each episode, talks to the locals, sees the main sights, explores a little bit off the beaten track and so forth. I really enjoy these kinds of shows and my mother always says that I would make a great host or presenter for these kinds of shows. I am not sure that this is a job that I would be able to achieve getting though. I mean, it's not easy to get into this field, even if you feel you have the talent and ability. You have to either study acting and get into the film and television industry this way, and really excel in the field, or you have to have really good connections in the industry already, or ideally, and usually, both! So, it's easy enough for me to see this as my ideal job, but it's not really a realistic goal or anything like this, probably. Perhaps you could say it's more of a fantasy, and something that inside I am very confident that I could really do well at, in an ideal world, but not something that I will achieve. Who knows, maybe if I try and explore the possibilities more, there may be a chance, but I don't think getting one's foot in the door of this field is an easy task at all, and the competition is stiff. Anyway, it's nice to have these dreams and fantasies from time to time.",
      "part3": [
        {
          "q": "What kinds of jobs do children want to do?",
          "a": "Children have some wonderful and wild ideas about the things they'd like to do in the future. Well, some, anyway. I had friends who wanted to be astronauts, top business men, technology experts and entrepreneurs like Jack Ma. All sorts. There are, however, other kids who are more down to earth and realistic, maybe, and others that just simply want a fairly easy and low-pressure job, partly because they realise that being ambitious usually means taking on big challenges in one's career."
        },
        {
          "q": "What kind of professions are popular in your country?",
          "a": "Oh a whole range of things. Many guys like to get into programming. Actually, girls, too. I know a lot of girls and guys who really like IT. Design, computer graphic design seems to be quite popular. The field of business is something that some people are very attracted to, because they have this idea that if they can make big business, through online buying or being a consultant for a successful company, they can get rich and have a very comfortable and exciting life. There's a whole range of different professions that are popular in my country today, and I think quite a few opportunities if you know the right people and are prepared to work hard."
        },
        {
          "q": "Why do some people change their ideal jobs from time to time?",
          "a": "I think as we go through life we go through all sorts of changes based on our experiences as well as the people we meet and the things we see in the media….also, depending on the advice we get and the changing trends of the market in our country. When we are younger, most of us tend to be less realistic and perhaps entertain more ambitious ideas, and as we get older, we realise that high ambitions usually involve a lot of work and luck, so we end up becoming a bit more down- to-earth as we get older, especially when we are starting to think about starting a family."
        },
        {
          "q": "What should people consider when choosing jobs?",
          "a": "In my view, it's a balancing act between financial viability and personal fulfillment. Primarily, people must consider the remuneration package to ensure it meets their cost of living and financial goals. However, beyond just the paycheck, the prospects for career progression and the company culture are equally vital. If a job pays well but offers a toxic environment or zero growth, it often leads to burnout rather quickly. So, a wise decision involves weighing the salary against the potential for long-term job satisfaction and work-life balance."
        },
        {
          "q": "Is salary the main reason people choose a certain job?",
          "a": "It is certainly a dominant factor, especially given the rising cost of living, but I wouldn't say it is the sole determinant for everyone. For fresh graduates or those with heavy financial burdens, salary is often the priority. That being said, once a person's basic needs are met, other factors often take precedence, such as flexible working hours, a sense of purpose, or a supportive boss. We are seeing a trend, especially with the younger generation, where they value autonomy and mental health just as much as, if not more than, a high income. So, salary attracts talent, but other factors are needed to retain it."
        }
      ]
    },
    {
      "id": "p2-a-program-or-app-on-your-computer-or-phone",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 5,
      "title": "Describe a program or app on your computer or phone.",
      "titleCn": "描述电脑/手机上的程序或应用",
      "card": "You should say:\n· What it is\n· When/how you use it\n· Where you found it\n· And explain how you feel about it",
      "sampleAnswer": "The app I'd like to talk about is Xiaohongshu, which translates to 'Little Red Book' in English. It's essentially a lifestyle sharing platform, kind of like a hybrid of Instagram and Pinterest, but it's incredibly popular here in China. I first stumbled upon this app about three or four years ago. My best friend kept sending me links to these really cool, aesthetic cafes and hidden travel spots, and every time I opened the link, it took me to Xiaohongshu. So, I finally decided to download it myself, and I've been hooked ever since. I use it pretty much every single day, maybe even a bit too much! It has actually replaced search engines like Baidu for me. Whenever I want to find a new restaurant for a date night, check honest reviews for a skincare product, or look for a travel itinerary for the Labor Day holiday, I go straight to this app. I usually scroll through it on my commute on the subway or right before bed. The scary thing is, the algorithm is terrifyingly accurate. It knows exactly what I'm interested in—whether it's cat videos or IELTS study tips—and it keeps feeding me content, so I often end up falling down a digital rabbit hole for hours. It's a bit of a love-hate relationship. On the positive side, I find it incredibly practical. It helps me avoid 'tourist traps' and find authentic experiences because the content is user-generated by real people. It's like having a local guide in your pocket. But on the flip side, it can be a source of anxiety. seeing everyone's seemingly perfect lives with their filters and edits can sometimes make you feel a bit inadequate. But overall, I'd say it's an indispensable tool for navigating modern life in China.",
      "part3": [
        {
          "q": "What are the differences between old and young people when using apps?",
          "a": "There is a massive gap, almost like night and day. For young people, apps are second nature. We use them for absolutely everything—ordering takeout on Meituan, hailing rides on Didi, or watching videos on Bilibili. It's mostly about entertainment and convenience. On the other hand, for the elderly, apps are often a necessity rather than a hobby. They usually stick to the basics, primarily WeChat for video calling their grandkids or maybe reading the news. For them, navigating complex interfaces can be a real struggle, and they often find the font size too small to read comfortably."
        },
        {
          "q": "Why do some people not like using apps?",
          "a": "I think the biggest reason is privacy concerns. Nowadays, so many apps ask for unnecessary permissions, like accessing your contacts or location. People are getting tired of receiving spam calls or targeted ads right after they talk about a product. It feels quite intrusive. Also, for the older generation, technology can be overwhelming. The constant updates and new features can be confusing. They prefer the simplicity of the 'good old days' when a phone was just for making calls, not for scanning QR codes everywhere."
        },
        {
          "q": "What apps are popular in your country? Why?",
          "a": "Well, in China, the absolute king of apps is definitely WeChat. It's basically indispensable because it's not just a messaging app; it's an ecosystem where you can pay bills, order food, and even book doctor appointments. Besides that, short-video apps like Douyin are incredibly popular right now. People love them because they offer quick, bite-sized entertainment that fits perfectly into a busy lifestyle. You can just scroll through them during a commute or a lunch break to relax. So, convenience and entertainment are the main drivers here."
        },
        {
          "q": "Should parents limit their children using computer programs and computer games?",
          "a": "I think a certain level of restriction is absolutely necessary. You know, kids often lack self-discipline, and it's very easy for them to get addicted to the virtual world, which can really hurt their eyesight and distract them from their studies. However, I don't believe in a total ban. Some educational programs or strategy games can actually boost creativity and problem-solving skills. So, it's all about finding a balance—maybe setting a strict time limit, like one hour a day, rather than just saying 'no' to everything."
        },
        {
          "q": "Do you think young people rely more and more on these programs?",
          "a": "Oh, definitely. It's becoming quite obvious. Nowadays, young people turn to apps or software for almost everything. If they need to write an essay, they use AI tools; if they get lost, they rely entirely on navigation maps rather than asking for directions or reading a physical map. While this reliance makes life super efficient, I do worry sometimes that we might be losing some basic skills, like mental arithmetic or face-to-face communication. We're sort of outsourcing our brains to these programs, aren't we?"
        }
      ]
    },
    {
      "id": "p2-a-movie-you-watched-recently",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 5,
      "title": "Describe a movie you watched recently.",
      "titleCn": "描述一部最近看的电影",
      "card": "You should say:\n· When and where you watched it\n· Who you watched it with\n· What it was about\n· And explain why you chose to watch this movie",
      "sampleAnswer": "The movie I watched recently is Zootopia 2. It's the long-awaited sequel to the famous Disney animation. I watched it last weekend at a Wanda Cinema near my university. I went with my best friend, who is a huge Disney fan. We actually booked the tickets on Maoyan three days in advance because we knew it would be packed. The story continues the adventures of Judy the rabbit and Nick the fox. In this movie, they are now established partners working for the Zootopia Police Department. The plot is basically a buddy-cop mystery. This time, they have to go undercover to a new district— I think it was a reptile district—to solve a mysterious disappearance case. There were so many hilarious moments, especially the scenes with Flash the Sloth; he is still as slow as ever, which cracked the whole audience up. The reason I chose to watch it is purely nostalgia. The first movie came out almost ten years ago when I was still in middle school. It was such a big part of my childhood. So, when I saw the trailer on Douyin, I knew I had to see it on the big screen immediately. I absolutely loved it. The visual effects have improved so much—the fur on the animals looked incredibly real. But more importantly, I love the chemistry between Nick and Judy. They are just the perfect duo. It was a feel-good movie that really helped me relax.",
      "part3": [
        {
          "q": "What kinds of movies do you think are successful in your country?",
          "a": "In China, comedies are definitely the winners. Life is stressful, so people just want to walk into a cinema and have a good laugh. Also, patriotic action movies are huge, like Wolf Warrior. They make the audience feel proud, and the visual effects are getting better and better."
        },
        {
          "q": "What are the factors that make a successful movie?",
          "a": "First and foremost, it needs a solid script. If the story is boring, no amount of special effects can save it. Secondly, marketing is crucial nowadays. If a movie trends on Douyin or Weibo before it's released, it's almost guaranteed to be a box office hit."
        },
        {
          "q": "Do Chinese people prefer to watch domestic movies or foreign movies?",
          "a": "In the past, everyone loved Hollywood blockbusters like Marvel movies. But recently, the trend has shifted. People now prefer domestic movies because the stories are more relatable to our culture and daily lives. Plus, the production quality of Chinese films has improved significantly."
        },
        {
          "q": "Do you think only well-known directors can create the best movies?",
          "a": "No, not at all. While famous directors have experience, they can sometimes run out of ideas. New directors often bring fresh perspectives. For example, Jia Ling was a comedian, but her first movie as a director was a massive success. Creativity matters more than fame."
        },
        {
          "q": "Do you think successful movies should have well-known actors or actresses in leading roles?",
          "a": "It definitely helps with ticket sales at the beginning because fans will pay to see their idols. However, it's not a must. If the acting is terrible, the movie will still flop. Audiences today are smart; they care more about the performance than just a famous face."
        },
        {
          "q": "Why do people prefer to watch movies in the cinema?",
          "a": "It's all about the immersive experience. You simply can't compare a phone screen with a giant IMAX screen and the surround sound system. It pulls you into the story. Also, it's a social event. Eating popcorn in the dark with friends or a date creates a special atmosphere that you can't get at home."
        }
      ]
    },
    {
      "id": "p2-your-favorite-city-that-you-have-visited",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 5,
      "title": "Describe your favorite city that you have visited.",
      "titleCn": "描述你去过的最喜欢的城市",
      "card": "You should say:\n· Where it is\n· How you knew it\n· When you visited it\n· And explain why it is your favourite city",
      "sampleAnswer": "So, the city I want to talk about is Chengdu, which is in southwest China — the capital of Sichuan province. I'd heard about it for years, you know, people always going on about the food and the pandas and how relaxed the whole vibe is. So I was kind of curious about it for a long time before I actually went. I visited about two years ago with a couple of friends, and we stayed for around five days. Um, we did all the classic things — we went to the Giant Panda Base in the morning, which, honestly, was worth every second of the early wake-up. We ate so much hotpot that I genuinely lost count after the second day. We also just walked around a lot, sat in teahouses, and did basically nothing — which sounds boring but actually felt really, really good. And I think that's exactly why it's my favourite city. Like, Chengdu has this quality where nobody seems to be in a rush. People sit outside drinking tea at ten in the morning on a weekday, and somehow that feels completely normal there. Coming from a city where everything moves so fast, that was honestly kind of a shock — but a good one. I left feeling weirdly calm and already wanting to go back. And I think that says everything about a place, you know?",
      "part3": [
        {
          "q": "Which is more suitable for young people, urban life or rural life, and which is more suitable for",
          "a": "Well, I think cities are generally a better fit for young people — there are more job opportunities, better social life, and just a lot more going on. Rural areas can feel a bit limiting when you're ambitious and starting out. For older people though, I think the countryside makes more sense. It's quieter, less stressful, and closer to nature, which is great for health. So yeah, I'd say it's kind of a natural shift as people get older."
        },
        {
          "q": "How do people choose a city to travel to?",
          "a": "Hmm, I think it varies a lot by person. Some people go straight to social media for inspiration — if a place looks amazing on Instagram, that's enough reason to visit. Others care more about practical stuff like flight prices or visa requirements. Food is also a big factor for a lot of travelers, you know? And some people specifically look for cultural experiences or historical sites. I think most people end up balancing all these things when making a decision."
        },
        {
          "q": "Do you think a tourist city is also a good place to live? Why?",
          "a": "Honestly, not always. Tourist cities are great to visit, but living there is a different story. The cost of living tends to be higher, and popular areas can get really crowded and noisy. That said, there are some upsides — good infrastructure, plenty of restaurants and entertainment options. I think it depends on your lifestyle. If you enjoy a buzzing environment, it could work, but for most people, the downsides outweigh the benefits long-term."
        },
        {
          "q": "Do most people prefer to travel in a modern city or a historical city?",
          "a": "Well, I think it really depends on the traveler's personality. Some people love the energy of modern cities — the skyline, the shopping, the food scene. But a lot of travelers, especially those going somewhere for the first time, are drawn to historical cities because they offer something you can't find at home, you know? That sense of stepping back in time is really unique. Personally, I think historical cities tend to leave a stronger impression overall."
        }
      ]
    },
    {
      "id": "p2-a-boring-place",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 5,
      "title": "Describe a boring place.",
      "titleCn": "描述一个无聊的地方",
      "card": "You should say:\n· Where it is\n· Who you went there with\n· What you did there\n· And explain why you think it is a boring place",
      "sampleAnswer": "So, the place I want to talk about is this lake area my parents took me to a couple of summers ago. They'd been going on about it for weeks — like, \"oh it's so beautiful, you have to see it, the photos are incredible.\" You know how parents get when they're excited about something. So I went with my mum, my dad, and my aunt. We drove for about two hours to get there, which, um, should probably have been a warning sign. And when we actually arrived... it was just a lake. Like, just a normal, nothing-special lake with some concrete paths around it and a few trees that honestly looked a bit tired. We walked around it once, took some photos, had some really overpriced noodles from a little stall nearby, and then just kind of stood there not really knowing what to do next. I think the main reason it felt so boring was, well, the gap between what we expected and what we actually got. My parents had talked it up so much that even a pretty nice place would've struggled — and this was, you know, not exactly a pretty nice place. The most exciting thing that happened the whole day was a duck walked past us. And I remember actually feeling grateful for that duck. Which, honestly, says it all.",
      "part3": [
        {
          "q": "Why do most children think education is boring?",
          "a": "Well, I think it's mainly because classroom learning feels disconnected from real life. Kids are sitting there memorizing facts, and they just can't see why any of it matters. Plus, when everything's focused on passing exams, it kind of kills their natural curiosity. Traditional teaching doesn't leave much room for creativity or fun. I think if lessons were more interactive and hands-on, children would actually enjoy school a lot more."
        },
        {
          "q": "Why aren't young people willing to listen to the experiences of older people?",
          "a": "Hmm, I think it mostly comes down to the feeling that times have changed so much. Young people feel like the world their grandparents grew up in is totally different — different technology, different social norms, you know? So the advice can feel outdated and not really applicable. There's also that natural desire to figure things out on your own. But honestly, I think some of that older wisdom is still pretty valuable if you're open to it."
        },
        {
          "q": "What can people do when they feel bored?",
          "a": "Well, there are quite a few options. Some people go for something physical — like a walk or a workout — which does wonders for your mood. Others might pick up a hobby, watch something, or just call a friend for a chat. Personally, I think the best thing is to do something slightly productive but still enjoyable, like reading or trying a new recipe. Boredom is actually a good reminder to mix things up a little."
        }
      ]
    },
    {
      "id": "p2-a-tall-building-in-your-city-you-like-or-dislike",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 5,
      "title": "Describe a tall building in your city you like or dislike.",
      "titleCn": "描述一座你喜欢/不喜欢的城市高楼",
      "card": "You should say:\n· Where it is\n· What it is used for\n· What it looks like\n· And explain why you like or dislike it",
      "sampleAnswer": "A tall building in my city that I like is a huge tower, the financial building. Although it is called the financial building, in fact it has a lot of shops, restaurants and malls on the lower floors. It's a fantastic building, actually, and is designed by a famous French architect, whose name I forgot. It is, like most modern buildings, made of glass and metal and designed in interesting curving shapes. It's a fascinating building and the interior is really interesting too. Some people think it looks like how they imagine a space ship might look like - slick, white metal and glass, sweeping curves and lines and perfect lighting. I like it because it combines the best of functional design, with aesthetic beauty, and it's really relaxing to be inside. Somehow, even when it gets busy, it's a really nice relaxing space, and you always feel good there, you feel comfortable there, you feel that you can relax. There is a really nice coffee shop in the lobby with all sorts of modern art pieces on the walls, and a stunning range of interesting coffees and snacks. A lot of people go there to work in their break times, as there are comfy sofas, power-points for laptops and great service. So, I can see that they've made a lot of effort with the design of the building as well as with the businesses and commercial outlets inside the building. I enjoy going there, also because it is nearby a few places that I often need to go to for work - it's in the heart of the CBD.",
      "part3": [
        {
          "q": "What are the advantages of living in a tall building?",
          "a": "Well, personally I don't like living in a tall building really because I think the modern ones tend to be cramped and don't even have balconies normally. I don't know why. But the advantages might be that there are always better views if you have an apartment at the top, on the higher floors, of a tall building. That's the main advantage I'd say, so you can feel a sense of peace being high up above the city and you get a magnificent view."
        },
        {
          "q": "Do you think there will be more tall buildings in the future?",
          "a": "I think that there will. Tall buildings are primarily designed to save space, because you fit more people and more businesses in a smaller ground space. So, given that cities in China are so big, there is a desperate need to be economical with space, so the answer to this is to build very tall buildings."
        },
        {
          "q": "Why aren't there many tall buildings in the countryside?",
          "a": "There isn't such a need for tall buildings in the countryside. Tall buildings are built to save space in cities. That is their primary function. So, in the countryside you don't have this problem with high population and a restricted space to build things. So, there is basically no need for skyscrapers and tall buildings in countryside towns."
        }
      ]
    },
    {
      "id": "p2-a-place-you-would-like-to-visit-in-your-free-time",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 5,
      "title": "Describe a place you would like to visit in your free time.",
      "titleCn": "描述一个空闲时想去的地方",
      "card": "You should say:\n· Where it is\n· What you will do there\n· How long you will stay there\n· And explain why you would like to visit it",
      "sampleAnswer": "So, the place I'd love to visit in my free time is actually this little coffee shop I've been eyeing for a while now. It's in a quiet side street not far from the city centre — the kind of street where you'd probably walk past it without noticing if you weren't looking. I first came across it on Xiaohongshu, and, um, something about the photos just got me. It looked so cozy — wooden shelves, warm lighting, plants everywhere, the whole thing. I haven't been yet, which is a bit embarrassing honestly because it's not even that far from where I live. But I think I've been saving it, you know? Like, waiting for a day when I actually have time to just... sit there and do nothing useful. If I went, I'd probably stay for two or three hours at least. I'd order something I've never tried before, bring a book I've been meaning to read for months, and just completely switch off for a bit. No deadlines, no notifications, nothing. I think the reason it appeals to me so much is that it represents the kind of slow, quiet afternoon I almost never let myself have. It's not about the coffee, really — it's more about giving myself permission to stop for a while. And honestly, that sounds like the best kind of free time to me.",
      "part3": [
        {
          "q": "Why do you think some people choose not to travel abroad?",
          "a": "Well, I think the most obvious reason is money — international travel can be really expensive once you factor in flights, accommodation, and daily costs. Some people also have family or work commitments that make it hard to take time off. And then there's the language barrier, which genuinely puts a lot of people off, you know? Some folks just feel more comfortable staying somewhere familiar. I don't think it's necessarily a bad choice — domestic travel can be just as rewarding honestly."
        },
        {
          "q": "Do you think a gap period in life is important?",
          "a": "Hmm, I think it can be really valuable, yeah. Taking a break — whether it's between school and university or after a long stretch of work — gives you time to reflect and figure out what you actually want. A lot of people rush from one stage of life to the next without stopping to breathe, and that can lead to burnout. That said, I think the key is using that time meaningfully, not just drifting. Traveling, volunteering, or picking up new skills can make a gap period genuinely worthwhile."
        }
      ]
    },
    {
      "id": "p2-a-place-in-your-country-that-you-would-like-to-recommend-to-trav",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 5,
      "title": "Describe a place in your country that you would like to recommend to travelers.",
      "titleCn": "描述一个想推荐给游客的本国景点",
      "card": "You should say:\n· Where it is\n· What it is\n· What people can do there\n· And explain why you would like to recommend it to travelers",
      "sampleAnswer": "There's a place in Fujian province called Xiamen – I'm sure you've heard of it. This is where I'd recommend to travelers to China. It's a great place, by the coast, with a fantastic climate and lovely, warm, friendly people, great food, and interesting cultural things to do and see. And, if you're into Chinese tea, there's a lot of really good Chinese tea shops that are still family-run, friendly, and interesting. The tourist sights I would recommend are the Gulangyu island of pianos – this is really interesting – it's an island, a small island, just a boat ride away, where there are literally pianos in every house, and a piano museum. It's fantastic and quite unique. Also, the island trip makes a nice little day out, and there are friendly restaurants and eateries on the island too, and great views out to sea. Secondly, I'd go to see Hakka people's round houses just outside Xiamen in the countryside. They are called the Fujian Hakka Tulou, and they are quite large circular buildings, with a central courtyard and hundreds of living quarters inside. They date back centuries and were a traditional way to live in the days when you had to protect yourself from invaders – these roundhouses look fantastic and are incredibly interesting, and people still live in them today. It's a fascinating and unique aspect of the culture in that area of China. So, yes, these are the main places around Xiamen that I'd recommend – and make sure you go when it's a nice time of year, not too hot – in summer it gets really hot and humid. I'd go around, or just before, spring to be honest.",
      "part3": [
        {
          "q": "Where do people in your country often go for holidays?",
          "a": "Well, domestic travel is huge in China. Places like Sanya, Chengdu, and Yunnan are really popular because they offer beautiful scenery and great food without the hassle of going abroad. Coastal cities are always busy during summer too. That said, international travel has picked up a lot recently — Southeast Asia is a favorite because it's affordable and not too far. I think most people just want somewhere they can properly switch off and enjoy good food."
        },
        {
          "q": "Where do young people in your country often go for holidays?",
          "a": "Honestly, young people these days are pretty adventurous. A lot of them go for trendy destinations they've seen on social media — like Chongqing for its unique architecture or Xinjiang for the landscapes. Internationally, Japan and Thailand are super popular because they're easy to get to and really affordable. I think young travelers care a lot about having Instagrammable experiences, you know? The destination almost needs to look good in photos to make the list these days."
        },
        {
          "q": "What is the ideal length for a holiday?",
          "a": "Um, I'd say around one to two weeks is probably the sweet spot for most people. A few days feels too rushed — you barely settle in before it's time to leave. But anything longer than two weeks and people sometimes start missing home or feeling restless. I think seven to ten days gives you enough time to actually explore a place properly and come back feeling genuinely refreshed rather than exhausted from all the traveling itself."
        },
        {
          "q": "How do people usually plan holidays?",
          "a": "Most people start by scrolling through social media or travel apps for inspiration, then move on to comparing flight prices and reading reviews. Group chats are huge for coordinating with friends — everyone throws in suggestions and you somehow reach a decision eventually. I think younger travelers tend to leave things a bit more flexible, while families with kids plan everything down to the last detail. Booking accommodation and transport early is pretty standard now though, especially during peak seasons."
        },
        {
          "q": "Is it important to plan a holiday ahead?",
          "a": "I think some level of planning is definitely worth it, yeah. Booking flights and hotels early usually saves a lot of money, and it means you're not scrambling at the last minute. But over-planning can take the fun out of it too — sometimes the best moments happen when you just wander around without a schedule. So I'd say plan the basics, like transport and where you're staying, but leave enough room to be spontaneous. That balance tends to make for the best trips honestly."
        }
      ]
    },
    {
      "id": "p2-a-friend-s-home-you-visited-but-you-don-t-want-to-live-there",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 5,
      "title": "Describe a friend's home you visited but you don't want to live there.",
      "titleCn": "描述一个拜访过但不想住的友人家",
      "card": "You should say:\n· Where the home is\n· Who this person is\n· What kind of home it is\n· And explain why you don't want to live there",
      "sampleAnswer": "I had a friend in university called Roy. He was a nice, pleasant and intelligent man, actually. A bit older than me. He lived in a flat not far from campus. I used to visit him often because we shared similar interests in books, music and sports. He also helped me a lot with my studies, as he was really smart and enjoyed helping others. But his home was so messy and dirty – it was unbelievable really how messy and dirty it was. He knew it too, and admitted it, and said he just couldn't organise himself and hated cleaning. It was an interesting home, I must say, with loads of books, ornaments and old paintings and wall hangings and things. I did enjoy my visits to Roy's house, just that it was so unclean and dusty I was always sneezing when I was there. He also had two cats, a certain breed of cat that always leaves a lot of hair on the chairs and carpet. They were constantly molting. He didn't seem to care, but I think this might have been the reason I was sneezing a lot – a sort of allergy to cat fur maybe. Anyway, I liked the design of the flat, it had high ceilings, wooden floors, a huge balcony with plants on it, and a very spacious and functional kitchen – except he never did any washing up so it was impossible to cook in it! So, all in all, you can see why I didn't want to live there and would never live in an apartment like that or with someone so messy.",
      "part3": [
        {
          "q": "Do Chinese people like to visit others' homes?",
          "a": "To be honest, I don't really think so. I think we tend to feel we are imposing on others if we visit their homes. We don't have this kind of casual relationship with people, really. There are a couple of friends in my life who I've visited in their homes, but as a general rule we tend to meet people outdoors, do things together like dining in a restaurant or walking in the park or going shopping, rather than hanging out chatting in someone's home."
        },
        {
          "q": "What do Chinese people do when they visit others?",
          "a": "Usually when you visit someone's home you take a bottle of wine, some snacks, some juice, things like this. You always take off your shoes at the door, and often the host will give you a pair of slippers. I found it strange when I was in the UK that people don't do this, and even walk around the house in their shoes! It's quite interesting how cultures are different in this way. I would say that Chinese people are a bit more formal when visiting other people's homes, than Europeans, anyway, which is both good and bad. Sometimes it can create a more uptight atmosphere, which isn't so relaxing. This is the downside of this formality."
        },
        {
          "q": "What kind of place do people in your country like to live in?",
          "a": "When choosing a place of residence people usually consider three things: firstly the location and area of the city, in relation to where they work. Secondly, the actual building or community that fits your taste and preferences – whether you'd like it to have a garden, or a good management office, and things like this. Thirdly, the price in relation to your budget. These are the main considerations to take into account when choosing a place to live."
        },
        {
          "q": "What's the difference between homes in cities and those in the countryside?",
          "a": "Well, not really, at least not the buildings themselves. Like in the city centre, you have older and newer communities or apartment blocks. Sometimes residences on the outskirts are more spacious, and more affordable – they're often cheaper because they are further out and not so close to public services and amenities. Generally speaking most people prefer to live nearer to the city centre, because it provides a lot more in the way of entertainment, too. Sports centres, restaurants, malls, and these kinds of things are much more varied and interesting in the city centre compared to the outskirts."
        }
      ]
    },
    {
      "id": "p2-an-important-river-lake-in-your-country",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 5,
      "title": "Describe an important river/lake in your country.",
      "titleCn": "描述本国一条重要的河流/湖泊",
      "card": "You should say:\n· Where it is\n· How big/long it is\n· What it looks like\n· And explain why it is important",
      "sampleAnswer": "An important lake in my country is Qinghai Lake. It's actually the largest lake in China and it is located in Xining, well… outside Xining actually, in the hollow of the Tibetan plateau. It's a very famous lake in my country. I know the lake fairly well because I am from that province, from a town not too far from the lake. I am not sure exactly how big the lake is, but I'd say it was about 3,000 or 4000km square. It's massive! It's really massive and pretty deep too. It looks pretty impressive to be honest. It's an iconic symbol of the area, and it's located in an area of stunning natural beauty. The lake is important for the area as it used to be the one and only real source of fresh water, a key fishing area, and a natural attraction. People in the villages nearby also believe the lake has a strong power… I guess you'd call it a lucky power. There are a lot of older, superstitious people in my town and they all seem to believe that the lake houses some powerful spirits or something like that. I'm not sure I believe that, but I can imagine that in the past many people told mysterious and magical stories about the place. For me, however, the lake is important for different reasons – it's the first place I ever went fishing with my father, and also it's the very first place I learned to swim!! With my uncle!! So, as well as being an incredibly important feature for the province and the surrounding towns and villages, it's also got a special significance for me. Maybe the lake is enchanted, after all!",
      "part3": [
        {
          "q": "How can rivers/lakes benefit local people?",
          "a": "Lakes have been incredibly important since the dawn of time. They have been a major source of water and of fish for people for centuries, millennia in fact. Today, they continue to be important for local communities for the same reasons, but tourism has taken off in the past few decades, and this offers a good source of revenue for the local community. Hotels have sprung up in towns and villages near large famous lakes, boat trips can be arranged, and walking tours and hikes nearby. These all bring fame and a certain amount of money to the local areas."
        },
        {
          "q": "How do rivers/lakes affect local tourism?",
          "a": "The downside of the tourism that lakes attract is the damage to the environment. Especially in a country where there are so many people and tourist sites are inevitably packed with crowds – and often crowds that are not necessarily that respectful to the natural environment. So, although lakes have a huge effect on local tourism, attract thousands of people who want to see them, fish in them, go on boat trips on them, and bring great revenue to an area, the lakes and the area itself can be negatively impacted from an ecological standpoint, which is a shame."
        },
        {
          "q": "Are rivers/lakes useful for transport?",
          "a": "Yes, of course – rivers mainly. There are a number of famous rivers in China which are all still used today for transporting goods and people from one place to another. Transport along rivers takes longer, but most certainly is a fairly common and reliable means of taking heavy loads from one place to another – especially through areas where the roads are bad or snaking through high mountain passes. Rivers provide a stable, reliable, if not slightly slow, means of transporting goods. And, of course, tourists – some tourists go on river cruises!"
        }
      ]
    },
    {
      "id": "p2-your-favourite-place-in-your-home-where-you-can-relax",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 5,
      "title": "Describe your favourite place in your home where you can relax.",
      "titleCn": "描述家里最喜欢的放松角落",
      "card": "You should say:\n· Where it is\n· What it is like\n· What you enjoy doing there\n· And explain why you feel relaxed at this place",
      "sampleAnswer": "My favourite place in my home where I like to relax is actually the living room. I know that most young people say their bedroom, but in fact, my bedroom is quite small and not amazingly comfortable or interesting. The living room is by far the most cozy room in the house – it's warm, has a lovely sofa and armchairs. It has a great TV , rugs, little tables, amazing pictures on the walls. There's something about the room that makes everyone who spends time in it feel comfortable. My friends or family friends come round and all feel comfortable in our living room. This is also because my mother is a great host – she's always very relaxed and welcoming of guests. She doesn't stand on ceremony like a lot of traditional parents, but she warmly welcomes visitors and makes them feel at home. The living room is laid out and decorated in such a way that people seem to feel especially comfortable. I do a lot there… I study on my lap there on the sofa… I watch TV there, I play with the pet cat we have there, I nap in the armchair… We even have dinner there sometimes. So, I do pretty much everything there really… The atmosphere is relaxing, the lighting is comfortable and tasteful and it's big enough to feel there is enough space, but also small enough to feel warm and cozy, especially in winter when it's bitterly cold outside. The view from the window is also really pleasant too.",
      "part3": [
        {
          "q": "Why is it difficult for someone to relax?",
          "a": "Some people are of a more nervous disposition than others, really. That's one reason. Some people just get more anxious and let things get to them, and others let life's troubles go over their heads more. It's a question of attitude and personality. Of course, there are other reasons too: some people have a more stressful life and more to worry about than others – financial stresses, health issues or trouble with work or family members. So, there are social reasons and personality reasons that determine whether a person finds it hard to relax or not."
        },
        {
          "q": "Do people in your country exercise after work?",
          "a": "A lot of people do yes. I'd say quite a few people I know go to the gym or do some form of sports in the evenings or on weekends. There are also a lot of people who do not do any physical exercise – they should, but they don't – perhaps because it's easier just to finish work and then collapse on the sofa and rest, or perhaps because they have family responsibilities and duties outside of work. So, it's a question of time, as well as inclination and interest."
        },
        {
          "q": "What is the place where people spend most of their time in their home?",
          "a": "The main place where most people spend time in their own homes must be the living room really, I guess. But, many people have a living room and dining room combined, so I guess it's that room! It's the place with the comfortable seating and sofas, the place where the family eat, the place where people watch television. Though, there are some people who are more likely to spend time in their bedrooms, I suppose – younger people who are studying or prefer to have privacy from the rest of the family in the evenings – they might spend more time in their bedrooms."
        },
        {
          "q": "Do you think there should be classes for training young people and children to relax?",
          "a": "Haha, well... I'm not sure, but I think that teaching young people and children to relax should be incorporated into the curriculum, let's say. It should be encouraged or at least taught about so that people understand the importance of self- care, maintaining balance between work and rest times, and how important recharging one's batteries is, if you're going to be successful in work or studies. All of these things can be woven into the curriculum in schools, not necessarily taught as subjects in their own right."
        },
        {
          "q": "Which is more important, mental relaxation or physical relaxation?",
          "a": "Both are of equal importance as far as I'm concerned. You need to be able to do both if you are going to maintain a healthy body and a calm, balanced and sharp mind. some people think that one is more important than the other, but I think they need to go hand in hand. This is why in a lot of meditations there are physical exercises and postures, which go alongside mental relaxation and breathing exercises, because the two are really part of the same equation."
        }
      ]
    },
    {
      "id": "p2-a-shopping-mall",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 5,
      "title": "Describe a shopping mall.",
      "titleCn": "描述一个购物中心",
      "card": "You should say:\n· What its name is\n· Where it is\n· How often you visit it\n· And what you usually buy at the mall",
      "sampleAnswer": "The shopping mall I visit most frequently is called The MixC. It's arguably the most popular mall in my city. It's located right in the CBD area, the city center. What I love about it is that it's directly connected to the subway station. You don't even need to go outside; you just get off the train, walk through an underground tunnel, and boom, you are in the mall. This is super convenient, especially in summer when it's scorching hot outside. I usually go there about two or three times a month, mostly on weekends. It's my go-to place for a bit of retail therapy or just to hang out with friends. As for what I buy, well, it depends. The mall is huge. On the ground floor, it's full of luxury brands like LV and Gucci. To be honest, I mostly just do window shopping there because, you know, I can't really afford them yet! Where I actually spend my money is usually on the basement floor, the B1 level. There is a massive variety of food there. I often buy bubble tea—there's always a long queue at Heytea—or grab some snacks. I also shop at fast-fashion brands like Uniqlo or Zara because they are affordable and trendy.",
      "part3": [
        {
          "q": "Why do people like shopping?",
          "a": "Well, I think there are a few reasons. First off, for many people, it's a form of stress relief—you know, what we call 'retail therapy.' Buying something new can give you a quick mood boost. Also, it's a social activity. People enjoy hanging out with friends at the mall, trying on clothes, and just having a good time together. Plus, getting something new, whether it's a gadget or an outfit, just feels exciting."
        },
        {
          "q": "Do you think spending money makes people happy?",
          "a": "That's a tricky one. I'd say yes, but only temporarily. Spending money can definitely bring instant gratification, like when you finally buy that phone you've wanted for months. It feels great in the moment. However, I don't think it leads to long-term happiness. True happiness usually comes from experiences, relationships, or personal achievements, not just material possessions. So, money can buy pleasure, but maybe not deep, lasting joy."
        },
        {
          "q": "Why do people buy things they don't need?",
          "a": "I think the biggest reason is sales and discounts. When people see a red '50% off' sign, they often stop thinking logically. They just feel like they are saving money, even if they don't actually need the item. Another reason is following trends. If everyone on social media is buying a certain product, like a new cup or a specific brand of shoes, people want to buy it too, just to fit in."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-got-up-early",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a time when you got up early",
      "titleCn": "描述一次早起的经历",
      "card": "You should say:\n· When it was\n· What you did\n· Why you got up early\n· And explain how you felt about it",
      "sampleAnswer": "Oh, there's lots of times when I have had to get up early, but the last time I remember very clearly was when I was on holiday on the Yangtze River on a sort of boat cruise with my school. It was a really cool trip actually, and each day we travelled down the river on the boat, and stopped off at different places along the way. For sightseeing in China, you usually have to get up really early, you see, so every morning they woke us up just after dawn, which was around 5am. I wasn't very happy about this, to be honest, because I hate waking up early, and also because we all sat up late in the bunk beds drinking beer and playing cards, which made it even more difficult to get up early in the morning and go around the villages and temples and places. So, each and every morning on this Yangtze cruise we had to get up at the crack of dawn, and it was quite awful in many ways. However, I must say that once we were up and had had breakfast and got going it wasn't so bad, and there were less tourists at the destinations, because we were often the first to be there! So, all in all, it was probably a good idea that we were made to get up so early, even though we didn't really enjoy it at first. I'm not much of an early bird to be honest, so always find it difficult to get up at 7am, let alone at 5am like on this trip! But, hey, that's often what you have to do on these kind of trips if you want to miss the crowds.",
      "part3": [
        {
          "q": "Why do some people like to get up early?",
          "a": "I know a lot of people who enjoy getting up early. They're usually older people, actually. My grandparents get up really early, and they go to bed really early too. Also, my friend, John, always gets up early – he's quite young – and he has the habit of sleeping only a short time, but strangely he seems to always be full of energy every morning. So, I suppose some people are just like this!"
        },
        {
          "q": "Why do people get up early?",
          "a": "Some people get up early because they enjoy making the most of the day and getting out of bed in the morning. Others have to go to work, so they must get up early – most people, actually. And almost all school children have to get up early, obviously because they have to get dressed and ready for school, then get to school. So, there are a number of fairly typical reasons why people might get up early."
        },
        {
          "q": "What kinds of occasions need people to arrive early?",
          "a": "Well, a lot of important things in life start in the mornings. Like school, work and things like this. There are other occasions when people must arrive early in the morning – like if they have an appointment, an interview, or an important examination. Most of these things are often scheduled in the mornings so that people can go to work afterwards."
        },
        {
          "q": "Why do some people like to stay up late?",
          "a": "Some people enjoy the nights. Nighttime, especially if you live in a big city, is the only time when life seems to calm down, traffic dies down, and the city becomes quieter. I have a number of friends who really enjoying staying up late because they feel this is the only really peaceful time of day in the city – where they can lie and read a book, listen to music, and just feel relaxed and away from the hustle and bustle of daytime life. I can understand this, actually, although I'm not much of a night owl myself. I can see why some people choose night time, and staying up late, to spend time alone at peace."
        },
        {
          "q": "Is it good to arrive early in any situation?",
          "a": "Well, not necessarily in every situation, I think. In professional settings — like job interviews or business meetings — arriving early definitely shows respect and gives you time to prepare. But socially, it can actually be a bit awkward. Like, if you show up to a party way too early, the host might not be ready yet. So I think it really depends on the context. Generally speaking though, being punctual or slightly early is a good habit to have — it just shows you value other people's time."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-worked-in-a-group",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a time when you worked in a group",
      "titleCn": "描述一次团队合作的经历",
      "card": "You should say:\n· What you did\n· Who you worked with\n· What problems you faced\n· And explain why you worked in the group",
      "sampleAnswer": "Actually, the first thing that comes to mind is a group project I did back in my second year of university. It was for one of our core modules, and we had to put together a full presentation on a marketing campaign — from research all the way to the final pitch. Our group had five people in total, and, um, let's just say we were not exactly a dream team from the start. The biggest problem we ran into was honestly just getting everyone on the same page. Like, two people in the group had completely different ideas about the direction we should take, and for a while every single meeting just turned into the same argument going in circles. It was exhausting. At one point I remember thinking, I could've just done this alone in half the time. But we kind of had no choice — the whole point of the assignment was that it had to be a group effort, and our grade depended on it. So eventually we just had to sit down, be a bit more flexible, and figure out how to make everyone's ideas work together somehow. And weirdly, the final presentation actually went really well. We ended up getting a pretty decent grade, and I think the disagreements along the way kind of pushed us to think harder than we would have otherwise. Didn't make the process any less stressful though, if I'm being honest.",
      "part3": [
        {
          "q": "Why do some people prefer to work by themselves?",
          "a": "I guess it comes down to personality, really. Some people just find group settings distracting — too many opinions, too much back-and-forth. When you work alone, you move at your own pace and make decisions without having to compromise. Introverts especially tend to do their best thinking in quiet environments. There's also a sense of ownership, you know? If something goes well, it's entirely your effort. That feeling can be really motivating for certain people."
        },
        {
          "q": "What should a leader do to make team members want to follow him or her?",
          "a": "Honestly, I think the most important thing is making people feel heard. Nobody wants to follow someone who just barks orders without listening. A good leader communicates clearly, gives credit where it's due, and stays calm under pressure. Trust is huge — if team members feel respected and supported, they'll naturally be more motivated. It's less about authority and more about creating an environment where everyone feels like they actually matter."
        },
        {
          "q": "Should students learn to do group work?",
          "a": "Absolutely, I think it's essential. School isn't just about academic knowledge — it's about preparing for real life, and almost every workplace involves collaboration. Group work teaches you how to communicate, handle disagreements, and divide responsibilities. Sure, it can be frustrating sometimes, especially when not everyone pulls their weight. But navigating that is itself a valuable skill. The earlier students learn to work with others, the better equipped they'll be later on."
        },
        {
          "q": "What group tasks are there in schools?",
          "a": "There's actually quite a variety. Project presentations are probably the most common — students research a topic together and present their findings to the class. Science experiments often involve teamwork too, since there are different roles to divide up. Then there are things like debate competitions, drama performances, or even sports events that require real coordination. Some schools also do community service projects as a group. These activities all teach something slightly different, which is what makes them useful."
        }
      ]
    },
    {
      "id": "p2-a-plan-that-you-had-to-change-recently",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a plan that you had to change recently",
      "titleCn": "描述一个最近被迫改变的计划",
      "card": "You should say:\n· When this happened\n· What made you change the plan\n· What the new plan was\n· And how you felt about the change",
      "sampleAnswer": "Oh, this actually happened pretty recently — just a few weeks ago, and it was one of those annoying situations where everything falls apart at the last minute. So basically, I'd been planning a short trip with two of my friends for almost a month. We were going to take a train to a nearby city for the weekend, had already looked up places to eat, even made a rough list of things we wanted to do. I was genuinely looking forward to it — you know that feeling when you've been busy for ages and you finally have something fun to look forward to? That was me. And then, two days before we were supposed to leave, one of my friends suddenly came down with a fever and the other one had some family thing come up out of nowhere. So just like that, the whole trip was off. We ended up just meeting at a café near campus instead, having coffee, and chatting for a few hours. Which, um, was fine — actually it was really nice — but it definitely wasn't what I'd been picturing in my head for the past month. Honestly, I was more disappointed than I expected to be. But I think what helped was just accepting it pretty quickly and not making a big deal out of it. Sometimes plans just fall through, and the café ended up being a pretty good afternoon anyway. Just a slightly less exciting one.",
      "part3": [
        {
          "q": "Do people often change their plans?",
          "a": "Pretty often, I'd say. Life is unpredictable — something unexpected always comes up, whether it's a work emergency, bad weather, or just a change of mood. I think some people are naturally more flexible and don't mind adjusting on the go, while others find it really stressful. Honestly, the ability to adapt is probably more useful than sticking rigidly to a plan. Things rarely go exactly as expected anyway, so a bit of flexibility goes a long way."
        },
        {
          "q": "Would you tell others if you change your plan?",
          "a": "It really depends on who's involved. If the change affects other people — like canceling plans with a friend or rescheduling a meeting — then yeah, absolutely, you should let them know as soon as possible out of basic respect. But if it's something personal that only affects yourself, there's no real obligation to inform anyone. I think communication matters most when others have already arranged their time around your original plan."
        },
        {
          "q": "Why do you think parents still make plans for their children nowadays?",
          "a": "I think it comes from a place of love, but also anxiety. Parents want to give their kids every possible advantage — extra classes, structured activities, mapped-out futures. There's also a lot of social pressure involved, especially in competitive cultures where falling behind feels like a real risk. The tricky part is that over-planning can actually backfire, leaving kids with no space to discover their own interests. Good intentions don't always translate into good outcomes."
        },
        {
          "q": "How does technology help people make plans?",
          "a": "Massively, I think. Calendar apps and reminders mean you basically never forget anything these days. Tools like Google Maps help you figure out timing and routes in advance, which takes a lot of guesswork out of travel plans. For group planning, apps like WhatsApp or shared documents make coordinating so much easier. And AI assistants are getting pretty good at suggesting schedules too. Overall, technology just removes a lot of the friction that used to make planning feel like a chore."
        }
      ]
    },
    {
      "id": "p2-an-important-decision-you-made-in-life",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe an important decision you made in life",
      "titleCn": "描述一个人生中的重要决定",
      "card": "You should say:\n· What the decision was\n· Why you made this decision\n· How you made this decision\n· And explain why this decision was important",
      "sampleAnswer": "An important decision I made in my life was a few years ago. I made the decision to study in Chengdu, my home city, at university, and not take up a place at university in Beijing. This was a tough decision to make because a huge part of me wanted to go to live in Beijing and study there, and some people said it would be a great opportunity for me as the university that offered me a place there was more prestigious than the one in my home city - at least 'on paper', as they say. However, I wanted to stay close to my parents because my father is really sick and I am an only child, and I wanted to stay around and help my mother take care of him while he recovers – if he recovers, which I hope he does. So, I took the place in Chengdu and not Beijing. Actually, I do not regret my decision at all. I am quite close to my family, and I feel that I want to be around them, especially as my dad is not well. Also, I believe that the expense and the stress of living in the big city would be quite overwhelming and possibly a distraction from my studies. So, all in all, I think I made a good decision and I don't feel in the slightest bit remorseful about having made this decision. It's an important decision, because, as you know, the university you choose to study in can have a big impact on your future career path and your life in general. But, I am someone who always looks to the future and doesn't look back with regrets, so I am not particularly worried about this, and I'm loving my course and enjoying my classmates and teachers, and also able to do a bit of work on the side, save money and be with my parents, especially my dad, and help around the home. So, I'm happy with my decision and feel assured it was the right decision to make.",
      "part3": [
        {
          "q": "What important decisions do young people need to make after graduation?",
          "a": "Young people have to make a number of important decisions after graduation. At least traditionally or typically speaking. Firstly, they might have to have a serious think about the kind of career they would like to pursue, or at least the kind of job they might do while they are thinking about their career. Secondly, they may also be getting towards the age when they must start thinking about marriage, if they have already found a girlfriend or boyfriend, especially if their parents are really conventional and putting pressure on them. Parents tend to do this where I'm from. So, there are the two main big life decisions that usually come at some point in the year or two after graduation, I'd say."
        },
        {
          "q": "Who can children turn to for help when making decisions?",
          "a": "Children can ideally turn to teachers and parents. Probably parents, mainly, as teachers are very busy with thousands of other children they have to think about and very busy. But there are some teachers who take time to give kids advice on things like making small or large decisions in life, depending on where the school is, what the environment is like and what kind of school culture exists there. And, of course, the personality and inclinations of the teachers themselves. But, for the most part, the people that kids can turn to are usually their parents or perhaps their aunts and uncles and even grandparents sometimes."
        },
        {
          "q": "Do you think children sometimes have to make important decisions?",
          "a": "Children need to make less important decisions in the grand scheme of things, but still the decisions they have to make are important to them at the time, and that must be remembered. Children, at least where I am from, have to decide things like which after-school club they want to join, which kinds of sports or leisure activities they might like to do on the weekend and stuff like this. Some parents today give their children more free choice about these things than we had in the past – also because there are more options today than there used to be. So, children are being brought up to be a little more autonomous and make more decisions themselves about this kind of thing, most certainly."
        },
        {
          "q": "Do you think advertisements influence our decisions on shopping?",
          "a": "Adverts most certainly have a strong influence on our shopping habits. Perhaps we underestimate that influence a lot of the time. I mean, we don't necessarily realise the power of advertising as adverts are so ubiquitous we almost take them for granted and don't even realise (or admit) that the ideas being marketed to us are actually going into our heads and influencing our choices of what to buy. I think that this is the insidious side of some marketing – it is designed to make us feel we need to buy certain products in order to make our lives better, or in order to compete with other people or maintain certain social standards and not look like we are \"behind the times\" or \"not keeping up with our peers\". Advertising plays on these human tendencies and weaknesses sometimes, and therefore does have an influence on our buying habits."
        },
        {
          "q": "What are the benefits of advertising?",
          "a": "Well, I think the biggest benefit is that it connects people with products they actually need but might never find on their own. It also creates competition between companies, which usually means better quality and lower prices for consumers. And on a broader level, advertising funds a lot of free content we enjoy every day — like social media and news websites. So yeah, it's more useful than people give it credit for, honestly."
        },
        {
          "q": "How do people usually make important decisions?",
          "a": "Hmm, I think most people start by gathering information — asking friends, reading reviews, or just doing some research online. Then there's usually a gut feeling involved at some point, you know? Like, even after all the research, people often go with what feels right. I think the really big decisions — career changes, moving cities — often involve talking things through with family too. It's rarely a purely logical process for most people."
        }
      ]
    },
    {
      "id": "p2-a-live-sports-event-you-watched-before",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a live sports event you watched before.",
      "titleCn": "描述一场看过的体育现场赛",
      "card": "You should say:\n· When it happened\n· Where it took place\n· Who you watched it with\n· And explain how you felt about this experience",
      "sampleAnswer": "I have seen a lot of live sports, actually, because I'm a big sports fan. But the live event that I liked the most was a football game I saw at the stadium in Beijing. It was a huge game, and lots of people went to see it. It was an especially exciting atmosphere, and it was the first time I had been in the crowd at a proper football match. Usually the live sports I go to see are mainly basketball and martial arts contests. Football is a whole different atmosphere and the crowds go really wild with excitement – that's a key part of football culture really. I went with a few classmates from university and my brother. We got really into the spirit of the game. I have often enjoyed the whole atmosphere of games like football, and to be honest, though I am not a huge fan of the game itself, I came to understand after watching this game live in the stadium, just why so many people follow football and get really really into it. There's a very strong fan-culture associated with the game, and people get incredibly passionate about it, chanting football songs, cheering on their team, shouting at the opposition players and things like this. Sometimes it can get a bit too passionate and quite aggressive in a way, too. I'm not sure it's really my kind of game, really, but it was a very exciting experience and one that I might repeat from time to time, especially if there is a big match on and my friends are also going. We went to a nice restaurant afterwards, ate lots of great food, drank a few beers and talked about the game. It was definitely an occasion I remember very fondly. I'd love to see a game in the UK, like Liverpool United, or a big team like that.",
      "part3": [
        {
          "q": "Why do some people like to watch sports events?",
          "a": "Live sports contests are far more exciting than sports contests on TV, mainly because you're part of a live audience, and you can see the game right in front of you, not just on a screen. Some people are really into this atmosphere and the sense of unity with the crowd that you're with and the team you are supporting. It's a very fundamental human desire – to be part of something big and exciting and feel part of the action. So, in many ways I see it as a very natural thing, well, for people who like noise and excitement and crowds, that is."
        },
        {
          "q": "Where do people normally watch sports events?",
          "a": "Well, it really depends on the person. A lot of people watch at home on TV or their phone — it's convenient and you don't have to deal with crowds. Sports bars and cafes are popular too, especially for big games like the World Cup, because the atmosphere is just way more exciting with a group. And of course, some people go to the stadium in person. That's a totally different experience — the energy there is something you really can't replicate at home."
        },
        {
          "q": "What are the advantages of watching sports events online?",
          "a": "Honestly, convenience is the biggest one. You can watch from anywhere, pause and rewind if you miss something, and often choose from multiple camera angles. There's no travel, no expensive tickets, and no queuing. A lot of platforms also offer live stats and commentary alongside the stream, which adds to the experience. And for people in different time zones, you know, being able to catch a replay at a reasonable hour makes a huge difference."
        },
        {
          "q": "What sports matches are suitable for children to attend?",
          "a": "I think events that are family-friendly and not too intense are the best fit. Things like local football matches, tennis tournaments, or athletics events work really well — the atmosphere is fun but not overwhelming. I'd probably avoid high-contact sports or matches where crowd behavior can get a bit rowdy, you know? The key is that children feel safe and engaged. Smaller, community-level events are often perfect because kids can actually follow what's happening."
        }
      ]
    },
    {
      "id": "p2-an-occasion-you-had-a-special-cake",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe an occasion you had a special cake",
      "titleCn": "描述一次吃特别蛋糕的经历",
      "card": "You should say:\n· When this happened\n· Where this happened\n· Who gave you the cake\n· And explain why it was a special cake",
      "sampleAnswer": "Well, there's a few occasions I've had a special cake - almost every birthday over the past ten or fifteen years. You see, we have a strong tradition of giving people cakes on their birthdays, and in more recent years there's a lot of fantastic and quite amazing cake companies in China. The last time I had a fantastic cake was my last birthday. I had a dinner with my girl friends in a Japanese restaurant, and after the dinner they presented a huge box with ribbons tied around it. I opened it and inside was this amazing, tall, peach-coloured cake. The cake was decorated with the most incredible flowers and designs all made from different coloured icing and cream. It was probably the most fancy cake I've ever seen, actually. It's hard to explain or describe, but it must have been done by a real expert in cake design, as it was almost a work of art! The cake came with candles, which we put in it, and I lit them, made a wish - of course, they turned the lights off for my wish - and the whole restaurant joined in as we sang happy birthday. I enjoy this birthday tradition, and I like the fact that everyone seems to follow it each year. Though it becomes a little difficult because when it's your friend's birthday you have to try to find an equally nice cake, or even better cake to surprise them with! So, it can get quite hard to keep up!",
      "part3": [
        {
          "q": "What's the difference between special food in China and foreign countries?",
          "a": "Well, that's quite a difficult question to answer, really. Special food is different in all countries. And China is a huge country, with many different types of cuisine, which all differ from each other, and all have their more or less 'special' dishes. So, it's not really easy to say, in short, what the main differences are between special food in China and in other countries. Most Chinese people think their food is the best in the world – so – maybe they would say the difference is that Chinese food is simply all way more special than food anywhere else! I'm not sure."
        },
        {
          "q": "Do Chinese people usually cook special food in traditional festivals?",
          "a": "Yes, I would say that every family has a number of dishes that they make for traditional festivals, that are special for those occasions. It's not that they do not eat them at other times of year, but that they make all their favourite special dishes on festivals."
        },
        {
          "q": "Do Chinese families like to eat together during traditional holidays?",
          "a": "Yes, absolutely. It's our main occasion during the Spring Festival really. Chinese love to dine together and have a lot of different dishes to share. And most people invite a lot of family members to the house for festivals, so there's always a huge meal, lots of snacks, wine and conversation. The dinner is in some ways the focal point of the festival."
        },
        {
          "q": "Why do people spend more on special food on special occasions?",
          "a": "People like to be generous and celebrate their lives on special occasions, and so they always buy all the best foods and wines and fruits. It's quite normal, I think everywhere in the world, that festivals are special and therefore feature all the best things that a family can afford. It marks the occasion and sets it apart from normal everyday life."
        }
      ]
    },
    {
      "id": "p2-a-challenging-technological-problem-you-faced",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a challenging technological problem you faced",
      "titleCn": "描述一个遇到的技术难题",
      "card": "You should say:\n· What the problem was\n· When and where you faced it\n· How challenging it was\n· And explain how you solved it",
      "sampleAnswer": "Right, so the problem I want to talk about happened maybe half a year ago, and it was actually to do with using an AI tool for the first time — which sounds straightforward, but trust me, it really wasn't. I was working on a fairly big research assignment and a friend recommended I try using an AI writing assistant to help me organise my ideas. So I signed up, got everything set up, and started using it — and at first it seemed great. Like, genuinely impressive. It was pulling things together way faster than I could on my own. But then I started noticing that some of the information it was giving me was just... wrong. Not obviously wrong, which was the scary part — it sounded completely confident and convincing, but when I actually went and checked the sources it claimed to be referencing, either the sources didn't exist or the details were totally off. And by that point I'd already built quite a bit of my draft around that information. So I had to go back through everything line by line, fact-check it manually, and basically rewrite a big chunk of what I'd done. It took way longer than if I'd just done the research myself from the start, which was, um, a little humbling. What I took away from it though was actually pretty useful — AI tools are genuinely helpful, but you can't just switch your brain off when you're using them. You still have to think critically about what they're giving you. Learned that one the hard way.",
      "part3": [
        {
          "q": "What are the advantages and disadvantages of AI?",
          "a": "Well, the benefits are pretty clear — AI saves time, reduces human error, and can handle tasks that would take people hours. It's already transforming healthcare, education, and loads of other fields. But the downsides are real too. Job displacement is a genuine concern, and there are big questions around privacy and how data gets used. I think the technology itself isn't the problem — it's more about whether we're using it responsibly or not."
        },
        {
          "q": "Do you think people today should learn about AI technology?",
          "a": "Honestly, I think it's becoming essential, yeah. AI is already part of so many things we use daily — from search engines to customer service. Understanding basically how it works helps people make smarter decisions and avoid being misled by it. You don't need to become an expert, but having some general awareness is really important. I think people who ignore it completely will find themselves at a disadvantage pretty quickly, especially in the workplace."
        },
        {
          "q": "Should children learn to use AI?",
          "a": "I think so, but with proper guidance. AI tools are going to be a normal part of their future, so learning to use them early makes sense. The key is teaching kids how to use AI as a helper rather than a replacement for their own thinking. If children just rely on it for everything without understanding what they're doing, that's where problems start. So yeah — introduce it early, but make sure critical thinking comes first."
        },
        {
          "q": "How can AI help in our lives?",
          "a": "In so many ways, honestly. On a daily level, it helps with things like navigation, recommendations, and managing schedules. In more serious areas, AI is helping doctors diagnose diseases earlier and making education more personalized. For people with disabilities, it can be genuinely life-changing. I think the most exciting thing is that AI handles the repetitive, time-consuming stuff so people can focus on more creative and meaningful work instead."
        },
        {
          "q": "Do you think students are overly reliant on AI?",
          "a": "Um, quite a few are, yeah. It's just too easy to type a question and get a full answer instantly — there's almost no reason to struggle through something yourself anymore. The problem is that real learning comes from that struggle, you know? If students skip that process, they might get good grades but miss out on actually developing skills. I think a lot of students aren't even aware of how dependent they've become, which is probably the bigger issue."
        },
        {
          "q": "What can teachers do to stop students relying too much on AI?",
          "a": "I think the most effective approach is changing how students are assessed. If everything is a take-home essay, of course people will use AI. But in-class discussions, oral presentations, and hands-on projects are much harder to fake. Teachers can also be more open about AI — explaining its limitations and showing students where it actually gets things wrong. Making critical thinking a core part of lessons, rather than just finding correct answers, would probably make the biggest difference long-term."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-had-a-problem-with-using-an-electronic-device",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a time when you had a problem with using an electronic device",
      "titleCn": "描述一次电子设备出问题的经历",
      "card": "You should say:\n· When it happened\n· Where it happened\n· What the problem was\n· And explain how you solved the problem at last",
      "sampleAnswer": "I'd like to talk about a rather frustrating experience I had with a computer. It was a few months ago actually when I was working on an important project for my job. The problem arose late in the evening when I was at home in my home office. The issue I encountered was with my computer's operating system. Out of nowhere, it started to freeze intermittently, making it nearly impossible to continue working. This was a particularly stressful time because I had a looming deadline. I decided to start troubleshooting right away. I began by rebooting the computer, hoping that a simple restart would resolve the issue. Unfortunately, the problem persisted. I then checked for any recent software updates, thinking that a bug might be causing the problem. After updating, the issue still persisted. Growing increasingly frustrated, I reached out to a colleague for assistance. They suggested I try running a diagnostic scan to identify any hardware issues. This scan took quite some time, and to my dismay, it didn't reveal any specific hardware problems. Finally, after several hours of trial and error, I decided to restore my computer to a previous state using a system backup. This proved to be the solution, and my computer returned to its normal, reliable state. Reflecting on this experience, I felt a mix of relief and frustration. While I was relieved that I managed to resolve the issue and meet my deadline, I was frustrated by the hours of productivity lost due to the computer problem. It also made me realize the importance of regularly backing up important work to prevent such situations in the future. Overall, it was a valuable learning experience, albeit a challenging one.",
      "part3": [
        {
          "q": "Why are people keen on buying new electronic devices?",
          "a": "I think a big part of it is just the excitement of something new, honestly. Tech companies are really good at making each new release feel like a massive upgrade — better camera, faster processor, sleeker design. There's also a social element, you know? Having the latest phone or gadget can feel like a status thing, especially among younger people. And sometimes the upgrade is genuinely useful. But I think for a lot of people, it's more about the feeling of buying something new than actual need."
        },
        {
          "q": "What impact do electronic devices have on people?",
          "a": "Well, the positive side is pretty obvious — they keep us connected, make information instantly accessible, and honestly make daily life a lot more convenient. But the downsides are real too. A lot of people struggle with screen addiction without even realizing it, and sleep quality takes a hit when you're on your phone right before bed. Face-to- face communication feels like it's suffering as well. I think devices themselves aren't the problem — it's more about whether people can find a healthy balance with them."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-received-a-message-or-email-and-it-took-you-a-lo",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a time when you received a message or email and it took you a long time to reply.",
      "titleCn": "描述一次拖很久才回消息/邮件的经历",
      "card": "You should say:\n· Who this person was\n· What the message/email was about\n· Why you spent a lot of time replying\n· And explain how you felt about the experience",
      "sampleAnswer": "Okay so this is actually something I feel a little guilty about even now. About six months ago, a friend of mine from high school sent me this really long WeChat message — and I mean really long, like the kind that takes up your whole screen and you have to scroll down to see the end of it. She was basically opening up about some stuff she'd been going through — feeling lost about her future, not sure if she was on the right path, that kind of thing. Very honest, very personal. And I could tell it had taken her a lot of courage to send it. The thing is, I read it pretty much straight away. But then I just... didn't reply. Not because I didn't care — I genuinely did — but because I had no idea what to say. Like, she'd shared something so real and so vulnerable that I was terrified of saying the wrong thing or coming across as dismissive. So I kept thinking, I'll reply when I have the right words. And then a day passed, and then another, and suddenly it had been almost two weeks. I finally sat down one evening, put my phone on do not disturb, and just wrote back as honestly as I could. No perfect words, just genuine ones. She replied almost immediately saying she was really glad I did. Which made me feel both relieved and a bit silly for waiting so long. I think sometimes we overthink these things when the other person really just needs to know you're there.",
      "part3": [
        {
          "q": "When do people spend a long time responding to others' messages?",
          "a": "Well, I think the most common reason is just being genuinely busy — in a meeting, focused on work, or simply away from their phone. But sometimes people take longer because the message requires a thoughtful response and they don't want to reply with something half-baked, you know? Emotionally difficult messages are another one — if someone sends something sensitive or confrontational, people often need time to figure out how to respond without saying the wrong thing."
        },
        {
          "q": "In what situations do people not respond to messages right away?",
          "a": "Honestly, it happens all the time for different reasons. Some people are just bad at checking their phone regularly. Others see the message but feel like it's not urgent enough to reply immediately and then completely forget about it. Social situations are a big one too — it feels rude to be on your phone when you're with other people. And sometimes, if the conversation feels awkward or uncomfortable, people just put it off without really meaning to."
        },
        {
          "q": "What would you do if you haven't received a reply after sending out a message?",
          "a": "I'd probably just wait a bit first, honestly. Most of the time there's a perfectly normal reason — people get busy. If it's something important and a day or two has passed, I'd send a gentle follow-up, nothing pushy. And if it's urgent, I'd just call instead. I think getting anxious over unanswered messages is pretty common these days, but most of the time it's really not personal. People have a lot going on, you know?"
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-organized-a-happy-event-successfully",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 5,
      "title": "Describe a time when you organized a happy event successfully.",
      "titleCn": "描述一次成功组织欢乐活动的经历",
      "card": "You should say:\n· What the event was\n· How you prepared for it\n· Who helped you to organize it\n· And explain why you think it was a successful event",
      "sampleAnswer": "A really happy event that I organized was a birthday celebration for my friend and classmate, Jean. It was going to be a surprise party, but that was too hard to arrange, as she shared a dorm with us and she would catch on while we were planning it and buying things for it. So, we discussed the birthday idea with her, and told her we would plan it… She seemed quite touched with that. Also, we all wanted a good excuse to have some fun. We didn't just have a party – we made a whole day of it. We arranged to go to a theme park, Happy Valley, outside the city, for about 5 hours. Then we had a dinner in a fantastic hot pot restaurant in the city, then we went to a cocktail bar, and then we all went to KTV! So, we had a really action-packed day. At the dinner we presented her with a great birthday cake that we had bought online from a specialist cake-making company. We also gave her gifts at the dinner. At the cocktail bar we got the bartender to prepare special drinks for her and give us all a group deal. And at KTV we made sure that we selected all the songs she liked. It was a very tiring day, and took some organization and planning, but all turned out well in the end. We had a fantastic time. I and my friend Mary were the main organisers, but everyone helped a little bit, and another friend, Mike, organized the minibus from place to place throughout the day, so we could all travel together. It was a truly amazing day and I think the best birthday Jean has had in a long time.",
      "part3": [
        {
          "q": "How can parents help children to be organized?",
          "a": "Parents can start teaching kids to be organized at quite a young age. They can get them to clear their toys away in an orderly fashion, fold their clothes after taking them off... and teach them where things go in the house and how to put things back properly after use. These are the first things you might try to start teaching a toddler. And as the children grow up, they should teach them more about time-keeping and scheduling tasks."
        },
        {
          "q": "On what occasions do people need to be organized?",
          "a": "People need to be organized with work, with studies, with household tasks and with responsibilities and things that need to get done for the family. In terms of occasions, people need to be especially organized when they are arranging meetings, planning things like weddings and events, or organizing trips and holidays. These are some examples that spring to mind of when organizational skills are essential."
        },
        {
          "q": "Do people need others' help when organizing things?",
          "a": "Sometimes it's easier to organise something yourself, rather than involve other people. But with other things, it's best to get help from others. It totally depends on the type of things that you need to arrange. You usually need help from others if you are organizing something like an event – a wedding for example, which involves multiple different types of tasks in order for the whole event to go well. If different people are allocated with different tasks in an orderly and clear manner, then this will make the planning and the event itself go smoothly."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-felt-proud-of-a-family-member",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe a time when you felt proud of a family member.",
      "titleCn": "描述一次为家人骄傲的经历",
      "card": "You should say:\n· When it happened\n· Who the person is\n· What the person did\n· And explain why you felt proud of him/her",
      "sampleAnswer": "A time when I felt really proud of a member of my family was when my elder brother completed a 28 mile marathon around the city. This was a huge achievement, as a marathon is a pretty long run. He gathered a lot of sponsorship from people, and the money went to an animal rescue charity. He trained for months to run the marathon. He didn't just want to walk the distance like some people – he wanted to actually do the best he could and run the whole 28 miles. He's not really much of a sporty person, so I was surprised that he wanted to do this, and put so much effort into the training. I'm also really surprised how well he did. He was in the top 30 people to cross the finish line first – there were hundreds of contestants in the race. I'm proud of his achievement because I think it's really admirable when a person decides to take on a challenge which comes difficult to them at first. Like I said, he isn't really much of a sporty guy, so it was more challenging for him than some guys who love sports. This is what I admire the most – it's not easy to take on something that doesn't come so easily to you, and I am not sure what motivated him, but he seemed really inspired to run this marathon and to put all his energy and effort into it. So, I admire him for this, and I think this kind of determination is a very good quality in a person. My family and I watched him from various places along the route, and cheered him on as he passed. It inspired me to want to do something similar when I get the chance. I think I will take part in a marathon next time my city hosts one, or a triathlon or something like this. I think people can get very motivated by seeing and supporting the achievements of others. My brother really motivated me both with his attitude and his success in entering and running this marathon.",
      "part3": [
        {
          "q": "What would children do to make their parents proud?",
          "a": "Generally speaking, academic achievement is the most common way. In many cultures, when a child excels in their studies or gets into a prestigious university, it reflects positively on the parents' upbringing. However, beyond just grades, I think displaying good manners and a strong moral compass is equally important. When a child is polite, kind, and respectful to others, parents feel a deep sense of gratification knowing they have raised a decent human being. So, it's a mix of tangible achievements and character development."
        },
        {
          "q": "What did you do to make your parents proud when you were young?",
          "a": "One specific memory stands out. When I was about 10 years old, I won a regional English speech contest. I recall spending weeks practicing my pronunciation and intonation. When I finally held the trophy, I could see my parents beaming with pride in the audience. It wasn't just about the prize itself; I think they were proud of my perseverance and the fact that I didn't give up despite being incredibly nervous. It was a defining moment for my confidence."
        },
        {
          "q": "What advantages of yours make you proud?",
          "a": "I would say my greatest strength—and the one I'm most proud of—is my resilience. Whenever I face a setback, whether it's in my studies or personal life, I have this ability to bounce back rather quickly instead of dwelling on the failure. I view challenges as learning curves rather than dead ends. Being able to maintain a positive mindset under pressure is a quality I really value in myself, as it helps me navigate through life's uncertainties."
        },
        {
          "q": "When was the last time that you felt proud of yourself?",
          "a": "Actually, it was quite recently, when I finished the first draft of my thesis. The process was absolutely grueling; I had to analyze a huge amount of data and I almost hit a writer's block halfway through. But I buckled down, managed my time strictly, and completed it before the deadline. Clicking that 'submit' button gave me an immense sense of accomplishment. It proved to me that I possess the self-discipline necessary to handle complex academic tasks."
        }
      ]
    },
    {
      "id": "p2-an-occasion-when-you-were-not-allowed-to-use-a-mobile-phone",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe an occasion when you were not allowed to use a mobile phone.",
      "titleCn": "描述一次被禁止用手机的经历",
      "card": "You should say:\n· When it was\n· Where you were\n· Why you were not allowed to use it\n· And explain how you felt about that",
      "sampleAnswer": "Haha, I remember quite a few situations in which I was not permitted to use a mobile phone, but the last time was in hospital a few weeks ago. I had to have my elbow X-rayed because I had fallen over on an incredibly slippery floor tile outside after it had snowed one morning. Initially, I didn't think I'd done much harm – it hurt a little bit, and after about 24 hours a dark bruise appeared, but I didn't think it was anything too serious, so I didn't go to the doctors or the hospital. Although the bruise had gone away after a few days, the aching feeling in the arm continued, as well as a swelling under the skin at the point of the elbow. So, that's the reason I decided, eventually, perhaps a bit too late, that I should go to the local hospital for a proper check. The doctor said it seemed possible that I had fractured the elbow, and ordered me to take an X-ray. Well, when you go into the X-ray room you are not allowed to carry your mobile phone for safety reasons - something related to the radiation that comes from the X-ray machine. You have to leave your phone outside of the room. I was in there for about 30 minutes. So, during that time I was not allowed to carry my phone. I didn't really mind not having my phone with me to be honest – it's quite nice to be relieved from it - relieved from feeling obliged to read and respond to messages from friends and colleagues. Another recent occasion was when I did my speaking examination. Like the one I'm doing now! It was about a month ago. All the candidates had to leave their phones with the IELTS supervisor and security personnel before going into the waiting room and signing in to the test centre. This is for security reasons - to make sure candidates don't take audio recordings of the speaking tests, or so that their phones don't go off and disturb the test. So, most reasons we are not allowed to use our phones are in situations when there is a security or safety concern.",
      "part3": [
        {
          "q": "How do young and old people use mobile phones differently?",
          "a": "There is a distinct generational divide in usage habits. Generally, young people, often referred to as digital natives, use smartphones as an extension of their identity. They utilize them for everything: social media validation, gaming, and streaming content. It's about multimedia consumption and constant connectivity. In contrast, older generations tend to view phones more as utilitarian tools. While many are becoming tech-savvy, their usage primarily revolves around communication—calls, messaging apps like WeChat—and perhaps reading the news. For them, the phone serves a practical purpose rather than being a source of instant gratification or entertainment."
        },
        {
          "q": "What positive and negative impact do mobile phones have on friendship?",
          "a": "It's definitely a double-edged sword. On the positive side, smartphones bridge the physical gap. We can maintain relationships across continents through video calls and instant messaging, which keeps the bond alive despite long distances. However, the downside is the phenomenon known as 'phubbing'—snubbing someone in favor of your phone. It can make face-to-face interactions feel superficial. When friends are physically together but mentally scrolling through feeds, it dilutes the quality of the conversation and can actually lead to a sense of isolation, ironically."
        },
        {
          "q": "Is it a waste of time to take pictures with mobile phones?",
          "a": "I wouldn't say it's a waste of time, but it can be counterproductive if taken to extremes. On one hand, capturing photos allows us to archive memories and document our lives, acting as a digital diary that we can look back on with nostalgia. This has sentimental value. On the other hand, if one is obsessively documenting every single meal or sunset, they risk missing the moment itself. Instead of experiencing the event with their own eyes, they are viewing it through a screen. So, it depends on whether the phone is used to capture the moment or interrupt it."
        },
        {
          "q": "Do you think it is necessary to have laws on the use of mobile phones?",
          "a": "Absolutely, especially when public safety and privacy are at stake. The most obvious necessity is regarding distracted driving. Strict legislation is required to prevent accidents caused by texting behind the wheel. Furthermore, with the advancement of high-quality cameras, there should be regulations protecting individuals from being recorded without consent in private spaces. While we shouldn't infringe on personal freedom, the law must draw a line where one person's phone usage begins to endanger or harass others."
        }
      ]
    },
    {
      "id": "p2-an-occasion-when-many-people-were-smiling",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe an occasion when many people were smiling.",
      "titleCn": "描述一次很多人微笑的场合",
      "card": "You should say:\n· When it happened\n· Who you were with\n· What happened\n· And explain why many people were smiling",
      "sampleAnswer": "The time that sticks firmly in my mind when lots of people were smiling in one place, was when a group of us from my university went to see a comedy performance at the local theatre. It was a sort of end-of-semester thing – we went to dinner, then went to see this great Korean comedy show. It was pretty hilarious really, and a sort of slap- stick humour. Lots of costumes and antics on stage, and acrobatics and conjuring tricks too. So, the whole group I went with was really happy for two reasons: firstly because it was the end of the semester and the holiday was about to start, and secondly because it was a particularly amusing show, with lots of variety. Afterwards we went out for drinks and talked about the bits we liked the most. The humour was a little different to the kinds of humour we were used to because it was a Korean performance, and they have a slightly different style of humour, which I found really quite interesting. So, it was kind of nice to do something different for a change, and it gave us an insight into another culture too. I think performances like this should be encouraged more, as they do help you forget about your daily grind, and just let go and enjoy being entertained. I hope that we can find more performances like this, as I think that it's important to fund and support arts and performance, and it brings people together in a unique way. Because I'm not so into sporting activities, and I don't really like bars or crowded nightclubs and places like this, I'd like to spend more time with friends going to such performances. I hope they become more popular, as I believe it can bring people together, and humour is a very important aspect of life. It helps us really calm down and makes us realise that life doesn't always have to be really serious.",
      "part3": [
        {
          "q": "Do you think people who like to smile are friendlier?",
          "a": "Well, that depends to be honest. There is a big difference between a genuine smile and a fake smile. There are people that smile because they are just being polite, there are people who smile or even laugh when they feel uncomfortable, and there are people who smile because they are positive and radiant people who always seem to see the bright side of life and are just happy people."
        },
        {
          "q": "Why do most people smile in photographs?",
          "a": "It's almost a social obligation to smile in photos actually. To be honest, this is when people are most likely to put on fake smiles, actually. Photographs are meant to be representations of us at our best, they are meant to be positive, they are meant to be saved for reflecting on our personal history, and so we like to smile in photos. It's that simple really."
        },
        {
          "q": "Do people smile more when they are younger or older?",
          "a": "I don't really know to be honest. I think it completely depends. It depends mainly on personality really. I don't think it really depends on age, I think it depends on the kind of person you are, and how you're brought up and how you view life. I know young people who never smile, and older people who are always smiling, and vice versa."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-gave-advice-to-others",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe a time when you gave advice to others.",
      "titleCn": "描述一次给别人提建议的经历",
      "card": "You should say:\n· When it was\n· To whom you gave the advice\n· What the advice was\n· And explain why you gave the advice",
      "sampleAnswer": "Well, a memorable occasion that springs to mind happened about two years ago, during the Spring Festival break when I went back to my hometown. I gave this advice to my grandmother. She's in her late 70s and, to be honest, she's always been a bit technophobic. While everyone else in the family was busy grabbing digital Red Packets on their phones during the holiday dinner, she was just sitting there with her old-fashioned 'brick phone,' looking a bit left out. So, the advice I gave her was to finally embrace technology and switch to a smartphone. But it wasn't just a suggestion; I actually sat down with her for a whole afternoon and gave her a crash course on how to use WeChat. I advised her to stop worrying about typing characters—which is hard for her eyesight—and instead, I taught her how to use the 'hold-to-talk' function to send voice messages. I also strongly recommended that she learn how to make video calls. I told her, 'Grandma, this way, you can actually see us when we are back in the city, not just hear our voices.' The reason I gave this advice was mainly to bridge the digital divide between us. In China nowadays, if you don't use WeChat, you're basically cut off from social life. I really wanted her to feel connected and involved in our family group chats, rather than waiting for a traditional phone call once a week. It took some patience, but she eventually got the hang of it. Now, she sends me 60-second voice messages every morning, so I guess my advice really paid off!",
      "part3": [
        {
          "q": "Should people prepare before giving advice?",
          "a": "I think they definitely should, especially if the stakes are high. You know, words have weight. If you're giving advice on something serious, like career choices or financial investments in the A-share market, giving ill-informed advice can have real negative consequences. You can't just shoot from the hip. So, I believe a responsible person should weigh their words carefully and ensure they actually know what they're talking about before influencing someone else's decision."
        },
        {
          "q": "Is it good to ask advice from strangers online?",
          "a": "It's a bit of a mixed bag. On the one hand, platforms like Zhihu or Xiaohongshu are great for getting unbiased opinions or specific tips, like travel guides or restaurant reviews, because strangers have no ulterior motives. On the other hand, you have to take everything with a grain of salt. You never really know if the person behind the screen is an expert or just a keyboard warrior. So, it's useful for gathering information, but I wouldn't rely on it for life- changing decisions."
        },
        {
          "q": "What are the personalities of people whose job is to give advice to others?",
          "a": "People in advisory roles—like counselors, teachers, or consultants—usually need to be incredibly empathetic. They need to be able to put themselves in others' shoes to truly understand the problem. Patience is another key trait, because listening is often more important than talking. Furthermore, they need to be objective. They can't let their own emotions get in the way; they need to analyze the situation logically to provide a practical solution."
        },
        {
          "q": "What are the problems if you ask too many people for advice?",
          "a": "To be honest, the biggest problem is that you just get confused. If you ask ten different people, you might get ten different answers. For example, if I ask my parents and my classmates about which university to choose, they usually have totally conflicting views. In the end, having too much input makes it even harder to decide, and you might waste a lot of time trying to please everyone instead of listening to your own heart."
        }
      ]
    },
    {
      "id": "p2-a-bicycle-motorcycle-car-trip-you-would-like-to-go-on",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe a bicycle/motorcycle/car trip you would like to go on.",
      "titleCn": "描述一次想去的骑行/自驾旅行",
      "card": "You should say:\n· Who you would like to go with\n· Where you would like to go\n· When you would like to go\n· And explain why you would like to go by bicycle/motorcycle/car",
      "sampleAnswer": "I'd like to do a car trip across the USA actually. I've seen in plenty of films that the country is really geared towards road trips and has a history of bike and car road trips actually. I think I'm attracted to this idea for two main reasons: firstly because I speak quite good English and so I think I would be able to talk to people along the way, ask for directions and help if necessary, and chat to the locals at different places we might stop off at along the way; and secondly, because I just love the idea of going on a road trip in a foreign country. Somehow, it's a little more exciting, because you've got that sense of newness, of discovery and adventure when you're abroad. I'd like to go with my best friend, Yaxar, because he's confident, speaks great English, and he's also quite tough and strong, so if we got into trouble, I think he'd be able to deal with pretty much any situation. Also, we share some of the same interests and he's a good conversationalist. I think he'd make a great travelling companion and he'd be reliable and probably a good navigator too. Also, he can drive so we could take it in turns to drive the car. Id' choose to go towards the end of the summer when it's not too hot there but not cold either, so that we could stop in different places, perhaps go hiking or sightseeing and feel quite comfortable. I think going by car with a friend is much better than going to just one place by plane and then staying there. You get to control the trip more, and decide when you want to rest and see a variety of places along the way, as well as change your plans and route if you feel like it. I like the sense of freedom that I think a road trip would offer.",
      "part3": [
        {
          "q": "Which form of vehicle is the most popular in your country? Bikes, cars or motorcycles?",
          "a": "I'd say that cars are the most popular today. At least those are the means of transport that most people would like and aspire to have. A car is really important if you have a family and want to go shopping, or want to get around the city easily. Also, if you want to get out of the city and go on day trips and things like this, a car is more practical than taking a bus or hiring a taxi. So, I'd say they're the most popular."
        },
        {
          "q": "Do you think air pollution comes mostly from mobile vehicles?",
          "a": "Air pollution comes from a few different sources. Motor vehicles contribute to air pollution, most certainly, but actually most of the air pollution we experience comes from factories and coal-powered power stations. These are often located outside cities, but when the weather conditions are not optimal, the smog stays in the air over the cities and towns and causes the air quality to decline considerably. So, motor vehicles are only one contributor to the air problems we experience."
        },
        {
          "q": "Do you think people need to change the way of transportation fundamentally to protect the",
          "a": "environment? Well, in an ideal world yes, but this isn't so simple. People need to get from A to B to go to work and do other things in the city. So, it really depends on the transportation infrastructure that a city has. People can indeed choose public transportation more and more if the options to do so exist. I do think people should be encouraged to take public transport more, though."
        },
        {
          "q": "How are the transportation systems in urban areas and rural areas different?",
          "a": "Urban areas today have quite extensive networks of subways and bus lines and pretty good taxi services. Although there is a lot of traffic in cities, there are also a lot of transport options. However, rural areas are a lot more limited in this regard. Often the buses are older, smaller and run less frequently between towns and villages, and taxi services are scarce."
        }
      ]
    },
    {
      "id": "p2-a-music-event-that-you-didn-t-enjoy",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe a music event that you didn't enjoy.",
      "titleCn": "描述一场你不喜欢的音乐活动",
      "card": "You should say:\n· What it was\n· Who you went with\n· Why you decided to go there\n· And explain why you didn't enjoy it",
      "sampleAnswer": "The event I'd like to talk about is an outdoor music festival I went to last summer. It was held in a huge park in the suburbs of my city. I went there with a group of my university friends. We had been planning this trip for weeks because one of our favorite bands was the headliner—the main act of the night. We were super excited and thought it would be the perfect way to blow off some steam after our final exams. However, the experience turned out to be a total nightmare. The main reason I didn't enjoy it was the weather. The forecast said it would be cloudy, but halfway through the concert, it started to pour with rain. Since it was an open-air event, there was nowhere to hide. Within minutes, we were soaked to the bone. To make matters worse, the ground turned into a giant mud bath. My brand- new sneakers were completely ruined by the sticky mud. Also, because of the rain, the sound system started having technical issues. The microphone kept cutting out, so we couldn't even hear the singer's voice clearly. We were just standing there, shivering in the cold rain, surrounded by thousands of people packed like sardines, trying to listen to static noise. By the time we finally left, we were exhausted, hungry, and covered in mud. It was definitely a huge letdown and a waste of money. I don't think I'll go to an outdoor festival again unless the weather is guaranteed to be perfect.",
      "part3": [
        {
          "q": "What kind of music events do people like today?",
          "a": "I think there are mainly two types. First, Music Festivals are extremely popular among young people. They love the energetic atmosphere where they can jump around and camp outdoors with friends. Second, smaller Live Houses are gaining popularity in cities. These are more intimate venues where you can see indie bands up close. It's less crowded and more focused on the music itself compared to big stadium concerts."
        },
        {
          "q": "Do you think music education is important?",
          "a": "Yes, definitely. I think music education is very helpful for kids. First, it helps them relax and express their feelings. School can be stressful, and music gives them a way to take a break. Also, learning an instrument, like the piano or guitar, teaches them patience and focus. It takes a long time to learn a song, so they learn not to give up easily."
        },
        {
          "q": "What's the difference between the music that young people like and the music that old people",
          "a": "like? Well, there is a big difference. Young people usually like music that is fast, loud, and energetic, like pop, hip-hop, or rock. The lyrics often talk about love or current trends. On the other hand, older people tend to prefer slower and softer music, like classical music or old folk songs. They care more about the melody and the meaning of the lyrics, and they often listen to music that brings back memories of their youth."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-used-imagination",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe a time when you used imagination.",
      "titleCn": "描述一次发挥想象力的经历",
      "card": "You should say:\n· When this happened\n· Why you need to use imagination\n· How you used your imagination\n· And explain how you felt about this experience",
      "sampleAnswer": "A time when I distinctly recall using my imagination a lot is when I was in middle school and we were set a project about outer space by our teacher. We all had to work in teams of four or five other students, choose an aspect of space, anything related to space that we liked, and design a poster, and each participate in a presentation – you know, each person talks about a different part of the chosen topic before the class. We had a couple of weeks to plan this together. My group chose The Moon, and we broke the topic down into 4 parts. One of us talked about the science of the moon, you know, the physics and where the moon was located and how far away it was and what the composition of the planet is. The other talked about the history of man and the moon, satellites, moon landings, things like this. The other person showed pictures of the moon from different times in history, pictures by Russian astronauts, Chinese, and American moon- landing photos. And my part was to talk about myths and stories related to the moon throughout history. I decided to also accompany my talk with a big collage, a sort of poster that combined the different myth images into one big picture. I had to really use my imagination to choose which were the best myth images to draw and how to combine them. It's quite hard explain really, but it really required quite a bit of thought and imagination because I'm quite proud of my art abilities, and I'm good at drawing, so I wanted to kind of show off a little bit about my skills. So, I spent quite a long time creating one big design which focused on all the key myths about the moon that I had read about. I felt great about the end result and honestly I think I did a great job. I think my imaginative skills and my artistic skills come from my father, who always told me stories as a child in bed and encouraged me to play all number of imaginative games. I think we learn a lot from stories when we are children, and those usually inspire our imagination.",
      "part3": [
        {
          "q": "Do you think adults can have lots of imagination?",
          "a": "Yes, but it's different from children. Kids' imagination is usually about fantasy, like magic or monsters. But adults' imagination is more practical—it's about innovation and problem-solving at work. However, sadly, some adults do lose their imagination because they are too stressed with the daily grind."
        },
        {
          "q": "Do you think imagination is essential for scientists?",
          "a": "Absolutely. Science isn't just about data and facts. Scientists need imagination to ask \"what if\" and come up with new theories. Without imagination, we wouldn't have smartphones or space travel today. They need to think outside the box to make discoveries."
        },
        {
          "q": "What kinds of jobs need imagination?",
          "a": "Obviously, creative jobs like writers, designers, and filmmakers need it the most to create new content. But even in business, like marketing, you need imagination to create catchy ads on Douyin or social media to grab people's attention. Even programmers need it to design new apps."
        },
        {
          "q": "What subjects are helpful for children's imagination?",
          "a": "I think Art and Reading are the best. In Art class, there are no right or wrong answers, so kids can draw whatever they want. And Reading is better than watching TV because you have to visualize the characters and scenes in your head, which really trains your brain."
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-encouraged-someone-to-do-something-that-he-she-d",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 5,
      "title": "Describe a time when you encouraged someone to do something that he/she didn't want to do.",
      "titleCn": "描述一次鼓励别人做不想做的事的经历",
      "card": "You should say:\n· Who he or she is\n· What you encouraged him/her to do\n· How he/she reacted\n· And explain why you encouraged him/her to do it",
      "sampleAnswer": "There is one time that sticks in my mind – the time when I had to really persuade a friend of mine to come out with us on a two-night trip in a village a few hours outside of Beijing. I can't recall the exact name of the place off-hand, because it's not a really well-known tourist site or anything like this. It's a small, really old village set in the foothills of a low mountain range, and it's famous for a particular type of roast fish, and oven-roasted lamb leg. It's also got quite a few really interesting mountain walks around it, and a couple of places of historical interest – a temple dedicated to fertility, where in ancient times women would go to if they were having problems in conceiving, and a Taoist cave. I, and two friends had been there before a couple of times and we were fairly familiar with the village, and knew a really cool place to stay – a sort of family-run guest house where you could rent bedrooms around a central courtyard in the oldest part of the village. Anyway, one friend of mine really didn't fancy coming, because I think she didn't like the idea of staying in an old village, in fairly basic accommodation, and was concerned about being cold at nights and things like this. She really likes her creature comforts, you see, and doesn't like hiking in hills and exerting herself with physical activities! It took me a few days to encourage her that it would do her good, it would be an interesting cultural experience, character- building and adventurous. She was very reluctant, at first, and didn't really like me pressurizing her, but after a couple of days of convincing her it was genuinely a lovely place with friendly locals and excellent food, she came round and agreed. I sincerely felt that it would do her good to get out of the city for a bit and have a new experience, a shared experience with us. Also, I love her company, she's fun and entertaining even though she's a bit spoilt!",
      "part3": [
        {
          "q": "How can leaders encourage workers to work hard?",
          "a": "I think managers and leaders can encourage workers to work harder by motivating them personally and positively, offering them positive encouragement and praise when it's due, as well as offering incentives. Of course, there should be some degree of 'punishment' for those that simply keep producing poor standards of work, but generally speaking I think a good leader should try to foster a team-work atmosphere and manage people in a way that makes them feel intrinsically motivated, and not just 'scared not to perform' because they fear criticism or punishment."
        },
        {
          "q": "Do you think some people are better than others at persuading?",
          "a": "I'd say so, yes. Some people are really good at convincing others to do things, and they just have a way with people that is highly persuasive. Some people even take it to another level, and become excellent sales people because they know how to really persuade people to do things, through convincing and arguably manipulative reasoning."
        },
        {
          "q": "When should parents encourage their children?",
          "a": "Parents frequently find themselves in situations when they need to convince their children to do things that they might not, at first, want to do. Some things like studies… going to school… duties and responsibilities like this that children initially find boring or challenging. Parents should find ways to try to persuade their children to do these things, according to the type of personality of their kids and how they respond to certain types of persuasion."
        }
      ]
    },
    {
      "id": "p1-travelling",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Travelling",
      "titleCn": "旅行",
      "questions": [
        {
          "q": "Do you prefer sitting by the window when you travel?"
        },
        {
          "q": "Did you ever go on a long journey with your family when you were a child?"
        }
      ]
    },
    {
      "id": "p1-computers",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Computers",
      "titleCn": "电脑",
      "questions": [
        {
          "q": "In what conditions would you use a computer?"
        },
        {
          "q": "When was the first time you used a computer?"
        },
        {
          "q": "What will your life be like without computers?"
        },
        {
          "q": "In what conditions would it be difficult for you to use a computer?"
        }
      ]
    },
    {
      "id": "p1-collecting-things",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Collecting things",
      "titleCn": "收集物品",
      "questions": [
        {
          "q": "Do you collect anything?"
        },
        {
          "q": "Are there any things you keep from childhood?"
        },
        {
          "q": "Where do you usually keep things you collect?"
        }
      ]
    },
    {
      "id": "p1-street-market",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Street market",
      "titleCn": "街市",
      "questions": [
        {
          "q": "What do street markets sell?"
        },
        {
          "q": "Do you prefer to go shopping in the shopping mall or the street market?"
        },
        {
          "q": "When was the last time you went to a street market?"
        },
        {
          "q": "Are there many street markets in China?"
        }
      ]
    },
    {
      "id": "p1-lost-and-found",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Lost and found",
      "titleCn": "失物招领",
      "questions": [
        {
          "q": "What will you do if you find something lost by others?"
        },
        {
          "q": "Have you ever lost anything?"
        },
        {
          "q": "Will you post on social media if you lose your items?"
        },
        {
          "q": "Have you ever lost your keys?"
        }
      ]
    },
    {
      "id": "p1-tiredness",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Tiredness",
      "titleCn": "疲惫",
      "questions": [
        {
          "q": "What things make you tired?",
          "a": "Lots of things make me feel tired these days, honestly. It also depends on the time of year — I get more tired in the summer for some reason. But generally speaking, I get really tired from commuting or taking public transport. I also get tired if I have to stay up very late doing homework. I think people get tired for all sorts of different reasons though — from lack of sleep, to being too stressed out, to just being physically exhausted from too much work."
        },
        {
          "q": "What do you do when you feel tired?",
          "a": "Well, when I feel tired, if I have the opportunity, I'll try to take a rest — but it's not always that simple, you know. We can't always rest when we feel tired, so sometimes we just have to keep going until we get the chance to sleep. But ideally, when I feel tired, I like to take a short walk first, then come back and lie down and maybe take a nap. That usually helps a lot."
        },
        {
          "q": "Who do you prefer to talk to when you feel tired, your friends or family members?",
          "a": "Honestly, when I'm tired I prefer to just be on my own. But if I have to talk to anyone, I'd rather it be my friends. The thing is, my family members tend to worry a lot — they'll start asking whether I'm eating properly or sleeping enough, and then it turns into a whole conversation. With friends it's much more low-key — we can just chat about nothing in particular, or honestly not talk at all, and that's completely fine."
        },
        {
          "q": "Do you want to talk to strangers when you feel mentally tired?",
          "a": "No, not really. I mean, if I'm wide awake and in a very social mood, I don't mind talking to strangers — I think I'm quite good with people actually. But if I'm really mentally tired, I just don't want to engage in small talk or make the effort to connect with someone I don't know. I think that kind of thing is best done when you've got a lot of energy, not when you're really really tired."
        },
        {
          "q": "Do you often feel tired?",
          "a": "Yeah, quite often, especially when I have a lot of classes or assignments to deal with. And after a day like that, I'm literally stressed out and just want to lie down, watch something relaxing, and go to bed a bit earlier than usual."
        }
      ]
    },
    {
      "id": "p1-rubbish",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Rubbish",
      "titleCn": "垃圾",
      "questions": [
        {
          "q": "Do you think your city is clean?"
        },
        {
          "q": "Would people just throw rubbish on the street?"
        },
        {
          "q": "How do you feel when you see someone throw rubbish on the street?"
        },
        {
          "q": "Do you think it's easy to teach people not to throw rubbish around?"
        },
        {
          "q": "What do you do with garbage when you are on the street?"
        },
        {
          "q": "How important do you think it is to keep the city clean?"
        },
        {
          "q": "How do you recycle things like paper and plastic?"
        }
      ]
    },
    {
      "id": "p1-shoes",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Shoes",
      "titleCn": "鞋子",
      "questions": [
        {
          "q": "Do you like your shoes or, are you interested in shoes?"
        },
        {
          "q": "Do you ever buy shoes online?"
        },
        {
          "q": "Do you prefer comfortable shoes, or good-looking fashionable shoes?"
        },
        {
          "q": "What kind of shoes do you like the most?"
        },
        {
          "q": "How much money do you usually spend on shoes?"
        }
      ]
    },
    {
      "id": "p1-politeness",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Politeness",
      "titleCn": "礼貌",
      "questions": [
        {
          "q": "How did you learn to be polite as a child?"
        },
        {
          "q": "Do you think being polite is very important?"
        }
      ]
    },
    {
      "id": "p2-a-person-you-only-met-once-and-want-to-know-more-about",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a person you only met once and want to know more about.",
      "titleCn": "想要继续了解的人",
      "card": "You should say:\n· Who he/she is\n· When you met him/her\n· Why you want to know more about him/her\n· And explain how you feel about him/her",
      "part3": [
        {
          "q": "Is it important to have the same hobbies and interests when making friends?"
        },
        {
          "q": "What qualities make true friends?"
        },
        {
          "q": "On what occasions do people like to make friends?"
        }
      ]
    },
    {
      "id": "p2-a-lesson-that-impressed-you-a-lot",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a lesson that impressed you a lot.",
      "titleCn": "印象深刻的课程",
      "card": "You should say:\n· What the lesson was about\n· Where you took the lesson\n· What you did in the lesson\n· And explain why it impressed you a lot",
      "part3": [
        {
          "q": "Which can help you remember things better, words or photos?"
        },
        {
          "q": "Why do some people have better memory?"
        },
        {
          "q": "Can technology help people remember things better? How?"
        }
      ]
    },
    {
      "id": "p2-a-gift-you-would-like-to-buy-for-your-friend",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a gift you would like to buy for your friend.",
      "titleCn": "给朋友买的礼物",
      "card": "You should say:\n· What gift you would like to buy\n· Who you would like to give it to\n· Why you want to buy this gift for him/her\n· And explain why you would like to choose that gift",
      "part3": [
        {
          "q": "When do people send gifts to others?"
        },
        {
          "q": "Do people give gifts or red packets on traditional festivals?"
        },
        {
          "q": "Is it hard to choose a gift?"
        },
        {
          "q": "Will people feel happy when receiving an expensive gift?"
        }
      ]
    },
    {
      "id": "p2-a-happy-person-you-know",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a happy person you know.",
      "titleCn": "快乐的人",
      "card": "You should say:\n· Who this person is\n· What he/she is like\n· How he/she shows happiness\n· And explain why you think he/she is a happy person",
      "part3": [
        {
          "q": "Should teachers know what children are doing all the time?"
        },
        {
          "q": "Do you think teachers are able to spot the unhappy children?"
        },
        {
          "q": "How can the arts spread positive emotions in society?"
        }
      ],
      "sampleAnswer": "A happy person I know is one of my closest friends from university. We met in our first year, and honestly, I've always thought she has a naturally positive personality. She's quite outgoing, easy to talk to, and she doesn't seem to get stressed out too easily. Of course, she has bad days like everyone else, but she usually bounces back quite quickly instead of staying upset for a long time. As for how she shows happiness, I'd say it's mostly through small, everyday things. She laughs a lot, sends funny stickers in our WeChat group, and gets excited about really simple things, like finding a lovely café, getting a good seat in class, or trying a new snack. Sometimes, she'll suddenly say, \"Today is such a good day,\" even when nothing particularly special has happened, which I find quite funny and sweet. I guess the main reason I see her as a happy person is that she doesn't need anything huge to lift her spirits. She seems to notice little enjoyable moments in daily life, and she's also genuinely grateful for what she has. I really enjoy being around her because her cheerful mood is quite contagious. If I'm tired or stressed, talking to her usually makes me feel a bit lighter. Sometimes, it simply comes from appreciating what is already around us."
    },
    {
      "id": "p2-a-time-when-you-changed-an-important-decision-of-yours",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a time when you changed an important decision of yours.",
      "titleCn": "改变重要决定的经历",
      "card": "You should say:\n· When you changed the decision\n· What the original decision was\n· Why you changed it\n· And explain how you felt about the experience",
      "part3": [
        {
          "q": "When do most children begin to make their own decisions?"
        }
      ]
    },
    {
      "id": "p2-a-famous-person-in-your-local-area",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a famous person in your local area.",
      "titleCn": "本地名人",
      "card": "You should say:\n· Who this person is\n· What he/she has done\n· Why he/she is popular\n· And explain how you feel about this person",
      "part3": [
        {
          "q": "Is it always good to be a popular student at school?"
        },
        {
          "q": "Why are some students popular?"
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-made-an-important-decision-and-were-happy-wi",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a time when you made an important decision and were happy with the result.",
      "titleCn": "对结果开心的重要决定",
      "card": "You should say:\n· What the decision was\n· Why you made the decision\n· How easy it was for you to make the decision\n· And explain why you were happy with the result",
      "part3": [
        {
          "q": "How can we tell the difference between an important and an easy decision?"
        },
        {
          "q": "Do you think it is a good idea to make a small decision every day?"
        },
        {
          "q": "What little decision do people make every day?"
        },
        {
          "q": "What if people in a group have different opinions on a decision?"
        },
        {
          "q": "Do you think most of people's decision are made in their 20s?"
        },
        {
          "q": "Which is better, to make a decision quickly or slowly?"
        }
      ],
      "sampleAnswer": "One of the most significant decisions I made was participating in an international English speech contest as a senior high school student, where I ended up taking first place. The main reason why I made the choice was that I wanted to step out of my comfort zone. Back then, I had always been a timid student, and the idea of speaking on stage just freaked me out. So when I saw the poster, I struggled a bit. It was quite tough for me to decide. Honestly, I kept thinking if I would freeze on stage or even faint in front of the audience, but I knew this might be the perfect opportunity for me to overcome my fear. Encouraged by my parents and teachers, I finally made up my mind to take a shot. I was thrilled to be informed that I bagged the first prize, because plenty of efforts were paid behind the scenes. Every time when I found it impossible to memorize the lines, I had countless doubts running around my head, thinking whether I was truly fit in this role. So, when the host announced my name, I felt like I was on top of the world, because all my hard work paid off. Now, whenever I am faced with challenges, this experience would pop into my mind, and I would just break into a big smile. I have never regreted making the decision to join the competition, and I will never forget all the way I've come along."
    },
    {
      "id": "p2-a-city-you-have-been-to-and-would-like-to-visit-again",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 9,
      "date": "2026-09-01",
      "title": "Describe a city you have been to and would like to visit again.",
      "titleCn": "想再去一次的城市",
      "card": "You should say:\n· Where it is\n· When you visited it\n· What you did there\n· And explain why you would like to visit it again",
      "part3": [
        {
          "q": "What's the difference between the city and the countryside?"
        },
        {
          "q": "Some people say that large cities are suitable for old people. What do you think of it?"
        },
        {
          "q": "Do you think it is possible that all the people should move to cities?"
        },
        {
          "q": "Do you think people in the countryside are friendlier than people in the city?"
        }
      ]
    },
    {
      "id": "p1-study-9",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 9,
      "title": "Study",
      "titleCn": "学习",
      "questions": [
        {
          "q": "Do you work or are you a student?",
          "a": "I'm a student at Tsinghua University in Beijing. I'm a student, and I'm a freshman in Tsinghua University. I'm a student, a high school student."
        },
        {
          "q": "What subject are you studying?",
          "a": "I'm studying for a Master's degree in Tsinghua University, specializing in the field of Math Studies."
        },
        {
          "q": "Why did you choose that subject?",
          "a": "I chose math because I liked it in high school. I was always strong in math and science, so it seemed like a natural progression. Also, I did some research on career opportunities, and it seemed to be a subject with a promising future."
        },
        {
          "q": "What would you like to do in the future?",
          "a": "I would love to be a teacher. Most of the women in my family are teachers, they have a huge impact on my life. I think it is wonderful to get to change people's lives by what I say or do on the stage. It requires a person to be responsible and caring, and I want to be such a person."
        },
        {
          "q": "What are the most popular subjects in China?",
          "a": "It's hard to say nowadays. You know, due to the globalization, our country is much more developed than ever. Every subject has something to offer to the society. Students just choose their subjects based on what they are interested in, which then, in turn, can become a trend."
        },
        {
          "q": "Do you think it's important to choose a subject you like?",
          "a": "Definitely! I think interest is the best motivator, if I choose something I'm keen on, I will be willing to sacrifice my leisure time because it is a worthwhile sacrifice to me. In addition, when I face some difficulties, I will do my best to overcome the problems. Quitting in the middle will never be an option. We should consider carefully our choice from the start, rather than carelessly choosing the wrong path, then regretting it."
        },
        {
          "q": "Are you looking forward to working?",
          "a": "I have been wanting to work full time, that's for sure. I can now imagine myself waking up early in the morning, getting my business attire on and sitting behind my office desk. I wonder how it feels to work with other professionals and with the boss always around… It could be stressful but interesting, I guess. The best part I would say would be to finally receive a salary and spend my own money. I would not have to bother my parents then. But, like most things in life, it really depends on what the job is and whether the environment is positive or not."
        },
        {
          "q": "Do you like your subject? (Why? / Why not?)",
          "a": "Honestly, I don't. I am halfway through my college career. But reality struck me when the material we learned in class was much more difficult and the assignments weren't fun. I'm thinking about changing my own major now."
        },
        {
          "q": "Do you prefer to study in the mornings or in the afternoons?",
          "a": "I am not a morning person, I'm afraid. But to be honest, studying in the afternoon is even worse. I get really sleepy from one to four in the afternoon. So, actually, my brain is at its best in the evening. It works better then. I can stay sharp even until very late at night."
        },
        {
          "q": "Is your subject interesting to you?",
          "a": "Absolutely. I find computer science really stimulating. Imagine creating something useful just using codes and numbers. It requires a good level of imagination and quite a good level of number skills, critical thinking and logic skills as well as a keen ability to solve problems."
        },
        {
          "q": "Is there any kind of technology you can use in study?",
          "a": "For studying I use a computer and my phone. I often download research papers and read them on my phone and make notes onto the notes section of my phone too. I use my computer to actually write essays and do other homework tasks."
        },
        {
          "q": "What kind of learning method helps you?",
          "a": "Well, I am not so familiar with different learning methods, but off the top of my head, I'd say that collaborative project work in groups with classmates is something that I really benefit from – more so than sitting at individual desks reciting stuff, anyway."
        },
        {
          "q": "How many hours a week do you study for?",
          "a": "I probably study alone, after university, for maybe around 15 hours a week, but it depends on the time of year. Closer to exams, I study more, during the summer, I study a lot less!"
        },
        {
          "q": "Is there any difference between the study life of you and your parents?",
          "a": "Well, I'm not entirely sure about what my parents' study life was like when they were in school, but I think it was a lot more traditional – they didn't have multimedia (like computers, or videos) in the classrooms, and they certainly had a stricter learning environment."
        },
        {
          "q": "Where is your school?",
          "a": "My school is located in the heart of Beijing, the capital of China. It's situated in a bustling area with convenient transportation, surrounded by many shops, restaurants and recreational facilities. The location is ideal for students as it provides easy access to various resources and opportunities in the city."
        },
        {
          "q": "Do you like your school?",
          "a": "Absolutely! I'm really fond of my school. It has top-notch facilities, a beautiful campus environment, and most importantly, a strong academic atmosphere. The faculty members are highly knowledgeable and supportive, always encouraging us to pursue our interests. Moreover, the school offers a wide range of extracurricular activities, allowing me to develop my skills and make life-long friends."
        },
        {
          "q": "Is there anything you want to change about your school?",
          "a": "While I'm quite satisfied with my school overall, there is one aspect I would like to see improved, which is the limited space in some classrooms. During peak hours, it can get a bit crowded and stuffy. If the school could expand some of the classrooms or better utilize the existing space, it would create a more comfortable learning environment for students."
        },
        {
          "q": "Do you think your school is a good place to study?",
          "a": "Yes, I believe my school is an excellent place to study. It offers a supportive learning environment, well-qualified teachers, and a wide range of resources that cater to diverse learning styles. Additionally, the emphasis on both academic and personal development prepares students effectively for future challenges."
        },
        {
          "q": "What is the environment like at your school?",
          "a": "The environment at my school is very supportive and encouraging. Students are motivated by both peers and teachers to strive for excellence while being provided with the guidance needed to reach their potential."
        },
        {
          "q": "How important is interest in study?",
          "a": "Interest in study is essential as it directly influences motivation and engagement. A genuine interest in what one is studying can lead to deeper understanding, increased productivity, and overall better academic results."
        },
        {
          "q": "Which subject do you find challenging?",
          "a": "I find Physics quite challenging, primarily due to its complex concepts and theories that require a strong grasp of both mathematics and abstract reasoning. However, overcoming these challenges is incredibly rewarding."
        }
      ],
      "date": "2026-09-01"
    },
    {
      "id": "p1-work-9",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 9,
      "title": "Work",
      "titleCn": "工作",
      "questions": [
        {
          "q": "What work do you do?",
          "a": "I am a teacher at a high school. I started working there in Jan 2015 after graduating from college. I would say it is a pretty challenging job."
        },
        {
          "q": "Why did you choose to do that type of job?",
          "a": "Teaching is my passion. I don't view my career as a \"job\" per say. I see it more as my calling in life. It is my life's purpose."
        },
        {
          "q": "Do you like your job?",
          "a": "Definitely! I enjoy the variety and special projects where I can take ownership of the final product. My job provides me with both, so yes, it is a good job and I find it very rewarding. I'm not interested in my job… because it is so mundane and repetitive, two traits I despise and try to stay away from. I hope to find a better job that challenges me to aspire to new heights."
        },
        {
          "q": "Do you miss being a student?",
          "a": "I definitely do! Sometimes I just wonder what would have happened if I had studied harder when I was in university. I just miss the days when I had nothing to worry about but the exams. Now, all the pressure from work and family is difficult to deal with."
        },
        {
          "q": "Is it very interesting?",
          "a": "Most of the time, yes! The daily challenges from new projects provide constant opportunities to learn new things and to some extent re-invent myself. Every day is unique. My colleagues provide me with support but also healthy competition. I find my job most interesting when I am challenged to reach outside of my comfort zone."
        },
        {
          "q": "Is there any kind of technology you use at work?",
          "a": "I use mainly a laptop computer and my phone at work. Sometimes I also use a photocopier scanner, and a video camera if I'm making short promotional videos with my company. But mainly, I just use a computer."
        },
        {
          "q": "Can you manage your time well when you work?",
          "a": "Yes, I am a project manager in my office, so I am quite good at managing my time and the other people's time on the team. I've worked as an IT manager for several years now."
        },
        {
          "q": "Who helps you most at work?",
          "a": "My team members – I have a great team and they are all hardworking, supportive, smart and attentive to the needs of others and the project goals."
        },
        {
          "q": "How many hours a week do you work for?",
          "a": "I work for about 40 hours a week – at least that is what my contract stipulates, but in reality I would say that I work almost 60 hours a week because I do a lot of extra stuff for my team, and end up taking on more projects outside of my normal scope of work – pretty often, actually."
        },
        {
          "q": "Do you currently have a good work environment?",
          "a": "Yes, I'm fortunate to have a very supportive work environment. It is collaborative and encourages open communication, which I find essential for personal and professional growth. The management also prioritizes employee well-being, which enhances productivity and overall job satisfaction."
        },
        {
          "q": "What do you think could be improved at your workplace?",
          "a": "One area for improvement could be enhancing the flexibility of work hours and remote work options. Increasing flexibility could help accommodate the diverse needs of all employees, leading to improved work-life balance."
        },
        {
          "q": "Have you ever thought about changing jobs?",
          "a": "While I am generally satisfied with my current position, I have considered changing jobs to seek new challenges and opportunities for professional growth. Exploring different roles and industries can provide valuable experiences and broaden my skill set."
        },
        {
          "q": "What do you think would be challenging when you start working in the future?",
          "a": "Adapting to the rapid pace of technological change in the workplace will likely be a challenge. Keeping up with new tools, systems, and industry standards will require continuous learning and adaptability."
        },
        {
          "q": "Is there a place in your company that makes you feel relaxed?",
          "a": "Yes, we have a quiet lounge area that is filled with plants and comfortable seating. It's a great spot to take a break and recharge, away from the usual hustle and bustle of the office environment."
        },
        {
          "q": "What are the advantages of a company having a relaxation room?",
          "a": "A relaxation room in a company can significantly boost employee morale and productivity. It provides a space for employees to unwind and destress, which is crucial for maintaining mental health. Additionally, such spaces can enhance creativity, as taking breaks in a relaxed setting allows employees to return to their tasks with a fresh perspective and renewed energy."
        }
      ],
      "date": "2026-09-01"
    },
    {
      "id": "p1-hometown-9",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 9,
      "title": "Hometown",
      "titleCn": "家乡",
      "questions": [
        {
          "q": "Has your hometown changed much these years?",
          "a": "Absolutely! Take traffic as an example, the most common transport facility used to be buses, it could be really crowded sometimes since people didn't have any other options. However, today, BRT and subway systems have made people's lives easier than ever."
        },
        {
          "q": "Is that a big city or a small place?",
          "a": "This city is so huge. I often get lost here. Like the other day, I travelled to a new neighborhood that had this restaurant people were raving about. I made a wrong turn and it took me 20 minutes to figure out where I was."
        },
        {
          "q": "How long have you been living here?",
          "a": "For about half my life, so that is about 10 years. I went to school here, and now I'm working in the same city. In fact, time has gone by really quickly because so there's so much to do here and I've been so active."
        },
        {
          "q": "For you, what benefits are there living in a big city?",
          "a": "Well, first of all, there are a great number of opportunities for both education and job-hunting in big cities, which explains why people from small cities, towns and villages are flooding to big cities nowadays. Plus, the fact that cities offer more modern facilities and conveniences makes them even more attractive to people."
        },
        {
          "q": "Is there anything you dislike about it?",
          "a": "Unfortunately, this city has a huge problem with pollution, especially air pollution. The air is so contaminated that we all have to wear masks every time we go out of the house. This problem has escalated to a serious level that it's been catching the attention of the international community. I hope that the government will be able to save this city before the problem gets worse."
        },
        {
          "q": "What do you like most about your hometown?",
          "a": "What I love the most about it is the mystery. I mean there are so many places inside this city that I have yet to explore. I could spend years checking out every restaurant and attraction Beijing has to offer."
        },
        {
          "q": "Where in your country do you live?",
          "a": "I live in Beijing. However, since the city is so big, it would take hours to even scratch the surface, but to sum it up, Beijing is the political and cultural heart, and one of the major economic centers of the world today."
        }
      ],
      "date": "2026-09-01"
    },
    {
      "id": "p1-accommodation-9",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 9,
      "title": "Accommodation",
      "titleCn": "住所",
      "questions": [
        {
          "q": "Are the transport facilities in your city very good?",
          "a": "Honestly, I wish they were better. I have to walk 20 minutes to the bus stop, and the subway takes another 30 minutes when I get to work. My dream home is a house located right next to a bus stop or subway terminal."
        },
        {
          "q": "Which room does your family spend most of the time in?",
          "a": "My family loves to stay in the living room as this is the only place in the flat where we can do a lot of things together. We play board games, watch films and TV programs. We play cards sometimes and we spend time working on huge puzzles together."
        },
        {
          "q": "Do you live in a house or a flat?",
          "a": "I live in a flat, and my flat is situated in a quiet little neighborhood on the north side of city. My parents first moved there in 2000 when they wanted to start a new life and raise a family."
        },
        {
          "q": "Do you plan to live here for a long time?",
          "a": "Not really! I want to blaze my own trail and live in a place that forces me to reach out and meet new people. I was thinking about moving to Shanghai for a few days to gain a bit more cultural experience of the world."
        },
        {
          "q": "Do you live alone or with your family?",
          "a": "I'm a student at the moment, and I live with my parents. Actually I quite like it, because my mother is the best cook that I know - it's always wonderful to have a tasty meal after a day of school work. We also talk about our days with each other while we're enjoying dinner, it just feels good."
        },
        {
          "q": "How long have you lived there?",
          "a": "I've lived there for three years and I really love my place. Since it's on the 11th floor, it's well ventilated and there is plenty of sunshine. I love to sink into the soft sofa to watch TV and eat snacks. There's a large shopping centre within 5 minutes' walk so it's very convenient for me to go shopping, watch movies and eat out. I wish it was my apartment."
        },
        {
          "q": "What do you usually do in your house/flat/room?",
          "a": "At weekends, I spend most of my time studying and sleeping in my room. On weekdays, I spend time in the kitchen, baking some cakes or sweet stuff for my mother. Sometimes, we watch films in the living room. On Sundays, we usually clean the house and do some laundry."
        },
        {
          "q": "Which is your favourite room in your home?",
          "a": "I think it must be my bedroom. My bedroom is not that big but quite neat. There are some posters of Kobe Bryant on the wall because he is my favorite basketball player. My room is kind of a private space for me - I usually play some video games, do my homework and play the guitar in it."
        },
        {
          "q": "What's the difference between where you are living now and where you lived in the past? (If you",
          "a": "I have not moved home at all. I have lived in the same flat since I was born. I love our small place. I have a lot of good memories here, and I treasure them. I'd happily stay here for many more years."
        },
        {
          "q": "What can you see when you look out the window of your room?",
          "a": "I can see the whole community from my window. In the morning, people are going to school or work, everyone is in a hurry. However, in the evening, it is not that fast-paced anymore. I can see parents taking a walk after dinner and children playing games in the neighborhood."
        },
        {
          "q": "Would you be willing to live in the countryside in the future?",
          "a": "In the future, probably. There is a peacefulness I enjoy when visiting the countryside. People there are friendly and always willing to start a conversation. I think when I retire, living in the countryside is a nice option to me."
        }
      ],
      "date": "2026-09-01"
    },
    {
      "id": "p1-the-area-you-live-in-9",
      "part": 1,
      "category": "日常生活",
      "status": "必备题",
      "month": 9,
      "title": "The area you live in",
      "titleCn": "你居住的区域",
      "questions": [
        {
          "q": "Do you like the area that you live in now?",
          "a": "Yes, I like the area where I live. Since I have lived there for a long time it makes me feel comfortable. There is a saying: \"Home is where the heart is\". My family lives there and we enjoy each other's company so my heart is there. I like the phrase from one old movie: \"There's no place like home.\""
        },
        {
          "q": "Do you think the area you live in now is suitable for people of all ages?",
          "a": "Yes, most certainly. I think that I am very lucky to be living in a very central area of my city, close to great public transport facilities, and quite a few entertainment and leisure options too. There are a few malls nearby, with fantastic restaurants in, lots of shops, a gym, which I go to every day almost, a swimming centre which I attend with my family on weekends, and there's quite a few nice parks within a short walking distance too. So, yeah, it's a great area. In addition, the community I live in has a nice garden too."
        },
        {
          "q": "Are people in your area friendly?",
          "a": "I wouldn't say people in my area are especially friendly, or unfriendly, really. They are alright, I suppose. I thought they were relatively friendly, before I went to Spain on holiday and found how friendly and happy people seemed to be in service interactions, in the streets, on public transport, and so on, there in Spain. When I came back to my city and my area, I started to think that people were a bit rude, grumpy and not so helpful when you need them to be. So, I have a sort of neutral stance on this – I guess it depends on what you compare my area, my city or my culture with, as to whether you assess that the people are friendly or not."
        },
        {
          "q": "How has your area changed in recent years?",
          "a": "Some positive changes are that the pollution is getting better. It was a lot worse a few years ago. Recently, the government has made some changes to the factories nearby you see. This has had a positive effect on the air quality. Some negative changes are: first, there are too many public bikes such as OFO and Mobike. They clog the sidewalks and there isn't enough room for pedestrians to walk sometimes. Secondly, there are not enough taxis. It is very difficult to get a taxi if you are in a hurry or it is raining."
        },
        {
          "q": "Do you know any famous people in your area?",
          "a": "In my district of my city, I don't know any famous people. I think famous people tend to live away from the crowds in China, in places where they will be left alone and not bothered by people or the press."
        },
        {
          "q": "Where do you like to go in your area?",
          "a": "I like to go shopping and hang out with my friends. When the weather is nice, I like to go to the park and enjoy the nature. It makes me feel refreshed. When my friends go with me it is even better."
        }
      ],
      "date": "2026-09-01"
    },
    {
      "id": "p1-secondary-schools",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Secondary schools",
      "titleCn": "中学",
      "questions": [
        {
          "q": "Do you remember your first day at secondary school?"
        },
        {
          "q": "Were there any subjects that you found difficult at secondary school?"
        },
        {
          "q": "What was your favorite subject at secondary school?"
        },
        {
          "q": "Is there anything you miss about your secondary school?"
        }
      ]
    },
    {
      "id": "p1-emails",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Emails",
      "titleCn": "电子邮件",
      "questions": [
        {
          "q": "Do you often send emails?"
        },
        {
          "q": "Is sending emails popular in China?"
        },
        {
          "q": "Do you think sending emails will be more or less popular in the future?"
        },
        {
          "q": "Did you receive any handwritten letters when you were a child?"
        },
        {
          "q": "Which do you prefer, writing a letter or sending a message?"
        }
      ]
    },
    {
      "id": "p1-growing-vegetables",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Growing vegetables",
      "titleCn": "种蔬菜",
      "questions": [
        {
          "q": "Are you interested in growing vegetables and fruits?"
        },
        {
          "q": "Is growing vegetables popular in your country?"
        },
        {
          "q": "Do many people grow vegetables in your city?"
        },
        {
          "q": "Do you think it's easy to grow vegetables?"
        },
        {
          "q": "Should schools teach students how to grow vegetables?"
        },
        {
          "q": "Did you like eating vegetables when you were a child?"
        }
      ]
    },
    {
      "id": "p1-paper",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Paper",
      "titleCn": "纸",
      "questions": [
        {
          "q": "Have you made any crafts with paper?",
          "a": "Yeah, I've loved making handcrafts with my best friends ever since I was little — you know, stuff like paper frogs. We'd sit there whispering and giggling, having little competitions and sharing ideas for hours. It's a good way to practise your hands, and honestly it just feels so satisfying when a plain piece of paper turns into something really cute. It's like making a little magical world out of paper."
        },
        {
          "q": "Do you still write handwritten letters?",
          "a": "To be honest, I hardly ever write letters by hand now that I'm older. I guess it just feels a bit old-fashioned these days — and it can take ages to write one properly. So instead I just send emails or messages to keep in touch with friends and colleagues. It's so much quicker and easier. That said, I do sometimes miss the feeling of actually writing something out on paper."
        },
        {
          "q": "Do people still keep handwritten letters today?",
          "a": "Well, I'm not really a letter person, but I do keep a few in my drawer — mostly birthday cards and thank-you notes. I'll flip through them sometimes and it just takes me back, you know? Everything's so digital these days, so those handwritten words feel kind of precious now."
        },
        {
          "q": "Do you carry paper and pens with you when you go out?",
          "a": "To be frank, I don't really carry them with me that often anymore, except on special occasions, like for exams or note-taking. I guess I've just gotten so used to digital devices such as mobile phones and laptops. You know, instead of jotting down every single detail, taking a picture with your phone can be a smarter choice. Plus, it's way easier to get back to things when I have to search for them later."
        },
        {
          "q": "What did you like to do with paper as a child?",
          "a": "Like every kid, I was really into painting. I'd imagine this whole fairytale world — you know, giraffes with short necks, elephants with tiny ears, that kind of thing. I'd just grab my pens and lose myself in it for hours. And whenever an idea popped into my head, I'd want to draw it straight away."
        }
      ]
    },
    {
      "id": "p1-advertisements",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Advertisements",
      "titleCn": "广告",
      "questions": [
        {
          "q": "What kinds of advertisements do you watch?"
        },
        {
          "q": "Where can you see advertisements?"
        },
        {
          "q": "Have you ever bought something because of its advertisement?"
        },
        {
          "q": "Do you watch advertisements from the beginning to the end?"
        },
        {
          "q": "Do you often see advertisements when you are on your phone or computer?"
        },
        {
          "q": "Is there an advertisement that made an impression on you when you were a child?"
        },
        {
          "q": "Do you see a lot of advertising on trains or other transport?"
        },
        {
          "q": "Do you like advertisements?"
        },
        {
          "q": "What kind of advertising do you like?"
        }
      ]
    },
    {
      "id": "p2-a-time-when-someone-told-you-something-you-are-not-intereste",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a time when someone told you something you are not interested in.",
      "titleCn": "听不感兴趣的话",
      "card": "You should say:\n· When it happened\n· Where you heard it\n· What you talked about\n· And explain why you were not interested in it",
      "part3": [
        {
          "q": "How does the Internet influence our daily communication?"
        },
        {
          "q": "Do you think modern technology influences the jargon among youngsters?"
        },
        {
          "q": "What would you do if someone didn't listen to your opinion?"
        },
        {
          "q": "What kind of topics do young people like to talk about today?"
        },
        {
          "q": "What would happen if the listener didn't listen carefully?"
        },
        {
          "q": "How can we tell if a listener is listening carefully?"
        }
      ]
    },
    {
      "id": "p2-a-person-you-know-who-really-likes-taking-photos",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a person you know who really likes taking photos.",
      "titleCn": "喜欢拍照的人",
      "card": "You should say:\n· Who the person is\n· When and how you got to know him/her\n· Where he/she takes photos\n· And explain how you feel about him/her",
      "part3": [
        {
          "q": "Why are some people keen on taking photos?"
        },
        {
          "q": "What kind of photos do people often take?"
        },
        {
          "q": "Do you think it's ok to take photos everywhere?"
        },
        {
          "q": "Why do tourists like taking photos while they are travelling?"
        }
      ]
    },
    {
      "id": "p2-a-new-skill-you-learned-when-you-were-a-child",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a new skill you learned when you were a child.",
      "titleCn": "小时候学到的技能",
      "card": "You should say:\n· What the skill was\n· Who taught you this skill\n· How you learned it\n· And explain how you felt about learning the skill",
      "part3": [
        {
          "q": "What skills should children learn before they go to school?"
        },
        {
          "q": "What are the differences between learning in a group and learning by oneself?"
        },
        {
          "q": "What are the differences between the way adults learn and the way children learn?"
        },
        {
          "q": "Do you think it is easier for children to learn new skills than for adults?"
        },
        {
          "q": "Is it important for everyone to have a specialized skill?"
        }
      ]
    },
    {
      "id": "p2-a-natural-place-e-g-parks-mountains",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a natural place (e.g. parks, mountains).",
      "titleCn": "自然之地",
      "card": "You should say:\n· Where this place is\n· How you knew this place\n· What it is like\n· And explain why you like to visit it",
      "part3": [
        {
          "q": "What kind of people like to visit natural places?"
        },
        {
          "q": "What are the differences between a natural place and a city?"
        },
        {
          "q": "Do you think that going to the park is the only way to get close to nature?"
        },
        {
          "q": "What can people gain from going to natural places?"
        },
        {
          "q": "Do you think it is a good idea to let animals stay in local parks for people to see?"
        }
      ]
    },
    {
      "id": "p2-an-organized-person",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe an organized person.",
      "titleCn": "有条理的人",
      "card": "You should say:\n· Who this person is\n· How you knew this person\n· What he/she does to be organized\n· And explain how you feel about this person",
      "part3": [
        {
          "q": "Why is it important for people to be organized?"
        },
        {
          "q": "Do you think children should learn to be organized from a young age?"
        },
        {
          "q": "Are organized people more likely to be successful at work or in their studies?"
        },
        {
          "q": "What can people do to become more organized?"
        }
      ],
      "sampleAnswer": "Lucy is one of the most organized person I ever met. She's my best partner in university. We got to know each other during a science project, and she naturally took on the role of the team leader. Honestly, I was really impressed by how she managed to improve our team working efficiency. She would set up a weekly routine and send it in our WeChat group every Sunday. To make things fair, she frequently used online forms to get a sense of what everyone thought on the plan. Instead of leaving a whole new work schedule to her teammates, she was really good at breaking it down into smaller tasks to make our jobs easier. Rather than pressuring us on chasing the deadline, she genuinely cared about her partners' feelings. For example, she would create work forms to check out everyone's progress and send friendly reminders a few days before the due date. To me, she is an organized girl, because she not only values team working efficiency, but also has strong cooperation skills. She was extremely good at collecting and sorting out information, and has everything under control even though the situation seems a bit messy. I was kind of disorganized before we met, but watching her work actually inspires me to keep my own stuff in order."
    },
    {
      "id": "p2-a-time-when-you-interviewed-a-famous-person",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a time when you interviewed a famous person.",
      "titleCn": "采访名人",
      "card": "You should say:\n· Who the famous person was\n· When and where you interviewed this person\n· What you talked about during the interview\n· And explain how you feel about the experience",
      "part3": [
        {
          "q": "What kinds of people are usually interviewed?"
        },
        {
          "q": "Why do some people dislike being interviewed?"
        },
        {
          "q": "What should people do to prepare for a job interview?"
        }
      ],
      "sampleAnswer": "Last summer, I interviewed He Hui, a well-known entrepreneur who founded an elderly care company. As a media intern at that time, I was both excited and nervous to interview someone famous for the first time. The interview took place at his own office in Beijing. We focused on his own life stories, and discussed several key topics. I can still vividly remember, he shared what inspired him to build such a corporation from scratch. He recalled his grandma falling at home. With nobody to take care of her, the elder lady struggled to recover on her own. After this painful experience, he was determined to create a center that can provide professional and prompt medical care for elder people. Then I asked him if there were any ups and downs along the way. He smiled tenderly, and he told me that it was kind of difficult to recruit suitable caregivers in the beginning, because many of them were discouraged by the heavy workload and limited salaries. To fix this, he made an effort in improving working conditions, and he offered to provide free training opportunities for young employees. Hearing his personal experience, I was deeply moved, you know, not just because of his passion for social well-being, but also his positive attitude towards life and difficulties. Determined to learn from him, I even registered as a volunteer in an elderly home next to my apartment. I believe the spirit of love and care is worth spreading."
    },
    {
      "id": "p2-a-good-service-you-received",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a good service you received.",
      "titleCn": "好的服务",
      "card": "You should say:\n· What the service was\n· When you received it\n· Who you were with\n· And explain how you felt about it",
      "part3": [
        {
          "q": "Why are shopping malls so popular in China?"
        },
        {
          "q": "What are the advantages and disadvantages of shopping in small shops?"
        },
        {
          "q": "Why do some people not like shopping in small shops?"
        },
        {
          "q": "What are the differences between online shopping and in-store shopping?"
        },
        {
          "q": "What are the advantages and disadvantages of shopping online?"
        }
      ]
    },
    {
      "id": "p2-an-old-person-you-know-and-respect",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe an old person you know and respect.",
      "titleCn": "尊敬的长辈",
      "card": "You should say:\n· Who this person is\n· How you know this person\n· What he or she is like\n· And explain why you respect this person",
      "part3": [
        {
          "q": "What kind of things can young people learn from old people?"
        },
        {
          "q": "What qualities does a person need to have when taking care of old people?"
        },
        {
          "q": "Do you think old people should be taken care of at home?"
        }
      ]
    },
    {
      "id": "p2-a-noisy-place-you-have-been-to",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a noisy place you have been to.",
      "titleCn": "嘈杂之地",
      "card": "You should say:\n· What it is\n· When you went there\n· What you did there\n· And explain why you feel it is a noisy place",
      "part3": [
        {
          "q": "Do you think it is good for children to make noise?"
        },
        {
          "q": "Should children not be allowed to make noise under any circumstances?"
        },
        {
          "q": "Which do you think makes louder noise, cities or the countryside?"
        },
        {
          "q": "What types of noise do you come across in daily life?"
        },
        {
          "q": "How do people respond to noises in your country?"
        }
      ]
    },
    {
      "id": "p2-a-time-when-you-saved-money-to-buy-an-expensive-gift-for-oth",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 9,
      "date": "2026-09-02",
      "title": "Describe a time when you saved money to buy an expensive gift for others.",
      "titleCn": "攒钱想要买的物品",
      "card": "You should say:\n· What it was\n· Why you wanted to buy this gift\n· How long you saved money for it\n· And explain how you felt when you bought the gift",
      "part3": [
        {
          "q": "Should schools teach children how to manage money from a young age?"
        },
        {
          "q": "Should parents teach their children to save money?"
        },
        {
          "q": "What kind of things do people usually save money for?"
        }
      ]
    },
    {
      "id": "p1-names",
      "part": 1,
      "category": "日常生活",
      "status": "新题",
      "month": 9,
      "date": "2026-09-03",
      "title": "Names",
      "titleCn": "名字",
      "questions": [
        {
          "q": "Do you think it is difficult to remember other people's names?"
        },
        {
          "q": "How can you remember other people's names?"
        },
        {
          "q": "How do you feel if others cannot remember your name?"
        }
      ]
    },
    {
      "id": "p2-a-person-who-enjoys-learning-history",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-03",
      "title": "Describe a person who enjoys learning history",
      "titleCn": "喜欢历史的人",
      "card": "You should say:\n· Who this person is\n· How he/she learns history\n· Why he/she loves history\n· And explain how you feel about him/her",
      "part3": [
        {
          "q": "Do you think childern should begn learning history from the early age?"
        },
        {
          "q": "How do children learn history before they attend school?"
        },
        {
          "q": "Is it important to learn how people in the past lived in their lives?"
        },
        {
          "q": "Do you think people should learn ancient history before learning modern history?"
        },
        {
          "q": "Besides big historical events, what else is important when learning history?"
        }
      ]
    },
    {
      "id": "p2-an-enjoyable-evening-you-had-with-your-friends",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 9,
      "date": "2026-09-03",
      "title": "Describe an enjoyable evening you had with your friends.",
      "titleCn": "和朋友度过的美好夜晚",
      "card": "You should say:\n· When and where it was\n· What you did\n· Who you spent the evening with\n· And explain why it was enjoyable",
      "part3": [
        {
          "q": "How do people get along in a big family?"
        },
        {
          "q": "How to make family relationships closer?"
        },
        {
          "q": "Do old people and young people do the same things in their free time?"
        }
      ]
    },
    {
      "id": "p2-a-person-who-likes-to-make-things-by-hand-e-g-toys-furniture",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-03",
      "title": "Describe a person who likes to make things by hand (e.g. toys, furniture).",
      "titleCn": "做手工的人",
      "card": "You should say:\n· Who this person is\n· What he/she makes\n· Why he/she likes to make things by hand\n· And explain how you feel about the person",
      "part3": [
        {
          "q": "Are art classes important to children?"
        },
        {
          "q": "Why do some children like to make crafts?"
        },
        {
          "q": "What kind of impact does art-related construction have on society?"
        },
        {
          "q": "Is it good to have creative people in team?"
        }
      ]
    },
    {
      "id": "p2-a-crowded-place-you-went-to",
      "part": 2,
      "category": "地点",
      "status": "新题",
      "month": 9,
      "date": "2026-09-03",
      "title": "Describe a crowded place you went to.",
      "titleCn": "拥挤的地方",
      "card": "You should say:\n· When you went there\n· Who you went there with\n· Why you went there\n· And how you felt about it",
      "part3": [
        {
          "q": "Which cities are crowded in your country?"
        },
        {
          "q": "Will there be more or less green space in cities in the future?"
        },
        {
          "q": "Will people use bikes more or less in cities in the future?"
        },
        {
          "q": "Why do people go to crowded places?"
        },
        {
          "q": "Do you think there are some people who enjoy crowded places?"
        },
        {
          "q": "Do you think it is a good trend to have more big cities?"
        }
      ]
    },
    {
      "id": "p2-an-activity-you-usually-do-that-wastes-your-time",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 9,
      "date": "2026-09-03",
      "title": "Describe an activity you usually do that wastes your time.",
      "titleCn": "浪费时间的活动",
      "card": "You should say:\n· What it is\n· When you usually do it\n· Why you do it\n· And explain why you think it wastes your time",
      "part3": [
        {
          "q": "How do you balance life and work?"
        },
        {
          "q": "Will you continue doing something when you aware that it's a waste of time?"
        },
        {
          "q": "What kinds of things make people feel pressured?"
        },
        {
          "q": "Why do some people refuse to abide by rules?"
        }
      ]
    },
    {
      "id": "p2-an-exciting-book-that-you-enjoy-reading",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 9,
      "date": "2026-09-03",
      "title": "Describe an exciting book that you enjoy reading.",
      "titleCn": "令人兴奋的书",
      "card": "You should say:\n· When you read it\n· What kind of book it is\n· What it is about\n· And explain why you think it is exciting",
      "part3": [
        {
          "q": "Do you think it is important to read the book before watching the movie version of it?"
        },
        {
          "q": "Do boys and girls like the same kinds of books?"
        },
        {
          "q": "What kinds of books do Chinese people like reading?"
        }
      ]
    },
    {
      "id": "p2-a-film-you-didn-t-like",
      "part": 2,
      "category": "物品",
      "status": "新题",
      "month": 9,
      "date": "2026-09-04",
      "title": "Describe a film you didn't like.",
      "titleCn": "不喜欢的电影",
      "card": "You should say:\n· When you watched it\n· Where you watched it\n· What it was about\n· And explain why you don't like it",
      "part3": [
        {
          "q": "What kinds of movie are the most popular in China?"
        },
        {
          "q": "What are the differences between watching movies at home and in a cinema?"
        },
        {
          "q": "Are movies more likely to help people become more creative than books?"
        },
        {
          "q": "Can movies help people better understand the cultural background of a country?"
        }
      ]
    },
    {
      "id": "p2-a-short-trip-you-often-do-but-you-don-t-like",
      "part": 2,
      "category": "事件",
      "status": "新题",
      "month": 9,
      "date": "2026-09-04",
      "title": "Describe a short trip you often do but you don't like.",
      "titleCn": "不喜欢的短途旅行",
      "card": "You should say:\n· Where you travel to\n· How often you do this trip\n· Why you need to do this trip\n· And explain why you don't like this trip",
      "part3": [
        {
          "q": "Who prefer travelling abroad? Youngsters or old people?"
        },
        {
          "q": "Do you think Chinese people like travelling abroad?"
        },
        {
          "q": "Which one is more helpful to learn about a country? Reading literature works about this country or travelling to this country in person?"
        }
      ]
    },
    {
      "id": "p2-a-person-who-taught-you-something",
      "part": 2,
      "category": "人物",
      "status": "新题",
      "month": 9,
      "date": "2026-09-04",
      "title": "Describe a person who taught you something.",
      "titleCn": "教导你的人",
      "card": "You should say:\n· Who the person was\n· Where you met him or her\n· What this person taught you\n· And explain how you felt about what he or she taught you",
      "part3": [
        {
          "q": "Why should children learn new skills?"
        },
        {
          "q": "How can parents and teachers teach children new skills?"
        },
        {
          "q": "How do adults learn a new skill?"
        },
        {
          "q": "What are the differences between learning from a teacher and learning by oneself?"
        },
        {
          "q": "Why is self-discipline important when learning a new skill?"
        }
      ]
    },
    {
      "id": "p1-public-gardens-and-parks-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Public gardens and parks",
      "titleCn": "公园",
      "questions": [
        {
          "q": "Did you like going to parks as a child?",
          "a": "Yeah, definitely! I used to go to the park near my home almost every weekend with my parents. We'd fly kites, have picnics, that kind of thing. It was really the highlight of my week back then — just running around outside with no worries at all."
        },
        {
          "q": "Do you still like going to parks now?",
          "a": "Yeah, I still do, though not as often. You know, life gets busy. But whenever I get the chance, I love just sitting on a bench, listening to the birds, maybe reading a book. It's a really good way to unwind, especially after a stressful week."
        },
        {
          "q": "Would you like to see more parks in your city?",
          "a": "Oh, absolutely. I think cities can feel really overwhelming sometimes, so having more green spaces would make a huge difference. It gives people a place to relax, exercise, or just breathe some fresh air. I feel like more parks would genuinely make the city a happier place to live."
        },
        {
          "q": "Are there any parks you want to go to in the future?",
          "a": "Well, I've actually heard a lot about Central Park in New York — it just looks incredible in photos and movies. I'd love to go for a walk there someday and see it for myself. There's also a bamboo forest park in Japan I came across online that looks really peaceful and beautiful."
        },
        {
          "q": "Would you prefer to play in a personal garden or public garden?",
          "a": "I'd probably go for a personal garden, honestly. It's just more peaceful — no crowds, no noise. You can do whatever you want without worrying about other people. But I get that not everyone has that luxury, so public parks are a great alternative too."
        },
        {
          "q": "How are the parks today different from those you visited as a kid?",
          "a": "I think they're much better now. There are more facilities — like outdoor gyms, better playgrounds, cleaner paths. When I was little, parks were pretty basic. Now they feel a lot more well-maintained and designed for all ages, not just kids."
        },
        {
          "q": "What do you like to do when visiting a park?",
          "a": "I usually just take a slow walk and enjoy the fresh air. Sometimes I'll bring a book and sit somewhere quiet. If I'm with friends, we might throw a frisbee or just sit on the grass and chat. It's my go-to way to unwind."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-cars-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Cars",
      "titleCn": "汽车",
      "questions": [
        {
          "q": "Did you enjoy traveling by car when you were a kid?",
          "a": "Yeah, I loved it! I'd sit by the window and watch everything go by. My parents would play music and we'd chat the whole way. It always felt like a little adventure, even for short trips."
        },
        {
          "q": "What types of cars do you like?",
          "a": "I'm not really a car person, but I do love SUVs — they're spacious and comfortable. I'm also into electric cars lately because of all the cool tech features. I guess I care more about comfort than looks, honestly."
        },
        {
          "q": "Do you prefer to be a driver or a passenger?",
          "a": "Definitely a passenger. I can just sit back, listen to music, or take a nap. Driving requires full concentration the whole time, which is pretty tiring. So yeah, being a passenger is just way more relaxing for me."
        },
        {
          "q": "What do you usually do when there is a traffic jam?",
          "a": "I usually put on some music or a podcast. Sometimes I'll just scroll through my phone or daydream a bit. It's annoying, but I've kind of learned to just accept it and make the most of the time."
        },
        {
          "q": "Do you think car colours are important?",
          "a": "Not hugely, but I think colour does reflect personality a bit. Like, a red car gives off a very different vibe from a white one. Personally, I'd go for dark blue or grey — it just looks clean and timeless."
        },
        {
          "q": "Will you buy an expensive car in the future?",
          "a": "Maybe, if I can afford it! I wouldn't make it a top priority though. I'd rather spend money on travel or experiences. But if I ever do buy one, I'd want something comfortable and reliable rather than just flashy. Practicality matters more to me than showing off, honestly."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-shopping-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Shopping",
      "titleCn": "购物",
      "questions": [
        {
          "q": "Do you like shopping?",
          "a": "Not really. I find shopping a bit of a drag to be honest. I don't like going around stores and shops looking at clothes and things. I much prefer to look at things casually on my phone and order things online, but even then I don't really enjoy it much. I'm not someone who gets much pleasure from shopping really."
        },
        {
          "q": "How often do you go shopping?",
          "a": "About once every couple of weeks, I think. Of course, to buy food, I will go to the supermarket or a market about once a week, but that's just to buy some essentials – but clothes shopping or shopping for pleasure, I don't do that often. Yes, about once a fortnight I'd say, on average."
        },
        {
          "q": "Do you prefer online shopping or in-store shopping?",
          "a": "Honestly, I prefer online shopping most of the time. It's just so convenient — you can browse and compare prices without leaving home. But for things like clothes or shoes, I'd rather try them on in store first. So I guess it really depends on what I'm buying."
        },
        {
          "q": "Have you ever returned anything you bought online?",
          "a": "Yeah, actually. I once ordered a jacket and it looked completely different from the photos — the colour was way off. So I had to send it back, which was kind of a hassle. Since then I've been a lot more careful about reading reviews before buying anything online."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-watches-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Watches",
      "titleCn": "手表",
      "questions": [
        {
          "q": "Do you wear a watch?",
          "a": "Yes, I wear a watch – I have a smart watch which I wear all the time. I use the watch to set calendar reminders, send short messages, make quick calls and make notes, as well as monitor my health stats and daily steps."
        },
        {
          "q": "Have you ever got a watch as a gift?",
          "a": "Yes, the smart watch that I wear almost all the time – this was a gift from my uncle a few years ago."
        },
        {
          "q": "Why do some people wear expensive watches?",
          "a": "Some people genuinely appreciate a fine, precision-made watch, and others enjoy the status symbol of having an expensive watch. Some people care about both!"
        },
        {
          "q": "Do you think it is important to wear a watch? Why?",
          "a": "Well, not really essential these days since everyone has a phone. But I do think watches are still nice to have — they look stylish and save you from constantly pulling out your phone. Some people also wear them as a fashion statement. So it depends on the person, I guess."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-websites-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Websites",
      "titleCn": "网站",
      "questions": [
        {
          "q": "What kinds of websites do you usually use?",
          "a": "I use a number of websites very regularly. These are usually online shopping websites - two in particular. I buy a lot of things online - from clothes and shoes, to kitchen accessories and food and snacks."
        },
        {
          "q": "What is your favorite website?",
          "a": "My favourite website is one I do not use that often. It's a website dedicated to trainers... to sneakers... you know, sporty shoes. I love trainers. So, when I need a new pair I always go to this particular website which has more unique styles and combinations of colours and designs."
        },
        {
          "q": "Are there any changes about the websites you usually use?",
          "a": "Websites have recently become a lot more user-friendly, slicker, smoother, easier to use and more secure in terms of how they protect your personal data."
        },
        {
          "q": "What kinds of websites are popular in your country?",
          "a": "Just like I mentioned, shopping websites. These are most certainly the most popular websites in my country. Everyone buys things online - it's convenient, reliable and you can buy pretty much anything you need from several online companies."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-tidiness-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Tidiness",
      "titleCn": "整洁",
      "questions": [
        {
          "q": "Do you like to keep things tidy?",
          "a": "Yeah, I'd say I'm a fairly tidy person. I feel kind of uncomfortable when my space is messy — it actually makes it hard to focus. So I try to clean up regularly, especially my desk. It just makes me feel a lot more relaxed and in control."
        },
        {
          "q": "Did you use to keep your room tidy as a child?",
          "a": "Honestly, not really! My room was a total mess most of the time. Clothes everywhere, toys on the floor — my mum would constantly tell me to clean up. I think I only started caring about tidiness when I got older and lived on my own."
        },
        {
          "q": "How do you keep your work or study space tidy?",
          "a": "I try to do a quick tidy-up at the end of each day — just putting things back where they belong and clearing my desk. I also have a rule: if I'm not using it, it goes away. It sounds simple but it really helps keep things from piling up."
        },
        {
          "q": "Do you think that it is necessary to be tidy?",
          "a": "I'd say yes, to a reasonable degree. A tidy space just helps you think more clearly and saves time looking for things. But I don't think you need to be obsessive about it either. As long as you know where everything is, that's good enough, I think."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-mirrors-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Mirrors",
      "titleCn": "镜子",
      "questions": [
        {
          "q": "Do you like looking at yourself in the mirror?",
          "a": "I am not sure whether I like it or not, but I do it every day before I go out of the house. I need to check my face, my hair and make sure I am looking as presentable as possible before I head out to the office."
        },
        {
          "q": "Have you ever bought mirrors?",
          "a": "Yes, I have often bought little mirrors to take in my handbag, so I can check myself sporadically during the day. Perhaps before a meeting or after lunch, or if I am going from work to a dinner or something like that."
        },
        {
          "q": "Do you usually take a mirror with you?",
          "a": "Yes, I usually take a small mirror with me. However, in more recent years, I don't use it. I tend to use my mobile phone - many people do these days - you know, you put the camera on selfie mode, and then you can look at yourself just as if you are looking in a mirror."
        },
        {
          "q": "Would you use mirrors to decorate your room?",
          "a": "I have never used mirrors to decorate my living space, but I think it's a good idea. If you put mirrors in certain places in your house they can make it look bigger, or lighter or change the space in a positive way. So, yes, I would use mirrors to decorate my room, certainly."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-teachers-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Teachers",
      "titleCn": "老师",
      "questions": [
        {
          "q": "Do you remember your teachers from primary school?",
          "a": "Yes, I remember most of them quite well. I remember the ones I really liked, and I also remember the ones I really disliked! The motivating, humorous and inspiring teachers, as well as the strict, serious and critical teachers!"
        },
        {
          "q": "Do you have a favorite teacher?",
          "a": "Yes, it was my mathematics teacher. She was really good at making the subject interesting and she always gave real-life examples, and not just boring repetition drills, so I found I remembered what we learned in class much easier."
        },
        {
          "q": "Did you want to be a teacher when you were young?",
          "a": "I didn't really, no. I didn't really think about it, actually. I always had aspirations to go into business or the medical field. I was not really interested in teaching, and neither did I like the idea of dealing with classrooms full of children."
        },
        {
          "q": "What kinds of teacher do you prefer?",
          "a": "I prefer teachers that seem to be very sincere and 'human' – you know, the kinds of teachers that make a subject really seem inspiring and worth learning about. A good teacher, who has a sense of humour and the ability to inspire interest, can change your whole attitude to school!"
        },
        {
          "q": "Are you still in touch with your primary school teachers?",
          "a": "Not really, to be honest. I've lost touch with most of them over the years. I do follow one or two on social media, but we don't really chat. I think it's just natural to drift apart after you move on to a new school."
        },
        {
          "q": "In what way has your favourite teacher helped you?",
          "a": "Well, my favourite teacher was really encouraging. Whenever I felt like giving up, she'd remind me that making mistakes is part of learning. That really stuck with me. I think she gave me a lot more confidence, both in her subject and just in general."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-social-media-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Social media",
      "titleCn": "社交媒体",
      "questions": [
        {
          "q": "Have you ever posted anything on social media?",
          "a": "Yeah, all the time! I mostly post photos from trips or just random things I find funny. I use Instagram the most — it's a great way to share moments with friends. I don't really care about getting loads of likes though, I just post things I genuinely want to remember."
        },
        {
          "q": "When did you start to use social media?",
          "a": "I began using social media during my teenage years, around the age of 14."
        },
        {
          "q": "Do you think you spend too much time on social media?",
          "a": "I strive to maintain a healthy balance, ensuring I don't spend excessive time on social media, and I prioritize other activities in my daily routine."
        },
        {
          "q": "Do your friends use social media?",
          "a": "Yes, most of my friends are active on social media, and it serves as a primary means of staying connected and sharing updates."
        },
        {
          "q": "What do people do on social media?",
          "a": "People engage in various activities on social media, including sharing personal updates, connecting with friends, consuming content, and participating in discussions or online communities."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-ambition-and-dreams-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Ambition and dreams",
      "titleCn": "志向与梦想",
      "questions": [
        {
          "q": "What was your dream when you were a child?",
          "a": "When I was a child I had simple and accessible dreams I'd say - I wanted to be a teacher. I loved the idea of teaching children and sharing my thoughts and experiences in life with them. I always had this dream as a youngster."
        },
        {
          "q": "Are you the kind of person who never gives up on dreams?",
          "a": "I am the kind of person who persists, yes, at least with certain things. Because I have realistic dreams I always feel they are obtainable, so I make sure I put the necessary effort into making them come true. I rarely aim for things that I know I'm unable to attain."
        },
        {
          "q": "What is your main ambition in life now?",
          "a": "My main ambition in life, to be honest, is to maintain a stable, secure and simple happy life. I don't want to do anything especially fancy or amazing really. I enjoy the simple things in life, I'd say. Nice food, family and good friends and company on the weekends."
        },
        {
          "q": "Do you think you are an ambitious person?",
          "a": "That's a good question....Actually, I don't think I am that ambitious really. Usually in life I choose to do things which I find to be predominantly stable and secure, rather than especially ambitious or adventurous things - you know, when it comes to career and work choices as well."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-music-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Music",
      "titleCn": "音乐",
      "questions": [
        {
          "q": "Do you prefer sad or happy music?",
          "a": "Honestly, it depends on my mood. When I'm relaxing or feeling a bit down, I actually enjoy sad, slow songs — they're somehow comforting. But when I'm working out or need some energy, I'll go for upbeat stuff. So I don't really have a strong preference either way."
        },
        {
          "q": "Does happy music make you feel more excited?",
          "a": "Yeah, definitely! You know, when an upbeat song comes on, I just naturally want to move. It's like the energy of the music gets into you without even trying. I sometimes put on happy music while getting ready in the morning — it really helps me start the day on a good note."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-science-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Science",
      "titleCn": "科学",
      "questions": [
        {
          "q": "Do you like science?",
          "a": "Yes, I really enjoy science because it helps us understand the world around us. Science has the ability to explain natural phenomena, drive technological advancements, and improve our quality of life. It's fascinating to see how scientific discoveries shape our understanding and future."
        },
        {
          "q": "When did you start to learn about science?",
          "a": "I started learning about science in school in my first year. We had basic science lessons, in which we learned a bit about biology mainly, and some physics."
        },
        {
          "q": "Which science subject is interesting to you?",
          "a": "My favourite subject is physics now. That's because I'm really interested in space and the universe and I'm particularly good at mathematics. There's a lot of complex math in astrophysics and I find it really exciting."
        },
        {
          "q": "What kinds of interesting things have you done with science?",
          "a": "I've participated in several interesting science-related activities, including conducting experiments in school labs and participating in science fairs. One memorable project involved building a simple electric circuit, which sparked my interest in electronics and how devices work."
        },
        {
          "q": "Do you like watching science TV programs?",
          "a": "Absolutely, I find science TV programs very engaging and informative. Shows like \"Cosmos\" and \"Planet Earth\" not only provide deep insights into scientific topics but are also visually stunning and well-produced, making learning both fun and interesting."
        },
        {
          "q": "Do Chinese people often visit science museums?",
          "a": "Yes, visiting science museums is quite popular among Chinese people, especially families with children and school groups. These museums are designed to be interactive and educational, making science accessible and interesting for everyone. Large cities in China, such as Beijing and Shanghai, have well-known science museums that are frequently visited by both locals and tourists."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-singing-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Singing",
      "titleCn": "唱歌",
      "questions": [
        {
          "q": "Do you like singing?",
          "a": "I love singing. I thoroughly enjoy going to KTVs and singing on my own at home to music, too."
        },
        {
          "q": "Have you ever learnt how to sing?",
          "a": "No, not really. To be honest, I'm not very good at singing – I think I might be tone deaf, even. In school plays and performances I was never chosen to be one of the leading singers, and in KTV with friends, I usually try to keep a low profile and mouth the words – I really can't sing well."
        },
        {
          "q": "If you sing, who would you sing in front of?",
          "a": "I wouldn't want to sing for anyone – I'd be way too embarrassed and self-conscious. As I said, I'm a terrible singer! I would find it uncomfortable, so no, I would not sing for, or in front of anyone, if I could avoid it."
        },
        {
          "q": "Do you think singing can bring happiness to people?",
          "a": "I understand that singing, if you're good enough at it, can make people feel very happy. The person singing as well as those listening. Singing is a great form of musical expression, and there's nothing more lovely than the human voice. So, yes, it can bring happiness for sure."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-outer-space-and-stars-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Outer space and stars",
      "titleCn": "外太空与星星",
      "questions": [
        {
          "q": "Have you ever learnt about outer space and stars?",
          "a": "Yes, in school we learnt the basic things about space and the solar system. Also, I've seen a number of documentaries about the universe on television. I find the topic quite inspiring."
        },
        {
          "q": "Do you like science fiction movies? Why?",
          "a": "Yes, I'd say so, yes. I enjoy sci-fi films, although I don't think there are many really good ones. I also have seen a few TV series set in space which I've enjoyed."
        },
        {
          "q": "Do you want to know more about outer space?",
          "a": "Absolutely, I'm fascinated by outer space! The vastness, the mysteries it holds, and the potential for undiscovered planets and life forms spark my curiosity. Each new discovery about outer space feels like a piece of a cosmic puzzle being placed, and I'm eager to see the picture it will eventually reveal. It's like a never-ending story with the universe itself as the narrator."
        },
        {
          "q": "Do you want to go into outer space in the future?",
          "a": "Haha, no I don't think so. I've heard that some millionaires have actually signed up to go into the lower regions of space in space crafts, or orbit the earth, but I don't really have much of a fascination with this. To be honest, I think I'd be scared! I don't like heights!"
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-clothes-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Clothes",
      "titleCn": "衣服",
      "questions": [
        {
          "q": "What kind of clothes do you often wear in daily life?",
          "a": "In my normal, everyday life, I usually wear jeans and a T-shirt, perhaps a skirt or a dress in summer. It really depends. But usually quite casual clothes – clean and presentable, but casual attire, normally."
        },
        {
          "q": "Is there any difference between the clothes you wear on weekends and weekdays?",
          "a": "Perhaps there's a bit of a difference, yes. During the week I tend to focus more on wearing conventional styles, because I have to go to work and must look a bit smarter. On weekends I tend to be more laid back and wear more casual clothes, perhaps even slightly more informal clothes. For example if I go to a party or something I might dress up in heels and sort of more striking-looking dresses, which I don't tend to wear in the office."
        },
        {
          "q": "Is there any color you dislike when buying clothes?",
          "a": "I don't really like yellow. I don't think this colour suits me. Also pastel shades don't really suit me, either. I prefer plain colours, subdued colours for work, and perhaps more bold colours if I go out on the weekend with friends."
        },
        {
          "q": "Do you like wearing T-shirts?",
          "a": "I wear T-shirts very often, in fact. Especially in summer when the weather is warm. I enjoy the freedom of wearing a T-shirt and I have quite a few different ones with all sorts of designs on them in fact – from sporty-style T-shirts with the classic sports logos, to more amusing T-shirts with funky designs and patterns on them."
        },
        {
          "q": "Do you spend a lot of time choosing clothes?",
          "a": "I usually spend about 10 to 15 minutes in the morning choosing my outfit for the day. I like to pick something comfortable and suitable for the weather, ensuring that it also matches the day's activities."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-headphones-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Headphones",
      "titleCn": "耳机",
      "questions": [
        {
          "q": "Do you use headphones?",
          "a": "I use headphones a lot. In fact, I really enjoy the sound of music on headphones. Today the quality is really good, and headphones have improved a lot in recent years and are more comfortable too."
        },
        {
          "q": "When do you use headphones?",
          "a": "I usually wear headphones when I am commuting to work, when I am in bed at night and want to listen to a podcast or some of my favourite music before sleep. I also use headphones when I am chatting on the phone sometimes."
        },
        {
          "q": "What type of headphones do you use?",
          "a": "I use the standard headphones that came with my mobile phone. They're pretty good quality. I know some people buy really special expensive headphones, but mine are a normal brand and I think they're really good."
        },
        {
          "q": "In what occasions will you not use headphones?",
          "a": "I don't use headphones when I'm hanging out with friends, or when I'm at work. I think that's a bit rude. Usually I only use headphones when I'm alone really. Yeah, I tend not to use headphones when I'm in the company of other people I have to, or want to, interact with."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-jokes-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Jokes",
      "titleCn": "笑话",
      "questions": [
        {
          "q": "Are you good at telling jokes?",
          "a": "Honestly, not really! I always mess up the timing or forget the punchline halfway through. My friends usually end up laughing at me rather than the joke itself. So I've kind of accepted that joke-telling is just not my thing."
        },
        {
          "q": "Do your friends like to tell jokes?",
          "a": "Yeah, I have one friend who's hilarious — he can make anyone laugh without even trying. The rest of us are pretty average though. We joke around a lot, but it's more just silly banter than actual proper jokes, you know."
        },
        {
          "q": "Do you like to watch comedies?",
          "a": "Yeah, I love them! After a long day, there's nothing better than putting on a funny show and just switching off. I don't have to think too hard and it always cheers me up. I think laughter is genuinely one of the best ways to de-stress."
        },
        {
          "q": "Have you ever watched a live show?",
          "a": "Yeah, once! A friend dragged me to a stand-up comedy show and I wasn't expecting much, but it was so funny. Laughing along with a whole crowd feels completely different from watching at home. I'd definitely go again if I got the chance."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-old-buildings-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Old buildings",
      "titleCn": "老建筑",
      "questions": [
        {
          "q": "Have you ever seen some old buildings in your city?",
          "a": "Yes, I've visited quite a few old buildings. I'm a big fan of history and so I enjoy going to the famous sights, but also when my family visit Chengdu to see us, I enjoy taking them to the most famous old examples of architecture and culture."
        },
        {
          "q": "Do you think we should keep old buildings in cities?",
          "a": "We should always strive to preserve our history. History is an important and meaningful part of a country's culture and heritage and it's important to renovate and preserve old buildings."
        },
        {
          "q": "Would you prefer living in an old building or a modern house?",
          "a": "I'd prefer to live in an old building, which has been modernized inside! So, I would like a bit of both! I like the charm of old buildings, but the functionality of modern living!"
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-history-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "History",
      "titleCn": "历史",
      "questions": [
        {
          "q": "Have you ever been to historical museums?",
          "a": "Yes, I've been to several history museums. Some of them I've found really boring, and some I've found really interesting – it depends how the artefacts are exhibited. I tend to prefer natural history museums that house dinosaur skeletons and interactive experiences. Museums that just have lots relics, like ancient vases or jade stones in glass cabinets with lots of text to read, well… I find pretty boring to be honest. I like museums that have interesting displays that engage visitors and inspire us to take an interest in history."
        },
        {
          "q": "Do you like history?",
          "a": "I enjoy learning about aspects of history yes. I don't really like studying history in school – it's usually boring and full of dates and events that I don't find very interesting. But I do enjoy learning about certain aspects of history – like how different inventions came about, or how we evolved from apes and came to live in caves, or how the pyramids might have been built and why. These types of things are inspiring and interesting to me."
        },
        {
          "q": "When was the last time you read about history?",
          "a": "The last time I read about something in history was a book I had about tribes in Africa. It is fairly interesting actually. I quite like reading about how they hunted animals hundreds of years ago, and how certain tribes got along well, and got along badly with others, and things like this. I was very attracted to the colourful imagery in the book I was reading – the natural scenery in Africa as well as the way people lived there."
        },
        {
          "q": "Did you like history when you were young?",
          "a": "I didn't really. I liked certain fun facts, like I said earlier, like how the pyramids were built or about how dinosaurs lived and how they became extinct. But history lessons in school and the usual sort of national and political history I find uninteresting and uninspiring."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-cinema-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Cinema",
      "titleCn": "电影院",
      "questions": [
        {
          "q": "Did you often go to the cinema when you were a child?",
          "a": "I didn't really no. I went occasionally with my sister, but not very often to be honest."
        },
        {
          "q": "Do you often go to the cinema with your friends?",
          "a": "Nowadays I go to the cinema about once a month – there's a new cinema complex right near my home in a mall. It's a fantastic cinema and they have all the latest movies."
        },
        {
          "q": "Do you still like the same kind of movie which you liked when you were a child?",
          "a": "Pretty much. I've always liked fun, romantic and lighthearted films. I still enjoy a lot of animations and cartoons too."
        },
        {
          "q": "What genres of films do you like?",
          "a": "I have a diverse taste in films; I enjoy genres like action, drama, and science fiction. If I was to say which I really preferred, though, I would probably say action movies that are based around spy stories, secret agent thrillers and things like this – I prefer this genre to the superhero genre, most of the time. I find these films truly gripping."
        },
        {
          "q": "Do you think going to the cinema is a good way to spend time with friends?",
          "a": "Going to the cinema is an excellent way to spend quality time with friends, discussing the movie afterward enhances the experience, especially if you go for a meal and a few drinks and have time and the mood to chat about it. But this is only really fun if it's a good film that you all enjoy."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p1-evening-time-9",
      "part": 1,
      "category": "日常生活",
      "status": "保留题",
      "month": 9,
      "title": "Evening time",
      "titleCn": "晚间时光",
      "questions": [
        {
          "q": "Do you like morning or evening?",
          "a": "Personally, I prefer mornings to evenings.. The mornings are the times when I really can focus on my studies the best and my concentration is at its peak. That's mainly because I am someone who sleeps early and wakes up early feeling very refreshed."
        },
        {
          "q": "What do you usually do in the evening?",
          "a": "In the evenings I like to relax, basically. Just rest and listen to music on headphones, or watch a TV show or something like that. I have friends who always study in the evenings. Not me. I like to rest in the evenings. I don't even go out much."
        },
        {
          "q": "Are there any differences between what you do in the evening now and what you did in the",
          "a": "Yes, most certainly. When I was a bit younger I would have a much more active social life in the evenings, and I also used to try to study in bed at night too. Now, I have a much more organized life. I always get up early, get things done in the morning and in the day, and rest at night."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-person-who-has-chosen-a-career-in-the-medical-field-e-g-a-doct-9",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 9,
      "title": "Describe a person who has chosen a career in the medical field (e.g. a doctor, a nurse).",
      "titleCn": "描述一个从事医疗行业的人（如医生/护士）",
      "card": "You should say:\n· Who he/she is\n· What he/she does\n· Why he/she chose this career\n· And explain how you feel about him/her",
      "sampleAnswer": "I'd like to talk about my cousin, Mei Ling, who recently became a nurse at a big hospital in Guangzhou. Mei Ling is 26 years old and graduated from nursing school two years ago. As a nurse, she works in the emergency department of the hospital. Her job involves a lot of different tasks. She helps doctors examine patients, gives medicines, changes bandages, and keeps an eye on patients' conditions. She also talks to patients and their families to explain treatments and give them comfort. Mei Ling chose this career for a few reasons. First, she's always been a caring person who likes to help others. When we were kids, she was always the one looking after anyone who got hurt during playtime. Second, her mom (my aunt) is also a nurse, so Mei Ling grew up hearing stories about hospital life and how rewarding it can be to help people get better. Lastly, she knew that nursing is a stable job with good career prospects, which was important to her. I feel really proud of Mei Ling. Being a nurse isn't easy – she often works long hours and has to deal with tough situations. But whenever I talk to her, I can tell she really loves her job. She always has interesting stories to share about the people she's helped. I also admire her dedication and bravery, especially during the COVID-19 pandemic. She worked extra shifts and put herself at risk to help others. It makes me see her as a kind of everyday hero. Mei Ling's choice to become a nurse has made me think more about the importance of healthcare workers. They do such important work, often without much recognition. Seeing how much Mei Ling cares about her patients and how hard she works has given me a new respect for people in the medical field.",
      "part3": [
        {
          "q": "Do you think doctors and nurses are very important?",
          "a": "Absolutely! Doctors and nurses are like the superheroes of our health system. They're the ones who look after us when we're sick or injured. Imagine if we didn't have them – who would we turn to when we're not feeling well? They work long hours, often in stressful situations, to keep us healthy. Nurses are there day and night, caring for patients, while doctors diagnose and treat illnesses. They're not just important; they're essential. During the pandemic, we saw just how crucial they were. They literally save lives every day. So yeah, I'd say they're incredibly important."
        },
        {
          "q": "Who is more important, doctors or nurses?",
          "a": "Oh, that's a tough one! I don't think we can say one is more important than the other. It's like asking whether your left or right hand is more important – you need both! Doctors and nurses work as a team. Doctors might diagnose illnesses and plan treatments, but nurses are the ones who provide constant care and monitor patients closely. Nurses often spend more time with patients, giving emotional support too. Without nurses, doctors couldn't do their job properly, and without doctors, nurses wouldn't know how to treat patients. They're both crucial parts of the healthcare system. It's their teamwork that makes healthcare work."
        },
        {
          "q": "Do you think that doctors and nurses are not paid enough?",
          "a": "That's a tricky question. In many places, I think they could be paid more, considering the vital work they do. They have to study for years and often work long, stressful hours. Nurses, especially, are often underpaid for the amount of care they provide. But it's not just about money – they need better working conditions too. Some countries pay their medical staff well, while others struggle to. It also depends on the specific job and location. Overall, given the importance of their work and the pressure they're under, I feel many doctors and nurses deserve higher pay. It's about valuing the people who keep us healthy."
        },
        {
          "q": "Do you think it is necessary to learn first aid skills?",
          "a": "Absolutely! I think everyone should learn basic first aid. You never know when you might need it – accidents can happen anywhere, anytime. Knowing first aid could mean the difference between life and death in an emergency. It's not just for big emergencies either; even small injuries can be handled better with first aid knowledge. Plus, it gives you confidence to help others. Imagine if someone collapses and you're the only one around – wouldn't you want to know what to do? Schools should teach it, I reckon. It's a life skill, like swimming or cooking. You might not use it often, but when you need it, you'll be glad you learned it."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-your-favorite-childhood-friend-9",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 9,
      "title": "Describe your favorite childhood friend.",
      "titleCn": "描述你最喜欢的童年朋友",
      "card": "You should say:\n· Who he/she is\n· Where you met each other\n· What you often did together\n· And explain what made you like him/her",
      "sampleAnswer": "A childhood friend who I had a lot of fun with was a guy called Matthew. We met in school in the very first year. He lived in the street nearby, and we used to have great times together. You see, we lived in a small town then, by a really nice woodland – we would both go off and play in the woods almost every day, at least in the holidays. We'd make dens, play hide and seek, climb trees, and play imaginary fantasy games. We were the kind of kids who were not so into sports like football and basketball – we were more excited by riding bikes and having adventures in the countryside. Plus, when you grow up in a small town there are less entertainment options than in cities, so you end up using your imagination more, and bonding with your friends a lot more – because there are less distractions, and a lot of nature around. There was also a river, and Matthew had a small wooden boat his uncle had made him, sort of a raft really – and we used to go down the river on that and try to catch fish. Things like that. I enjoyed his company because he was funny, too. He had a very mischievous sense of humour and loved playing practical jokes – we enjoyed playing pranks on our parents. That was quite funny actually. So, yeah, I liked Matthew a lot, and we still keep in touch, from time to time on social media. He is in Shenzhen studying business in university. Occasionally, at Spring Festival we see each other in our home town, if we both are visiting at the same time.",
      "part3": [
        {
          "q": "Why do people lose contact with their friends after graduation?",
          "a": "People lose contact with some friends for a variety of reasons. One reason is that their paths in life diverge and their lives go in different directions. They lose common interests and goals, and life moves on, their ambitions change and their priorities differ. This is not always the case, but sometimes is what happens, often gradually over time. It's a common reason anyway. Another reason might be that you end up losing your friends' contact details, though today this is less common because people are often connected quite extensively with many friends and friends of friends via various online social media accounts."
        },
        {
          "q": "How does modern technology influence friendship?",
          "a": "Modern technology influences friendships by enabling people to keep in touch all the time with friends and families, enabling people to see each other's daily updates on things like WeChat Moments and other social utilities and platforms, and also enabling people to make new friends through online friends and dating sites. Also, there are a lot of online forums where people can post comments, opinions, ideas and share their experiences around specific or general topics and themes – often those that get along or share similar views on these forums, can make friends with each other and then develop those friendships. So, modern technology, mostly internet-based technology and software, has a huge impact on friendships and relationships. From enabling people to nurture existing friendships, to helping people make new friends."
        },
        {
          "q": "Do you think people's relationship with friends will change when they get older?",
          "a": "I think that friendships do evolve and change over time, and as we get older we have slightly different relationships with our friends, yes. It really depends. One example might be that as people get older maybe they have less time to spend with friends, and more responsibilities, so they might stay in touch with less friends, or be more selective about the friends they do spend time with. Children tend to play with a wider variety of friends, also because they are less discerning and have less prejudices. As we get older we take stronger likes and dislikes to people and also have less time for people who we might not immediately get along with or share common ground with. Evolving friendships are different too – adults who really want to maintain friendships will make efforts to develop them and be emotionally supportive of friends, and as the years go by, that can make friendships stronger, and last into old age. These are arguably the most valuable friendships."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-person-you-know-who-loves-to-grow-plants-e-g-vegetables-fruits-9",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 9,
      "title": "Describe a person you know who loves to grow plants (e.g. vegetables/fruits/ flowers etc.).",
      "titleCn": "描述一个喜欢种植植物的人",
      "card": "You should say:\n· Who this person is\n· What he/she grows\n· Where he/she grows those vegetable/fruits\n· And explain why he/she enjoys this activity",
      "sampleAnswer": "A person I know who loves to grow plants is a lady I met in Scotland when I was in university. In fact she was my neighbour. I was living in a shared house in Bruford Road in Edinburgh, and next door lived a fairly old, but very energetic lady, called Nan. Nan was always changing her hair style, always wore long flowing dresses, and was quite moody, but a lovely lady, nevertheless. She had a small front garden and a quite long back garden. In the front garden she had wonderful flower beds of brightly coloured flowers, and a small lawn with a stone bird bath on it. And in the back garden she had bushes and a vegetable patch and some more leafy plants. I don't remember the names of all these plants in English, to be honest! Anyway, she spent quite a bit of time in her garden carefully looking after her plants, tilling the soil around the vegetables, watering them during the dry summer months and pruning the rose bushes. Because that summer I stayed there and spent a lot of time reading in the garden I would talk to her over the low fence which divided our gardens and we became quite good friends. She told me a lot about her love for plants and flowers and it seemed like this was a hobby that really kept her positive and happy in life. She wasn't so into people, or doing social things, but she did enjoy her garden. We chatted a lot that summer, and I think a learned a thing or two from her about how to appreciate nature and the simpler things in life. I think tending to her garden was really good for her mental and physical health, actually.",
      "part3": [
        {
          "q": "What are the advantages of growing vegetables or flowers at home?",
          "a": "Well, I think the biggest advantage is that you know exactly what goes into your food — no pesticides or artificial stuff, which is great for your health. And for flowers, having greenery around the house just makes the space feel so much more relaxing. There's also something really satisfying about growing things yourself, you know? It's a good way to de- stress after a long day. Plus, it can actually save you a bit of money on groceries in the long run."
        },
        {
          "q": "Do many people grow vegetables or flowers at home in your country?",
          "a": "Hmm, I'd say it's becoming more popular, especially among older generations. A lot of retired people in China grow vegetables on balconies or in small garden plots — it's kind of a lifestyle thing for them. Younger people are starting to get into it too, mostly for aesthetic reasons, like keeping houseplants or growing herbs in the kitchen. It's not super common yet, but I think the trend is definitely picking up."
        },
        {
          "q": "Is it easy to grow plants at home?",
          "a": "Well, it really depends on what you're trying to grow. Some plants, like herbs or succulents, are pretty low-maintenance and hard to kill, so they're great for beginners. But vegetables can be trickier — you need to think about sunlight, watering schedules, and soil quality. I think a lot of people give up early because they don't see results quickly enough. Starting with something simple is probably the best way to go if you're new to it."
        },
        {
          "q": "Why do some people prefer to grow their own fruits and vegetables instead of buying them from",
          "a": "I think it mainly comes down to trust and quality. A lot of people worry about chemicals or preservatives in supermarket produce, so growing their own feels much safer. There's also the freshness factor — homegrown stuff just tastes better, honestly. And beyond that, I think some people genuinely enjoy the process itself. It gives them a sense of achievement and a way to slow down, which is something a lot of us need these days."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-successful-business-person-you-admire-9",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 9,
      "title": "Describe a successful business person you admire.",
      "titleCn": "描述一个你钦佩的成功商人",
      "card": "You should say:\n· Who this person is\n· What kind of business this person does\n· Why this person is successful\n· And explain why you admire this person",
      "sampleAnswer": "A business person I really admire is my auntie, actually. She started a small clothing company in our home city about twenty years ago. She had some connections with designers in France, and imported unique boutique garments and accessories. Initially she sold these items in a very tasteful shop, but as the internet became a popular way of doing business she started an online store. She gradually started to expand the product range that she sold, while maintaining a consistent company image and brand image. She really displayed a great head for business. I think one of the reasons she became quite successful in her small business was her capacity to adapt to the changing times and changing trends, both in the online shopping world, and in terms of the kinds of designs that she chose. She didn't just sell anything she could sell – she chose the items very carefully and established herself as an exclusive boutique outlet. I admire her because I think she combined a good head for business, strategy and management, and a great passion for fashion and design. She wasn't too greedy or attracted to selling anything just to make money. I haven't seen my auntie since I left our home city, and I haven't maintained that much contact with her, so I am not exactly sure what she's doing now, but I guess she's still running the business, both her physical shop in the city and her online store. I should get back in touch with her and see how she's doing, actually!",
      "part3": [
        {
          "q": "What do you think is the retirement age for men and women?",
          "a": "The retirement age for men is currently set at 60 years old and women, I think, at 55 years old. However, I think that this is going to change soon, and they might increase the retirement age by 5 years for men and women. That's because people are generally living longer and the cost of living is increasing, so people need to work longer in order to raise families, pay mortgages and things like this."
        },
        {
          "q": "What kinds of qualities should a successful businessman have?",
          "a": "A successful business person should, to be honest, be quite assertive, quite dominant in some ways, and know how to talk to a variety of people in the right ways. There are moments to be very dogmatic and firm, there are moments to be soft and diplomatic – a good business person should be able to gauge the different situations and adopt the correct attitude to suit what is best for the company. Being decisive is another quality that is important in a business person who wants to succeed and do well. Sometimes you have to make decisions, the best decisions possible, in a very short time – so being able to think fast, evaluate things quickly and be decisive, is very important."
        },
        {
          "q": "What are important factors in making a company successful?",
          "a": "There are a number of key factors that contribute to making a company successful. Firstly I think the owners, the founders or main managers need to have a sense of vision, a strong self-confidence and an ambitious personality. I also think that a company needs the right kind of employees. The managers need to have a good sense of who and who not to recruit. They also need to treat the employees well, give them fair salaries and other benefits and holidays that will ensure they will be loyal to the company and work as hard as possible."
        },
        {
          "q": "If you had the opportunity to run your own business, what business would it be? Why?",
          "a": "I would run a business related to food. I love cooking and I have mastered all sorts of different dishes over the years. Mainly Chinese cuisine from different regions. I'd start a small restaurant. I'd run it as a fairly expensive restaurant and specialize in dishes that are perhaps less common and less mainstream. I like innovative and inventive cuisine, and I would enjoy the experience of designing menus, designing the restaurant itself, and training the staff. I've always liked this idea. I doubt I'll actually do it, but still, it's nice to think about from time to time."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-person-who-is-good-at-learning-and-speaking-new-languages-9",
      "part": 2,
      "category": "人物",
      "status": "保留题",
      "month": 9,
      "title": "Describe a person who is good at learning and speaking new languages.",
      "titleCn": "描述一个擅长学外语的人",
      "card": "You should say:\n· How you got to know him/her\n· How he/she learns a new language\n· What languages he/she can speak\n· And explain how you feel about him/her",
      "sampleAnswer": "The person I want to talk about is actually one of my closest friends from university — I've known her for about three years now, ever since we ended up in the same class in our first semester. She's honestly one of those people who just has a thing for languages. Right now she speaks Mandarin, English, and Japanese fluently, and she's been picking up some Spanish on the side as well. Which, you know, makes the rest of us feel a little bit inadequate, but in a mostly admirable way. What's interesting is how she actually goes about learning. She doesn't really rely on textbooks that much — she told me once that the way she learns is just by throwing herself into it. Like, when she was learning Japanese, she started watching shows without subtitles way earlier than she probably should have, just to force her brain to adjust. She also makes a point of talking to native speakers whenever she gets the chance, even when she's not confident yet. She said the embarrassment is part of the process, which I thought was a pretty brave way to look at it. Honestly, what I admire most about her isn't just that she's good at it — it's how fearless she is. Most people, including me, are too worried about making mistakes to even try. She just doesn't seem to have that fear. And watching her makes me want to be a bit more like that.",
      "part3": [
        {
          "q": "Are there many people who can speak foreign languages in your country?",
          "a": "Hmm, I'd say English is pretty widely studied since it's part of the school curriculum, but actually speaking it fluently is a different story. Most people have some basic knowledge, but genuine fluency is still relatively rare outside of big cities. You'll find more confident speakers among younger generations and people working in international companies. So yeah, the numbers are growing, but there's still quite a gap between studying a language and actually using it comfortably."
        },
        {
          "q": "Does speaking other languages help at work?",
          "a": "Oh, definitely. In a lot of industries — like business, tourism, or tech — being able to communicate in another language opens up so many more opportunities. It can make you stand out when applying for jobs, and it's just really useful when working with international clients or colleagues. Even knowing a few basics in someone's language shows respect, you know? I think as the world gets more connected, language skills are becoming more and more valuable in almost any field."
        },
        {
          "q": "Do people learn any languages other than English?",
          "a": "Yeah, increasingly so. Japanese and Korean have become really popular, especially among younger people who are into anime or K-pop culture. Spanish is also gaining interest because of how widely it's spoken globally. And in business circles, some people are picking up languages like German or French. I think social media and streaming platforms have made learning these languages feel more fun and accessible, which is probably why more people are giving it a go these days."
        },
        {
          "q": "Why is it easier for children to learn new things than for adults?",
          "a": "Well, I think the biggest reason is that children's brains are just more flexible at that stage, you know? They absorb information naturally without overthinking it. Adults tend to get in their own way — worrying about making mistakes or feeling embarrassed. Kids just dive in without that fear. They also have more time and fewer responsibilities, so they can practice constantly. And honestly, when you're young, everything is new anyway, so picking up new things just feels normal."
        },
        {
          "q": "How do people learn new things?",
          "a": "I think it varies a lot depending on the person. Some people prefer watching videos or taking online courses because it fits around their schedule. Others learn best by actually doing things hands-on and just figuring it out as they go. Having someone experienced to guide you also makes a big difference — like a teacher or mentor. And I think consistency matters more than anything, honestly. Even just spending a little time on something every day adds up way faster than people expect."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-kind-of-food-people-eat-during-the-special-event-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe a kind of food people eat during the special event.",
      "titleCn": "描述一种节日吃的食物",
      "card": "You should say:\n· What the food is\n· What event people usually eat it\n· How it is cooked\n· And explain why it is for the special event.",
      "sampleAnswer": "I'd like to talk about Chinese dumplings. In Chinese we have lots of different words for the many different varieties of dumplings – so it's not always easy to find an equivalent English word. In Chinese there's one kind of dumpling that we call 'Jiaozi' and these are a very popular dish during the Chinese New Year season. The recipe for these dumplings varies by region but they typically consist of a minced meat and a vegetable filling wrapped into a thinly rolled piece of dough, which is then sealed by pressing the edges together. They are cooked by either boiling, steaming or my favourite by pan-frying. We traditionally serve them with a black vinegar and other sauces. Even though we eat these dumplings throughout the year, at Chinese New Year we make them by hand, at home with our relatives. So for most Chinese people these dumplings are closely linked to the idea of Spring Festival traditions. Personally I'm a huge fan of these dumplings and every Chinese New Year I get really excited about the prospect of sitting down with my relatives to make them. We spend hours making them and we often make jokes about who can make the best ones – the technique is a bit fiddly so sometimes they turn out wrong and this is always quite funny.",
      "part3": [
        {
          "q": "Why do some people grow their own food these days?",
          "a": "Growing your own food has become trendy for several reasons. It ensures fresh, organic produce without chemicals, which is healthier and more environmentally friendly. It's also a great way to save money on groceries. Many find gardening therapeutic and stress-relieving, providing a sense of accomplishment. It's a fun hobby that connects people with nature and the food production process. Some do it to reduce their carbon footprint or to have control over what they eat. Overall, it's a rewarding activity that combines health, environmental, and personal benefits."
        },
        {
          "q": "Is there any traditional food in your country?",
          "a": "Oh, absolutely! China's bursting with traditional foods. We've got dumplings - little pockets of joy that show up at every Spring Festival. Then there's Peking duck - it's like the rock star of Chinese cuisine, crispy and juicy in all the right places. Hot pot's a big deal too - imagine a bubbling pot of soup where you cook your own food. It's like a DIY dinner party! And don't forget regional specialties. Sichuan dishes will make your taste buds do a spicy dance, while Cantonese dim sum is like a parade of bite-sized delights. From mooncakes to hand-pulled noodles, our traditional food's a real flavour adventure!"
        },
        {
          "q": "What can be the reasons that some young people prefer foreign food to traditional food?",
          "a": "Young people might prefer foreign food for several reasons. First, it's exciting to try new flavors and cuisines, offering a sense of adventure. Social media and globalization have exposed the youth to diverse food cultures, making foreign dishes trendy. Some see it as more sophisticated or cosmopolitan. As young people travel more, they develop tastes for international cuisines. Fast-paced lifestyles might also make some foreign fast foods more appealing. However, this doesn't mean they've abandoned traditional food entirely – many still enjoy it, especially during special occasions or family gatherings."
        },
        {
          "q": "Which food is generally popular in your country?",
          "a": "In my country, popular foods include a mix of traditional and modern dishes. Fast food like burgers and pizza are widely enjoyed, especially among younger people. Traditional rice dishes with various meat and vegetable combinations remain staples in many households. Street food is incredibly popular, with vendors selling local snacks and quick meals in urban areas. International cuisines, particularly Italian and Asian, have gained significant popularity in recent years. Seafood dishes are favorites in coastal regions, while hearty meat stews are more common inland."
        },
        {
          "q": "Will there be more and more people planting food in the future?",
          "a": "I believe more people will grow their own food in the future. Rising concerns about food quality, environmental impact, and self-sufficiency are driving this trend. Urban gardening solutions like vertical gardens and community allotments are making it feasible even in cities. Advances in technology, such as smart indoor growing systems, are making it easier for anyone to grow food regardless of space or climate. As people become more health-conscious and environmentally aware, home gardening will likely become more widespread, potentially changing our relationship with food production and consumption."
        },
        {
          "q": "What are the differences between everyday food and festival food?",
          "a": "Well, I think the biggest difference is just how much effort goes into it. On a normal day, most people want something quick and easy, right? But festival food is a whole different thing — families spend hours preparing special dishes, and everything feels more meaningful. There's also the social side of it. Everyday meals are often eaten alone or in a rush, while festival food is almost always about sitting down together and enjoying the moment."
        },
        {
          "q": "Are there any differences between the food people eat today and the food people ate in the past?",
          "a": "Definitely, yeah. In the past, people mostly ate simple, home-cooked meals made from fresh local ingredients. These days, processed food and takeaways are a huge part of people's diets, which is convenient but probably not as healthy. I think variety has increased a lot too — you can eat cuisine from all over the world without leaving your city, which people in the past couldn't even imagine. So it's better in some ways, worse in others."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-new-law-you-would-like-to-introduce-in-your-country-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe a new law you would like to introduce in your country.",
      "titleCn": "描述一条你想推行的新法律",
      "card": "You should say:\n· What law it is\n· What changes this law brings\n· Whether this new law will be popular\n· And explain how you feel about this",
      "sampleAnswer": "If I had the opportunity to introduce a new law in my country, it would undoubtedly be a comprehensive environmental protection law specifically aimed at drastically reducing single-use plastics. This proposed law would mandate a phased ban on single-use plastics, starting with items like plastic bags, straws, and cutlery, eventually encompassing a wider array of products. Additionally, it would require businesses to transition to sustainable alternatives and provide subsidies and support to local industries developing biodegradable options. The changes brought about by this law would be significant. First, it would greatly decrease the amount of plastic waste that pollutes our oceans, landscapes, and cities, which is crucial for preserving natural ecosystems and biodiversity. Second, by fostering a demand for eco-friendly products, the law would stimulate innovation and growth in the green technology and materials sectors, potentially positioning our country as a leader in environmental sustainability. Although implementing such a law might face initial resistance due to convenience and cost concerns, I believe it would gain popularity over time. Public awareness of environmental issues is rising, and many citizens are already advocating for stronger measures to protect our planet. The shift in consumer preferences towards sustainability supports this trend. The idea for this law came from witnessing the detrimental impact of plastic pollution firsthand during a beach cleanup event. The sight of wildlife entangled in plastic debris was profoundly disturbing and served as a catalyst for my advocacy for change. Personally, I feel deeply passionate about this law. It represents a concrete step towards a sustainable future and aligns with my values of environmental conservation and responsibility. Introducing such a law would not only improve the quality of life in my country but also contribute positively to global environmental efforts, an achievement that would fill me with immense pride and hope.",
      "part3": [
        {
          "q": "What rules should students follow at school?",
          "a": "Children should follow rules at home related to their safety, like not playing with sharp objects or using the stove unsupervised. It's equally important to enforce rules regarding respect, such as using polite language and cleaning up after oneself. These rules create a secure and respectful environment within the household, helping children understand the boundaries of safety and courtesy."
        },
        {
          "q": "Do people often violate rules or laws in China?",
          "a": "I don't know if people in China violate laws more than any other country to be honest. It's hard to say. On the one hand Chinese people can be very obedient, but on the other hand they can also flaunt rules and ignore regulations if they are not imposed strictly, and if they are not penalized by the authorities for breaking them. In this way I'd say the Chinese are quite childish – they will follow rules if the authorities punish them for not following them. But if they are not threatened with punishments or loss of face, they might just totally ignore them and not even think about the consequences of their own actions on society. But, having said this, I think a lot of people in the world are like this. I'm not sure it's right to compare."
        },
        {
          "q": "What kinds of behavior are considered as good behavior?",
          "a": "Good behavior generally includes actions and attitudes that are considerate, respectful, and constructive. This encompasses being honest, responsible, kind, and cooperative. Good behavior in a social context also involves respecting others' rights and privacy, adhering to societal norms, and contributing positively to the community."
        },
        {
          "q": "Do you think children can learn about the law outside of school?",
          "a": "Yes, children can certainly learn about the law outside of school. Parents, guardians, and community leaders can play pivotal roles in teaching children about the law through daily interactions and real-life examples. Media, books, and educational programs also provide opportunities for children to learn about legal principles and the importance of following laws."
        },
        {
          "q": "What are the benefits for people to obey rules?",
          "a": "Obeying rules provides a stable and predictable environment, which is essential for societal function and personal well- being. It helps prevent chaos and conflicts, protects rights and properties, and ensures fairness and justice in society. On a personal level, following rules can lead to a positive reputation, better opportunities, and the ability to live in harmony with others."
        },
        {
          "q": "How can parents teach children to obey rules?",
          "a": "Honestly, I think the most effective way is leading by example. Kids notice everything, so if parents follow rules themselves, children naturally pick that up. Setting clear and consistent boundaries matters too — if rules keep changing, kids just get confused. Explaining the reasoning behind rules also helps a lot, you know? Children are more likely to follow something when they actually understand why it exists. And positive reinforcement works way better than punishment — praising good behavior tends to stick a lot longer."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-an-interesting-video-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe an interesting video.",
      "titleCn": "描述一个有趣的视频",
      "card": "You should say:\n· When and where you watched it\n· What it is about\n· Why you watched it\n· And explain how you feel about it",
      "sampleAnswer": "So, the video I want to talk about is one that basically took over my entire social media feed back in April. It's a travel documentary on Bilibili by this incredibly talented photographer called Linksphotograph, and it features the actor Li Xian — and the two of them went all the way to northern Norway, inside the Arctic Circle, to climb a snow mountain called Senja. I watched it the evening it dropped, purely because everyone around me was talking about it and I had serious FOMO. I sat down thinking I'd watch maybe ten minutes — and then suddenly it was midnight and I'd watched the whole fifty-five minutes without moving. What makes it so special is that the whole thing is completely unscripted — no filters, no dramatic reality-show edits, nothing. You just watch two guys genuinely struggling through wind and snow, with their faces going red from the cold, and it feels incredibly real. There's this one moment where Li Xian reaches the summit and says something like, \"Why does everything in life have to have a meaning? Just go and experience it.\" And I don't know why, but that really hit me. I think what I loved most was how honest it felt. In a world where so much online content is polished and performed, watching something this raw and genuine was almost refreshing. It reminded me that the best stories don't need a script — they just need two people brave enough to show up.",
      "part3": [
        {
          "q": "What kind of videos do people in your country like to watch?",
          "a": "Well, I'd say people in my country enjoy a pretty wide range of videos. Short-form content is super popular right now — things like funny clips, food vlogs, and life hacks on platforms like Douyin. Drama series and variety shows are also huge, especially among older audiences. And you know, with so many people working out these days, fitness tutorials have really taken off too. I think entertainment and practical content tend to do the best overall."
        },
        {
          "q": "Which is more helpful, watching videos or reading books?",
          "a": "Hmm, that's a tough one. I think it really depends on what you're trying to learn. For picking up practical skills — like cooking or coding — videos are way more useful because you can actually see how things are done step by step. But for deep understanding or critical thinking, books are probably better since they push you to focus and process information more carefully. Personally, I think combining both is the smartest approach."
        },
        {
          "q": "What skills can people learn from watching videos?",
          "a": "Oh, quite a lot actually. I think the most common ones are cooking and DIY stuff — you know, people just follow along with tutorial videos and pick things up really quickly. Language learning is another big one, especially through shows or YouTube channels. And creative skills like drawing, photography, even music — there's so much free content out there now. Videos make it easy to learn at your own pace, which is a huge advantage."
        },
        {
          "q": "Are there any differences between the videos that young people and old people like to watch?",
          "a": "Definitely, yeah. Young people tend to go for fast-paced content — short videos, gaming streams, influencer stuff — basically anything that's quick and entertaining. Older people, on the other hand, usually prefer longer formats like news programs, historical dramas, or cooking shows. I think it comes down to habits and lifestyle, you know? Younger generations grew up with smartphones, so they're used to consuming content in short bursts, while older folks are more comfortable with traditional TV-style viewing."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-an-advertisement-with-a-famous-person-in-it-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe an advertisement with a famous person in it.",
      "titleCn": "描述一则名人代言的广告",
      "card": "You should say:\n· Who the person is\n· Where you can see it\n· What the advertisement is about\n· And explain how you feel about the advertisement",
      "sampleAnswer": "Right, so the advertisement I want to talk about is Adidas's campaign featuring Li Xian, who's a really well-known Chinese actor. I first saw it earlier this year — it kept popping up on my social media feed, and then I started noticing it on big screens outside shopping malls too, so it was kind of hard to miss. The ad is basically built around this idea of just getting out there and moving — running, hiking, being outdoors, that kind of thing. And what makes it work so well is that Li Xian genuinely lives like that in real life. Like, this is a guy who goes on fifteen-hour hikes in Tibet and climbs snow mountains in Norway in his free time — so when he shows up in a sports ad, it doesn't feel like he's just there for the paycheck. It actually feels believable, which, you know, is not something you can say about every celebrity advertisement out there. I think what I like most about it is how unforced it feels. There's no over-the-top slogan, no dramatic slow-motion moment that makes you cringe — it's just him, looking very comfortable doing active stuff, which I suppose is exactly what a sports brand wants. Honestly, it made me want to go buy a pair of trainers and go for a run, which I didn't actually do — but the fact that I thought about it probably means the ad did its job pretty well.",
      "part3": [
        {
          "q": "What are the advantages and disadvantages of advertisements?",
          "a": "Well, on the plus side, advertising helps people discover products they might genuinely need, and it keeps competition healthy between companies. But the downsides are pretty real too. A lot of ads are misleading or just create unnecessary pressure to spend money. And honestly, when you're bombarded with ads everywhere you go, it gets exhausting. I think advertising works well when it's honest and relevant, but a lot of it these days just feels pushy and annoying."
        },
        {
          "q": "Why are many advertisements endorsed by celebrities? How useful are they?",
          "a": "I think it comes down to trust and attention, you know? People already like and follow these celebrities, so seeing them recommend something naturally makes it more appealing. It's a shortcut to grabbing people's attention. As for how useful they are — it depends. Younger audiences tend to respond well, but a lot of people are becoming more skeptical because everyone knows celebrities are just paid to say nice things. So the impact is probably less powerful than it used to be."
        },
        {
          "q": "What is the most important factor in an advertisement?",
          "a": "Hmm, I'd say relatability. If an ad makes you feel like it actually understands your life or your problems, you're way more likely to pay attention. A clever concept helps, and good visuals matter too. But at the end of the day, if the message doesn't connect with people emotionally, none of that really matters. The best ads are the ones you remember not because they were loud or flashy, but because they made you feel something."
        },
        {
          "q": "Why are some advertisements boring?",
          "a": "Honestly, I think it's because a lot of companies play it too safe. They just list product features or repeat the same tired format everyone else uses. There's no personality, no story, nothing that makes you stop scrolling. Sometimes the target audience is also too broad, so the message ends up feeling generic and flat. Good advertising takes creativity and a bit of risk, and not every company is willing to go there. The result is a lot of forgettable content."
        },
        {
          "q": "Is advertising important for a company? Why?",
          "a": "Yeah, absolutely. Even if your product is amazing, people need to know it exists, right? Advertising builds awareness and keeps a brand in people's minds. For new businesses especially, it's almost impossible to grow without some form of promotion. It also helps companies stay competitive — if your rivals are advertising and you're not, you'll just fade into the background. I think the key is spending wisely though, because bad advertising can actually do more harm than good."
        },
        {
          "q": "Which is more effective, online advertising or offline advertising?",
          "a": "For most businesses today, online advertising is probably more effective — you can target specific audiences, track results in real time, and adjust quickly if something isn't working. Offline ads like billboards or TV commercials still have their place though, especially for building brand awareness on a bigger scale. I think the honest answer is it depends on who you're trying to reach. Older audiences might respond better to traditional formats, while younger people are almost entirely online."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-tv-show-online-program-you-have-watched-recently-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe a TV show/online program you have watched recently.",
      "titleCn": "描述一个最近看的电视/网络节目",
      "card": "You should say:\n· What it is\n· What it is about\n· How often you watch it\n· And explain how you feel about it",
      "sampleAnswer": "So, the show I've been watching recently is called Chengfeng 2026 — it's a music competition reality show on Mango TV, and honestly it's been taking up way more of my evenings than I'd like to admit. The basic idea is that over thirty women — actresses, singers, athletes, all kinds — come together to compete in live performance stages. And what makes this season really different from before is that everything is completely live. No editing, no pitch correction, nothing. What you see is literally what's happening in that moment, which is, um, a bold choice, and one that does not always go smoothly — but that's kind of the point. I've been watching it pretty much every week since it started in April. My friends and I usually watch together and then spend the next hour arguing about who performed best, which I think says a lot about how much we care. There was this one moment where Li Xiaoran performed this really upbeat song called Xinyuan Biantie, and it just completely blew up online overnight. I watched the clip probably four or five times, which is not something I do very often. What I love most about it is how real it feels. You can see the nerves, the mistakes, the genuine excitement — and somehow that makes it so much more watchable than a perfectly polished show. It's messy in the best possible way, and I think that's exactly why people can't stop talking about it.",
      "part3": [
        {
          "q": "What are the differences between the TV programs young people like to watch and those old",
          "a": "Well, the gap is pretty noticeable. Young people tend to go for fast-paced content — reality shows, short dramas, gaming streams, that kind of thing. They're used to consuming content quickly and switching between things. Older people generally prefer slower, more traditional formats like news programs, historical dramas, or cooking shows. I think it comes down to habits more than anything. Older generations grew up with scheduled TV, while younger people just watch whatever they want, whenever they want."
        },
        {
          "q": "What makes a popular TV or online program?",
          "a": "Hmm, I think the biggest factor is whether people can connect with it emotionally — a relatable story, a lovable character, something that makes you feel something. Good pacing matters too, you know? If a show is slow to get going, people just switch off. Word of mouth is huge these days as well — if something is trending on social media, curiosity alone drives millions of views. Ultimately though, it comes down to whether people feel it's worth their time."
        },
        {
          "q": "What kinds of TV or online programs are popular in your country?",
          "a": "Short dramas are absolutely massive right now in China — like bite-sized episodes you can finish in minutes. Romance and historical costume dramas have always had a huge following too. Variety shows with celebrity guests are popular across all age groups. And recently, documentary-style content about food and travel has really taken off. I think people want either pure entertainment to switch off after work, or something visually beautiful they can enjoy without thinking too hard."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-story-book-with-animals-in-it-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe a story/book with animals in it.",
      "titleCn": "描述一个有关动物的故事/书",
      "card": "You should say:\n· What animals are in it\n· What the story/book is about\n· Why you read the story/book\n· And explain what you think of this story/book",
      "sampleAnswer": "So, the book I want to talk about is The Little Prince, which I first read when I was maybe thirteen or fourteen. My mum actually gave it to me — she said it was one of her favourite books when she was young, and that I'd understand it better as I got older. I didn't really know what she meant at the time, but honestly, she was completely right. The story follows this little boy who lives on a tiny planet all by himself, and he travels across the universe meeting all kinds of strange characters. There are quite a few animals in it, but the one that really stayed with me is the fox. There's this scene where the fox asks the little prince to \"tame\" him — which in the book basically means forming a real connection with someone, making them special to you and you to them. And then the fox says something like, you become responsible for the things you've tamed. Which, um, hit me a lot harder than I expected from a children's book. I think what I love most about it is that it works on completely different levels depending on how old you are. When I was thirteen I thought it was a sweet little story. Reading it again last year, it felt more like something about loneliness, and love, and how easy it is to lose sight of what actually matters. It's one of those books that's very easy to finish in one sitting and then just sit quietly for a while afterwards.",
      "part3": [
        {
          "q": "Should schools teach children about animals?",
          "a": "Definitely, yeah. Learning about animals helps kids develop empathy and a sense of responsibility from a young age. It also connects them to the natural world, which a lot of children growing up in cities don't really get exposed to. Understanding ecosystems and wildlife is also just genuinely useful knowledge. I think when kids care about animals, they naturally grow up caring more about the environment too. So it's really about building a broader awareness, not just memorizing animal facts."
        },
        {
          "q": "Some people think pets should not be kept in cities. What do you think?",
          "a": "I get where that argument comes from — cities are noisy, crowded, and apartments are small. But I don't think it's fair to ban pets altogether. Plenty of city dwellers give their animals a perfectly happy life with enough attention and exercise. The real issue is irresponsible ownership — people who don't clean up after their pets or keep them in unsuitable conditions. I think better regulation makes more sense than an outright ban honestly."
        },
        {
          "q": "Many people regard pets as members of their family. What do you think?",
          "a": "Honestly, I think it makes complete sense. Pets are emotionally present in a way that's hard to explain unless you've had one. They pick up on your moods, they're always happy to see you, and you genuinely grieve when they're gone. That's not so different from how we feel about family, right? Some people might think it's going too far, but I think the bond between a person and their pet is very real and deserves to be taken seriously."
        },
        {
          "q": "Do many people keep pets in your country?",
          "a": "Yeah, pet ownership has grown massively in China over the past decade. Dogs and cats are by far the most popular, and there's a whole industry around pet food, grooming, and healthcare that's boomed alongside it. Younger generations especially treat their pets like family and spend quite a lot on them. I think as more people live alone or delay starting families, pets fill that emotional gap in a really meaningful way. It's become a proper lifestyle choice rather than just a hobby."
        },
        {
          "q": "What are the advantages of keeping a pet?",
          "a": "Well, the companionship is the obvious one — pets are great at reducing loneliness, especially for people living alone. There's also evidence that owning a pet lowers stress levels, which makes sense because they kind of force you to slow down and be present. Dog owners especially tend to be more active since walks are non-negotiable. And for families with kids, having a pet teaches children responsibility and empathy in a very hands-on way. It's genuinely good for your wellbeing overall."
        },
        {
          "q": "Why do people always tell children stories with animals?",
          "a": "I think animals make perfect story characters for kids because they're already familiar and lovable. A talking fox or a brave little mouse is just way more engaging than a human character doing the same thing, you know? Animals also let storytellers tackle big themes — like courage or kindness — in a way that feels safe and relatable for young audiences. And honestly, there's something timeless about it. These kinds of stories have worked for thousands of years across every culture, which says a lot."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-something-that-helped-you-learn-a-foreign-language-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe something that helped you learn a foreign language.",
      "titleCn": "描述一个帮你学外语的东西",
      "card": "You should say:\n· What it was\n· What language you learnt\n· Why you chose to learn that language\n· And explain how this thing helped you",
      "sampleAnswer": "The language I learned was English because it was a core subject in school, but the lessons in school were a bit boring. I chose English simply because that was the only option at the time, so I guess you could say I didn't really choose it! Something that really helped me learn that foreign language was a TV series I watched when I was in school. It was a series called Science Adventures, and it was all in English, with subtitles in both English and Chinese. It was hosted by a really entertaining girl who spoke with a slight American accent and was really inspiring. I used to watch every episode of it. In each episode, they did a different science experiment, with a lot of fun stories related to the topic. It wasn't too heavy on scientific language or vocabulary, and everything they talked about was related to our everyday lives and fun and interesting facts about everyday scientific phenomena, like why water swirls in a certain direction when you take the plug out of the bath, or why the sun burns you when it's hot in summer, and stuff like this. So, in fact, it was excellent for picking up everyday English. It was also quite modern, so I learned quite a few new phrases and expressions, which were more useful than the rather dry, old-fashioned, stuffy things we learned in school textbooks. So, all around, this TV series exposed me to a wide range of vocabulary and expressions, helped me polish my grammar, and presented everything in a fun and interesting context.",
      "part3": [
        {
          "q": "What difficulties do people face when learning a language?",
          "a": "There's a number of difficulties people encounter when learning another language. Firstly, it's harder at first, and without the right motivation and learning context. Then having the inspiration to study is quite tough. So, first and foremost it's important to be inspired and interested in learning the language. Secondly, having the discipline to learn the boring parts – the rules, the grammar, the things that are not necessarily so interesting at first. Learning all this requires a sense of discipline and regular study."
        },
        {
          "q": "Do you think language learning is important?",
          "a": "I think it is to some extent, but it largely depends on what field you wish to go into in the future. If you want to work in a local company, in a local capacity, then no, learning another language is not always helpful or useful. If you want to work in a more international context, then learning another language is essential – in business, in education or in international relations. So, it really depends on which direction in life you wish to go in and what you aspire to do in the future."
        },
        {
          "q": "Is studying abroad a good way to learn a foreign language?",
          "a": "Most certainly it is, but it also depends on your attitude when you study and live overseas. If you go overseas and really make an effort to mix with people from that country, spend time with them, develop relationships with them and talk a lot, your confidence and language ability will certainly grow."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-law-or-regulation-about-environmental-protection-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe a law or regulation about environmental protection.",
      "titleCn": "描述一条环保相关的法规",
      "card": "You should say:\n· What it is\n· How you first learned about it\n· Who benefits from it\n· And explain how you feel about this law or regulation",
      "sampleAnswer": "A law relating to environmental pollution that I think is excellent, but should be made even stricter, is the law to reduce private cars on the roads by restricting the number plates that are allowed on the roads each day. It means that only number plates ending in certain numbers can drive on the roads on certain days. This results in there being much less traffic on the road at any given time, and people have to alternate they days they drive, and the days they take public transport. It's quite a fair law really, and means that everyone, rich or poor, must limit the amount of driving they do in the city, which, in turn, means that the air pollution is kept a little lower than it otherwise would be, and of course, helps to ease some of the traffic congestion too. The problem with this law is that rich people who have two cars, end up just changing the car they use each day, so that they are actually driving every day anyway. This is the problem with a lot of laws in my country, and in most countries, actually, if you're really rich you can always find ways around them! Generally I am very supportive of all types of environmental laws because I think that now is the time when we should all be making a lot of effort to help preserve the natural environment, reduce air pollution and emissions, and save water and resources. The planet needs our help in this regard, and it benefits us in the long-run, to take care of the planet by abiding by environmental laws as well as making our own individual efforts to be responsible – recycle plastic bottles, use less water, try to take public transport more, use less plastic bags if we go to the market – things like this.",
      "part3": [
        {
          "q": "What kind of rules do schools in China have?",
          "a": "Schools in China have all sorts of rules. Pretty much like schools anywhere I guess. Children cannot wear scruffy or outrageous clothes or fashions, or dangling earrings or dyed hair, and things like this. Those are dress-code rules. There are other rules, too, like you aren't allowed to take mobile phones into the classroom, you can't run or shout in the hallways, and you can't be seen kissing or engaging in romantic activities in public places. I can't think of any more off the top of my head, but there are, indeed, lots of little rules to govern how students behave on the school premises."
        },
        {
          "q": "What should teachers do to make students obey rules?",
          "a": "Teachers should set good examples for students, and they should also remind students of the rules, by explaining the context and reasons for them. I think this method works better than simply scolding or bossing students around. So, the personality and way that a teacher disciplines pupils and students is key to getting them to listen, understand and obey rules. If, of course, some especially unruly students persist in breaking the rules, teachers should dish out punishments to deter them from breaking the rules again, and deter other students from doing the same."
        },
        {
          "q": "Are there any laws about education in China?",
          "a": "Yes, in China education is compulsory from age six to around age fifteen – there's nine years in total, I think, of compulsory education. There is also a national curriculum with a number of compulsory subjects that we must study, and a number of elective subjects. We also must do a certain amount of physical education and sports, and also learn about good social behavior in a series of social studies classes. So, yes, there are a number of basic laws which govern the education system and how schools should conform with national standards of both curriculum and disciplinary issues."
        },
        {
          "q": "What are the rules people should obey at work?",
          "a": "Well, the basics are pretty universal — showing up on time, meeting deadlines, and communicating respectfully with colleagues. Beyond that, I think maintaining confidentiality is really important, especially in professional settings where sensitive information is involved. Following safety procedures matters too, depending on the industry. But honestly, the most important unwritten rule is just being reliable and pulling your weight. Nobody wants to work with someone who constantly lets the team down, you know?"
        },
        {
          "q": "What is the purpose of punishment?",
          "a": "Hmm, I think it serves a few different purposes depending on the context. The most obvious one is deterrence — making people think twice before breaking rules again. But I think the more meaningful purpose is actually correction, helping someone understand what they did wrong and how to do better. Pure punishment without any lesson attached doesn't really change behavior long term. Ideally, it should feel fair and proportionate too, otherwise people just feel resentful rather than genuinely reflecting on their actions."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-an-ambition-that-you-have-had-for-a-long-time-9",
      "part": 2,
      "category": "物品",
      "status": "保留题",
      "month": 9,
      "title": "Describe an ambition that you have had for a long time.",
      "titleCn": "描述一个长久以来的志向",
      "card": "You should say:\n· What it is\n· What you can do for it\n· When you can achieve it\n· And explain why you have this as an ambition",
      "sampleAnswer": "An ambition I have had for a very long time now is to learn to drive a car and go on a long road trip. As you know, China is a large and diverse country, and there is a lot to see, and a lot of interesting cultures, societies and different landscapes to enjoy. I once saw a documentary of a guy who bought a really cool four-wheel drive vehicle and went on a road trip all around the country. I would love to do the same. I don't think it would actually be that hard, but it would involve a certain amount of investment and planning. I would ideally like to do this after I finish my postgraduate overseas. Before embarking on a proper career, let's say. I'd choose a summer holiday for sure, so that I could go to the colder regions of my country without it being too cold, and travel to the other places too. I'd definitely go south to Yunan, because I love the tropical areas and the food and culture there, but I'd also travel through Xinjiang and western desert regions too, as well as heading way up north to the areas which have some Russian influence and culture. There's a lot of places I'd like to go to, and I'd have to plan the route very carefully, and also get a vehicle which could easily be repaired if it broke down along the way. I think this kind of trip would combine my lust for adventure, with my interest in culture, topography and photography. So, all in all, I'm really hoping I can do this, and that a couple of good friends who share similar interests as me would also be prepared to join me on such a trip.",
      "part3": [
        {
          "q": "What kinds of ambitions do people have?",
          "a": "People have all sorts of ambitions. Most people have ambitions related to earning money, developing their careers, buying a nice house and things like this. Ambitions are often connected to the social pressures we have for our families and children too, this is why often ambitions seem to be related to money and career. Though, those that have already achieved a certain basis in financial security usually entertain ambitions related to travel, culture, hobbies and interests as well. So it depends on how much basic security a person feels they have or can achieve, as to what ambitions they aim for in the future."
        },
        {
          "q": "Why should parents encourage children to have ambitions?",
          "a": "Having ambitions is something that motivates us and it's important that children see that their efforts now (in things like studies and so on) will eventually pay off in the future. Studies and things like this can be quite boring, and children often don't really see why they are important, so lose motivation. If parents encourage children to have ambitions, then they will have end goals to aim for that are appealing and this will help to keep up motivation and interest in the short- term. It's always important that people, not just children, have some kind of goal or ambition for the future."
        },
        {
          "q": "Should parents interfere with their children's ambitions?",
          "a": "Parents should play a role in children's ambitions, most certainly, but only to a certain extent. I mean, parents should certainly act as guides and help children nurture and develop positive and constructive ambitions for the future, and try to steer them away from ambitions which may not be healthy or advisable. Some parents, admittedly, interfere too much with what their children want to do in the future, whilst other parents might be too laid-back about it. Like a lot of things in life there should be a balance between giving children freedom, and controlling them too much. A parent's role should be that of a fairly strict, but understanding 'guide' in life, I believe."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-your-favorite-city-that-you-have-visited-9",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 9,
      "title": "Describe your favorite city that you have visited.",
      "titleCn": "描述你去过的最喜欢的城市",
      "card": "You should say:\n· Where it is\n· How you knew it\n· When you visited it\n· And explain why it is your favourite city",
      "sampleAnswer": "So, the city I want to talk about is Chengdu, which is in southwest China — the capital of Sichuan province. I'd heard about it for years, you know, people always going on about the food and the pandas and how relaxed the whole vibe is. So I was kind of curious about it for a long time before I actually went. I visited about two years ago with a couple of friends, and we stayed for around five days. Um, we did all the classic things — we went to the Giant Panda Base in the morning, which, honestly, was worth every second of the early wake-up. We ate so much hotpot that I genuinely lost count after the second day. We also just walked around a lot, sat in teahouses, and did basically nothing — which sounds boring but actually felt really, really good. And I think that's exactly why it's my favourite city. Like, Chengdu has this quality where nobody seems to be in a rush. People sit outside drinking tea at ten in the morning on a weekday, and somehow that feels completely normal there. Coming from a city where everything moves so fast, that was honestly kind of a shock — but a good one. I left feeling weirdly calm and already wanting to go back. And I think that says everything about a place, you know?",
      "part3": [
        {
          "q": "Which is more suitable for young people, urban life or rural life, and which is more suitable for",
          "a": "Well, I think cities are generally a better fit for young people — there are more job opportunities, better social life, and just a lot more going on. Rural areas can feel a bit limiting when you're ambitious and starting out. For older people though, I think the countryside makes more sense. It's quieter, less stressful, and closer to nature, which is great for health. So yeah, I'd say it's kind of a natural shift as people get older."
        },
        {
          "q": "How do people choose a city to travel to?",
          "a": "Hmm, I think it varies a lot by person. Some people go straight to social media for inspiration — if a place looks amazing on Instagram, that's enough reason to visit. Others care more about practical stuff like flight prices or visa requirements. Food is also a big factor for a lot of travelers, you know? And some people specifically look for cultural experiences or historical sites. I think most people end up balancing all these things when making a decision."
        },
        {
          "q": "Do you think a tourist city is also a good place to live? Why?",
          "a": "Honestly, not always. Tourist cities are great to visit, but living there is a different story. The cost of living tends to be higher, and popular areas can get really crowded and noisy. That said, there are some upsides — good infrastructure, plenty of restaurants and entertainment options. I think it depends on your lifestyle. If you enjoy a buzzing environment, it could work, but for most people, the downsides outweigh the benefits long-term."
        },
        {
          "q": "Do most people prefer to travel in a modern city or a historical city?",
          "a": "Well, I think it really depends on the traveler's personality. Some people love the energy of modern cities — the skyline, the shopping, the food scene. But a lot of travelers, especially those going somewhere for the first time, are drawn to historical cities because they offer something you can't find at home, you know? That sense of stepping back in time is really unique. Personally, I think historical cities tend to leave a stronger impression overall."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-boring-place-9",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 9,
      "title": "Describe a boring place.",
      "titleCn": "描述一个无聊的地方",
      "card": "You should say:\n· Where it is\n· Who you went there with\n· What you did there\n· And explain why you think it is a boring place",
      "sampleAnswer": "So, the place I want to talk about is this lake area my parents took me to a couple of summers ago. They'd been going on about it for weeks — like, \"oh it's so beautiful, you have to see it, the photos are incredible.\" You know how parents get when they're excited about something. So I went with my mum, my dad, and my aunt. We drove for about two hours to get there, which, um, should probably have been a warning sign. And when we actually arrived... it was just a lake. Like, just a normal, nothing-special lake with some concrete paths around it and a few trees that honestly looked a bit tired. We walked around it once, took some photos, had some really overpriced noodles from a little stall nearby, and then just kind of stood there not really knowing what to do next. I think the main reason it felt so boring was, well, the gap between what we expected and what we actually got. My parents had talked it up so much that even a pretty nice place would've struggled — and this was, you know, not exactly a pretty nice place. The most exciting thing that happened the whole day was a duck walked past us. And I remember actually feeling grateful for that duck. Which, honestly, says it all.",
      "part3": [
        {
          "q": "Why do most children think education is boring?",
          "a": "Well, I think it's mainly because classroom learning feels disconnected from real life. Kids are sitting there memorizing facts, and they just can't see why any of it matters. Plus, when everything's focused on passing exams, it kind of kills their natural curiosity. Traditional teaching doesn't leave much room for creativity or fun. I think if lessons were more interactive and hands-on, children would actually enjoy school a lot more."
        },
        {
          "q": "Why aren't young people willing to listen to the experiences of older people?",
          "a": "Hmm, I think it mostly comes down to the feeling that times have changed so much. Young people feel like the world their grandparents grew up in is totally different — different technology, different social norms, you know? So the advice can feel outdated and not really applicable. There's also that natural desire to figure things out on your own. But honestly, I think some of that older wisdom is still pretty valuable if you're open to it."
        },
        {
          "q": "What can people do when they feel bored?",
          "a": "Well, there are quite a few options. Some people go for something physical — like a walk or a workout — which does wonders for your mood. Others might pick up a hobby, watch something, or just call a friend for a chat. Personally, I think the best thing is to do something slightly productive but still enjoyable, like reading or trying a new recipe. Boredom is actually a good reminder to mix things up a little."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-tall-building-in-your-city-you-like-or-dislike-9",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 9,
      "title": "Describe a tall building in your city you like or dislike.",
      "titleCn": "描述一座你喜欢/不喜欢的城市高楼",
      "card": "You should say:\n· Where it is\n· What it is used for\n· What it looks like\n· And explain why you like or dislike it",
      "sampleAnswer": "A tall building in my city that I like is a huge tower, the financial building. Although it is called the financial building, in fact it has a lot of shops, restaurants and malls on the lower floors. It's a fantastic building, actually, and is designed by a famous French architect, whose name I forgot. It is, like most modern buildings, made of glass and metal and designed in interesting curving shapes. It's a fascinating building and the interior is really interesting too. Some people think it looks like how they imagine a space ship might look like - slick, white metal and glass, sweeping curves and lines and perfect lighting. I like it because it combines the best of functional design, with aesthetic beauty, and it's really relaxing to be inside. Somehow, even when it gets busy, it's a really nice relaxing space, and you always feel good there, you feel comfortable there, you feel that you can relax. There is a really nice coffee shop in the lobby with all sorts of modern art pieces on the walls, and a stunning range of interesting coffees and snacks. A lot of people go there to work in their break times, as there are comfy sofas, power-points for laptops and great service. So, I can see that they've made a lot of effort with the design of the building as well as with the businesses and commercial outlets inside the building. I enjoy going there, also because it is nearby a few places that I often need to go to for work - it's in the heart of the CBD.",
      "part3": [
        {
          "q": "What are the advantages of living in a tall building?",
          "a": "Well, personally I don't like living in a tall building really because I think the modern ones tend to be cramped and don't even have balconies normally. I don't know why. But the advantages might be that there are always better views if you have an apartment at the top, on the higher floors, of a tall building. That's the main advantage I'd say, so you can feel a sense of peace being high up above the city and you get a magnificent view."
        },
        {
          "q": "Do you think there will be more tall buildings in the future?",
          "a": "I think that there will. Tall buildings are primarily designed to save space, because you fit more people and more businesses in a smaller ground space. So, given that cities in China are so big, there is a desperate need to be economical with space, so the answer to this is to build very tall buildings."
        },
        {
          "q": "Why aren't there many tall buildings in the countryside?",
          "a": "There isn't such a need for tall buildings in the countryside. Tall buildings are built to save space in cities. That is their primary function. So, in the countryside you don't have this problem with high population and a restricted space to build things. So, there is basically no need for skyscrapers and tall buildings in countryside towns."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-place-you-would-like-to-visit-in-your-free-time-9",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 9,
      "title": "Describe a place you would like to visit in your free time.",
      "titleCn": "描述一个空闲时想去的地方",
      "card": "You should say:\n· Where it is\n· What you will do there\n· How long you will stay there\n· And explain why you would like to visit it",
      "sampleAnswer": "So, the place I'd love to visit in my free time is actually this little coffee shop I've been eyeing for a while now. It's in a quiet side street not far from the city centre — the kind of street where you'd probably walk past it without noticing if you weren't looking. I first came across it on Xiaohongshu, and, um, something about the photos just got me. It looked so cozy — wooden shelves, warm lighting, plants everywhere, the whole thing. I haven't been yet, which is a bit embarrassing honestly because it's not even that far from where I live. But I think I've been saving it, you know? Like, waiting for a day when I actually have time to just... sit there and do nothing useful. If I went, I'd probably stay for two or three hours at least. I'd order something I've never tried before, bring a book I've been meaning to read for months, and just completely switch off for a bit. No deadlines, no notifications, nothing. I think the reason it appeals to me so much is that it represents the kind of slow, quiet afternoon I almost never let myself have. It's not about the coffee, really — it's more about giving myself permission to stop for a while. And honestly, that sounds like the best kind of free time to me.",
      "part3": [
        {
          "q": "Why do you think some people choose not to travel abroad?",
          "a": "Well, I think the most obvious reason is money — international travel can be really expensive once you factor in flights, accommodation, and daily costs. Some people also have family or work commitments that make it hard to take time off. And then there's the language barrier, which genuinely puts a lot of people off, you know? Some folks just feel more comfortable staying somewhere familiar. I don't think it's necessarily a bad choice — domestic travel can be just as rewarding honestly."
        },
        {
          "q": "Do you think a gap period in life is important?",
          "a": "Hmm, I think it can be really valuable, yeah. Taking a break — whether it's between school and university or after a long stretch of work — gives you time to reflect and figure out what you actually want. A lot of people rush from one stage of life to the next without stopping to breathe, and that can lead to burnout. That said, I think the key is using that time meaningfully, not just drifting. Traveling, volunteering, or picking up new skills can make a gap period genuinely worthwhile."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-place-in-your-country-that-you-would-like-to-recommend-to-trav-9",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 9,
      "title": "Describe a place in your country that you would like to recommend to travelers.",
      "titleCn": "描述一个想推荐给游客的本国景点",
      "card": "You should say:\n· Where it is\n· What it is\n· What people can do there\n· And explain why you would like to recommend it to travelers",
      "sampleAnswer": "There's a place in Fujian province called Xiamen – I'm sure you've heard of it. This is where I'd recommend to travelers to China. It's a great place, by the coast, with a fantastic climate and lovely, warm, friendly people, great food, and interesting cultural things to do and see. And, if you're into Chinese tea, there's a lot of really good Chinese tea shops that are still family-run, friendly, and interesting. The tourist sights I would recommend are the Gulangyu island of pianos – this is really interesting – it's an island, a small island, just a boat ride away, where there are literally pianos in every house, and a piano museum. It's fantastic and quite unique. Also, the island trip makes a nice little day out, and there are friendly restaurants and eateries on the island too, and great views out to sea. Secondly, I'd go to see Hakka people's round houses just outside Xiamen in the countryside. They are called the Fujian Hakka Tulou, and they are quite large circular buildings, with a central courtyard and hundreds of living quarters inside. They date back centuries and were a traditional way to live in the days when you had to protect yourself from invaders – these roundhouses look fantastic and are incredibly interesting, and people still live in them today. It's a fascinating and unique aspect of the culture in that area of China. So, yes, these are the main places around Xiamen that I'd recommend – and make sure you go when it's a nice time of year, not too hot – in summer it gets really hot and humid. I'd go around, or just before, spring to be honest.",
      "part3": [
        {
          "q": "Where do people in your country often go for holidays?",
          "a": "Well, domestic travel is huge in China. Places like Sanya, Chengdu, and Yunnan are really popular because they offer beautiful scenery and great food without the hassle of going abroad. Coastal cities are always busy during summer too. That said, international travel has picked up a lot recently — Southeast Asia is a favorite because it's affordable and not too far. I think most people just want somewhere they can properly switch off and enjoy good food."
        },
        {
          "q": "Where do young people in your country often go for holidays?",
          "a": "Honestly, young people these days are pretty adventurous. A lot of them go for trendy destinations they've seen on social media — like Chongqing for its unique architecture or Xinjiang for the landscapes. Internationally, Japan and Thailand are super popular because they're easy to get to and really affordable. I think young travelers care a lot about having Instagrammable experiences, you know? The destination almost needs to look good in photos to make the list these days."
        },
        {
          "q": "What is the ideal length for a holiday?",
          "a": "Um, I'd say around one to two weeks is probably the sweet spot for most people. A few days feels too rushed — you barely settle in before it's time to leave. But anything longer than two weeks and people sometimes start missing home or feeling restless. I think seven to ten days gives you enough time to actually explore a place properly and come back feeling genuinely refreshed rather than exhausted from all the traveling itself."
        },
        {
          "q": "How do people usually plan holidays?",
          "a": "Most people start by scrolling through social media or travel apps for inspiration, then move on to comparing flight prices and reading reviews. Group chats are huge for coordinating with friends — everyone throws in suggestions and you somehow reach a decision eventually. I think younger travelers tend to leave things a bit more flexible, while families with kids plan everything down to the last detail. Booking accommodation and transport early is pretty standard now though, especially during peak seasons."
        },
        {
          "q": "Is it important to plan a holiday ahead?",
          "a": "I think some level of planning is definitely worth it, yeah. Booking flights and hotels early usually saves a lot of money, and it means you're not scrambling at the last minute. But over-planning can take the fun out of it too — sometimes the best moments happen when you just wander around without a schedule. So I'd say plan the basics, like transport and where you're staying, but leave enough room to be spontaneous. That balance tends to make for the best trips honestly."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-friend-s-home-you-visited-but-you-don-t-want-to-live-there-9",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 9,
      "title": "Describe a friend's home you visited but you don't want to live there.",
      "titleCn": "描述一个拜访过但不想住的友人家",
      "card": "You should say:\n· Where the home is\n· Who this person is\n· What kind of home it is\n· And explain why you don't want to live there",
      "sampleAnswer": "I had a friend in university called Roy. He was a nice, pleasant and intelligent man, actually. A bit older than me. He lived in a flat not far from campus. I used to visit him often because we shared similar interests in books, music and sports. He also helped me a lot with my studies, as he was really smart and enjoyed helping others. But his home was so messy and dirty – it was unbelievable really how messy and dirty it was. He knew it too, and admitted it, and said he just couldn't organise himself and hated cleaning. It was an interesting home, I must say, with loads of books, ornaments and old paintings and wall hangings and things. I did enjoy my visits to Roy's house, just that it was so unclean and dusty I was always sneezing when I was there. He also had two cats, a certain breed of cat that always leaves a lot of hair on the chairs and carpet. They were constantly molting. He didn't seem to care, but I think this might have been the reason I was sneezing a lot – a sort of allergy to cat fur maybe. Anyway, I liked the design of the flat, it had high ceilings, wooden floors, a huge balcony with plants on it, and a very spacious and functional kitchen – except he never did any washing up so it was impossible to cook in it! So, all in all, you can see why I didn't want to live there and would never live in an apartment like that or with someone so messy.",
      "part3": [
        {
          "q": "Do Chinese people like to visit others' homes?",
          "a": "To be honest, I don't really think so. I think we tend to feel we are imposing on others if we visit their homes. We don't have this kind of casual relationship with people, really. There are a couple of friends in my life who I've visited in their homes, but as a general rule we tend to meet people outdoors, do things together like dining in a restaurant or walking in the park or going shopping, rather than hanging out chatting in someone's home."
        },
        {
          "q": "What do Chinese people do when they visit others?",
          "a": "Usually when you visit someone's home you take a bottle of wine, some snacks, some juice, things like this. You always take off your shoes at the door, and often the host will give you a pair of slippers. I found it strange when I was in the UK that people don't do this, and even walk around the house in their shoes! It's quite interesting how cultures are different in this way. I would say that Chinese people are a bit more formal when visiting other people's homes, than Europeans, anyway, which is both good and bad. Sometimes it can create a more uptight atmosphere, which isn't so relaxing. This is the downside of this formality."
        },
        {
          "q": "What kind of place do people in your country like to live in?",
          "a": "When choosing a place of residence people usually consider three things: firstly the location and area of the city, in relation to where they work. Secondly, the actual building or community that fits your taste and preferences – whether you'd like it to have a garden, or a good management office, and things like this. Thirdly, the price in relation to your budget. These are the main considerations to take into account when choosing a place to live."
        },
        {
          "q": "What's the difference between homes in cities and those in the countryside?",
          "a": "Well, not really, at least not the buildings themselves. Like in the city centre, you have older and newer communities or apartment blocks. Sometimes residences on the outskirts are more spacious, and more affordable – they're often cheaper because they are further out and not so close to public services and amenities. Generally speaking most people prefer to live nearer to the city centre, because it provides a lot more in the way of entertainment, too. Sports centres, restaurants, malls, and these kinds of things are much more varied and interesting in the city centre compared to the outskirts."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-an-important-river-lake-in-your-country-9",
      "part": 2,
      "category": "地点",
      "status": "保留题",
      "month": 9,
      "title": "Describe an important river/lake in your country.",
      "titleCn": "描述本国一条重要的河流/湖泊",
      "card": "You should say:\n· Where it is\n· How big/long it is\n· What it looks like\n· And explain why it is important",
      "sampleAnswer": "An important lake in my country is Qinghai Lake. It's actually the largest lake in China and it is located in Xining, well… outside Xining actually, in the hollow of the Tibetan plateau. It's a very famous lake in my country. I know the lake fairly well because I am from that province, from a town not too far from the lake. I am not sure exactly how big the lake is, but I'd say it was about 3,000 or 4000km square. It's massive! It's really massive and pretty deep too. It looks pretty impressive to be honest. It's an iconic symbol of the area, and it's located in an area of stunning natural beauty. The lake is important for the area as it used to be the one and only real source of fresh water, a key fishing area, and a natural attraction. People in the villages nearby also believe the lake has a strong power… I guess you'd call it a lucky power. There are a lot of older, superstitious people in my town and they all seem to believe that the lake houses some powerful spirits or something like that. I'm not sure I believe that, but I can imagine that in the past many people told mysterious and magical stories about the place. For me, however, the lake is important for different reasons – it's the first place I ever went fishing with my father, and also it's the very first place I learned to swim!! With my uncle!! So, as well as being an incredibly important feature for the province and the surrounding towns and villages, it's also got a special significance for me. Maybe the lake is enchanted, after all!",
      "part3": [
        {
          "q": "How can rivers/lakes benefit local people?",
          "a": "Lakes have been incredibly important since the dawn of time. They have been a major source of water and of fish for people for centuries, millennia in fact. Today, they continue to be important for local communities for the same reasons, but tourism has taken off in the past few decades, and this offers a good source of revenue for the local community. Hotels have sprung up in towns and villages near large famous lakes, boat trips can be arranged, and walking tours and hikes nearby. These all bring fame and a certain amount of money to the local areas."
        },
        {
          "q": "How do rivers/lakes affect local tourism?",
          "a": "The downside of the tourism that lakes attract is the damage to the environment. Especially in a country where there are so many people and tourist sites are inevitably packed with crowds – and often crowds that are not necessarily that respectful to the natural environment. So, although lakes have a huge effect on local tourism, attract thousands of people who want to see them, fish in them, go on boat trips on them, and bring great revenue to an area, the lakes and the area itself can be negatively impacted from an ecological standpoint, which is a shame."
        },
        {
          "q": "Are rivers/lakes useful for transport?",
          "a": "Yes, of course – rivers mainly. There are a number of famous rivers in China which are all still used today for transporting goods and people from one place to another. Transport along rivers takes longer, but most certainly is a fairly common and reliable means of taking heavy loads from one place to another – especially through areas where the roads are bad or snaking through high mountain passes. Rivers provide a stable, reliable, if not slightly slow, means of transporting goods. And, of course, tourists – some tourists go on river cruises!"
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-time-when-you-got-up-early-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a time when you got up early",
      "titleCn": "描述一次早起的经历",
      "card": "You should say:\n· When it was\n· What you did\n· Why you got up early\n· And explain how you felt about it",
      "sampleAnswer": "Oh, there's lots of times when I have had to get up early, but the last time I remember very clearly was when I was on holiday on the Yangtze River on a sort of boat cruise with my school. It was a really cool trip actually, and each day we travelled down the river on the boat, and stopped off at different places along the way. For sightseeing in China, you usually have to get up really early, you see, so every morning they woke us up just after dawn, which was around 5am. I wasn't very happy about this, to be honest, because I hate waking up early, and also because we all sat up late in the bunk beds drinking beer and playing cards, which made it even more difficult to get up early in the morning and go around the villages and temples and places. So, each and every morning on this Yangtze cruise we had to get up at the crack of dawn, and it was quite awful in many ways. However, I must say that once we were up and had had breakfast and got going it wasn't so bad, and there were less tourists at the destinations, because we were often the first to be there! So, all in all, it was probably a good idea that we were made to get up so early, even though we didn't really enjoy it at first. I'm not much of an early bird to be honest, so always find it difficult to get up at 7am, let alone at 5am like on this trip! But, hey, that's often what you have to do on these kind of trips if you want to miss the crowds.",
      "part3": [
        {
          "q": "Why do some people like to get up early?",
          "a": "I know a lot of people who enjoy getting up early. They're usually older people, actually. My grandparents get up really early, and they go to bed really early too. Also, my friend, John, always gets up early – he's quite young – and he has the habit of sleeping only a short time, but strangely he seems to always be full of energy every morning. So, I suppose some people are just like this!"
        },
        {
          "q": "Why do people get up early?",
          "a": "Some people get up early because they enjoy making the most of the day and getting out of bed in the morning. Others have to go to work, so they must get up early – most people, actually. And almost all school children have to get up early, obviously because they have to get dressed and ready for school, then get to school. So, there are a number of fairly typical reasons why people might get up early."
        },
        {
          "q": "What kinds of occasions need people to arrive early?",
          "a": "Well, a lot of important things in life start in the mornings. Like school, work and things like this. There are other occasions when people must arrive early in the morning – like if they have an appointment, an interview, or an important examination. Most of these things are often scheduled in the mornings so that people can go to work afterwards."
        },
        {
          "q": "Why do some people like to stay up late?",
          "a": "Some people enjoy the nights. Nighttime, especially if you live in a big city, is the only time when life seems to calm down, traffic dies down, and the city becomes quieter. I have a number of friends who really enjoying staying up late because they feel this is the only really peaceful time of day in the city – where they can lie and read a book, listen to music, and just feel relaxed and away from the hustle and bustle of daytime life. I can understand this, actually, although I'm not much of a night owl myself. I can see why some people choose night time, and staying up late, to spend time alone at peace."
        },
        {
          "q": "Is it good to arrive early in any situation?",
          "a": "Well, not necessarily in every situation, I think. In professional settings — like job interviews or business meetings — arriving early definitely shows respect and gives you time to prepare. But socially, it can actually be a bit awkward. Like, if you show up to a party way too early, the host might not be ready yet. So I think it really depends on the context. Generally speaking though, being punctual or slightly early is a good habit to have — it just shows you value other people's time."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-time-when-you-worked-in-a-group-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a time when you worked in a group",
      "titleCn": "描述一次团队合作的经历",
      "card": "You should say:\n· What you did\n· Who you worked with\n· What problems you faced\n· And explain why you worked in the group",
      "sampleAnswer": "Actually, the first thing that comes to mind is a group project I did back in my second year of university. It was for one of our core modules, and we had to put together a full presentation on a marketing campaign — from research all the way to the final pitch. Our group had five people in total, and, um, let's just say we were not exactly a dream team from the start. The biggest problem we ran into was honestly just getting everyone on the same page. Like, two people in the group had completely different ideas about the direction we should take, and for a while every single meeting just turned into the same argument going in circles. It was exhausting. At one point I remember thinking, I could've just done this alone in half the time. But we kind of had no choice — the whole point of the assignment was that it had to be a group effort, and our grade depended on it. So eventually we just had to sit down, be a bit more flexible, and figure out how to make everyone's ideas work together somehow. And weirdly, the final presentation actually went really well. We ended up getting a pretty decent grade, and I think the disagreements along the way kind of pushed us to think harder than we would have otherwise. Didn't make the process any less stressful though, if I'm being honest.",
      "part3": [
        {
          "q": "Why do some people prefer to work by themselves?",
          "a": "I guess it comes down to personality, really. Some people just find group settings distracting — too many opinions, too much back-and-forth. When you work alone, you move at your own pace and make decisions without having to compromise. Introverts especially tend to do their best thinking in quiet environments. There's also a sense of ownership, you know? If something goes well, it's entirely your effort. That feeling can be really motivating for certain people."
        },
        {
          "q": "What should a leader do to make team members want to follow him or her?",
          "a": "Honestly, I think the most important thing is making people feel heard. Nobody wants to follow someone who just barks orders without listening. A good leader communicates clearly, gives credit where it's due, and stays calm under pressure. Trust is huge — if team members feel respected and supported, they'll naturally be more motivated. It's less about authority and more about creating an environment where everyone feels like they actually matter."
        },
        {
          "q": "Should students learn to do group work?",
          "a": "Absolutely, I think it's essential. School isn't just about academic knowledge — it's about preparing for real life, and almost every workplace involves collaboration. Group work teaches you how to communicate, handle disagreements, and divide responsibilities. Sure, it can be frustrating sometimes, especially when not everyone pulls their weight. But navigating that is itself a valuable skill. The earlier students learn to work with others, the better equipped they'll be later on."
        },
        {
          "q": "What group tasks are there in schools?",
          "a": "There's actually quite a variety. Project presentations are probably the most common — students research a topic together and present their findings to the class. Science experiments often involve teamwork too, since there are different roles to divide up. Then there are things like debate competitions, drama performances, or even sports events that require real coordination. Some schools also do community service projects as a group. These activities all teach something slightly different, which is what makes them useful."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-plan-that-you-had-to-change-recently-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a plan that you had to change recently",
      "titleCn": "描述一个最近被迫改变的计划",
      "card": "You should say:\n· When this happened\n· What made you change the plan\n· What the new plan was\n· And how you felt about the change",
      "sampleAnswer": "Oh, this actually happened pretty recently — just a few weeks ago, and it was one of those annoying situations where everything falls apart at the last minute. So basically, I'd been planning a short trip with two of my friends for almost a month. We were going to take a train to a nearby city for the weekend, had already looked up places to eat, even made a rough list of things we wanted to do. I was genuinely looking forward to it — you know that feeling when you've been busy for ages and you finally have something fun to look forward to? That was me. And then, two days before we were supposed to leave, one of my friends suddenly came down with a fever and the other one had some family thing come up out of nowhere. So just like that, the whole trip was off. We ended up just meeting at a café near campus instead, having coffee, and chatting for a few hours. Which, um, was fine — actually it was really nice — but it definitely wasn't what I'd been picturing in my head for the past month. Honestly, I was more disappointed than I expected to be. But I think what helped was just accepting it pretty quickly and not making a big deal out of it. Sometimes plans just fall through, and the café ended up being a pretty good afternoon anyway. Just a slightly less exciting one.",
      "part3": [
        {
          "q": "Do people often change their plans?",
          "a": "Pretty often, I'd say. Life is unpredictable — something unexpected always comes up, whether it's a work emergency, bad weather, or just a change of mood. I think some people are naturally more flexible and don't mind adjusting on the go, while others find it really stressful. Honestly, the ability to adapt is probably more useful than sticking rigidly to a plan. Things rarely go exactly as expected anyway, so a bit of flexibility goes a long way."
        },
        {
          "q": "Would you tell others if you change your plan?",
          "a": "It really depends on who's involved. If the change affects other people — like canceling plans with a friend or rescheduling a meeting — then yeah, absolutely, you should let them know as soon as possible out of basic respect. But if it's something personal that only affects yourself, there's no real obligation to inform anyone. I think communication matters most when others have already arranged their time around your original plan."
        },
        {
          "q": "Why do you think parents still make plans for their children nowadays?",
          "a": "I think it comes from a place of love, but also anxiety. Parents want to give their kids every possible advantage — extra classes, structured activities, mapped-out futures. There's also a lot of social pressure involved, especially in competitive cultures where falling behind feels like a real risk. The tricky part is that over-planning can actually backfire, leaving kids with no space to discover their own interests. Good intentions don't always translate into good outcomes."
        },
        {
          "q": "How does technology help people make plans?",
          "a": "Massively, I think. Calendar apps and reminders mean you basically never forget anything these days. Tools like Google Maps help you figure out timing and routes in advance, which takes a lot of guesswork out of travel plans. For group planning, apps like WhatsApp or shared documents make coordinating so much easier. And AI assistants are getting pretty good at suggesting schedules too. Overall, technology just removes a lot of the friction that used to make planning feel like a chore."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-an-important-decision-you-made-in-life-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe an important decision you made in life",
      "titleCn": "描述一个人生中的重要决定",
      "card": "You should say:\n· What the decision was\n· Why you made this decision\n· How you made this decision\n· And explain why this decision was important",
      "sampleAnswer": "An important decision I made in my life was a few years ago. I made the decision to study in Chengdu, my home city, at university, and not take up a place at university in Beijing. This was a tough decision to make because a huge part of me wanted to go to live in Beijing and study there, and some people said it would be a great opportunity for me as the university that offered me a place there was more prestigious than the one in my home city - at least 'on paper', as they say. However, I wanted to stay close to my parents because my father is really sick and I am an only child, and I wanted to stay around and help my mother take care of him while he recovers – if he recovers, which I hope he does. So, I took the place in Chengdu and not Beijing. Actually, I do not regret my decision at all. I am quite close to my family, and I feel that I want to be around them, especially as my dad is not well. Also, I believe that the expense and the stress of living in the big city would be quite overwhelming and possibly a distraction from my studies. So, all in all, I think I made a good decision and I don't feel in the slightest bit remorseful about having made this decision. It's an important decision, because, as you know, the university you choose to study in can have a big impact on your future career path and your life in general. But, I am someone who always looks to the future and doesn't look back with regrets, so I am not particularly worried about this, and I'm loving my course and enjoying my classmates and teachers, and also able to do a bit of work on the side, save money and be with my parents, especially my dad, and help around the home. So, I'm happy with my decision and feel assured it was the right decision to make.",
      "part3": [
        {
          "q": "What important decisions do young people need to make after graduation?",
          "a": "Young people have to make a number of important decisions after graduation. At least traditionally or typically speaking. Firstly, they might have to have a serious think about the kind of career they would like to pursue, or at least the kind of job they might do while they are thinking about their career. Secondly, they may also be getting towards the age when they must start thinking about marriage, if they have already found a girlfriend or boyfriend, especially if their parents are really conventional and putting pressure on them. Parents tend to do this where I'm from. So, there are the two main big life decisions that usually come at some point in the year or two after graduation, I'd say."
        },
        {
          "q": "Who can children turn to for help when making decisions?",
          "a": "Children can ideally turn to teachers and parents. Probably parents, mainly, as teachers are very busy with thousands of other children they have to think about and very busy. But there are some teachers who take time to give kids advice on things like making small or large decisions in life, depending on where the school is, what the environment is like and what kind of school culture exists there. And, of course, the personality and inclinations of the teachers themselves. But, for the most part, the people that kids can turn to are usually their parents or perhaps their aunts and uncles and even grandparents sometimes."
        },
        {
          "q": "Do you think children sometimes have to make important decisions?",
          "a": "Children need to make less important decisions in the grand scheme of things, but still the decisions they have to make are important to them at the time, and that must be remembered. Children, at least where I am from, have to decide things like which after-school club they want to join, which kinds of sports or leisure activities they might like to do on the weekend and stuff like this. Some parents today give their children more free choice about these things than we had in the past – also because there are more options today than there used to be. So, children are being brought up to be a little more autonomous and make more decisions themselves about this kind of thing, most certainly."
        },
        {
          "q": "Do you think advertisements influence our decisions on shopping?",
          "a": "Adverts most certainly have a strong influence on our shopping habits. Perhaps we underestimate that influence a lot of the time. I mean, we don't necessarily realise the power of advertising as adverts are so ubiquitous we almost take them for granted and don't even realise (or admit) that the ideas being marketed to us are actually going into our heads and influencing our choices of what to buy. I think that this is the insidious side of some marketing – it is designed to make us feel we need to buy certain products in order to make our lives better, or in order to compete with other people or maintain certain social standards and not look like we are \"behind the times\" or \"not keeping up with our peers\". Advertising plays on these human tendencies and weaknesses sometimes, and therefore does have an influence on our buying habits."
        },
        {
          "q": "What are the benefits of advertising?",
          "a": "Well, I think the biggest benefit is that it connects people with products they actually need but might never find on their own. It also creates competition between companies, which usually means better quality and lower prices for consumers. And on a broader level, advertising funds a lot of free content we enjoy every day — like social media and news websites. So yeah, it's more useful than people give it credit for, honestly."
        },
        {
          "q": "How do people usually make important decisions?",
          "a": "Hmm, I think most people start by gathering information — asking friends, reading reviews, or just doing some research online. Then there's usually a gut feeling involved at some point, you know? Like, even after all the research, people often go with what feels right. I think the really big decisions — career changes, moving cities — often involve talking things through with family too. It's rarely a purely logical process for most people."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-live-sports-event-you-watched-before-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a live sports event you watched before.",
      "titleCn": "描述一场看过的体育现场赛",
      "card": "You should say:\n· When it happened\n· Where it took place\n· Who you watched it with\n· And explain how you felt about this experience",
      "sampleAnswer": "I have seen a lot of live sports, actually, because I'm a big sports fan. But the live event that I liked the most was a football game I saw at the stadium in Beijing. It was a huge game, and lots of people went to see it. It was an especially exciting atmosphere, and it was the first time I had been in the crowd at a proper football match. Usually the live sports I go to see are mainly basketball and martial arts contests. Football is a whole different atmosphere and the crowds go really wild with excitement – that's a key part of football culture really. I went with a few classmates from university and my brother. We got really into the spirit of the game. I have often enjoyed the whole atmosphere of games like football, and to be honest, though I am not a huge fan of the game itself, I came to understand after watching this game live in the stadium, just why so many people follow football and get really really into it. There's a very strong fan-culture associated with the game, and people get incredibly passionate about it, chanting football songs, cheering on their team, shouting at the opposition players and things like this. Sometimes it can get a bit too passionate and quite aggressive in a way, too. I'm not sure it's really my kind of game, really, but it was a very exciting experience and one that I might repeat from time to time, especially if there is a big match on and my friends are also going. We went to a nice restaurant afterwards, ate lots of great food, drank a few beers and talked about the game. It was definitely an occasion I remember very fondly. I'd love to see a game in the UK, like Liverpool United, or a big team like that.",
      "part3": [
        {
          "q": "Why do some people like to watch sports events?",
          "a": "Live sports contests are far more exciting than sports contests on TV, mainly because you're part of a live audience, and you can see the game right in front of you, not just on a screen. Some people are really into this atmosphere and the sense of unity with the crowd that you're with and the team you are supporting. It's a very fundamental human desire – to be part of something big and exciting and feel part of the action. So, in many ways I see it as a very natural thing, well, for people who like noise and excitement and crowds, that is."
        },
        {
          "q": "Where do people normally watch sports events?",
          "a": "Well, it really depends on the person. A lot of people watch at home on TV or their phone — it's convenient and you don't have to deal with crowds. Sports bars and cafes are popular too, especially for big games like the World Cup, because the atmosphere is just way more exciting with a group. And of course, some people go to the stadium in person. That's a totally different experience — the energy there is something you really can't replicate at home."
        },
        {
          "q": "What are the advantages of watching sports events online?",
          "a": "Honestly, convenience is the biggest one. You can watch from anywhere, pause and rewind if you miss something, and often choose from multiple camera angles. There's no travel, no expensive tickets, and no queuing. A lot of platforms also offer live stats and commentary alongside the stream, which adds to the experience. And for people in different time zones, you know, being able to catch a replay at a reasonable hour makes a huge difference."
        },
        {
          "q": "What sports matches are suitable for children to attend?",
          "a": "I think events that are family-friendly and not too intense are the best fit. Things like local football matches, tennis tournaments, or athletics events work really well — the atmosphere is fun but not overwhelming. I'd probably avoid high-contact sports or matches where crowd behavior can get a bit rowdy, you know? The key is that children feel safe and engaged. Smaller, community-level events are often perfect because kids can actually follow what's happening."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-an-occasion-you-had-a-special-cake-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe an occasion you had a special cake",
      "titleCn": "描述一次吃特别蛋糕的经历",
      "card": "You should say:\n· When this happened\n· Where this happened\n· Who gave you the cake\n· And explain why it was a special cake",
      "sampleAnswer": "Well, there's a few occasions I've had a special cake - almost every birthday over the past ten or fifteen years. You see, we have a strong tradition of giving people cakes on their birthdays, and in more recent years there's a lot of fantastic and quite amazing cake companies in China. The last time I had a fantastic cake was my last birthday. I had a dinner with my girl friends in a Japanese restaurant, and after the dinner they presented a huge box with ribbons tied around it. I opened it and inside was this amazing, tall, peach-coloured cake. The cake was decorated with the most incredible flowers and designs all made from different coloured icing and cream. It was probably the most fancy cake I've ever seen, actually. It's hard to explain or describe, but it must have been done by a real expert in cake design, as it was almost a work of art! The cake came with candles, which we put in it, and I lit them, made a wish - of course, they turned the lights off for my wish - and the whole restaurant joined in as we sang happy birthday. I enjoy this birthday tradition, and I like the fact that everyone seems to follow it each year. Though it becomes a little difficult because when it's your friend's birthday you have to try to find an equally nice cake, or even better cake to surprise them with! So, it can get quite hard to keep up!",
      "part3": [
        {
          "q": "What's the difference between special food in China and foreign countries?",
          "a": "Well, that's quite a difficult question to answer, really. Special food is different in all countries. And China is a huge country, with many different types of cuisine, which all differ from each other, and all have their more or less 'special' dishes. So, it's not really easy to say, in short, what the main differences are between special food in China and in other countries. Most Chinese people think their food is the best in the world – so – maybe they would say the difference is that Chinese food is simply all way more special than food anywhere else! I'm not sure."
        },
        {
          "q": "Do Chinese people usually cook special food in traditional festivals?",
          "a": "Yes, I would say that every family has a number of dishes that they make for traditional festivals, that are special for those occasions. It's not that they do not eat them at other times of year, but that they make all their favourite special dishes on festivals."
        },
        {
          "q": "Do Chinese families like to eat together during traditional holidays?",
          "a": "Yes, absolutely. It's our main occasion during the Spring Festival really. Chinese love to dine together and have a lot of different dishes to share. And most people invite a lot of family members to the house for festivals, so there's always a huge meal, lots of snacks, wine and conversation. The dinner is in some ways the focal point of the festival."
        },
        {
          "q": "Why do people spend more on special food on special occasions?",
          "a": "People like to be generous and celebrate their lives on special occasions, and so they always buy all the best foods and wines and fruits. It's quite normal, I think everywhere in the world, that festivals are special and therefore feature all the best things that a family can afford. It marks the occasion and sets it apart from normal everyday life."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-challenging-technological-problem-you-faced-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a challenging technological problem you faced",
      "titleCn": "描述一个遇到的技术难题",
      "card": "You should say:\n· What the problem was\n· When and where you faced it\n· How challenging it was\n· And explain how you solved it",
      "sampleAnswer": "Right, so the problem I want to talk about happened maybe half a year ago, and it was actually to do with using an AI tool for the first time — which sounds straightforward, but trust me, it really wasn't. I was working on a fairly big research assignment and a friend recommended I try using an AI writing assistant to help me organise my ideas. So I signed up, got everything set up, and started using it — and at first it seemed great. Like, genuinely impressive. It was pulling things together way faster than I could on my own. But then I started noticing that some of the information it was giving me was just... wrong. Not obviously wrong, which was the scary part — it sounded completely confident and convincing, but when I actually went and checked the sources it claimed to be referencing, either the sources didn't exist or the details were totally off. And by that point I'd already built quite a bit of my draft around that information. So I had to go back through everything line by line, fact-check it manually, and basically rewrite a big chunk of what I'd done. It took way longer than if I'd just done the research myself from the start, which was, um, a little humbling. What I took away from it though was actually pretty useful — AI tools are genuinely helpful, but you can't just switch your brain off when you're using them. You still have to think critically about what they're giving you. Learned that one the hard way.",
      "part3": [
        {
          "q": "What are the advantages and disadvantages of AI?",
          "a": "Well, the benefits are pretty clear — AI saves time, reduces human error, and can handle tasks that would take people hours. It's already transforming healthcare, education, and loads of other fields. But the downsides are real too. Job displacement is a genuine concern, and there are big questions around privacy and how data gets used. I think the technology itself isn't the problem — it's more about whether we're using it responsibly or not."
        },
        {
          "q": "Do you think people today should learn about AI technology?",
          "a": "Honestly, I think it's becoming essential, yeah. AI is already part of so many things we use daily — from search engines to customer service. Understanding basically how it works helps people make smarter decisions and avoid being misled by it. You don't need to become an expert, but having some general awareness is really important. I think people who ignore it completely will find themselves at a disadvantage pretty quickly, especially in the workplace."
        },
        {
          "q": "Should children learn to use AI?",
          "a": "I think so, but with proper guidance. AI tools are going to be a normal part of their future, so learning to use them early makes sense. The key is teaching kids how to use AI as a helper rather than a replacement for their own thinking. If children just rely on it for everything without understanding what they're doing, that's where problems start. So yeah — introduce it early, but make sure critical thinking comes first."
        },
        {
          "q": "How can AI help in our lives?",
          "a": "In so many ways, honestly. On a daily level, it helps with things like navigation, recommendations, and managing schedules. In more serious areas, AI is helping doctors diagnose diseases earlier and making education more personalized. For people with disabilities, it can be genuinely life-changing. I think the most exciting thing is that AI handles the repetitive, time-consuming stuff so people can focus on more creative and meaningful work instead."
        },
        {
          "q": "Do you think students are overly reliant on AI?",
          "a": "Um, quite a few are, yeah. It's just too easy to type a question and get a full answer instantly — there's almost no reason to struggle through something yourself anymore. The problem is that real learning comes from that struggle, you know? If students skip that process, they might get good grades but miss out on actually developing skills. I think a lot of students aren't even aware of how dependent they've become, which is probably the bigger issue."
        },
        {
          "q": "What can teachers do to stop students relying too much on AI?",
          "a": "I think the most effective approach is changing how students are assessed. If everything is a take-home essay, of course people will use AI. But in-class discussions, oral presentations, and hands-on projects are much harder to fake. Teachers can also be more open about AI — explaining its limitations and showing students where it actually gets things wrong. Making critical thinking a core part of lessons, rather than just finding correct answers, would probably make the biggest difference long-term."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-time-when-you-had-a-problem-with-using-an-electronic-device-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a time when you had a problem with using an electronic device",
      "titleCn": "描述一次电子设备出问题的经历",
      "card": "You should say:\n· When it happened\n· Where it happened\n· What the problem was\n· And explain how you solved the problem at last",
      "sampleAnswer": "I'd like to talk about a rather frustrating experience I had with a computer. It was a few months ago actually when I was working on an important project for my job. The problem arose late in the evening when I was at home in my home office. The issue I encountered was with my computer's operating system. Out of nowhere, it started to freeze intermittently, making it nearly impossible to continue working. This was a particularly stressful time because I had a looming deadline. I decided to start troubleshooting right away. I began by rebooting the computer, hoping that a simple restart would resolve the issue. Unfortunately, the problem persisted. I then checked for any recent software updates, thinking that a bug might be causing the problem. After updating, the issue still persisted. Growing increasingly frustrated, I reached out to a colleague for assistance. They suggested I try running a diagnostic scan to identify any hardware issues. This scan took quite some time, and to my dismay, it didn't reveal any specific hardware problems. Finally, after several hours of trial and error, I decided to restore my computer to a previous state using a system backup. This proved to be the solution, and my computer returned to its normal, reliable state. Reflecting on this experience, I felt a mix of relief and frustration. While I was relieved that I managed to resolve the issue and meet my deadline, I was frustrated by the hours of productivity lost due to the computer problem. It also made me realize the importance of regularly backing up important work to prevent such situations in the future. Overall, it was a valuable learning experience, albeit a challenging one.",
      "part3": [
        {
          "q": "Why are people keen on buying new electronic devices?",
          "a": "I think a big part of it is just the excitement of something new, honestly. Tech companies are really good at making each new release feel like a massive upgrade — better camera, faster processor, sleeker design. There's also a social element, you know? Having the latest phone or gadget can feel like a status thing, especially among younger people. And sometimes the upgrade is genuinely useful. But I think for a lot of people, it's more about the feeling of buying something new than actual need."
        },
        {
          "q": "What impact do electronic devices have on people?",
          "a": "Well, the positive side is pretty obvious — they keep us connected, make information instantly accessible, and honestly make daily life a lot more convenient. But the downsides are real too. A lot of people struggle with screen addiction without even realizing it, and sleep quality takes a hit when you're on your phone right before bed. Face-to- face communication feels like it's suffering as well. I think devices themselves aren't the problem — it's more about whether people can find a healthy balance with them."
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-time-when-you-received-a-message-or-email-and-it-took-you-a-lo-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a time when you received a message or email and it took you a long time to reply.",
      "titleCn": "描述一次拖很久才回消息/邮件的经历",
      "card": "You should say:\n· Who this person was\n· What the message/email was about\n· Why you spent a lot of time replying\n· And explain how you felt about the experience",
      "sampleAnswer": "Okay so this is actually something I feel a little guilty about even now. About six months ago, a friend of mine from high school sent me this really long WeChat message — and I mean really long, like the kind that takes up your whole screen and you have to scroll down to see the end of it. She was basically opening up about some stuff she'd been going through — feeling lost about her future, not sure if she was on the right path, that kind of thing. Very honest, very personal. And I could tell it had taken her a lot of courage to send it. The thing is, I read it pretty much straight away. But then I just... didn't reply. Not because I didn't care — I genuinely did — but because I had no idea what to say. Like, she'd shared something so real and so vulnerable that I was terrified of saying the wrong thing or coming across as dismissive. So I kept thinking, I'll reply when I have the right words. And then a day passed, and then another, and suddenly it had been almost two weeks. I finally sat down one evening, put my phone on do not disturb, and just wrote back as honestly as I could. No perfect words, just genuine ones. She replied almost immediately saying she was really glad I did. Which made me feel both relieved and a bit silly for waiting so long. I think sometimes we overthink these things when the other person really just needs to know you're there.",
      "part3": [
        {
          "q": "When do people spend a long time responding to others' messages?",
          "a": "Well, I think the most common reason is just being genuinely busy — in a meeting, focused on work, or simply away from their phone. But sometimes people take longer because the message requires a thoughtful response and they don't want to reply with something half-baked, you know? Emotionally difficult messages are another one — if someone sends something sensitive or confrontational, people often need time to figure out how to respond without saying the wrong thing."
        },
        {
          "q": "In what situations do people not respond to messages right away?",
          "a": "Honestly, it happens all the time for different reasons. Some people are just bad at checking their phone regularly. Others see the message but feel like it's not urgent enough to reply immediately and then completely forget about it. Social situations are a big one too — it feels rude to be on your phone when you're with other people. And sometimes, if the conversation feels awkward or uncomfortable, people just put it off without really meaning to."
        },
        {
          "q": "What would you do if you haven't received a reply after sending out a message?",
          "a": "I'd probably just wait a bit first, honestly. Most of the time there's a perfectly normal reason — people get busy. If it's something important and a day or two has passed, I'd send a gentle follow-up, nothing pushy. And if it's urgent, I'd just call instead. I think getting anxious over unanswered messages is pretty common these days, but most of the time it's really not personal. People have a lot going on, you know?"
        }
      ],
      "date": "2026-09-04"
    },
    {
      "id": "p2-a-time-when-you-organized-a-happy-event-successfully-9",
      "part": 2,
      "category": "事件",
      "status": "保留题",
      "month": 9,
      "title": "Describe a time when you organized a happy event successfully.",
      "titleCn": "描述一次成功组织欢乐活动的经历",
      "card": "You should say:\n· What the event was\n· How you prepared for it\n· Who helped you to organize it\n· And explain why you think it was a successful event",
      "sampleAnswer": "A really happy event that I organized was a birthday celebration for my friend and classmate, Jean. It was going to be a surprise party, but that was too hard to arrange, as she shared a dorm with us and she would catch on while we were planning it and buying things for it. So, we discussed the birthday idea with her, and told her we would plan it… She seemed quite touched with that. Also, we all wanted a good excuse to have some fun. We didn't just have a party – we made a whole day of it. We arranged to go to a theme park, Happy Valley, outside the city, for about 5 hours. Then we had a dinner in a fantastic hot pot restaurant in the city, then we went to a cocktail bar, and then we all went to KTV! So, we had a really action-packed day. At the dinner we presented her with a great birthday cake that we had bought online from a specialist cake-making company. We also gave her gifts at the dinner. At the cocktail bar we got the bartender to prepare special drinks for her and give us all a group deal. And at KTV we made sure that we selected all the songs she liked. It was a very tiring day, and took some organization and planning, but all turned out well in the end. We had a fantastic time. I and my friend Mary were the main organisers, but everyone helped a little bit, and another friend, Mike, organized the minibus from place to place throughout the day, so we could all travel together. It was a truly amazing day and I think the best birthday Jean has had in a long time.",
      "part3": [
        {
          "q": "How can parents help children to be organized?",
          "a": "Parents can start teaching kids to be organized at quite a young age. They can get them to clear their toys away in an orderly fashion, fold their clothes after taking them off... and teach them where things go in the house and how to put things back properly after use. These are the first things you might try to start teaching a toddler. And as the children grow up, they should teach them more about time-keeping and scheduling tasks."
        },
        {
          "q": "On what occasions do people need to be organized?",
          "a": "People need to be organized with work, with studies, with household tasks and with responsibilities and things that need to get done for the family. In terms of occasions, people need to be especially organized when they are arranging meetings, planning things like weddings and events, or organizing trips and holidays. These are some examples that spring to mind of when organizational skills are essential."
        },
        {
          "q": "Do people need others' help when organizing things?",
          "a": "Sometimes it's easier to organise something yourself, rather than involve other people. But with other things, it's best to get help from others. It totally depends on the type of things that you need to arrange. You usually need help from others if you are organizing something like an event – a wedding for example, which involves multiple different types of tasks in order for the whole event to go well. If different people are allocated with different tasks in an orderly and clear manner, then this will make the planning and the event itself go smoothly."
        }
      ],
      "date": "2026-09-04"
    }
  ]
};
