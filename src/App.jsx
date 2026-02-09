function App() {
  return (
    <div>
      <div className="p-10 space-y-12 bg-white text-slate-900 font-sans">
        {/* 1. Sarlavhalar ierarxiyasi */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Typography Hierarchy
          </h2>
          <h1 className="text-6xl font-black tracking-tighter">
            Hero Headline 6xl
          </h1>
          <h2 className="text-4xl font-extrabold">Section Header 4xl</h2>
          <h3 className="text-2xl font-semibold text-slate-700">
            Subsection Title 2xl
          </h3>
        </section>

        <hr className="border-slate-200" />

        {/* 2. Matn vaznlari (Weights) */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Font Weights
          </h2>
          <p className="text-lg font-light italic text-slate-500">
            Light Italic: The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-lg font-normal">
            Normal: Frontend dasturlash — bu san'at va texnologiya uyg'unligi.
          </p>
          <p className="text-lg font-medium">
            Medium: Murakkab interfeyslar uchun aniqlik juda muhim.
          </p>
          <p className="text-lg font-semibold text-slate-800">
            Semibold: Tizim xavfsizligi va tezkorlik asosiy planda.
          </p>
          <p className="text-lg font-bold">Bold: 1234567890 !@#$%^&*()</p>
        </section>

        <hr className="border-slate-200" />

        {/* 3. Paragraf va Reading Experience */}
        <section className="max-w-prose space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Reading Comfort (Base Size)
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Ushbu matn blokida fontning o'qilishi (readability) qanchalik qulay
            ekanligini tekshiramiz. Zamonaviy interfeyslarda{" "}
            <span className="font-bold text-black">leading-relaxed</span>{" "}
            (qatorlar orasi) va
            <span className="font-bold text-black text-blue-500">
              {" "}
              ranglar kontrasti
            </span>{" "}
            foydalanuvchi tajribasiga katta ta'sir qiladi. BR Sonoma kabi
            fontlar aynan shunday uzun matnlarda ham ko'zni charchatmaydi.
          </p>
        </section>

        {/* 4. UI elementlar uchun (Buttons & Labels) */}
        <section className="flex flex-wrap gap-4 items-center">
          <button className="px-6 py-2 bg-black text-white rounded-full font-medium text-sm transition hover:bg-slate-800">
            Primary Action
          </button>
          <span className="px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase text-slate-600">
            Status: Active
          </span>
          <code className="text-sm font-mono bg-slate-100 p-1 rounded">
            npm install tailwind-typography
          </code>
        </section>
      </div>{" "}
    </div>
  );
}

export default App;
