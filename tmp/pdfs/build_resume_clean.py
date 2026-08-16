from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "Ranjot_Sandhu_Resume.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = letter
LEFT = 53
RIGHT = PAGE_W - 53
CONTENT_W = RIGHT - LEFT
INK = HexColor("#111111")
MUTED = HexColor("#172033")
ACCENT = HexColor("#203F73")
RULE = ACCENT


def wrap(text, font, size, width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, width, font="Helvetica", size=9.0, leading=11.5, color=INK):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_header(c):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 21)
    c.drawCentredString(PAGE_W / 2, PAGE_H - 49, "Ranjot Sandhu")
    c.setFont("Helvetica-Oblique", 10.4)
    c.setFillColor(MUTED)
    c.drawCentredString(PAGE_W / 2, PAGE_H - 69, "Software Engineer | AI/ML Engineer | Full-Stack Developer")

    def centered_links(items, y, size=8.55):
        separator = " | "
        total = sum(stringWidth(label, "Helvetica", size) for label, _ in items) + stringWidth(separator, "Helvetica", size) * (len(items) - 1)
        x = (PAGE_W - total) / 2
        c.setFont("Helvetica", size)
        for index, (label, url) in enumerate(items):
            c.setFillColor(ACCENT if url and (url.startswith("http") or url.startswith("mailto")) else INK)
            c.drawString(x, y, label)
            width = stringWidth(label, "Helvetica", size)
            if url:
                c.linkURL(url, (x, y - 2, x + width, y + size + 1), relative=0)
            x += width
            if index < len(items) - 1:
                c.setFillColor(INK)
                c.drawString(x, y, separator)
                x += stringWidth(separator, "Helvetica", size)

    centered_links([
        ("00ranjotsandhu@gmail.com", "mailto:00ranjotsandhu@gmail.com"),
        ("269-213-0348", "tel:+12692130348"),
        ("LinkedIn: linkedin.com/in/00ranjotsandhu", "https://www.linkedin.com/in/00ranjotsandhu/"),
    ], PAGE_H - 88)
    centered_links([
        ("GitHub: github.com/HydraIsProgramming", "https://github.com/HydraIsProgramming"),
        ("Portfolio: ranjotsandhu.com", "https://ranjotsandhu.com/"),
    ], PAGE_H - 103)
    c.setFont("Helvetica", 8.7)
    c.setFillColor(INK)
    c.drawCentredString(PAGE_W / 2, PAGE_H - 119, "Seeking office, hybrid, and remote software engineering roles")
    return PAGE_H - 141


def section(c, title, y):
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 10.2)
    c.drawString(LEFT, y, title.upper())
    title_w = stringWidth(title.upper(), "Helvetica-Bold", 10.2)
    c.setStrokeColor(RULE)
    c.setLineWidth(0.8)
    c.line(LEFT, y - 4, RIGHT, y - 4)
    return y - 20


def role(c, title, organization, dates, bullets, y):
    title_text = f"{title} | {organization}"
    c.setFont("Helvetica-Bold", 9.15)
    c.setFillColor(INK)
    c.drawString(LEFT, y, title_text)
    c.setFont("Helvetica-Bold", 8.65)
    c.setFillColor(INK)
    c.drawRightString(RIGHT, y, dates)
    y -= 12.5
    for bullet in bullets:
        c.setFillColor(INK)
        c.circle(LEFT + 12, y + 3.2, 1.25, fill=1, stroke=0)
        y = draw_wrapped(c, bullet, LEFT + 18, y, CONTENT_W - 18, size=8.85, leading=12.1)
        y -= 1.0
    return y - 8


def project(c, name, stack, link_label, link_url, bullets, y):
    c.setFont("Helvetica-Bold", 9.45)
    c.setFillColor(INK)
    c.drawString(LEFT, y, name)
    name_w = stringWidth(name, "Helvetica-Bold", 9.45)
    c.setFont("Helvetica-Bold", 8.75)
    c.setFillColor(ACCENT)
    c.drawString(LEFT + name_w + 5, y, f"| {stack}")
    c.setFont("Helvetica-Oblique", 8.15)
    link_w = stringWidth(link_label, "Helvetica-Oblique", 8.15)
    c.setFillColor(ACCENT)
    c.drawRightString(RIGHT, y, link_label)
    c.linkURL(link_url, (RIGHT - link_w, y - 2, RIGHT, y + 8), relative=0)
    y -= 12.5
    for bullet in bullets:
        c.setFillColor(INK)
        c.circle(LEFT + 12, y + 3.1, 1.2, fill=1, stroke=0)
        y = draw_wrapped(c, bullet, LEFT + 18, y, CONTENT_W - 18, size=8.7, leading=11.0)
        y -= 0.7
    return y - 4.5


