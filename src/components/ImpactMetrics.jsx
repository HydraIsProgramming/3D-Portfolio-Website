import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Slider = ({ label, value, min, max, step = 1, suffix = "", onChange }) => <label className="block"><span className="flex justify-between text-sm text-secondary mb-2"><span>{label}</span><strong className="text-white">{value.toLocaleString()}{suffix}</strong></span><input className="metric-range w-full" type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} /></label>;

const ImpactMetrics = () => {
  const [users, setUsers] = useState(2500);
  const [conversion, setConversion] = useState(6);
  const [price, setPrice] = useState(12);
  const [monthlyGrowth, setMonthlyGrowth] = useState(8);
  const metrics = useMemo(() => {
    const paid = Math.round(users * conversion / 100);
    const mrr = paid * price;
    const usersInYear = Math.round(users * Math.pow(1 + monthlyGrowth / 100, 12));
    const futurePaid = Math.round(usersInYear * conversion / 100);
    return { paid, mrr, arr: mrr * 12, usersInYear, futureArr: futurePaid * price * 12 };
  }, [users, conversion, price, monthlyGrowth]);
  const money = (value) => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(value);

  return <>
    <motion.div variants={textVariant()}><p className={styles.sectionSubText}>Product thinking</p><h2 className={styles.sectionHeadText}>Product economics sandbox.</h2></motion.div>
    <div className="mt-5 max-w-4xl"><span className="inline-flex px-3 py-1 rounded-full border border-[#00cea8]/40 bg-[#00cea8]/10 text-[#00cea8] text-xs font-bold uppercase tracking-wider">Illustrative scenario · not actual revenue</span><p className="mt-4 text-secondary text-[17px] leading-[30px]">This answers a product question: “If an application attracts users, converts some to a paid plan, and charges a monthly price, what recurring revenue could that create?” It demonstrates commercial reasoning alongside engineering—not company performance.</p></div>
    <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-wrap items-center gap-3 text-sm sm:text-base"><span className="text-secondary">Core formula</span><strong className="text-white">Active users</strong><span className="text-[#915EFF]">×</span><strong className="text-white">Paid conversion</strong><span className="text-[#915EFF]">×</span><strong className="text-white">Monthly price</strong><span className="text-[#915EFF]">× 12</span><span className="text-secondary">=</span><strong className="text-[#00cea8]">Projected ARR</strong></div>
    <div className="mt-12 grid lg:grid-cols-[0.9fr_1.4fr] gap-8">
      <div className="bg-tertiary rounded-3xl p-6 sm:p-8 space-y-7 border border-white/5"><Slider label="Monthly active users" value={users} min={250} max={25000} step={250} onChange={setUsers}/><Slider label="Paid conversion" value={conversion} min={1} max={20} suffix="%" onChange={setConversion}/><Slider label="Monthly price" value={price} min={5} max={40} suffix=" CAD" onChange={setPrice}/><Slider label="Monthly user growth" value={monthlyGrowth} min={0} max={25} suffix="%" onChange={setMonthlyGrowth}/></div>
      <div className="grid sm:grid-cols-2 gap-4"><div className="metric-card"><span>Current run-rate ARR</span><strong>{money(metrics.arr)}</strong><small>MRR × 12 at today’s selected user count</small></div><div className="metric-card"><span>Projected MRR</span><strong>{money(metrics.mrr)}</strong><small>{metrics.paid.toLocaleString()} modelled paid accounts</small></div><div className="metric-card"><span>Users after 12 months</span><strong>{metrics.usersInYear.toLocaleString()}</strong><small>Monthly growth compounded; not a forecast</small></div><div className="metric-card"><span>Year-end ARR potential</span><strong>{money(metrics.futureArr)}</strong><small>If conversion and pricing remain unchanged</small></div></div>
    </div>
    <p className="mt-6 text-secondary text-sm leading-6 max-w-4xl">Why include this? Software engineers influence onboarding, conversion, retention, pricing architecture, and infrastructure cost. The sandbox shows that I can connect implementation choices to product outcomes while keeping projections clearly separate from verified results.</p>
  </>;
};

export default SectionWrapper(ImpactMetrics, "impact");
