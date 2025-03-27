import React from "react";
import { motion } from "framer-motion";
import "./Story.css";

const StorySection = () => {
  return (
    <section className="story-wrapper">
        <motion.div
            className="scroll-down-cue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
        >
            <p>Scroll down to learn more about me</p>
            <div className="chevrons">
            <span className="chevron">⌄</span>
            <span className="chevron">⌄</span>
            <span className="chevron">⌄</span>
            </div>
        </motion.div>

        <div className="story-nav">
            <p className="nav-label">Jump to a section:</p>
            <ul className="nav-links">
                <li><a href="#creativity">Creativity</a></li>
                <li><a href="#sensitivity">Sensitivity</a></li>
                <li><a href="#tenacity-curiosity">Tenacity & Curiosity</a></li>
                <li><a href="#proactive-problem-solving">Problem Solving</a></li>
                <li><a href="#future-goals">Where I'm Heading</a></li>
            </ul>
        </div>

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

        {/* Tenacity & Curiosity */}
        <section className="story-section" id="tenacity-curiosity">
            <motion.h2
                className="story-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Tenacity & Curiosity
            </motion.h2>

            <motion.p
                className="story-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p>
                    Spotting problems is only the beginning.
                    What matters is solving them and doing it well.

                    I have a hard time settling for “good enough.”
                    Take my personal planner. I’ve redesigned it over 100 times. Not kidding.

                    I’m like a walking genetic algorithm, constantly iterating, constantly learning.
                    If I find a better way, I chase it. Then I look for an even better way after that.
                </p>

                <p>
                    This relentless curiosity also means I need to understand how things work, deeply.
                    Why do we use this formula here? How do these systems interact? What exactly causes this effect?

                    I ask “why?” so often, it drives people mad. But thanks to that curiosity, I’ve been able to understand complex systems and design better ones.

                    It also made me curious about the world. I’ve lived in different countries and immersed myself in different cultures.
                    Did you know the same item can be used in entirely different ways depending on the culture?

                    That’s one of the reasons I love upcycling, by the way (you might’ve seen it in my CV).
                    It’s all about redefining value, seeing potential where others see junk.
                </p>



            </motion.p>
        </section>

        <section className="triangle-section">
  <motion.div
    className="triangle-wrapper"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="triangle-corner top">Creativity</div>
    <div className="triangle-corner left">Sensitivity</div>
    <div className="triangle-corner right">Tenacity & Curiosity</div>
    <div className="triangle-center">Proactive Problem-Solving<br />through Unique Ideas</div>
  </motion.div>
</section>

        {/* Proactive Problem Solving */}
                <section className="story-section" id="proactive-problem-solving">
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

        {/* Future Goals */}
        <section className="story-section" id="future-goals">
            <motion.h2
                className="story-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Where I’m Heading
            </motion.h2>

            <motion.p
                className="story-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                >
                My dream is simple: Transform the way people work by building smarter, simpler solutions that make a real impact.

                I believe people thrive when they work on what they’re passionate about.
                And I know I give my best (and then some) when I’m building something I care about.

                Here’s how I want to grow and contribute:
                </motion.p>

                <motion.div
                className="goals-grid"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                >
                <div className="goal-block">
                    <h4>Short-Term (0–2 years)</h4>
                    <p>
                    Build a strong technical foundation. Gain industry experience. Work on real-world problems,
                    join open-source or hackathon projects, and improve efficiency through hands-on work in both frontend and backend systems.
                    </p>
                </div>

                <div className="goal-block">
                    <h4>Medium-Term (3–5 years)</h4>
                    <p>
                    Become an expert in human-centric design. Lead productivity-focused projects.
                    Tackle complex problems with scalable, elegant solutions.
                    </p>
                </div>

                <div className="goal-block">
                    <h4>Long-Term (6+ years)</h4>
                    <p>
                    Shape the future of intelligent systems. Share insights, mentor others, and inspire new ways of thinking
                    through public speaking or writing.
                    </p>
                </div>
                </motion.div>

                <motion.p
                className="story-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                >

            </motion.p>
        </section>

        <div className="story-nav bottom-nav">
            <p className="nav-label">Back to sections:</p>
            <ul className="nav-links">
                <li><a href="#creativity">Creativity</a></li>
                <li><a href="#sensitivity">Sensitivity</a></li>
                <li><a href="#tenacity-curiosity">Tenacity & Curiosity</a></li>
                <li><a href="#proactive-problem-solving">Problem Solving</a></li>
                <li><a href="#future-goals">Where I'm Heading</a></li>
            </ul>
        </div>

    </section>
  );
};

export default StorySection;
