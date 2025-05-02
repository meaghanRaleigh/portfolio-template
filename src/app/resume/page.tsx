// File: /src/app/resume/page.tsx
import Background from "../components/background";
import Container from "../components/container";
import ResumeAccordion from "../components/resumeAccordion";
export default function ResumePage() {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center bg-background">
      <Background />
      <Container className="animate-slide-up delay-200">
        <div className="max-w-screen-lg mx-auto animate-fade-in">
            <div className="flex justify-between mb-4 border-b-2 border-primary pb-2">
                <h1 className="text-4xl font-bold text-primary text-center ">
                    Resume
                </h1>
                    <div className="text-muted text-center">
                    <a
                        href="/Meaghan%20Resume.pdf"
                        download
                        className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
                    >
                        Download PDF
                    </a>
            </div>
        </div>
          {/* Download link */}
              <p className="text-medium text-primary pb-5">
                [ENTER SUMMARY HERE]
               Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

          <ResumeAccordion />
        </div>
      </Container>
    </section>
  );
}
