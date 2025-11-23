import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-12 text-center">
              We believe in <em className="italic font-light">quality</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">
              Our approach combines traditional craftsmanship with modern
              innovation, creating timeless pieces that speak to both heritage
              and future.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <Reveal delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-serif mb-4">01</div>
                <h3 className="text-2xl font-serif mb-3">Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every detail is carefully considered, from initial concept to
                  final execution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-serif mb-4">02</div>
                <h3 className="text-2xl font-serif mb-3">Craft</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Handpicked materials and meticulous attention to craftsmanship
                  in every piece.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-serif mb-4">03</div>
                <h3 className="text-2xl font-serif mb-3">Legacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating products that stand the test of time and tell
                  meaningful stories.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