c = canvas.Canvas(str(OUTPUT), pagesize=letter, pageCompression=1)
c.setTitle("Ranjot Sandhu Resume")
c.setAuthor("Ranjot Sandhu")
c.setSubject("Software engineering, AI/ML, and full-stack development resume")

# Page 1
y = draw_header(c)
y = section(c, "Professional Summary", y)
y = draw_wrapped(
    c,
    "Computer Science graduate with a minor in UX Design and hands-on experience across software engineering, AI/ML, site reliability, and full-stack product development. Built machine learning models, automated monitoring workflows, observability dashboards, revenue-generating platforms, and user-facing applications through Blue Moon Development, Tata Consultancy Services, Reality AI Lab, and Wilfrid Laurier University. Leverages a UX foundation to make complex technical capabilities accessible and usable, bridging reliable engineering with intuitive, human-centered design. Demonstrated impact includes reducing manual incident-detection time by more than 50% and launching an esports platform that reached 40 paid subscribers in its first full month. Strong foundation in Python, Java, JavaScript, React, Next.js, SQL, testing, cloud tooling, and scalable system design, with experience carrying products from requirements through deployment and iteration.",
    LEFT,
    y,
    CONTENT_W,
    size=9.0,
    leading=12.4,
)
y -= 7
y = section(c, "Experience", y)
y = role(c, "Founder & Freelance Software Developer", "Blue Moon Development", "January 2026 - Present", [
    "Founded and operate a development studio delivering production websites, e-commerce experiences, full-stack applications, and practical automation for businesses and independent founders.",
    "Lead engagements from discovery and requirements through UX design, development, testing, deployment, documentation, and ongoing client support.",
    "Delivered live commercial products including an e-commerce storefront and esports platform, translating business goals into responsive experiences and revenue-generating workflows.",
], y)
y = role(c, "Software Engineer Intern", "Tata Consultancy Services (Client: TD Bank)", "June 2025 - August 2025", [
    "Developed monitoring scripts and SRE tooling that reduced manual incident-detection time by more than 50% for shared banking infrastructure.",
    "Built and maintained Datadog dashboards for production service health, faster triage, and operational visibility across engineering teams.",
    "Delivered performance testing, technical reports, sprint updates, and operational handoff documentation in a cross-team agile environment.",
    "Collaborated with software and infrastructure teams to deliver maintainable reliability improvements for production systems.",
], y)
y = role(c, "Student Research Project Developer", "Wilfrid Laurier University", "September 2025 - Present", [
    "Designed and evaluated predictive machine learning models for a faculty-led research problem, reaching approximately 85% accuracy through feature engineering and iterative tuning.",
    "Built Python, Pandas, and NumPy pipelines to clean, validate, explore, and structure institutional datasets for model training and analysis.",
    "Translated model results into research-ready conclusions through technical documentation and faculty presentations.",
    "Built an arm-model research system to identify behavioral patterns and generate actionable insights for the research team.",
], y)
y = role(c, "Software Engineer Intern", "Reality AI Lab", "February 2025 - May 2025", [
    "Developed and validated AI training workflow components using Python, TensorFlow, PyTorch, Pandas, and Scikit-learn.",
    "Performed structured QA, regression testing, bug tracking, and output validation for AI-integrated product features.",
    "Designed Figma wireframes and interface components that connected model capabilities to clearer user-facing workflows.",
    "Worked across product and engineering tasks to improve training workflow quality, output consistency, and release readiness.",
], y)
y = section(c, "Technical Skills", y)
skills = [
    ("Languages", "Python, Java, JavaScript, SQL, C, Swift"),
    ("AI / Data", "TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib"),
    ("Full Stack", "React, Next.js, Node.js, REST APIs, Supabase, PostgreSQL"),
    ("Reliability / Tools", "Datadog, Dynatrace, JMeter, Postman, Git, Figma, Xcode"),
]
column_gap = 24
column_w = (CONTENT_W - column_gap) / 2
for index, (label, value) in enumerate(skills):
    col = index % 2
    row = index // 2
    x = LEFT + col * (column_w + column_gap)
    row_y = y - row * 38
    c.setFont("Helvetica-Bold", 8.9)
    c.setFillColor(ACCENT)
    c.drawString(x, row_y, label)
    draw_wrapped(c, value, x, row_y - 12, column_w, size=8.65, leading=10.7, color=INK)

