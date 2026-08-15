from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth

SOURCE = Path(r"C:\Users\ranjo\OneDrive\Desktop\Ranjot_Sandhu_Resume (1).pdf")
OUTPUT = Path(r"C:\Users\ranjo\OneDrive\Desktop\Ranjot_Sandhu_Resume_Updated.pdf")


def replacement_layer(page_number: int, width: float, height: float):
    stream = BytesIO()
    draw = canvas.Canvas(stream, pagesize=(width, height))
    draw.setFillColorRGB(1, 1, 1)

    if page_number == 0:
        # Summary opening line.
        draw.rect(50, 616.5, 510, 15, fill=1, stroke=0)
        draw.setFillColorRGB(0, 0, 0)
        draw.setFont("Helvetica", 9)
        draw.drawString(52.8, 620.5, "Computer Science graduate with a minor in UX Design and hands-on experience across software engineering, AI/ML, and site")

        # Current research role title.
        draw.setFillColorRGB(1, 1, 1)
        draw.rect(50, 410.5, 510, 16, fill=1, stroke=0)
        draw.setFillColorRGB(0, 0, 0)
        draw.setFont("Helvetica-Bold", 9.5)
        draw.drawString(52.8, 414.2, "Research Project Developer | Wilfrid Laurier University | September 2025 - Present")

    if page_number == 1:
        # Graduation status.
        draw.rect(50, 685.5, 180, 16, fill=1, stroke=0)
        draw.setFillColorRGB(0, 0, 0)
        draw.setFont("Helvetica-Bold", 9)
        label = "Graduated:"
        draw.drawString(52.8, 689.5, label)
        draw.setFont("Helvetica", 9)
        draw.drawString(52.8 + stringWidth(label, "Helvetica-Bold", 9) + 4, 689.5, "August 2026")

        # Ended proctor role.
        draw.setFillColorRGB(1, 1, 1)
        draw.rect(50, 644, 520, 16, fill=1, stroke=0)
        draw.setFillColorRGB(0, 0, 0)
        draw.setFont("Helvetica-Bold", 9.5)
        draw.drawString(52.8, 647.8, "Student Proctor and Teaching Assistant | Wilfrid Laurier University | January 2024 - August 2026")

    draw.save()
    stream.seek(0)
    return PdfReader(stream).pages[0]


reader = PdfReader(SOURCE)
writer = PdfWriter()
for index, page in enumerate(reader.pages):
    width = float(page.mediabox.width)
    height = float(page.mediabox.height)
    page.merge_page(replacement_layer(index, width, height))
    writer.add_page(page)

writer.add_metadata({
    "/Title": "Ranjot Sandhu Resume",
    "/Author": "Ranjot Sandhu",
    "/Subject": "Software Engineer Resume",
})
with OUTPUT.open("wb") as destination:
    writer.write(destination)

print(OUTPUT)
