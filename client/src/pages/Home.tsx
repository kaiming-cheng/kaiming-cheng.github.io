/* Design Philosophy: Kinetic Minimalism
 * - Extreme restraint in color and form
 * - Motion as primary design language
 * - Mathematical precision in spacing (8px base unit)
 * - Single kinetic accent (electric blue) that guides attention
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const publications = [
    {
      title: "User Comprehension and Comfort with Eye-Tracking and Hand-Tracking Permissions in Augmented Reality",
      authors: "Kaiming Cheng, Mattea Sim, Tadayoshi Kohno, Franziska Roesner",
      venue: "USEC 2025",
      year: "2025"
    },
    {
      title: "When the User Is Inside the User Interface: An Empirical Study of UI Security Properties in Augmented Reality",
      authors: "Kaiming Cheng, Arka Bhattacharya, Michelle Lin, Jaewook Lee, Aroosh Kumar, Jeffery F. Tian, Tadayoshi Kohno, Franziska Roesner",
      venue: "USENIX Security 2024",
      year: "2024"
    },
    {
      title: "Exploring User Reactions and Mental Models Towards Perceptual Manipulation Attacks in Mixed Reality",
      authors: "Kaiming Cheng, Jeffery F. Tian, Tadayoshi Kohno, Franziska Roesner",
      venue: "USENIX Security 2023",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container flex items-center justify-between h-16">
          <motion.div
            className="text-lg font-medium tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            KC
          </motion.div>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Work
            </a>
            <a href="#research" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Research
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RfziAr86t4nrIXGv6SVTSR/sandbox/mtbCMUxPzWZd16cPHhB6D2-img-1_1770792295000_na1fn_aGVyby1ncmFkaWVudC1tZXNo.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmZ6aUFyODZ0NG5ySVhHdjZTVlRTUi9zYW5kYm94L210YkNNVXhQeldaZDE2Y1BIaEI2RDItaW1nLTFfMTc3MDc5MjI5NTAwMF9uYTFmbl9hR1Z5YnkxbmNtRmthV1Z1ZEMxdFpYTm8ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y2cD6XY8FlrmMo8iYaMMNGfNL803DrYMJI0uF~8G87XehFPzHmn1OdVg8GYMy9SlqWQSmekLF26g6NQue3M0uiIGueYOaF9ZT3q63X1grFrWrWm9p6L8w2ZRgVxG0kq~BgNULe3cz7R8TL82yxZr47NSoHVJF8q1t-oKqzVkjRD5KAng7MA9rq~sCPNXYuYwZmeHF91sLFaSbBTPPXv41Nc6D39V7pmoQNAKXRmwtMZbmjsCahDlyyQUOmPP19C~IDXAANlcPlBhW4g57eE5eZg~6MDB0pP1NPRBw-TxInQ54hKFANnC0N4u-X4Cmp8s~71Rwrf8Fe0rCjcfS3XGaQ__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <h1 className="mb-8">
                  Kaiming Cheng
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="hairline mb-8"
                />
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed font-light">
                  Research Scientist at <span className="text-foreground font-medium">Meta Superintelligence Lab</span>
                </p>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                  Building autonomous systems for GPU kernel generation. Previously researched security and privacy in augmented reality at the University of Washington.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="kinetic-hover"
                    asChild
                  >
                    <a href="#work">View Work</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="kinetic-hover"
                    asChild
                  >
                    <a href="https://github.com/meta-pytorch/KernelAgent" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      KernelAgent
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <img
                src="/headshot.png"
                alt="Kaiming Cheng"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-border/50"
              />
            </motion.div>
          </div>
        </div>

        {/* Animated geometric accent */}
        <motion.div
          className="absolute bottom-24 right-24 w-32 h-32 opacity-30 hidden lg:block"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RfziAr86t4nrIXGv6SVTSR/sandbox/mtbCMUxPzWZd16cPHhB6D2-img-5_1770792300000_na1fn_Z2VvbWV0cmljLWFjY2VudA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmZ6aUFyODZ0NG5ySVhHdjZTVlRTUi9zYW5kYm94L210YkNNVXhQeldaZDE2Y1BIaEI2RDItaW1nLTVfMTc3MDc5MjMwMDAwMF9uYTFmbl9aMlZ2YldWMGNtbGpMV0ZqWTJWdWRBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ayYlMhhJQ~5twAzu-DqLLUU4h42z75p4DuXTg0xh5r6Ks6z4iB82k6KDrfLrd-AeYa7x~ENPLeMSVsjreeV6TCsSJecwS6OgycmsAiakp~skqhBsb9W~ytvTS6XjCVmtDhvgXjnla-rkFNSn1l~QNfgEVLWOj4VdxmL1dF52AU~7Pb5XJOW8lJTFzmpjsF38QF9EFKK0knOWb1nMaQ41CQgAXmOxBvuXfy7ViMqoTL3AhiXFC~98iKQ7aCMFYsHJENisZPGRLsS4yb40A1k0LxxMiHICUmBx6I0JlD2lXx8dbVy1biC1PKxNneuUZxUzNR9k1eX1ODdsfjNR6KJIdw__')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </section>

      {/* Featured Project - KernelAgent */}
      <section id="work" className="py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4">Featured Project</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hairline mb-16"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-border/50 kinetic-hover">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/RfziAr86t4nrIXGv6SVTSR/sandbox/mtbCMUxPzWZd16cPHhB6D2-img-2_1770792290000_na1fn_a2VybmVsLWFnZW50LXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmZ6aUFyODZ0NG5ySVhHdjZTVlRTUi9zYW5kYm94L210YkNNVXhQeldaZDE2Y1BIaEI2RDItaW1nLTJfMTc3MDc5MjI5MDAwMF9uYTFmbl9hMlZ5Ym1Wc0xXRm5aVzUwTFhacGMzVmhiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mdv-6rdzbctlaZP189YzwYJgM4JSN8nszqNs3Q3qxvKkdVYBmJTY6~BXGPx86Biwg~pZculkV~2uLf1x~vKTylEJt3ZqExfiIaEPfaWrso~NBQcnO9rNZK8tiajj8JRMfgplC3HNoRrwYuJDsWHH5vZMxXzikKrK-4Abw0s792vrES56k09eRSDhMnmwKo07I2HdgsUUIi83QJpq~4z~JmCx4oWgK3pbQvvLcZSw5YhHJUIQ6W0HYGvVni73cmBbTYHkzNldv~ohO9-cEQpeftSlsNTrC00EdfPafIivQHIC9E-GgGJzlyo4R0PKq55NWKWk3CoQK8qr3UgY4JVeJg__"
                    alt="KernelAgent Architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="mb-4">KernelAgent</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Autonomous GPU kernel generation via deep agents. A multi-agent system that transforms PyTorch programs into verified Triton kernels through LLM-assisted refactoring, parallel generation, and runtime verification.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 text-xs mono bg-secondary text-secondary-foreground rounded-sm">PyTorch</span>
                    <span className="px-3 py-1 text-xs mono bg-secondary text-secondary-foreground rounded-sm">Triton</span>
                    <span className="px-3 py-1 text-xs mono bg-secondary text-secondary-foreground rounded-sm">LLM Agents</span>
                    <span className="px-3 py-1 text-xs mono bg-secondary text-secondary-foreground rounded-sm">GPU Kernels</span>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="default" asChild>
                      <a href="https://github.com/meta-pytorch/KernelAgent" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://github.com/meta-pytorch/KernelAgent#readme" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        233 stars
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
                        28 forks
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4">Research</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hairline mb-8"
            />
            <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
              My PhD research focused on security and privacy in augmented and mixed reality systems. I explored how users understand and interact with immersive interfaces, and how to protect them from novel attack vectors.
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-4xl">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-border/50 kinetic-hover">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mb-2 leading-snug">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="mono text-primary">{pub.venue}</span>
                        <span className="text-muted-foreground">{pub.year}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" asChild>
              <a href="https://scholar.google.com.py/citations?user=Q_YyRC0AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                View All Publications
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4">Background</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hairline mb-16"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="mb-6">Education</h3>
              <div className="space-y-8">
                <div>
                  <div className="font-medium mb-1">University of Washington</div>
                  <div className="text-sm text-muted-foreground mb-1">PhD in Computer Science</div>
                  <div className="text-xs mono text-muted-foreground">2020 – 2025</div>
                  <div className="text-xs text-muted-foreground mt-2">Corin Anderson Endowed Fellowship</div>
                </div>
                <div>
                  <div className="font-medium mb-1">University of Virginia</div>
                  <div className="text-sm text-muted-foreground mb-1">M.S. in Computer Science</div>
                  <div className="text-xs mono text-muted-foreground">2019 – 2020</div>
                </div>
                <div>
                  <div className="font-medium mb-1">University of Virginia</div>
                  <div className="text-sm text-muted-foreground mb-1">B.A. in Music, Computer Science</div>
                  <div className="text-xs mono text-muted-foreground">2015 – 2019</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="mb-6">Experience</h3>
              <div className="space-y-8">
                <div>
                  <div className="font-medium mb-1">Meta Superintelligence Lab</div>
                  <div className="text-sm text-muted-foreground mb-1">Research Scientist</div>
                  <div className="text-xs mono text-muted-foreground mb-3">Infra/PyTorch Team</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building autonomous systems for GPU kernel generation and optimization in PyTorch.
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-1">University of Washington</div>
                  <div className="text-sm text-muted-foreground mb-1">Graduate Researcher</div>
                  <div className="text-xs mono text-muted-foreground mb-3">Security & Privacy Lab</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Advised by Franziska Roesner and Tadayoshi Kohno. Researched security and privacy in AR/MR systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="mb-4">Get in Touch</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hairline mb-8 mx-auto"
            />
            <p className="text-lg text-muted-foreground mb-12">
              Interested in collaborating or discussing research? Feel free to reach out.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="default" size="lg" asChild>
                <a href="mailto:kaimingc10@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/kaiming-cheng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/kaiming-cheng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://scholar.google.com.py/citations?user=Q_YyRC0AAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <BookOpen className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Kaiming Cheng. All rights reserved.
            </p>
            <p className="text-xs mono text-muted-foreground">
              Built with React + Tailwind + Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