c.showPage()

# Page 2
y = PAGE_H - 28
y = section(c, "Education", y)
c.setFont("Helvetica-Bold", 9.5)
c.setFillColor(INK)
c.drawString(LEFT, y, "Wilfrid Laurier University")
c.setFont("Helvetica-Bold", 8.7)
c.setFillColor(MUTED)
c.drawRightString(RIGHT, y, "Graduated August 2026")
y -= 12
c.setFont("Helvetica", 9.0)
c.setFillColor(MUTED)
c.drawString(LEFT, y, "Bachelor of Computer Science, Minor in UX Design | Waterloo, Ontario, Canada")
y -= 21

y = section(c, "Additional Experience", y)
y = role(c, "Student Proctor & Teaching Assistant", "Wilfrid Laurier University", "January 2024 - August 2026", [
    "Supported exam setup, student check-in, academic integrity, classroom readiness, and technical troubleshooting for university assessments.",
    "Coordinated with faculty on course logistics, instructional materials, grading, and exam-day technical requirements.",
], y)

y = section(c, "Selected Projects", y)
y = project(c, "All or Nothing Esports", "Next.js, TypeScript, Supabase, Product Growth", "allornothing.gg", "https://allornothing.gg/", [
    "Founded, built, launched, and operate a multi-game esports platform with team discovery, ladders, tournaments, subscriptions, and bookable coaching.",
    "Reached 40 paid subscribers and $240 monthly recurring revenue in the first full month; facilitated 38 coaching sessions and $950 in coaching marketplace volume.",
    "Integrated Discord OAuth, Supabase data and authorization, Stripe subscription workflows, and administrative tools for users, events, coaching, and revenue operations.",
    "Own product direction, community operations, monetization experiments, deployment, and ongoing feature delivery.",
], y)
y = project(c, "Bookshelf", "Swift, SwiftUI, Supabase, PostgreSQL", "GitHub", "https://github.com/HydraIsProgramming/Bookshelf", [
    "Built a multi-tenant iOS application for retail clerks to manage scratch-off lottery inventory and end-of-shift accounting across multiple locations.",
    "Designed owner/clerk access control with PostgreSQL Row Level Security across 16 tables and built barcode workflows for BLE, HID-keyboard, and camera scanning.",
    "Implemented shift lifecycle functions, book swaps, automated sales reconciliation, and per-book inventory tracking.",
    "Used Supabase authentication and database functions to keep privileged inventory operations secure without maintaining a separate application server.",
], y)
y = project(c, "MarketSignal Intelligence Lab", "Python, Gradio, Scikit-learn, Pandas", "Live demo", "https://stock-trading-bot-ai.onrender.com", [
    "Built a public market-research workbench comparing Random Forest, Gradient Boosting, and Ridge Regression against a previous-close baseline.",
    "Engineered time-ordered features, held-out evaluation, model-driver analysis, technical signals, configurable costs, and transparent strategy backtesting.",
    "Implemented SMA9/SMA21, improved the original Gradio workflow, and expanded multi-stock dataset reliability in the underlying group project.",
    "Designed chronological train/test evaluation to reduce look-ahead leakage and expose weak model performance instead of presenting unsupported trading claims.",
], y)
y = project(c, "Arm Model Research System", "Python, R, NumPy, Reinforcement Learning", "GitHub", "https://github.com/HydraIsProgramming/ARM-Model", [
    "Trained PPO and SAC reinforcement-learning agents to control a robotic-arm simulation for daily-living tasks.",
    "Designed reward functions and policy logic that achieved more than 90% policy confidence against defined task benchmarks.",
    "Developed the system as a foundation for future assistive and healthcare exoskeleton research.",
    "Built data-processing and visualization workflows in Python, R, NumPy, Tkinter, and Matplotlib to evaluate agent behavior and communicate results.",
], y)
y = project(c, "Eileen's English Toffee", "Responsive Web Design, E-commerce, Client Delivery", "Live site", "https://eileensenglishtoffee.netlify.app/", [
    "Designed and delivered a responsive storefront that presents products, brand story, and purchase pathways clearly across desktop and mobile devices.",
    "Translated a small-business brief into an accessible, deployment-ready commercial website with streamlined customer navigation.",
    "Implemented product catalogue, product-detail, cart, owner-access, contact, location, event, and email-capture experiences for the live client business.",
], y)

c.setFillColor(MUTED)
c.setFont("Helvetica", 7.5)
c.drawRightString(RIGHT, 24, "Ranjot Sandhu | Resume")
c.save()

print(OUTPUT)
