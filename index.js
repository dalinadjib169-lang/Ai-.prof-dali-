import { useState, useRef } from "react";
import { saveAs } from "file-saver";
import htmlToDocx from "html-to-docx";
import jsPDF from "jspdf";

const UI = {
  ar: {
    title: "مساعد الأستاذ بالذكاء الاصطناعي",
    cycle: "الطور",
    subject: "المادة",
    level: "المستوى/السنة",
    docType: "النوع",
    docTypes: { memo: "مذكرة", assessment: "فرض", exam: "اختبار" },
    lang: "لغة الإخراج",
    topic: "موضوع الدرس (اختياري
