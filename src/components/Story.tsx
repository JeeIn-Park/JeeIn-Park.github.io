import React from "react";
import "./Story.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const topOpacity = useSpring( useTransform(scrollYProgress, [0.2, 0.3], [0, 1]), { stiffness: 100 });
    const leftOpacity = useSpring( useTransform(scrollYProgress, [0.28, 0.38], [0, 1]), { stiffness: 100 });
    const rightOpacity = useSpring( useTransform(scrollYProgress, [0.36, 0.46], [0, 1]), { stiffness: 100 });
    const arrowOpacity = useSpring( useTransform(scrollYProgress, [0.43, 0.50], [0, 1]), { stiffness: 100 });
    const centerOpacity = useSpring( useTransform(scrollYProgress, [0.52, 0.6], [0, 1]), { stiffness: 100 });

  return (
    <section className="story-wrapper">
        <motion.div
            className="scroll-down-cue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
        >
            <p>Scroll down to learn more about me</p>
            <div className="story-nav">
            <ul className="nav-links">
                <li><a href="#creativity"># Creativity</a></li>
                <li><a href="#sensitivity"># Sensitivity</a></li>
                <li><a href="#tenacity-curiosity"># Passion</a></li>
                <li><a href="#proactive-problem-solving"># Problem Solving</a></li>
            </ul>
        </div>
            <div className="chevrons">
            <span className="chevron">⌄</span>
            <span className="chevron">⌄</span>
            <span className="chevron">⌄</span>
            </div>
        </motion.div>

        {/* Creativity */}
        <section className="story-section" id="creativity">
            <motion.h2
                className="story-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Creativity
            </motion.h2>
            
            <motion.p
                className="story-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p>
                    From a young age, I’ve always felt like the most creative person I know.
                    (Though apparently, I'm not the only one. People have called me “six-dimensional,” claiming even five dimensions aren’t enough to contain me.)
       
                    At school, I was once voted “Most Likely to Communicate with Aliens.”
                    Honestly, I still consider that one of my proudest titles.
                </p>

                <p>
                    So, where does all this creativity go? Optimisation.
                    I’m obsessed with simplifying things; finding shortcuts, streamlining workflows, and maximising effectiveness.
                    That’s where my imagination gets to play in real life.

                    This drive to improve things led me to join a gifted education programme.
                    Most people there picked maths or science tracks. And sure, I love maths and science. I’m absolutely a nerd.
                    But when I saw a course called “Invention”? BOOM. I knew immediately: this was where I belonged.
                </p>

                <p>
                    On the application, I answered the hobbies section with one word: imagining.
                    I go down rabbit holes in my head all the time, daydreaming about weird and wonderful ideas.
                    The topics are endless, often unrealistic, but always fascinating.

                    The entrance test was all about creativity and problem solving. Some said it was difficult.
                    I didn’t even think about difficulty. I was too busy enjoying it. It felt like a series of puzzles.
                    I ended up scoring first place and joined the programme.
                </p>

                <p>
                    Being part of this gifted education only made things clearer:
                    What I really love is bringing ideas to life, especially, the ones that make work easier, smarter, and more efficient.

                    That realisation became a mission:
                    To change the world by crafting solutions that streamline tasks and empower people to work smarter, not harder.
                    Making good-quality work more effortless has always been my biggest source of joy. It’s more than a goal. It’s my life motto.
                </p>

                <p>
                    I never wanted to limit that dream to one label or job title. There are so many ways to get there.
                    I started with physical tools and gadgets. Then macros. Then software projects.
                    With every new experience, I saw more clearly, thought more widely, and got better at what I do.

                    Eventually, I graduated from the gifted education programme in first place with an award in invention.
                    Creativity has always been my engine. But it doesn’t work alone. Two other things make the machine run:
                </p>
            </motion.p>
        </section>

        {/* Sensitivity */}
        <section className="story-section" id="sensitivity">
            <motion.h2
                className="story-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Sensitivity
            </motion.h2>
            
            <motion.p
                className="story-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p>
                    I’m a sensitive person. I know, it can be a bit much. But that sensitivity fuels empathy.

                    It makes me naturally attuned to user needs, emotions, and pain points.
                    I can pick up on feedback quickly; sometimes even the kind that isn’t spoken out loud. That gives me the chance to create tools and systems that people didn’t even realise they needed.

                    I often come up with solutions by connecting dots others don’t even see, combining ideas from different fields, or repurposing things in new ways.
                </p>

                <p>
                    The gifted education taught me to challenge assumptions, be bold, and never ignore even the smallest issues.
                    And I really don’t. I can’t let “tiny” problems go.

                    I’ve developed a habit of spotting friction in everyday life. Things that most people just accept out of convenience or habit.
                    Visit my place and you’ll probably raise an eyebrow. Nothing is where you’d expect it to be. It’s all been optimised to the point of strangeness.
                </p>

                <p>
                    When people say, “That’s not a big deal,” I’m already ten steps deep into fixing it.

                    Yes, I know. I sound incredibly annoying.
                    Writing this down just confirms it.
                </p>

                
            </motion.p>
        </section>

        {/* Passion */}
        <section className="story-section" id="passion">
            <motion.h2
                className="story-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Passion
            </motion.h2>

            <motion.p
                className="story-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p>
                    Spotting problems is just the beginning — what really matters is solving them, and doing it well.
                    I’m not someone who settles for “good enough.” Take my personal planner, for example.
                    I’ve redesigned it over 100 times. Not joking.
                </p>

                <p>
                    I’m basically a walking genetic algorithm: always iterating, always learning.
                    When I find a better way, I chase it. And then I keep chasing.
    
                    That drive comes from deep, relentless curiosity. I need to know how things work — really work.
                    Why this formula? How do these systems interact? What exactly causes that effect?
                </p>

                <p>
                    I ask “why?” so often it drives people up the wall. But it’s helped me grasp complex systems and build better ones.
   
                    That same curiosity extends beyond tech. I’ve lived in different countries, immersed myself in new cultures,
                    and realised something fascinating: the same object can be seen — and used — in completely different ways depending on where you are.

                    Maybe that’s why I love upcycling so much (you might’ve spotted it in my CV).
                    It’s all about redefining value, seeing beauty where others see junk.
                </p>
            </motion.p>
        </section>

        <section className="triangle-scroll-section" ref={ref} id="proactive-problem-solving">
            <div className="sticky-wrapper">
                <motion.div className="triangle-wrapper">
                <motion.div
                    className="triangle-corner top"
                    style={{ opacity: topOpacity }}
                >
                    <a href="#creativity">Creativity</a>
                </motion.div>

                <motion.div
                    className="triangle-corner left"
                    style={{ opacity: leftOpacity }}
                >
                    <a href="#sensitivity">Sensitivity</a>
                </motion.div>

                <motion.div
                    className="triangle-corner right"
                    style={{ opacity: rightOpacity }}
                >
                    <a href="#tenacity-curiosity">Passion</a>
                </motion.div>

                {/* Arrows pointing inward */}
                <motion.div
                className="triangle-arrow top-arrow"
                style={{ opacity: arrowOpacity }}
                >
                    ⬇
                </motion.div>

                <motion.div
                className="triangle-arrow left-arrow"
                style={{ opacity: arrowOpacity }}
                >
                    ➡
                </motion.div>

                <motion.div
                className="triangle-arrow right-arrow"
                style={{ opacity: arrowOpacity }}
                >
                    ⬅
                </motion.div>

                <motion.div
                    className="triangle-center"
                    style={{ opacity: centerOpacity }}
                >   
                    <a href="#proactive-problem-solving-text"> Proactive<br />Problem-Solving</a>
                </motion.div>
                </motion.div>
            </div>
            </section>


        {/* Proactive Problem Solving */}
                <section className="story-section" id="proactive-problem-solving-text">
            <motion.h2
                className="story-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Proactive Problem-Solving with Unique Ideas
            </motion.h2>

            <motion.p
                className="story-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p>
                    When all these traits come together; creativity, sensitivity, tenacity, and curiosity. What you get is my core strength:
                    Proactive problem-solving through unique ideas.
                </p>
                <p>
                    Thanks to the gifted programme, my multicultural experiences, and working across different types of projects, I’ve learned how to use these strengths to create meaningful change.

                    Take one example: I noticed gym-goers weren’t using apps to track workouts. They used pen and paper, Excel sheets, or just memory.

                    That went straight onto my idea list.

                    I rushed to my professor with a dozen ideas. He was surprised not just by the volume, but by how unusual they were. He offered to supervise one of them.

                    So, I built the app. Then I launched it.

                    Getting users? Not a problem. I listened to what they wanted, implemented it exactly how they needed it, and even added subtle psychological nudges to make sure they kept using it.

                    It wasn’t just about gamification or social features. I went deeper, more insidious.
                    And it worked. User satisfaction rose significantly.
                </p>
                <p>
                    Having the technical skills to build features is just the baseline. But innovation? That’s something else.

                    I bring something different, something not everyone can offer.

                    I’ve always been the one people turn to and say:

                    “Okay, this is your job now. You’re the most creative one. Find a way to make it work.”
                    And I always do.
                </p>
            </motion.p>
        </section>
    </section>
  );
};

export default StorySection;
